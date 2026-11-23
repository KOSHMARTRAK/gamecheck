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
- Retirés le 23 nov. à la demande de l'utilisateur : onglets Explorer, Mes jeux, Vérifier ; bouton « Suivre ce jeu » ; barre « Jeux du fil » ; les 82 autres jeux (`LIB` ne contient plus que GTA VI). Le code de la vue Vérifier et de la page du jeu reste dans index.html mais n'est plus accessible depuis le menu (la page du jeu reste ouverte par l'étiquette « GTA VI › » sur chaque info).
- Accueil : vitrine GTA VI premium (bordure néon animée qui tourne, titre « GTA VI » en dégradé brillant, image qui zoome, badges « ● Disponible / Rockstar Games / PS5 · Xbox Series », « Bienvenue à Leonida »), non cliquable ; puis annonces officielles et infos vérifiées (vrai, rumeur, faux, arnaque) avec J'aime et commentaires.
- Infos : 29 au 23 nov. (dans `docs/data/posts.json`).
- Photos : 67 captures officielles stockées dans l'appli, `docs/img/rs00.jpg` à `rs66.jpg` (copie dans `rs-img/`). rs23-rs66 viennent du site officiel rockstargames.com/VI. Le fil n'affiche jamais deux fois la même photo (tant qu'il y a moins de 67 infos).
- Profils : connexion Google (Firebase gratuit), pseudo et avatar, modération (admin = KOSHMAR, uid tsjGm2MccNNdcxB9SkDsWm6Qgq43).

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
- Routine IA (Sonnet) : consigne élargie le 23 nov. = actu GTA VI des **7 derniers jours**, 10 à 15 recherches, tous sujets (rumeurs, arnaques, bugs, patchs, ventes, Online, secrets…), vise 4 à 8 infos. Un passage spécial « rattrapage » (toute l'histoire de GTA VI) a été fait une fois puis la consigne normale remise. Attention : modifier la consigne puis lancer tout de suite = le lancement peut partir avec l'ancienne consigne.
- Le robot des annonces officielles ne trouve rien en ce moment (`official.json` vide).
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js` (actuellement **v39**), puis commit + push sur main.
- PC : pas de Python ; utiliser **Node** pour les scripts. Git : `C:\Program Files\Git\cmd`, gh : `C:\Program Files\GitHub CLI`. index.html a des fins de ligne Windows (CRLF).
- Test local : `.claude/launch.json` « gamecheck » (serve.ps1, port 8765), navigateur intégré en mode mobile.
- Clé de signature APK : `apk/` (jamais en ligne) + secrets GitHub.

## Idées en attente
- **À faire après le reset du forfait (mer. 25 nov. vers 16 h)** : un « Guide » / soluce de GTA VI (bien débuter, argent, astuces, armes, véhicules, collectibles, secrets, puis missions), fait à partir de recherches web, rédigé avec nos mots (pas de copie de guides). L'utilisateur a choisi d'attendre mercredi.
- Question laissée sans réponse : retirer aussi l'étiquette « GTA VI › » sur chaque info ?
- Remplir avec des alertes arnaques toujours valables.
- Cartes à partager (images « VRAI / FAUX ») et rubrique « Vrai ou Faux » pour les lives.
