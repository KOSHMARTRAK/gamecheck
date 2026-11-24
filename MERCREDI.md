# GameCheck : programme du mercredi 25 nov. 2026

**TOUT FAIT le 24 nov.** (Guide, page Infos, anciennes infos, stats de visites). Reste à compléter le Guide au fil du temps (missions par chapitre, collectibles, secrets). Prochaines idées : IDEES.md.

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

## REFONTE DU DESIGN (priorité n°1 après le reset du 25 nov.)
- Aperçu local seulement : ouvrir http://localhost:8765/?apercu (sélecteur Casino / Ville / Jet-set en bas). Code : CSS « 3 THÈMES COHÉRENTS » + script « Aperçu des ambiances » dans docs/index.html (non mis en ligne, ne s'active qu'avec ?apercu). Maquettes refusées : docs/maquettes.html (à supprimer).
- Avis de l'utilisateur : il garde **la forme de l'appli** (mêmes écrans, les 5 cartes photo de « Dernières infos »). Il veut un **vrai thème cohérent** où chaque élément de la plage (ciel, soleil, palmiers, vagues, sable, crabes) est remplacé par un équivalent du thème. L'idée lui plaît mais c'est **« trop bas de gamme »**, les animations font cheap.
- À faire : version PREMIUM. Plus aucun emoji dans le décor : de vraies illustrations SVG détaillées (dégradés, ombres, lumières), des mouvements fluides (parallaxe au défilement, profondeur, reflets, lumière qui balaie), moins d'éléments mais beaucoup plus beaux, des transitions soignées. Faire UN thème à fond (le plus prometteur : Casino rétro ou Vice City de nuit), le montrer, puis décliner.

## Et ensuite
Toutes les autres idées (rentabilité, records, défis, carte des spots…) sont dans **IDEES.md**. À la fin de mercredi, on choisit les 2 ou 3 prochaines priorités.

## Rappels
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement v42), puis commit + push sur main.
- Tester en local avec « gamecheck » (port 8765), en mode mobile.
- Pas de mise à jour d'infos sans demande (« mets à jour »).
- Plus tard : référencement Google (Search Console).
