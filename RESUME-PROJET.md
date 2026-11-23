# GameCheck : résumé du projet (23 nov. 2026)

## Liens
- Site / appli : https://koshmartrak.github.io/gamecheck/
- APK Android (v1.0.2) : https://github.com/KOSHMARTRAK/gamecheck/releases/latest/download/GameCheck.apk
- Dépôt : https://github.com/KOSHMARTRAK/gamecheck (dossier publié : `docs/`)
- Signalements et demandes de vérif : https://github.com/KOSHMARTRAK/gamecheck/issues
- Vérification des rumeurs par l'IA (routine, à la demande) : https://claude.ai/code/routines/trig_01X9kjw4TPoqaFtEfkyjXFLq
- Robot gratuit des annonces officielles (à la demande) : GitHub Actions « Annonces officielles » (`.github/workflows/official.yml`, `scripts/official.mjs`)
- Appli perso Path of Exile 2 (privée, à part) : https://claude.ai/artifact/EynRGW5pzBQuFK1b4QwZo6

## Ce que fait l'appli (100 % GTA VI)
- Menu du bas : **Accueil** et **Forum** seulement ; Infos en cliquant sur le logo.
- Retirés le 23 nov. : onglets Explorer, Mes jeux, Vérifier, page du jeu, easter eggs, carte, choix des jeux, interrupteur Path of Exile, vérificateur et test anti-intox. Le code a été **supprimé** (ménage du 23 nov. soir, index.html 206 → 165 Ko). La bibliothèque LIB/GBYID (GTA VI seul) reste car le fil et les annonces officielles s'en servent.
- Accueil : vitrine GTA VI premium (bordure néon animée qui tourne, titre « GTA VI » en dégradé brillant, image qui zoome, badges « ● Disponible / Rockstar Games / PS5 · Xbox Series », « Bienvenue à Leonida »), non cliquable ; puis annonces officielles et infos vérifiées (vrai, rumeur, faux, arnaque) avec J'aime et commentaires.
- Infos : 29 au 23 nov. (dans `docs/data/posts.json`).
- Photos : 67 captures officielles stockées dans l'appli, `docs/img/rs00.jpg` à `rs66.jpg` (copie dans `rs-img/`). rs23-rs66 viennent du site officiel rockstargames.com/VI. Le fil n'affiche jamais deux fois la même photo (tant qu'il y a moins de 67 infos).
- Profils : connexion Google (Firebase gratuit), pseudo et avatar, modération (admin = KOSHMAR, uid tsjGm2MccNNdcxB9SkDsWm6Qgq43).

- 23 nov. (soir) : plus de badges vrai / rumeur / faux ; seul le badge **« Alerte arnaque »** reste (filtres : Tout / Alerte arnaque). Les autres infos ont un cadre neutre « À savoir ». Étiquette « GTA VI › » retirée. 3 alertes arnaques permanentes ajoutées (argent gratuit, faux support Rockstar, concours / clés pas chères).

## Style
- Haut : plage animée (soleil, cocotier, mouettes, vagues). Bas : sable, coquillages, crabes, chien KOSHMAR qui se promène.
- Fond : « dégradé vivant » animé (rose, turquoise, orange, violet), cartes en verre dépoli, bordures ondulées animées.
- Logo / icône : médaille or premium (img/logo-premium.png, icon-*.png).
- PC : panneau pub à droite (avion à banderole), emplacement 160 × 600 prêt pour une régie.
- L'utilisateur aime : premium, animé, néon ; il rejette ce qui fait amateur ou trop épuré, et les éléments « inintéressants ».

## Technique
- Firebase : projet gamecheck-48594 (Auth Google + Firestore eur3, règles dans `firestore.rules`).
- Connexion sur mobile : page de connexion hébergée sur koshmartrak.github.io/__/auth/ (dépôt KOSHMARTRAK.github.io, dossier GameCheck-racine).
- Mises à jour : UNIQUEMENT à la demande (« mets à jour » = `gh workflow run official.yml` + RemoteTrigger run `trig_01X9kjw4TPoqaFtEfkyjXFLq`).
- Routine IA (Sonnet) : depuis le 23 nov. (soir), elle écrit des **actus** (plus de verdict vrai/faux) : cat « alerte » seulement pour les arnaques, « rumeur » si non confirmé, « vrai » pour le reste ; le champ verdict = cadre « À savoir ». Avant : consigne élargie le 23 nov. = actu GTA VI des **7 derniers jours**, 10 à 15 recherches, tous sujets (rumeurs, arnaques, bugs, patchs, ventes, Online, secrets…), vise 4 à 8 infos. Un passage spécial « rattrapage » (toute l'histoire de GTA VI) a été fait une fois puis la consigne normale remise. Attention : modifier la consigne puis lancer tout de suite = le lancement peut partir avec l'ancienne consigne.
- Le robot des annonces officielles ne trouve rien en ce moment (`official.json` vide).
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement **v42**), puis commit + push sur main.
- PC : pas de Python ; utiliser **Node** pour les scripts. Git : `C:\Program Files\Git\cmd`, gh : `C:\Program Files\GitHub CLI`. index.html a des fins de ligne Windows (CRLF).
- Test local : `.claude/launch.json` « gamecheck » (serve.ps1, port 8765), navigateur intégré en mode mobile.
- Clé de signature APK : `apk/` (jamais en ligne) + secrets GitHub.

## Idées en attente
- **Feuille de route complète : IDEES.md** (rentabilité, Records GameCheck, défis, carte des spots, version anglaise…). Programme du 25 nov. : MERCREDI.md.
- **À faire après le reset du forfait (mer. 25 nov. vers 16 h)** : un « Guide » / soluce de GTA VI (bien débuter, argent, astuces, armes, véhicules, collectibles, secrets, puis missions), fait à partir de recherches web, rédigé avec nos mots (pas de copie de guides). L'utilisateur a choisi d'attendre mercredi.
- **Aussi mercredi** : (a) refaire la page Infos (clic sur le logo) pour une appli d'actu : retirer « 5 réflexes anti-fake » et le vocabulaire vérification ; (b) réécrire les anciennes infos dont le verdict commence par « FAUX. » ou « Non vérifié. » en ton « À savoir ».
- **Plus tard** : référencement Google (Search Console).
- But à terme : une appli GTA VI **indépendante, sans aucun lien avec le stream** (pas de Twitch ni de Discord KOKO COMU dedans), qui pourra un jour rapporter de l'argent (idées dans MERCREDI.md) (actu, guide), on la fait évoluer ensemble. Rubrique « Vrai ou Faux » refusée.
