import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  joaquin,
  integrando,
  postgres,
  bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "education",
    title: "Educación",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Ingeniero Industrial",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Seguridad Ofensiva",
    icon: backend,
  },
  {
    title: "Diseño 3D CAD/CAM",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desarrollador FullStack & Diseñador Industrial",
    company_name: "Joaquin Palacin",
    icon: joaquin,
    iconBg: "#E6DEDD",
    date: "Julio 2023 - Actualmente",
    points: [
      "Desarrollador de soluciones fullstack como la aplicación de fichajes y ERP / SAAS para gestión de proyectos, eliminando la dependencia de software externo y ahorrando más de 800€ anuales en licencias.",
      "Manejo de software de diseño 3D CAD y CAM para la fabricación del primer decanter para aceite de oliva fabricado en España.",
    ],
  },
  {
    title: "Full Stack Developer (Medio Tiempo)",
    company_name: "Informática del futuro",
    icon: joaquin,
    iconBg: "#383E56",
    date: "Enero 2024 - Enero 2026",
    points: [
      "Proyecto Principal: Agrobita - Plataforma SaaS para gestión agrícola con +1500 usuarios registrados.",
      "Implementación de mapas interactivos con Leaflet, integración con APIs gubernamentales (SIGPAC, REA) y sistema robusto de roles y gestión documental.",
    ],
  },
];

const educations = [
  {
    title: "Certified in Cybersecurity (CC)",
    institution: "ISC2 Candidate | En curso",
    icon: threejs,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Formación activa en Conceptos de Seguridad, Redes, Operaciones, Incident Response e IAM.",
    ],
  },
  {
    title: "Seguridad Ofensiva & Hacking Web",
    institution: "Hack4u (S4vitar)",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Especialización en Hardening de Linux, Bash Scripting y Python ofensivo aplicado a sistemas industriales.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    institution: "800 horas - Teórico-Práctico",
    icon: html,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Formación intensiva en el ecosistema JavaScript moderno y despliegue de soluciones escalables.",
    ],
  },
  {
    title: "Ingeniería Técnica Industrial",
    institution: "Universidad Tecnológica de Pereira",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Formación especializada en procesos industriales, diseño mecánico y gestión de proyectos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Su capacidad para entender procesos industriales complejos y traducirlos a software eficiente es asombrosa.",
    name: "Joaquín Palacín",
    designation: "CEO",
    company: "Joaquin Palacin S.L.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    id: "agrobita",
    name: "Agrobita",
    description:
      "Digitalización del campo con +1500 usuarios. Solución integral que cumple normativas europeas mediante integración con APIs oficiales.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Leaflet", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: "/proyectos/agrobita/1.jpeg",
    images: [
      "/proyectos/agrobita/1.jpeg",
      "/proyectos/agrobita/2.jpeg",
      "/proyectos/agrobita/3.jpeg",
      "/proyectos/agrobita/4.jpeg",
      "/proyectos/agrobita/5.jpeg",
      "/proyectos/agrobita/6.jpeg",
      "/proyectos/agrobita/7.jpeg",
      "/proyectos/agrobita/8.jpeg",
      "/proyectos/agrobita/9.png",
      "/proyectos/agrobita/10.jpeg",
      "/proyectos/agrobita/11.jpeg",
      "/proyectos/agrobita/12.jpeg",
      "/proyectos/agrobita/13.jpeg",
    ],
    source_code_link: null,
    source_link: "https://agrobita.es/",
    details: {
      problem: "Cumplimiento de la normativa de cuaderno de campo digital para miles de agricultores con necesidad de centralización de datos.",
      solution: "Plataforma con gestión de parcelas por mapas interactivos, integración total con SIGPAC, REA, ROMA y sistema de roles avanzado.",
      challenges: "Garantizar la soberanía del dato y escalabilidad para una infraestructura con alta concurrencia de usuarios.",
      stack: "React, Laravel, Inertia, Zustand, Leaflet JS, MySQL, Tailwind.",
    }
  },
  {
    id: "gantt-kanban-app",
    name: "ERP Producción Gantt + Kanban",
    description:
      "Ahorro de +500€/año. Algoritmos BFS para propagación en cascada y sincronización total en red local offline.",
    tags: [
      { name: "NextJS 15", color: "blue-text-gradient" },
      { name: "Prisma", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "Postgres", color: "orange-text-gradient" },
    ],
    image: "/proyectos/Gantt_kanban_app/1.jpg",
    images: [
      "/proyectos/Gantt_kanban_app/5.jpeg",
      "/proyectos/Gantt_kanban_app/1.jpg",
      "/proyectos/Gantt_kanban_app/2.jpg",
      "/proyectos/Gantt_kanban_app/3.jpg",
      "/proyectos/Gantt_kanban_app/4.jpg",
      "/proyectos/Gantt_kanban_app/6.jpeg",
    ],
    source_code_link: "https://github.com/criss717/SAAS-Joaquin-palacin",
    source_link: null,
    details: {
      problem: "Planificación ineficiente que ignoraba calendarios laborales reales y dependencia de software externo costoso.",
      solution: "Motor de tiempos inteligente y sincronización Kanban-Gantt real. Ahorro de +500€ anuales y total privacidad de datos.",
      challenges: "Lógica de negocio compleja para cálculos de entrega real descontando festivos y vacaciones.",
      stack: "Next 15, React 19, Docker, Prisma, PostgreSQL.",
    }
  },
  {
    id: "home-lab",
    name: "Home Lab: Nube Privada & Seguridad",
    description:
      "Arquitectura Zero Trust sobre Proxmox VE. Gestión soberana de datos con VPN Wireguard y filtrado DNS Pi-hole.",
    tags: [
      { name: "Proxmox", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "Wireguard", color: "pink-text-gradient" },
      { name: "Linux", color: "orange-text-gradient" },
    ],
    image: "/proyectos/HomeLab/1.jpeg",
    images: [
      "/proyectos/HomeLab/1.jpeg",
      "/proyectos/HomeLab/2.jpeg",
      "/proyectos/HomeLab/3.jpeg",
      "/proyectos/HomeLab/4.jpeg",
    ],
    source_code_link: null,
    source_link: null,
    details: {
      problem: "Dependencia de proveedores SaaS externos y falta de soberanía sobre los datos personales y profesionales.",
      solution: "Despliegue de un cluster Proxmox gestionando Nextcloud e Immich bajo arquitectura Zero Trust con SSL automatizado.",
      challenges: "Configuración de seguridad perimetral resiliente y automatización de backups en red local segura.",
      stack: "Proxmox VE, LXC, Docker, Nginx Proxy Manager, Pi-hole, Wireguard.",
    }
  },
  {
    id: "fichaje-palacin",
    name: "Fichaje Empleados App",
    description:
      "Ahorro de 350€/año. APP móvil y Web para el control horario legal con dashboard administrativo en tiempo real.",
    isVertical: true,
    tags: [
      { name: "ReactNative", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "ExcelJS", color: "pink-text-gradient" },
    ],
    image: "/proyectos/fichaje_palacin/1.jpeg",
    images: [
      "/proyectos/fichaje_palacin/1.jpeg",
      "/proyectos/fichaje_palacin/2.png",
      "/proyectos/fichaje_palacin/3.jpeg",
    ],
    source_code_link: "https://github.com/criss717/fichaje_palacin",
    source_link: "https://fichaje-palacin.vercel.app/",
    details: {
      problem: "Necesidad de cumplir con la ley de fichaje de forma económica y segura frente a soluciones externas costosas.",
      solution: "App nativa con descarga de informes Excel y gestión de empleados. Ahorro de 350€ anuales para la empresa.",
      challenges: "Asegurar la integridad de los registros horarios cumpliendo con la normativa de privacidad europea.",
      stack: "React Native (APK Android + Web), Supabase.",
    }
  },
  {
    id: "documentos-pantallas",
    name: "Documentos Pantallas",
    description:
      "Sistema de automatización para la generación masiva de documentación técnica (Word/PDF) integrando datos dinámicos de Google Sheets.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "GoogleAPI", color: "orange-text-gradient" },
    ],
    image: "/proyectos/documentos_pantallas/1.jpeg",
    images: ["/proyectos/documentos_pantallas/1.jpeg"],
    source_code_link: null,
    source_link: "https://pantallas-app.vercel.app/",
    details: {
      problem: "La generación manual de informes para cientos de colegios consumía cientos de horas hombre y era propensa a errores.",
      solution: "Herramienta web que consume datos de Google Sheets y los inyecta en plantillas predefinidas.",
      challenges: "Manipulación de flujos de archivos .docx y su conversión fiel a PDF.",
      stack: "React, Tailwind, Node.js, Express.",
    }
  },
  {
    id: "etiquetas-ia",
    name: "Etiquetas IA",
    description:
      "Generación de etiquetas imprimibles mediante IA con soporte para formatos A4 y descarga en ZIP.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Gemini", color: "green-text-gradient" },
      { name: "AI-SDK", color: "pink-text-gradient" },
    ],
    image: "/proyectos/etiquetas/1.jpeg",
    images: [
      "/proyectos/etiquetas/1.jpeg",
      "/proyectos/etiquetas/2.jpeg",
    ],
    source_code_link: "https://github.com/criss717/Etiquetas-automatizadas",
    source_link: "https://etiquetas-automatizadas.vercel.app/",
    details: {
      problem: "El diseño de etiquetas personalizadas era un cuello de botella creativo y técnico.",
      solution: "Generador automático con Google Gemini para crear diseños listos para imprimir.",
      challenges: "Montaje dinámico de imágenes en el cliente para descarga en alta resolución.",
      stack: "Next.js, Tailwind, AI SDK Vercel.",
    }
  },
  {
    id: "alquimara-web",
    name: "Alquimara Web",
    description:
      "E-commerce premium con pasarela Stripe y agente IA especializado en asesoría personalizada.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Stripe", color: "green-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
    ],
    image: "/proyectos/alquimara_web/1.jpeg",
    images: [
      "/proyectos/alquimara_web/1.jpeg",
      "/proyectos/alquimara_web/2.jpeg",
      "/proyectos/alquimara_web/3.jpeg",
      "/proyectos/alquimara_web/4.jpeg",
      "/proyectos/alquimara_web/5.jpeg",
      "/proyectos/alquimara_web/6.jpeg",
      "/proyectos/alquimara_web/7.jpeg",
    ],
    source_code_link: "https://github.com/criss717/alquimara-web",
    source_link: null,
    details: {
      problem: "Necesidad de una experiencia de venta profunda y personalizada antes de agendar servicios premium.",
      solution: "Plataforma integral con chatbot IA que guía al usuario hacia la compra basada en sus necesidades.",
      challenges: "Entrenamiento del agente IA y flujo de pagos seguro con Stripe.",
      stack: "Next.js, TypeScript, Tailwind, Stripe, Supabase.",
    }
  },
];

export const CV_URL = "/cv/CV_Cristian_Guzman_.pdf";

export { services, technologies, experiences, educations, testimonials, projects };
