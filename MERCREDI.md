# GameCheck : programme du mercredi 25 nov. 2026

**Avancé au 24 nov. : points 1, 2 et 3 FAITS.** Reste le point 4 (stats) et compléter le Guide (Missions par chapitre, collectibles, secrets).

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

## 4. Stats de visites (validé pour mercredi)
- Installer un compteur de visites gratuit et respectueux de la vie privée (GoatCounter, ou Firebase Analytics déjà dans le projet), avant tout le reste si possible : chaque jour compté = des chiffres à montrer plus tard aux annonceurs.
- Vérifier d'où vient l'outil et ce qu'il fait, et le dire à l'utilisateur avant de l'installer.

## Et ensuite
Toutes les autres idées (rentabilité, records, défis, carte des spots…) sont dans **IDEES.md**. À la fin de mercredi, on choisit les 2 ou 3 prochaines priorités.

## Rappels
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement v42), puis commit + push sur main.
- Tester en local avec « gamecheck » (port 8765), en mode mobile.
- Pas de mise à jour d'infos sans demande (« mets à jour »).
- Plus tard : référencement Google (Search Console).
