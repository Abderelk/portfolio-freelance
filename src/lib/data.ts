export const personalInfo = {
  name: "Abderrahmane El Kafif",
  firstName: "Abderrahmane",
  lastName: "El Kafif",
  initials: "AEK",
  role: "Développeur Full Stack",
  tagline: "Je transforme vos idées en produits numériques soignés — du pixel au serveur.",
  description:
    "Passionné par la création d\u2019expériences web de qualité, je maîtrise l\u2019ensemble de la chaîne de développement : interfaces React/Next.js soignées, APIs robustes en Node.js, et bases de données MongoDB. Disponible pour des missions freelance et des opportunités en CDI.",
  location: "Paris, France",
  email: "abderrahmanelkafif@gmail.com",
  phone: "06 50 37 75 02",
  github: "https://github.com/Abderelk",
  available: true,
  availabilityLabel: "Disponible — Freelance & CDI",
};

export const skills = {
  frontend: [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#ffffff" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "HTML / CSS", icon: "🌐", color: "#E34F26" },
    { name: "Tailwind CSS", icon: "🌊", color: "#06B6D4" },
    { name: "Sass", icon: "💅", color: "#CC6699" },
    { name: "Bootstrap", icon: "🅱", color: "#7952B3" },
    { name: "React Native", icon: "📱", color: "#61DAFB" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", color: "#68A063" },
    { name: "Symfony", icon: "⚡", color: "#000000" },
    { name: "PHP", icon: "🐘", color: "#8892BF" },
    { name: "API REST", icon: "🔌", color: "#FF6B6B" },
  ],
  database: [
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "MySQL", icon: "🐬", color: "#4479A1" },
  ],
  tools: [
    { name: "Git", icon: "🔀", color: "#F05032" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Google Cloud", icon: "☁️", color: "#4285F4" },
    { name: "Figma", icon: "🎨", color: "#F24E1E" },
    { name: "CI/CD", icon: "🔄", color: "#FC6D26" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "SecondLife Exchange",
    shortDesc: "Plateforme d\u2019échange de seconde main",
    description:
      "Application full stack permettant aux utilisateurs d\u2019échanger des objets de seconde main. Authentification JWT, système de messagerie en temps réel, gestion des annonces avec photos.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    emoji: "♻️",
    color: "#06b6d4",
    liveUrl: "",
    githubUrl: "https://github.com/Abderelk",
    featured: true,
  },
  {
    id: 2,
    title: "Cinéteck",
    shortDesc: "Bibliothèque cinématographique",
    description:
      "Application de gestion de bibliothèque cinématographique avec recherche avancée, filtres par genre, notation et système de favoris. Interface responsive et fluide.",
    stack: ["React", "Node.js", "MongoDB"],
    emoji: "🎬",
    color: "#8b5cf6",
    liveUrl: "",
    githubUrl: "https://github.com/Abderelk",
    featured: true,
  },
  {
    id: 3,
    title: "Street Fighter JS",
    shortDesc: "Jeu de combat en JavaScript vanilla",
    description:
      "Mini-jeu de combat inspiré de Street Fighter, développé entièrement en JavaScript vanilla. Gestion des collisions, animations sprite, système de vie et de rounds.",
    stack: ["JavaScript", "HTML Canvas", "CSS"],
    emoji: "🥊",
    color: "#f59e0b",
    liveUrl: "",
    githubUrl: "https://github.com/Abderelk",
    featured: false,
  },
  {
    id: 4,
    title: "Fake News Detector",
    shortDesc: "Chatbot de vérification des faits",
    description:
      "Chatbot intelligent capable d\u2019analyser et vérifier la véracité d\u2019informations. Utilise des APIs de fact-checking et du NLP pour détecter les fake news en temps réel.",
    stack: ["React", "Node.js", "API REST"],
    emoji: "🔍",
    color: "#ef4444",
    liveUrl: "",
    githubUrl: "https://github.com/Abderelk",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Kaptcher",
    type: "Alternance",
    location: "Paris",
    period: "Sept. 2024 — Oct. 2025",
    current: true,
    description:
      "Développement de la solution applicative Kaptcher — conception d\u2019interfaces utilisateur, mise en place d\u2019environnements DevOps, rédaction de tests fonctionnels et unitaires, missions CI/CD et déploiement.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind", "TypeScript", "Google Cloud"],
    color: "#4f46e5",
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    company: "Freelance",
    type: "Indépendant",
    location: "Paris",
    period: "Mars 2024 — Aujourd\u2019hui",
    current: true,
    description:
      "Création de sites vitrines et landing pages sur mesure, développement d\u2019applications web, intégration de maquettes Figma, refonte et optimisation de sites existants.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Animateur — Atelier Codage",
    company: "Mairie de Franconville",
    type: "CDI",
    location: "Franconville",
    period: "Nov. 2023 — Sept. 2024",
    current: false,
    description:
      "Encadrement d\u2019un atelier de développement web pour enseigner les bases du codage aux collégiens et lycéens.",
    stack: ["HTML", "CSS", "JavaScript"],
    color: "#10b981",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor Développement Web",
    school: "Digital Campus Paris",
    subtitle: "Concepteur développeur de solutions digitales",
    period: "2022 — 2025",
    current: true,
  },
  {
    id: 2,
    degree: "STAPS",
    school: "IUT Sorbonne, Bobigny",
    subtitle: "",
    period: "2021 — 2022",
    current: false,
  },
  {
    id: 3,
    degree: "Baccalauréat Général Sciences",
    school: "Lycée Camille-Saint-Saëns",
    subtitle: "",
    period: "2021",
    current: false,
  },
];
