# Rapport de refonte UI/UX — Portfolio Barnabé Bugugu

## 1. Problèmes identifiés

- Direction visuelle initiale très proche des templates de portfolios générés automatiquement : halos, gradient violet/cyan, carte de profil flottante, puces flottantes et nombreuses cartes.
- Hero très décoratif alors que les projets et le parcours devraient être les preuves principales du profil.
- Densité visuelle peu différenciée entre les sections.
- Usage important de surfaces arrondies et d'effets visuels alors que le contenu professionnel se prête mieux à une structure éditoriale.
- Typographie et structure de navigation propres mais peu distinctives.
- Dépendance à Google Fonts évitable pour un portfolio qui doit rester rapide et robuste.

## 2. Références étudiées

Recherche effectuée sur des galeries et portfolios actuels 2025–2026, notamment :

- SiteInspire — catégories Portfolio / Web & App Development.
- Jordan Robson — publié sur SiteInspire en juillet 2026 : grille minimale, hiérarchie typographique et composition structurée.
- Jakub Jakubik — publié sur SiteInspire en juillet 2026 : approche minimale et forte direction typographique.
- Corentin Bernadou — publié sur SiteInspire en mai 2026 : grande typographie et mise en page personnelle.
- Jin Su Park — publié sur SiteInspire en avril 2026 : grille, portfolio personnel et product design.
- Fine Thought — publié sur SiteInspire en mai 2025.
- Maël Ruffini — publié sur SiteInspire en février 2025.
- Land-book — collection Portfolio.
- Awwwards — portfolios et sites de développement distingués en 2025.

Les références ont été utilisées uniquement pour analyser les principes de hiérarchie, densité, grille, typographie, navigation et présentation des travaux. Aucune identité graphique n'a été copiée.

## 3. Nouvelle direction artistique

Personnalité retenue :

- technique ;
- éditoriale ;
- sobre ;
- humaine ;
- crédible ;
- locale sans cliché ;
- moderne sans esthétique « IA ».

Le violet/bleu et les effets lumineux ont été supprimés au profit d'une palette neutre chaude avec vert profond. Le design s'appuie surtout sur la typographie, les lignes de séparation et le rythme de la grille.

## 4. Nouveau design system

- Palette claire : fond ivoire, surfaces crème, texte presque noir, vert profond comme couleur d'action.
- Palette sombre complète et cohérente.
- Rayons limités à 5 / 8 / 12 px.
- Échelle d'espacement centralisée dans `src/styles.scss`.
- Typographie : pile système performante + serif éditoriale système pour les grands titres + monospace pour les labels techniques.
- Focus clavier visible.
- Animations courtes et respect de `prefers-reduced-motion`.

## 5. Pages / sections retravaillées

- Header et navigation desktop/mobile.
- Hero.
- Profil professionnel et liens sociaux.
- Domaines techniques.
- À propos.
- Compétences.
- Projets avec filtres.
- Parcours professionnel.
- Formation académique.
- Certifications.
- Langues.
- Engagement.
- Contact.
- Footer.

## 6. Nouveaux patterns et composants visuels

- Hero éditorial à deux colonnes.
- Fiche de profil sous forme de données structurées plutôt qu'une carte décorative.
- Bandeau de domaines techniques sans faux KPI.
- Listes à séparateurs pour les compétences.
- Liste de projets de type portfolio éditorial, sans grille de cards répétitives.
- Timeline simplifiée pour le parcours.
- Listes de certifications compactes.
- Barres de niveau discrètes pour les langues.
- Formulaire sans grosse surface flottante.
- Empty state pour les filtres de projets.
- Skip-link d'accessibilité.

## 7. Améliorations UX

- Les projets sont désormais une preuve centrale et non des cartes secondaires.
- Les liens « Voir en ligne » n'apparaissent que lorsque l'URL existe réellement.
- Les filtres indiquent leur état avec `aria-pressed`.
- La navigation suit la section visible.
- Le formulaire explique clairement qu'il ouvre le client email et n'envoie aucune donnée à un serveur.
- Une seule action primaire domine par zone logique.

## 8. Responsive

Breakpoints principaux :

- Desktop : grille éditoriale large.
- <= 1050 px : navigation mobile, hero et sections principales en une colonne.
- <= 780 px : listes adaptées, filtres scrollables, projets en structure compacte.
- <= 480 px : boutons pleine largeur, bandeau technique en une colonne, parcours et contact simplifiés.

La structure reste utilisable à partir de 320 px sans tableau ni composant qui impose une largeur desktop.

## 9. Accessibilité

- Skip-link vers le contenu principal.
- Focus visible global.
- `aria-current` sur la navigation active.
- `aria-expanded` et `aria-controls` pour le menu mobile.
- `aria-pressed` sur les filtres.
- Libellés de formulaire persistants.
- Contrastes renforcés.
- `prefers-reduced-motion` pris en charge.
- Tailles tactiles principales proches ou supérieures à 44 px.

## 10. Performance

- Suppression des polices Google distantes.
- Aucune nouvelle bibliothèque ajoutée.
- Aucune image décorative lourde ajoutée.
- Suppression des halos, gradients, fausses illustrations UI et animations décoratives.
- Architecture Angular existante conservée.

## 11. Vérifications réalisées

- Vérification structurelle HTML : balises équilibrées, aucune fermeture incohérente détectée.
- Vérification des directives d'icônes Lucide : aucune directive manquante et aucun import inutilisé.
- Vérification TypeScript statique avec les options strictes du projet à l'aide de déclarations temporaires : OK.
- Vérification des fichiers publics : CV PDF valide (2 pages) et favicon présents.
- Vérification des anciens motifs visuels : aucune occurrence des anciens éléments `gradient`, `ambient`, `floating-chip` ou `profile-card-glow` dans `src`.

## 12. Build final dans l'environnement de travail

Le build Angular complet n'a pas pu être exécuté dans le sandbox pour deux raisons externes au code :

1. le registre npm n'est pas joignable depuis cet environnement (`EAI_AGAIN`) et les dépendances Angular ne sont pas entièrement présentes dans le cache local ;
2. le sandbox utilise Node.js 22.16.0 alors qu'Angular 22.1.5 déclare Node.js `^22.22.3 || ^24.15.0 || >=26.0.0`.

Le projet conserve son `package-lock.json`. Sur une machine avec une version Node compatible et un accès npm, exécuter :

```bash
npm ci
npm run build:prod
```

Aucune dépendance supplémentaire n'a été introduite par la refonte.
