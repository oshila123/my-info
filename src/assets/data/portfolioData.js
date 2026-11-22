export const profileData = {
  name: 'Oshila Ishitha Gunerathne',
  role: 'Senior Frontend Engineer & Frontend Lead',
  location: 'Horana, Sri Lanka',
  education: {
    degree: 'BSc (Hons) in Computer Science',
    institution: 'University College Dublin, Ireland',
    graduated: 'December 2017 (Second Class Honors)',
  },
  summary:
    'Senior Frontend Engineer with 7+ years of experience architecting scalable web applications, monorepos, and cross-platform mobile solutions. Specialized in React, Angular, React Native, Next.js, Astro, Cloudflare Edge Functions, and enterprise identity integrations.',
  contact: {
    linkedin: 'https://www.linkedin.com/in/oshila123/',
    email: 'oshila.it@gmail.com',
    cvUrl: 'https://drive.google.com/file/d/17BPrelI2LXO0Tt2zJAQONo_br3fTWEVQ/view?usp=sharing',
  },
  highlights: [
    'Engineered an ultra-fast React casino hub featuring SSR/pre-rendering for instant load times, dynamic SEO optimization, and seamless user authentication.',
    'Frontend Monorepo Architecture (Astro + Angular / NgRx)',
    'Cross-Platform Mobile Transformation (Angular Web to React Native)',
    'Zero-Buffer Edge AI Streaming & Local-First IndexedDB Architectures (Cloudflare Pages + Gemini SSE)',
    'High-Density Data Virtualization & Enterprise SSO (Keycloak & Azure B2C)',
  ],
};

export const workExperience = [
  {
    id: 1,
    role: 'Frontend Developer & Frontend Lead',
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
    id: 'react-repo',
    title: 'High-Speed iGaming & Casino Platform',
    category: 'Full-Stack Frontend (Web Architecture)',
    summary:
      'Engineered an ultra-fast React casino hub featuring SSR/pre-rendering for instant load times, dynamic SEO optimization, and seamless user authentication.',
    tech: ['React', 'TypeScript', 'SEO', 'Auth', 'TailwindCSS', 'SCSS', 'REST/WebSockets'],
  },
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
  {
    id: 'docstream-ai',
    title: 'DocStream AI — Edge Streaming & Document Workspace',
    category: 'AI & Edge Architecture',
    summary:
      'Real-time LLM token streaming and collaborative Markdown workspace powered by a zero-buffer Cloudflare Pages SSE proxy, upstream AbortController cancellation, dual-layer rate limiting, and local-first IndexedDB persistence.',
    tech: ['React 18', 'TypeScript', 'Cloudflare Pages Functions', 'SSE / ReadableStream', 'Dexie (IndexedDB)', 'Zustand', 'Tailwind CSS v4'],
    demoUrl: 'https://ai-doc-workspace.pages.dev/',
  },
  {
    id: 'finpulse-analytics',
    title: 'FinPulse — Interactive SaaS & Finance Analytics Dashboard',
    category: 'High-Density Data Engineering',
    summary:
      'Zero-backend SaaS & finance analytics dashboard engineered for sub-60fps client-side performance across 5,000+ virtualized rows, deterministic seeded state, URL-synced deep-link filters, and integer-cent financial math.',
    tech: ['React', 'TypeScript', 'TanStack Table', 'TanStack Virtual', 'nuqs', 'Cloudflare Workers'],
    demoUrl: 'https://finpulse-analytics.oshila123.workers.dev/',
  },
  {
    id: 'novacart-storefront',
    title: 'NovaCart — E-Commerce Storefront & Checkout Wizard',
    category: 'Frontend Architecture',
    summary:
      'E-commerce storefront featuring Zod-validated URL-synced catalog filters, optimistic persisted inventory tracking, a 3-step Luhn-validated checkout wizard, and Firebase Firestore persistence with localStorage fallback.',
    tech: ['React 19', 'TypeScript', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Firebase Firestore', 'Tailwind CSS v4'],
    demoUrl: 'https://storefront-demo.oshila123.workers.dev/',
  },
  {
    id: 'oshila-movie-demo',
    title: 'Oshila Movie Explorer (Demo Self Project)',
    category: 'Personal Project',
    summary:
      'Interactive movie discovery and browsing web application hosted on Firebase, showcasing responsive UI design and modern frontend architecture.',
    tech: ['React', 'JavaScript', 'Firebase Hosting', 'SCSS'],
    demoUrl: 'https://oshila-movie.web.app/',
  },
  {
    id: 'medcore-healthcare-platform',
    title: 'MedCore — Multi-Role Healthcare & Channeling Management System',
    category: 'Personal Project',
    summary:
      'Enterprise healthcare and patient channeling management platform featuring granular role-based access control (RBAC) across 9 clinical and operational roles (Owner, Admin, Doctor, Nurse, Patient, Hospital Partner, Diagnostic Report Center, Accounts, HR, and Audit), strict Firestore security rules, NIC-linked patient records, diagnostic reporting, and real-time channeling schedules.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase Authentication',
      'Cloud Firestore',
      'Cloudflare Workers',
    ],
    demoUrl: 'https://medcore-ozi.oshila123.workers.dev/',
  },
];

export const techCategories = [
  {
    title: 'Core Languages & Styling',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
  },
  {
    title: 'Frontend Frameworks',
    items: ['React', 'Angular', 'Next.js', 'Astro'],
  },
  {
    title: 'Mobile, State & Data',
    items: ['React Native', 'Zustand', 'Redux', 'NgRx', 'RxJS', 'TanStack Query / Table', 'IndexedDB (Dexie)', 'Zod'],
  },
  {
    title: 'Edge, Auth & DevOps',
    items: ['Cloudflare Workers / Pages', 'Keycloak', 'Azure B2C', 'Firebase', 'Docker', 'DataDog', 'Git'],
  },
];