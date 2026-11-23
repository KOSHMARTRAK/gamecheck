# GameCheck : résumé du projet (22 nov. 2026)

## Liens
- Site / appli : https://koshmartrak.github.io/gamecheck/
- APK Android (v1.0.2) : https://github.com/KOSHMARTRAK/gamecheck/releases/latest/download/GameCheck.apk
- Dépôt : https://github.com/KOSHMARTRAK/gamecheck (dossier publié : `docs/`)
- Signalements et demandes de vérif : https://github.com/KOSHMARTRAK/gamecheck/issues
- Vérification des rumeurs par l'IA (routine, à la demande) : https://claude.ai/code/routines/trig_01X9kjw4TPoqaFtEfkyjXFLq
- Robot gratuit des annonces officielles (à la demande) : GitHub Actions « Annonces officielles » (`.github/workflows/official.yml`, `scripts/official.mjs`)
- Appli perso Path of Exile 2 (privée, à part) : https://claude.ai/artifact/EynRGW5pzBQuFK1b4QwZo6

## Ce que fait l'appli (100 % GTA VI)
- Menu du bas : Accueil, Forum, Vérifier, Mes jeux ; Infos en cliquant sur le logo (onglet Explorer retiré le 23 nov.).
- Accueil : vitrine GTA VI, annonces officielles, infos vérifiées (vrai, rumeur, faux, arnaque) avec J'aime et commentaires.
- Vérifier : recherche dans le fil, « Demander une vérif » (issue GitHub [VERIF]), test anti-intox en 5 questions.
- Le jeu (bouton « Voir › » de la vitrine GTA VI de l'Accueil) : fiche, carte de Leonida, Easter eggs, forum.
- Profils : connexion Google (Firebase gratuit), pseudo et avatar, modération (admin = KOSHMAR, uid tsjGm2MccNNdcxB9SkDsWm6Qgq43).
- Bibliothèque : les 82 autres jeux ont été supprimés du code le 23 nov. ; `LIB` ne contient plus que GTA VI.

## Style
- Haut : plage animée (soleil, cocotier, mouettes, vagues). Bas : sable, coquillages, crabes, chien KOSHMAR qui se promène.
- Fond : « dégradé vivant » animé (rose, turquoise, orange, violet), cartes en verre dépoli, bordures ondulées animées.
- Logo / icône : médaille or premium (img/logo-premium.png, icon-*.png).
- PC : panneau pub à droite (avion à banderole), emplacement 160 × 600 prêt pour une régie.

## Technique
- Firebase : projet gamecheck-48594 (Auth Google + Firestore eur3, règles dans `firestore.rules`).
- Connexion sur mobile : page de connexion hébergée sur koshmartrak.github.io/__/auth/ (dépôt KOSHMARTRAK.github.io, dossier GameCheck-racine). Adresses autorisées dans Google Cloud (avec et sans « / » final).
- Mises à jour : UNIQUEMENT à la demande (« mets à jour GameCheck » = lancer le robot + la routine IA).
- Chaque mise en ligne : augmenter la version du cache dans `docs/sw.js`.
- Clé de signature APK : `apk/` (jamais en ligne) + secrets GitHub.

## Idées en attente
- Remplir avec des alertes arnaques toujours valables.
- Cartes à partager (images « VRAI / FAUX ») et rubrique « Vrai ou Faux » pour les lives.
- Formulaire sans compte GitHub pour les demandes de vérif.
