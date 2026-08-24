import {
  Certification,
  Education,
  Engagement,
  Experience,
  LanguageLevel,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from '../models/portfolio.models';

/**
 * Données principales du portfolio.
 * Les informations professionnelles et académiques ci-dessous sont issues du CV de Barnabé.
 */
export const PROFILE = {
  name: 'Barnabé Bugugu',
  fullName: 'Barnabé MUKOZI KAJABIKA BUGUGU',
  shortName: 'BB',
  role: 'Développeur Mobile & IA',
  headline: 'Kotlin · Backend Python · IoT · Intelligence artificielle',
  tagline:
    'Je conçois des solutions numériques utiles dans l’éducation, l’inclusion numérique et le développement communautaire, du mobile au backend jusqu’aux prototypes IA/IoT.',
  location: 'Bukavu, RDC · Région des Grands Lacs',
  email: 'mukozi.kajabika@ucbukavu.ac.cd',
  availability: 'Ouvert aux collaborations, projets et opportunités',
  about: [
    'Étudiant en Informatique à l’Université Catholique de Bukavu, je développe des applications mobiles et des services backend avec une forte orientation produit. Je travaille principalement avec Kotlin, Jetpack Compose, Python, FastAPI, les API REST et les bases de données modernes.',
    'Mentor au sein de GDG on Campus UCB, j’aime partager mes connaissances et accompagner d’autres jeunes développeurs. Je poursuis aussi une formation en Paix, Cohésion Sociale et Accès à la Justice au Pole Institute, ce qui nourrit mon intérêt pour les technologies à impact social dans la région des Grands Lacs.',
  ],
};

export const SOCIALS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://cd.linkedin.com/in/barnab%C3%A9-bugugu-a99404360',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/babekaja',
    icon: 'github',
  },
  {
    label: 'Email',
    url: `mailto:${PROFILE.email}`,
    icon: 'mail',
  },
];

export const STATS: Stat[] = [
  { value: 'Kotlin', label: 'Android & Jetpack Compose' },
  { value: 'FastAPI', label: 'Backend Python & REST' },
  { value: 'IA', label: 'ML · NLP · Computer Vision' },
  { value: 'GDG', label: 'Mentorat & communauté' },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Mobile & Frontend',
    icon: 'smartphone',
    skills: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Ktor Client', 'Angular', 'HTML/CSS'],
  },
  {
    title: 'Backend & Data',
    icon: 'database',
    skills: ['Python', 'FastAPI', 'API REST', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'IA & Vision',
    icon: 'brain',
    skills: ['Machine Learning', 'Data Science', 'NLP', 'OpenCV', 'Computer Vision', 'Gemini'],
  },
  {
    title: 'Ingénierie & Outils',
    icon: 'code',
    skills: ['Git / GitHub', 'Arduino', 'LaTeX', 'Microsoft Office', 'Architecture MVVM', 'Travail en équipe'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Quiz Intelligent',
    description:
      'Application Android intégrant l’IA pour générer et adapter les questions, corriger automatiquement les réponses, fournir des explications détaillées et proposer un chatbot pédagogique.',
    category: 'IA',
    tags: ['Kotlin', 'Gemini', 'LangChain', 'FastAPI', 'SQLite'],
    featured: true,
    meta: 'Projet personnel · Mars — Avril 2025',
  },
  {
    title: 'Elimu',
    description:
      'Plateforme éducative conçue avec GDG on Campus UCB : backend FastAPI/MySQL pour la gestion de vidéos pédagogiques et application Android moderne connectée à l’API.',
    category: 'Mobile',
    tags: ['FastAPI', 'MySQL', 'Kotlin', 'Jetpack Compose', 'Ktor Client'],
    featured: true,
    meta: 'Chef de l’équipe Kotlin & Python · Avril — Juillet 2025',
  },
  {
    title: 'KivuTech Entrepreneur Hub',
    description:
      'Plateforme de gestion d’incubation pour suivre startups, candidatures, mentorat, sessions, progression et indicateurs de performance.',
    category: 'Web',
    tags: ['Angular', 'Supabase', 'PostgreSQL', 'RLS'],
    featured: true,
  },
  {
    title: 'UhakiLearn',
    description:
      'Expérience d’apprentissage mobile multilingue centrée sur les droits, la cohésion sociale et l’esprit critique. L’application combine leçons courtes, scénarios à choix, progression, XP, mode hors connexion et narration audio.',
    category: 'Mobile',
    tags: ['KMP', 'Angular', 'Firebase', 'TTS'],
    liveUrl: 'https://uhakilearn.web.app/',
    meta: 'Application éducative · Mobile-first · Région des Grands Lacs',
    images: [
      {
        src: '/projects/uhakilearn/uhakilearn-splash-screen.webp',
        alt: 'Écran de démarrage UhakiLearn avec le logo Pole Institute et la devise de l’application.',
        label: 'Accueil',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-niveau-overview.webp',
        alt: 'Vue du niveau Esprit critique et désinformation dans UhakiLearn avec objectifs, leçons et pack hors connexion.',
        label: 'Niveau',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-lecons-screen.webp',
        alt: 'Liste des leçons et défis scénarisés du niveau Esprit critique et désinformation.',
        label: 'Leçons',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-scenario-details.webp',
        alt: 'Présentation du scénario interactif Le message qui a semé la panique.',
        label: 'Scénario',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-decision-story-card.webp',
        alt: 'Écran narratif UhakiLearn montrant des élèves découvrant un faux message dans un groupe WhatsApp.',
        label: 'Mise en situation',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-decision-patrick.webp',
        alt: 'Dialogue interactif avec Patrick pendant le scénario UhakiLearn.',
        label: 'Dialogue',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-decision-amina.webp',
        alt: 'Dialogue interactif avec Amina proposant de partager rapidement le message.',
        label: 'Choix',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-story-progress.webp',
        alt: 'Progression narrative du scénario avec un groupe d’élèves discutant de la rumeur.',
        label: 'Progression',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-decision-neema.webp',
        alt: 'Dialogue avec Neema encourageant la vérification de la source officielle.',
        label: 'Vérification',
      },
      {
        src: '/projects/uhakilearn/uhakilearn-decision-patrick-insistant.webp',
        alt: 'Dialogue avec Patrick insistant pour partager le message avant vérification.',
        label: 'Décision',
      },
    ],
  },
  {
    title: 'CREGE — UEA',
    description:
      'Plateforme web de gestion d’activités, publications, participants, compétitions Génie Éco et contenus institutionnels.',
    category: 'Web',
    tags: ['Angular', 'Firebase', 'Cloudinary', 'SEO'],
    liveUrl: 'https://crege-4a997.web.app/',
  },
  {
    title: 'iPresence UCB',
    description:
      'Solution de présence universitaire pensée autour du mobile, de la détection de proximité et d’un suivi administratif simplifié.',
    category: 'Mobile',
    tags: ['Kotlin', 'Compose', 'BLE', 'QR'],
  },
  {
    title: 'Assistant NLP',
    description:
      'Expérimentations autour de la classification, du résumé, de l’analyse de sentiment et de la reconnaissance d’entités.',
    category: 'IA',
    tags: ['Python', 'NLP', 'Hugging Face', 'PyTorch'],
  },
  {
    title: 'Prototypes IoT',
    description:
      'Prototypage de systèmes connectés avec microcontrôleurs, capteurs et acquisition de données pour des cas d’usage pratiques.',
    category: 'IoT',
    tags: ['Arduino', 'ESP32', 'Capteurs', 'Python'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2026',
    role: 'Stagiaire informatique',
    organization: 'KivuTech',
    description:
      'Conception et exploration de solutions numériques pour la gestion de programmes d’incubation et l’accompagnement entrepreneurial.',
    tags: ['Product', 'Angular', 'Supabase'],
  },
  {
    period: '2025 — 2026',
    role: 'Mentor & développeur',
    organization: 'GDG on Campus UCB',
    description:
      'Animation et accompagnement d’activités technologiques, mentorat de jeunes développeurs et participation à des challenges et projets collaboratifs.',
    tags: ['Mentorat', 'Kotlin', 'Python', 'Communauté'],
  },
  {
    period: 'Juin — Août 2022',
    role: 'Stagiaire en Électricité Industrielle',
    organization: 'BRALIMA S.A. · Bukavu',
    description:
      'Participation à la maintenance préventive et curative, au câblage, à la lecture de schémas industriels et à des interventions sur moteurs, capteurs, onduleurs et automates programmables.',
    tags: ['Électricité', 'Maintenance', 'PLC', 'Systèmes industriels'],
  },
];

export const EDUCATION: Education[] = [
  {
    period: '2023 — aujourd’hui',
    title: 'Licence en Sciences Informatiques',
    institution: 'Université Catholique de Bukavu (UCB)',
    location: 'Bukavu, RDC',
    detail: 'Formation en développement logiciel, mobile, bases de données, systèmes et projets numériques.',
  },
  {
    period: 'Depuis mai 2026',
    title: 'Paix, Cohésion Sociale et Accès à la Justice',
    institution: 'Pole Institute',
    location: 'Région des Grands Lacs',
    detail: 'Formation complémentaire sur les dynamiques de paix, gouvernance et cohésion sociale.',
  },
  {
    period: '2023',
    title: 'Diplôme d’État — Électricité Industrielle',
    institution: 'Collège Technique Sainte Année',
    location: 'Bukavu, RDC',
    detail: 'Base technique en électricité industrielle, maintenance et systèmes électriques.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Développement mobile avec Kotlin',
    issuer: 'GDG on Campus UCB',
  },
  {
    title: 'Android Kotlin — UI, API REST & Firebase',
    issuer: 'Malakisi',
  },
  {
    title: 'Introduction à Python & API avec FastAPI',
    issuer: 'GDG on Campus UCB',
  },
  {
    title: 'SQL Associate',
    issuer: 'DataCamp',
  },
  {
    title: 'Intermediate Python',
    issuer: 'DataCamp',
  },
  {
    title: 'Natural Language Processing (NLP)',
    issuer: 'DataCamp',
  },
  {
    title: 'Parcours Machine Learning',
    issuer: 'DataCamp',
  },
  {
    title: 'Paix, Cohésion Sociale & Accès à la Justice',
    issuer: 'Pole Institute',
    detail: 'En cours depuis mai 2026',
  },
];

export const LANGUAGES: LanguageLevel[] = [
  { language: 'Français', label: 'Très bon niveau', level: 5 },
  { language: 'Swahili', label: 'Très bon niveau', level: 4 },
  { language: 'Anglais', label: 'En progression', level: 2 },
];

export const ENGAGEMENTS: Engagement[] = [
  {
    title: 'Mentorat technologique',
    organization: 'GDG on Campus UCB',
    description:
      'Accompagnement de jeunes des Grands Lacs à travers des ateliers, challenges, projets collaboratifs et sessions techniques.',
  },
  {
    title: 'Technologie & impact social',
    organization: 'Pole Institute / initiatives personnelles',
    description:
      'Développement d’une vision reliant innovation numérique, éducation, inclusion, gouvernance et consolidation de la paix.',
  },
];
