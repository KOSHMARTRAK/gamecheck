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

## 4. Stats de visites (validé pour mercredi)
- Installer un compteur de visites gratuit et respectueux de la vie privée (GoatCounter, ou Firebase Analytics déjà dans le projet), avant tout le reste si possible : chaque jour compté = des chiffres à montrer plus tard aux annonceurs.
- Vérifier d'où vient l'outil et ce qu'il fait, et le dire à l'utilisateur avant de l'installer.

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

## Autres idées à ajouter à l'appli (toutes retenues le 23 nov.)
Contenu :
- **FAQ GTA VI** (« sur PC ? », « combien de Go ? », « cross-play ? ») : questions tapées sur Google, donc ça ramène du monde.
- **Patchs expliqués simplement** : chaque mise à jour du jeu en 5 lignes.
- **PS5 ou Xbox ?** : comparatif clair (graphismes, fluidité, prix).

Fonctions :
- **Défis de la semaine** : un défi en jeu, les joueurs postent leur preuve.
- **Records GameCheck** (idée phare de l'utilisateur) : des records qui n'existent QUE sur l'appli (ex. « plus long saut en moto », « plus haute prime en 1 vie »), avec classement et nom du détenteur. **Chaque record doit être validé par l'appli** : le joueur envoie une preuve (vidéo ou capture), puis validation par l'admin, éventuellement aidée par une IA qui pré-vérifie. Statut « En attente / Validé / Refusé », badge or pour le détenteur, historique des records battus. Attention : l'appli ne peut pas lire le jeu directement, donc la validation se fait toujours sur preuve.
- **Galerie photo de la commu** avec votes et « photo de la semaine » sur l'accueil.
- **Favoris** : garder une info ou une page du Guide.
- Quiz GTA VI avec classement : **pas prioritaire**, l'utilisateur doute qu'un quiz fait par IA soit assez bon.

- **Bonus de la semaine GTA Online** : résumé des bonus et promos Rockstar, mis à jour chaque jeudi (fait revenir les joueurs).
- **Mode anti-spoiler** : bouton qui floute les infos qui dévoilent l'histoire.
- **Carte des spots de la commu** : carte dessinée par nous (pas celle de Rockstar), les joueurs y placent sauts, easter eggs et lieux de record (lien avec les Records GameCheck).
- **Tier lists votées** : voitures, armes, missions ; classement qui bouge en direct.
- **Widget Android** : dernière info ou bonus de la semaine sur l'écran du téléphone.
- (Calculateur « combien de temps pour me payer X » : refusé.)

Pour grandir :
- **Parrainage** : inviter un ami = un badge.
- **Version anglaise** : public 10 fois plus grand.
- **Newsletter gratuite** : un mail par semaine avec l'actu GTA VI.
- Play Store : 25 $ une seule fois (payant, donc plus tard, l'APK gratuit suffit pour l'instant).

## Préparer dès maintenant pour gagner de l'argent plus tard
- **Stats de visites dès que possible** (GoatCounter, gratuit) : sans chiffres, impossible de vendre de la pub ou un partenariat.
- **Garder « GameCheck » comme marque**, avec GTA VI comme rubrique : moins de risque juridique, et l'appli pourra s'ouvrir à d'autres jeux sans changer de nom.
- **Faire grossir les comptes et la newsletter** (avec accord RGPD) : une audience qu'on possède vaut de l'argent auprès des sponsors.
- **Défis et Records « présentés par » une marque**, avec un lot offert : le sponsor paie pour apparaître (règlement de jeu-concours à prévoir).
- **Premium** construit autour des nouveautés : sans pub, carte des spots complète, badges et défis exclusifs.
- **Page « Annonceurs »** avec les chiffres de l'appli (visites, membres), à montrer aux marques.
- **Bandeau de consentement cookies** gratuit (obligatoire en Europe avant de mettre de la pub).
- Pour encaisser de l'argent : un statut micro-entrepreneur (gratuit à créer en France), à voir le moment venu.

⚠️ GTA VI appartient à Rockstar / Take-Two : gagner de l'argent avec leur nom et leurs images est risqué. Avant de mettre de la pub ou du Premium, il faudra vérifier leurs règles sur les contenus de fans.

## Rappels
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement v42), puis commit + push sur main.
- Tester en local avec « gamecheck » (port 8765), en mode mobile.
- Pas de mise à jour d'infos sans demande (« mets à jour »).
- Plus tard : référencement Google (Search Console).
