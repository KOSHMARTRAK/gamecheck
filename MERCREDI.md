# GameCheck : programme du mercredi 25 nov. 2026 (après 16 h, reset du forfait)

Pour démarrer : ouvre une nouvelle session dans le dossier GameCheck et écris
« Lis MERCREDI.md et RESUME-PROJET.md, puis on attaque le programme de mercredi ».

## 1. Le Guide / soluce GTA VI (le gros morceau)
- Nouvel onglet « Guide » dans le menu du bas (à côté d'Accueil et Forum), même style premium : plage, néon, verre dépoli.
- Rubriques, dans cet ordre : Bien débuter, Gagner de l'argent, Astuces, Armes, Véhicules, Collectibles, Secrets, puis Missions.
- Fait à partir de recherches web, **rédigé avec nos mots** (aucune copie de guides existants), avec les sources.
- Pas de carte, de logo ni d'image protégés en dehors des captures officielles déjà dans l'appli (`docs/img/rs00` à `rs66`).
- Commencer par 2 ou 3 rubriques bien faites, puis compléter au fil des jours.

## 2. Page Infos (clic sur le logo)
- La remettre au goût d'une appli d'actu : à propos, installer l'appli, mentions légales.
- Retirer « Les 5 réflexes anti-fake » et le vocabulaire de vérification.

## 3. Réécrire les anciennes infos
- Dans `docs/index.html` (tableau `POSTS`) et dans `docs/data/posts.json` : les verdicts qui commencent par « **FAUX.** » ou « **Non vérifié.** » passent en ton « À savoir » (contexte, conseil), comme la nouvelle consigne de la routine.
- Ne pas toucher au badge « Alerte arnaque ».

## Rappels
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement v42), puis commit + push sur main.
- Tester en local avec « gamecheck » (port 8765), en mode mobile.
- Pas de mise à jour d'infos sans demande (« mets à jour »).
- Plus tard : référencement Google (Search Console).
