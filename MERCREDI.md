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

## Idées pour rentabiliser l'appli (à trier ensemble)
**L'appli est un projet indépendant : aucun lien avec le stream de l'utilisateur** (ni Twitch ni Discord KOKO COMU).

Étape 0, avant tout : **avoir du monde**. Il faut des stats de visites gratuites (GoatCounter ou Firebase Analytics), le référencement Google, des cartes d'infos faciles à partager sur les réseaux, et une page Play Store plus tard.

Gagner de l'argent :
- Pub sur le site (Google AdSense, l'emplacement 160 × 600 est déjà prêt) et dans l'APK (AdMob).
- Liens d'affiliation : consoles, manettes, casques, cartes PSN/Xbox via Amazon Partenaires ou les stores officiels (jamais de clés grises).
- Bouton « Soutenir » : dons Ko-fi ou Tipeee, gratuits à créer.
- Version Premium : pas de pub, badge doré au forum, avatars exclusifs, checklist sauvegardée en ligne.
- Emplacement « Partenaire » à vendre à des marques gaming (casques, chaises, boissons).
- Boutique de goodies de la mascotte de l'appli (le chien), en impression à la demande sans stock (Spreadshop, Fourthwall).

Faire grandir la communauté de l'appli :
- Notifications, sondages de la commu, checklist des collectibles, calendrier GTA VI avec compte à rebours.
- Profils plus fun : niveaux, badges pour les membres actifs du forum.
- Comptes de l'appli sur les réseaux (TikTok, X), indépendants du stream.
- Plus tard : reprendre la formule pour d'autres gros jeux, pour toucher plus de monde.

⚠️ GTA VI appartient à Rockstar / Take-Two : gagner de l'argent avec leur nom et leurs images est risqué. Avant de mettre de la pub ou du Premium, il faudra vérifier leurs règles sur les contenus de fans.

## Rappels
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement v42), puis commit + push sur main.
- Tester en local avec « gamecheck » (port 8765), en mode mobile.
- Pas de mise à jour d'infos sans demande (« mets à jour »).
- Plus tard : référencement Google (Search Console).
