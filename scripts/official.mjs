// Robot GameCheck (gratuit, sans IA) : récupère les annonces OFFICIELLES des jeux de la bibliothèque
// - actus Steam publiées par les studios eux-mêmes (pas la presse)
// - blogs officiels PlayStation France et Xbox France (rattachés à un jeu si son nom apparaît dans le titre)
// Résultat : docs/data/official.json (lu par l'appli). Lancé toutes les heures par .github/workflows/official.yml
import { readFile, writeFile } from 'node:fs/promises';

const OUT = 'docs/data/official.json';
const KEEP_DAYS = 45, MAX_ITEMS = 500;

// Jeu suivi : GTA VI. id du jeu dans l'appli -> identifiant Steam (vérifié le 21/11/2026)
const STEAM = {}; // GTA VI n'est pas sur Steam : seuls les blogs officiels sont lus

// mots-clés pour rattacher un article de blog à un jeu (le premier qui correspond gagne : du plus précis au plus large)
const KEYS = [
  ['gta-6', /\b(GTA ?(VI|6)|Grand Theft Auto ?(VI|6))\b/i]
];
const RSS = [
  ['PlayStation Blog', 'https://blog.fr.playstation.com/feed/'],
  ['Xbox Wire', 'https://news.xbox.com/fr-fr/feed/']
];

const clean = s => String(s || '').replace(/<!\[CDATA\[|\]\]>/g, '').replace(/\[[^\]]+\]/g, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim();
const cut = (s, n) => s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s;
const okUrl = u => /^https:\/\//.test(u || '') ? u : null;
async function get(url, json) {
  const r = await fetch(url, { headers: { 'user-agent': 'GameCheck-bot/1.0 (+https://koshmartrak.github.io/gamecheck/)' }, signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error(r.status + ' ' + url);
  return json ? r.json() : r.text();
}

const since = Date.now() - KEEP_DAYS * 864e5;
let old = [];
try { old = JSON.parse(await readFile(OUT, 'utf8')); } catch { }
const items = new Map(old.filter(x => x && x.u && x.ts > since).map(x => [x.u, x]));
let added = 0, errors = 0;

for (const [g, appid] of Object.entries(STEAM)) {
  try {
    const d = await get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${appid}&count=6&maxlength=400&format=json`, true);
    for (const n of d?.appnews?.newsitems || []) {
      if (n.feedname !== 'steam_community_announcements') continue; // seulement ce que le studio publie lui-même
      const ts = n.date * 1000, u = okUrl(n.url);
      if (!u || ts < since || items.has(u)) continue;
      items.set(u, { id: 's' + n.gid, g, t: cut(clean(n.title), 140), x: cut(clean(n.contents), 200), u, ts, s: 'Steam (studio officiel)' });
      added++;
    }
  } catch (e) { errors++; console.log('Steam', g, e.message); }
}
for (const [src, url] of RSS) {
  try {
    const xml = await get(url);
    for (const m of xml.matchAll(/<item\b[\s\S]*?<\/item>/g)) {
      const it = m[0], pick = tag => (it.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`)) || [])[1] || '';
      const t = clean(pick('title')), u = okUrl(clean(pick('link'))), ts = Date.parse(clean(pick('pubDate')));
      if (!t || !u || !ts || ts < since || items.has(u)) continue;
      const hit = KEYS.find(([, re]) => re.test(t));
      if (!hit) continue; // article qui ne parle d'aucun jeu de la bibliothèque
      items.set(u, { id: 'r' + Buffer.from(u).toString('base64url').slice(-16), g: hit[0], t: cut(t, 140), x: cut(clean(pick('description')), 200), u, ts, s: src });
      added++;
    }
  } catch (e) { errors++; console.log('RSS', src, e.message); }
}
const list = [...items.values()].sort((a, b) => b.ts - a.ts).slice(0, MAX_ITEMS);
await writeFile(OUT, JSON.stringify(list, null, 1) + '\n');
console.log(`Annonces officielles : ${list.length} au total, ${added} nouvelles, ${errors} source(s) en erreur.`);
