# Portfolio — Barnabé Bugugu

Portfolio personnel Angular moderne de Barnabé MUKOZI KAJABIKA BUGUGU.

## Stack

- Angular standalone
- TypeScript
- SCSS
- Lucide Icons via `@lucide/angular`
- Angular Signals

## Contenu intégré

Le portfolio contient maintenant les informations professionnelles les plus importantes du CV :

- Profil : développeur mobile, backend Python, IA & IoT
- Coordonnées publiques : email universitaire, LinkedIn et GitHub
- Compétences : Kotlin, Jetpack Compose, Python, FastAPI, REST, PostgreSQL, MySQL, SQLite, Firebase, NLP, ML, OpenCV, Arduino
- Projets : Quiz Intelligent, Elimu, KivuTech Entrepreneur Hub, UhakiLearn, CREGE, iPresence UCB, NLP et IoT
- Expériences : KivuTech, GDG on Campus UCB et BRALIMA S.A.
- Parcours académique : UCB, Pole Institute et électricité industrielle
- Certifications : Kotlin, FastAPI, SQL, Python, NLP et Machine Learning
- Langues et engagement communautaire
- CV PDF téléchargeable depuis le site

## Lancement

```bash
npm install
npm start
```

Ouvre ensuite :

```text
http://localhost:4200
```

## Build production

```bash
npm run build:prod
```

## Personnalisation

La majorité du contenu est centralisée dans :

```text
src/app/core/data/portfolio.data.ts
```

Le CV public est placé dans :

```text
public/cv-barnabe-bugugu.pdf
```

Le bouton « Télécharger mon CV » pointe déjà vers ce fichier.

## Refonte UI/UX 2026

Une refonte visuelle complète a été appliquée pour obtenir un portfolio plus éditorial, professionnel et humain : suppression des effets typiques de templates IA, meilleure hiérarchie, projets présentés en liste structurée, responsive renforcé, accessibilité améliorée et suppression des polices web externes.

Le rapport détaillé se trouve dans :

```text
REFONTE_UI_UX.md
```


## Galerie UhakiLearn

Le projet **UhakiLearn** inclut maintenant une galerie de 10 captures d’écran WebP optimisées (`public/projects/uhakilearn/`). Les images sont chargées avec `loading="lazy"` et `decoding="async"` pour limiter l’impact sur le chargement initial du portfolio.
