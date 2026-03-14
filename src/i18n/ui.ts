export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for Projects',
      title: 'Product Designer &',
      gradientText: 'Tech Strategist',
      description: 'Fusing avant-garde aesthetics with technical functionality to create high-impact digital experiences.',
      startProject: 'Start a project',
    },
    about: {
      title: 'About Me',
      description: 'Specialized in transforming <span class="font-bold">complex infrastructures</span> into intuitive interfaces. My approach combines user-centered design with a solid <span class="italic">strategic vision</span> of product.',
    },
    projects: {
      title: 'Selected Works',
      subtitle: 'Featured case studies',
      viewAll: 'View All',
      viewProject: 'View Project',
    },
    techStack: {
      title: 'Tech Curated Stack',
      categories: {
        design: {
          title: 'Design',
          items: 'Figma, Framer, Adobe CC, Prototyping.',
        },
        frontend: {
          title: 'Frontend',
          items: 'React, Tailwind, Next.js, Typescript.',
        },
        stack: {
          title: 'Stack',
          items: 'PostgreSQL, Supabase, Node.js, API Design.',
        },
        product: {
          title: 'Product',
          items: 'Agile, SCRUM, Notion, Linear, Strategy.',
        },
      },
    },
    cta: {
      title: 'Ready to scale?',
      description: "Let's work together to take your product to the next level with world-class design.",
      letsTalk: "Let's talk",
    },
    experience: {
      title: 'Experience',
      present: 'Present',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
    },
    hero: {
      available: 'Disponible para Proyectos',
      title: 'Diseñadora de Producto &',
      gradientText: 'Estratega Tecnológica',
      description: 'Fusionando estética vanguardista con funcionalidad técnica para crear experiencias digitales de alto impacto.',
      startProject: 'Iniciar proyecto',
    },
    about: {
      title: 'Sobre mí',
      description: 'Especializada en transformar <span class="font-bold">infraestructuras complejas</span> en interfaces intuitivas. Mi enfoque combina el diseño centrado en el usuario con una sólida <span class="italic">visión estratégica</span> de producto.',
    },
    projects: {
      title: 'Trabajos Seleccionados',
      subtitle: 'Casos de estudio destacados',
      viewAll: 'Ver Todos',
      viewProject: 'Ver Proyecto',
    },
    techStack: {
      title: 'Stack Tecnológico Curado',
      categories: {
        design: {
          title: 'Diseño',
          items: 'Figma, Framer, Adobe CC, Prototipado.',
        },
        frontend: {
          title: 'Frontend',
          items: 'React, Tailwind, Next.js, Typescript.',
        },
        stack: {
          title: 'Stack',
          items: 'PostgreSQL, Supabase, Node.js, Diseño API.',
        },
        product: {
          title: 'Producto',
          items: 'Agile, SCRUM, Notion, Linear, Estrategia.',
        },
      },
    },
    cta: {
      title: '¿Listo para escalar?',
      description: 'Trabajemos juntos para llevar tu producto al siguiente nivel con diseño de clase mundial.',
      letsTalk: 'Hablemos',
    },
    experience: {
      title: 'Experiencia',
      present: 'Actualidad',
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
