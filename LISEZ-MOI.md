# GameCheck – le vrai du faux sur GTA 6

Projet perso gratuit de KOSHMAR TRAK (créé le 21 nov. 2026 avec Claude).

## Les liens à retenir
- **Le site / l'appli (à partager)** : https://koshmartrak.github.io/gamecheck/
- **Les fichiers sur GitHub** : https://github.com/KOSHMARTRAK/gamecheck
- **Les signalements reçus** : https://github.com/KOSHMARTRAK/gamecheck/issues
Les deux mises à jour se lancent **uniquement à la demande** (demande à Claude « mets à jour GameCheck »).
- **Vérification des rumeurs par l'IA** (jeux du moment, utilise le forfait Claude, bouton « Run now ») : https://claude.ai/code/routines/trig_01X9kjw4TPoqaFtEfkyjXFLq
- **Annonces officielles** (robot gratuit sans IA, tous les jeux, bouton « Run workflow ») : https://github.com/KOSHMARTRAK/gamecheck/actions/workflows/official.yml
- **L'ancienne version dans Claude** : https://claude.ai/artifact/UFLjgBq7xooKQo4wp7XhAB
- **Les dessins de la mascotte (Figma)** : https://www.figma.com/design/04WhYi1fuD19bf4cUJa43r

## L'appli Android (APK)
- **Lien de téléchargement direct** : https://github.com/KOSHMARTRAK/gamecheck/releases/latest/download/GameCheck.apk
- **Page des versions** : https://github.com/KOSHMARTRAK/gamecheck/releases
- **Sortir une nouvelle version** : GitHub → onglet *Actions* → « Appli Android » → *Run workflow* (augmenter la version, ex. 1.0.1 / numéro 2). Ou demande-le à Claude.
- ⚠️ **Clé de signature** : `apk/android.keystore` + mot de passe dans `apk/signing-password.txt` (sur ton PC uniquement, jamais en ligne ; une copie est dans les secrets GitHub). **Ne les supprime jamais** : sans eux, impossible de mettre l'appli à jour.
- Le dépôt `KOSHMARTRAK.github.io` (dossier `GameCheck-racine`) sert seulement à lier le site et l'appli (plein écran). Ne pas le supprimer.

## Installer l'appli
- **Android** : télécharger l'APK ci-dessus, ou ouvrir le site dans Chrome → « Installer l'appli ».
- **iPhone (Safari)** : ouvrir le site → bouton Partager □↑ → « Sur l'écran d'accueil ».
- **PC (Chrome / Edge)** : icône d'installation dans la barre d'adresse.

## Le dossier
- `docs/` : le site en ligne (c'est ce dossier que GitHub publie).
  - `docs/data/` : les infos ajoutées automatiquement (par la routine des 3 h), l'historique des mises à jour.
  - `docs/img/` : captures, icône du chien.
- `android/` + `.github/workflows/android.yml` : fabrication automatique de l'APK.
- `serve.ps1` : pour tester le site sur ton PC (http://localhost:8765).
- Le reste (`icone/`, `figma/`, `rs-img/`, `export/`, `apk/`) : fichiers de travail, pas en ligne.

## Pour modifier l'appli
Ouvre la session **« ⭐ GameCheck – appli GTA 6 (projet principal) »** (épinglée en haut dans l'appli Claude, onglet Code) et dis ce que tu veux changer.

## La suite prévue
1. J'aime et commentaires partagés (Firebase, gratuit).
2. Référencement Google (Google Search Console, gratuit).
3. Accès réseau « complet » pour la routine (réglages de l'environnement Default sur claude.ai/code).
