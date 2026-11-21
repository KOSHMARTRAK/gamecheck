// Robot GameCheck (gratuit, sans IA) : récupère les annonces OFFICIELLES des jeux de la bibliothèque
// - actus Steam publiées par les studios eux-mêmes (pas la presse)
// - blogs officiels PlayStation France et Xbox France (rattachés à un jeu si son nom apparaît dans le titre)
// Résultat : docs/data/official.json (lu par l'appli). Lancé toutes les heures par .github/workflows/official.yml
import { readFile, writeFile } from 'node:fs/promises';

const OUT = 'docs/data/official.json';
const KEEP_DAYS = 45, MAX_ITEMS = 500;

// id du jeu dans l'appli -> identifiant Steam (tous vérifiés le 21/11/2026)
const STEAM = {
  'gta-5': 271590, 'gta-4': 12210, 'rdr-2': 1174180, 'cs-2': 730, 'dota-2': 570, 'apex': 1172470, 'pubg': 578080,
  'elden-ring': 1245620, 'elden-nightreign': 2622380, 'ds-3': 374320, 'sekiro': 814380, 'lies-of-p': 1627720,
  'bg-3': 1086940, 'cyberpunk-2077': 1091500, 'witcher-3': 292030, 'skyrim': 489830, 'eso': 306130,
  'mh-wilds': 2246340, 'helldivers-2': 553850, 'marvel-rivals': 2767030, 'r6-x': 359550, 'ow-2': 2357570,
  'hogwarts-legacy': 990080, 'diablo-4': 2344520, 'poe-2': 2694490, 'kcd-2': 1771300, 'expedition-33': 1903340,
  'ff-14': 39210, 'ff-7-rebirth': 2909400, 'lost-ark': 1599340, 'rocket-league': 252950, 'fh-5': 1551360,
  'sf-6': 1364780, 'tekken-8': 1778820, 'mk-1': 1971870, 're-4': 2050650, 'dbd': 381210, 'arc-raiders': 1808500,
  'bf-6': 2807960, 'cod-bo6': 1938090, 'cod-bo7': 3606480, 'cod-warzone': 1962663, 'stardew': 413150,
  'silksong': 1030300, 'hades-2': 1145350, 'ghost-tsushima': 2215430, 'spiderman-2': 2651280, 'ac-shadows': 3159330,
  'sims-4': 1222670, 'fc-26': 3405690, 'nba-2k26': 3472040, 'f1-25': 3059520, 're-requiem': 3764200,
  'sh-f': 2947440, 'ds-2': 3280350
};

// mots-clés pour rattacher un article de blog à un jeu (le premier qui correspond gagne : du plus précis au plus large)
const KEYS = [
  ['gta-6', /\b(GTA ?(VI|6)|Grand Theft Auto ?(VI|6))\b/i], ['gta-online', /\bGTA Online\b/i], ['gta-5', /\b(GTA ?(V|5)|Grand Theft Auto ?(V|5))\b(?!I)/i],
  ['rdr-2', /Red Dead Redemption ?2/i], ['ghost-yotei', /Y[oō]tei/i], ['ds-2', /Death Stranding ?2/i], ['spiderman-2', /Spider-Man ?2/i],
  ['ac-shadows', /Assassin.s Creed Shadows/i], ['cod-bo7', /Black Ops ?7/i], ['cod-bo6', /Black Ops ?6/i], ['cod-warzone', /\bWarzone\b/i],
  ['bf-6', /Battlefield ?6/i], ['valorant', /\bValorant\b/i], ['r6-x', /Rainbow Six/i], ['ow-2', /\bOverwatch/i], ['marvel-rivals', /Marvel Rivals/i],
  ['fortnite', /\bFortnite\b/i], ['apex', /Apex Legends/i], ['pubg', /\bPUBG\b/i], ['arc-raiders', /ARC Raiders/i], ['helldivers-2', /Helldivers ?2/i],
  ['elden-nightreign', /Nightreign/i], ['elden-ring', /Elden Ring/i], ['ds-3', /Dark Souls/i], ['sekiro', /\bSekiro\b/i], ['lies-of-p', /Lies of P\b/i],
  ['mh-wilds', /Monster Hunter Wilds/i], ['bg-3', /Baldur.s Gate ?3/i], ['expedition-33', /Expedition ?33|Clair Obscur/i], ['cyberpunk-2077', /Cyberpunk ?2077/i],
  ['witcher-4', /Witcher ?(4|IV)\b/i], ['witcher-3', /Witcher ?3/i], ['tes-6', /Elder Scrolls ?VI\b/i], ['skyrim', /\bSkyrim\b/i], ['eso', /Elder Scrolls Online/i],
  ['kcd-2', /Kingdom Come/i], ['hogwarts-legacy', /Hogwarts Legacy/i], ['diablo-4', /Diablo ?(IV|4)\b/i], ['poe-2', /Path of Exile ?2/i],
  ['wow', /World of Warcraft/i], ['ff-14', /Final Fantasy ?XIV/i], ['ff-7-rebirth', /Final Fantasy VII Rebirth/i], ['lost-ark', /Lost Ark/i],
  ['lol', /League of Legends/i], ['dota-2', /Dota ?2/i], ['fc-26', /\bFC ?26\b/i], ['nba-2k26', /NBA ?2K26/i], ['rocket-league', /Rocket League/i],
  ['mk-world', /Mario Kart World/i], ['fh-5', /Forza Horizon ?5/i], ['gt-7', /Gran Turismo ?7/i], ['f1-25', /\bF1 ?25\b/i],
  ['sf-6', /Street Fighter ?6/i], ['tekken-8', /Tekken ?8/i], ['mk-1', /Mortal Kombat ?1\b/i], ['smash-ultimate', /Smash Bros/i],
  ['re-requiem', /Resident Evil Requiem/i], ['re-4', /Resident Evil ?4/i], ['sh-f', /Silent Hill f\b/i], ['dbd', /Dead by Daylight/i],
  ['minecraft', /\bMinecraft\b/i], ['roblox', /\bRoblox\b/i], ['sims-4', /(Les|The) Sims ?4/i], ['zelda-totk', /Tears of the Kingdom/i],
  ['mario-wonder', /Mario Bros\.? Wonder/i], ['dk-bananza', /Donkey Kong Bananza/i], ['pokemon-za', /Pok[eé]mon.*Z-A/i], ['pokemon-go', /Pok[eé]mon GO/i],
  ['acnh', /Animal Crossing/i], ['genshin', /Genshin Impact/i], ['hsr', /Honkai:? Star Rail/i], ['clash-royale', /Clash Royale/i], ['brawl-stars', /Brawl Stars/i],
  ['silksong', /Silksong/i], ['hades-2', /Hades ?(II|2)\b/i], ['stardew', /Stardew Valley/i], ['cs-2', /Counter-Strike ?2/i]
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
