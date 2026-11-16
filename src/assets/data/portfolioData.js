export const profileData = {
  name: 'Oshila Ishitha Gunerathne',
  role: 'Senior Frontend Engineer / Team Lead',
  location: 'Horana, Sri Lanka',
  education: {
    degree: 'BSc (Hons) in Computer Science',
    institution: 'University College Dublin, Ireland',
    graduated: 'December 2017 (Second Class Honors)',
  },
  summary:
    'Senior Frontend Engineer with 6+ years of experience architecting scalable web applications, monorepos, and cross-platform mobile solutions. Specialized in React, Angular, React Native, Next.js, Astro, and enterprise identity integrations.',
  highlights: [
    'Frontend Monorepo Architecture (Astro + Angular / NgRx)',
    'Cross-Platform Mobile Transformation (Angular Web to React Native)',
    'Enterprise Authentication & SSO (Keycloak & Azure B2C)',
    'High-Performance Sportsbook & Entertainment Platforms',
  ],
};

export const workExperience = [
  {
    id: 1,
    role: 'Frontend Developer / Team Lead',
    company: 'RightStakes (Aposta1)',
    location: 'Europe (Remote)',
    period: '2023 – Present',
    description:
      'Leading frontend architecture and engineering teams for a European digital entertainment and sportsbook platform.',
    achievements: [
      'Spearheaded architectural migration to a unified monorepo combining Astro for high-speed public landing pages with Angular + NgRx for authenticated states.',
      'Managed high-concurrency Sportsbook web applications built in React.',
      'Implemented Keycloak authentication and proxy solutions for the Aposta1 brand.',
      'Led the cross-platform transformation of the core Angular web app into a production React Native mobile application.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Ovinway',
    location: 'Sri Lanka',
    period: 'May 2021 – Dec 2022',
    description:
      'Led frontend engineering teams delivering B2B educational platforms and custom enterprise systems.',
    achievements: [
      'Localized the GetEpic platform for the Indian market for BYJU’s B2B ecosystem using Angular, Figma, and Docker.',
      'Oversaw end-to-end frontend architecture and delivery of custom ERP systems.',
    ],
  },
  {
    id: 3,
    role: 'Frontend Engineer',
    company: 'Mediabox',
    location: 'Sri Lanka',
    period: 'Dec 2020 – Apr 2021',
    description:
      'Engineered modern social networking and administrative web interfaces.',
    achievements: [
      'Single-handedly built a primary social media web application using Next.js.',
      'Developed analytics and moderation administrative dashboards in React.',
    ],
  },
  {
    id: 4,
    role: 'UI Developer',
    company: 'Oganro',
    location: 'Sri Lanka',
    period: 'Dec 2019 – Dec 2020',
    description:
      'Developed consumer-facing travel and hospitality booking platforms.',
    achievements: [
      'Built online hotel and airline booking engines using React, Angular, and WordPress.',
      'Integrated multi-currency online payment gateways.',
    ],
  },
  {
    id: 5,
    role: 'Web Designer',
    company: 'Lanka Bell',
    location: 'Sri Lanka',
    period: 'Oct 2018 – Jul 2019',
    description:
      'Managed corporate web presence and internal telecommunications portals.',
    achievements: [
      'Led an island-wide corporate intranet restructuring project.',
      'Maintained and modernized public corporate web properties.',
    ],
  },
];

export const featuredProjects = [
  {
    id: 'monorepo-migration',
    title: 'Hybrid Astro + Angular Monorepo',
    category: 'Web Architecture',
    summary:
      'Unified monorepo pairing zero-JS Astro landing pages for instant SEO/FCP with an Angular + NgRx authenticated application shell.',
    tech: ['Astro', 'Angular', 'NgRx', 'TypeScript', 'SCSS'],
  },
  {
    id: 'react-native-mobile',
    title: 'Cross-Platform Mobile App Transformation',
    category: 'Mobile Engineering',
    summary:
      'Transformed a full-scale Angular web platform into a native-feel cross-platform iOS and Android application using React Native.',
    tech: ['React Native', 'TypeScript', 'Redux', 'Keycloak'],
  },
  {
    id: 'sportsbook-platform',
    title: 'Real-Time Sportsbook & Identity Proxy',
    category: 'Full-Stack Frontend',
    summary:
      'High-frequency live odds UI in React backed by custom Keycloak SSO authentication and proxy routing.',
    tech: ['React', 'Keycloak', 'DataDog', 'REST/WebSockets'],
  },
  {
    id: 'edtech-localization',
    title: 'GetEpic India Localization & Custom ERP',
    category: 'Enterprise Web',
    summary:
      'Containerized Angular frontend localization for BYJU’s B2B educational rollout alongside modular ERP dashboards.',
    tech: ['Angular', 'Docker', 'Figma', 'TypeScript'],
  },
];

export const techCategories = [
  {
    title: 'Core Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    title: 'Frontend Frameworks',
    items: ['React', 'Angular', 'Next.js', 'Astro'],
  },
  {
    title: 'Mobile & State',
    items: ['React Native', 'Redux', 'NgRx', 'RxJS'],
  },
  {
    title: 'Auth, DevOps & Observability',
    items: ['Keycloak', 'Azure B2C', 'Docker', 'DataDog', 'Git'],
  },
];
