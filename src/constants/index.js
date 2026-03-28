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
  prueba,
  solid,
  react,
  postgres,
  bootstrap,
  joaquin,
  integrando,
  geekhub,
  countries,
  agrobita,
  webs
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
    id: "work",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Industrial Designer",
    icon: solid,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Diseñador Industrial & Desarrollador FullStack (Media jornada)",
    company_name: "Joaquin Palacin",
    icon: joaquin,
    iconBg: "#E6DEDD",
    date: "Julio 2023 - Actualmente",
    points: [
      "Desarrollador de soluciones fullstack como la aplicación de fichajes de empleados y el desarrollo de una aplicación ERP / SAAS para la gestión de proyectos.",
      "Manejo de software de diseño 3D CAD y CAM para la fabricación del primer decanter para aceite de oliva fabricado en España.",
    ],
  },
  {
    title: "Desarrollador Full Stack (Media jornada)",
    company_name: "Informática del futuro",
    icon: joaquin,
    iconBg: "#383E56",
    date: "Enero 2024 - Enero 2026",
    points: [
      "Desarrollo de aplicaciones web orientadas a producto y diseño de interfaces de usuario.",
      "Encargado del mantenimiento de sistemas y proyectos de informática general para clientes.",
    ],
  },
  {
    title: "Diseñador Industrial",
    company_name: "Integrando",
    icon: integrando,
    iconBg: "#E6DEDD",
    date: "Ago 2021 - Julio 2023",
    points: [
      "Manejo avanzado de software CAD/CAM para optimizar procesos de fabricación.",
      "Mejorar el rendimiento de procesos y reducir costes de materia prima implementando cálculos detallados de escandallo.",
    ],
  },
];

const educations = [
  {
    title: "Full Stack Web Developer",
    institution: "800 horas - Teórico-Práctico",
    icon: html,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Formación intensiva en el ecosistema JavaScript moderno (React, Node.js, Express, Bases de datos).",
      "Desarrollo de múltiples proyectos reales aplicando metodologías ágiles.",
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
      "Tesis de grado: Programa de simulación en Matlab de la mecánica de tracción del automóvil."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: "agrobita",
    name: "Agrobita",
    description:
      "De un problema real a una solución de alto impacto: Digitalizando el campo. Plataforma SaaS líder para la gestión digital de explotaciones agrícolas con más de 1.500 usuarios.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Inertia", color: "pink-text-gradient" },
      { name: "Leaflet", color: "orange-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
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
    source_code_link: null, // Proyecto privado
    source_link: "https://agrobita.es/",
    details: {
      problem: "La normativa europea está acelerando la obligatoriedad del cuaderno de campo digital. Para miles de agricultores, esto no es solo un cambio de hábito, es un reto técnico de centralización y cumplimiento.",
      solution: "Desarrollamos una plataforma SaaS para transformar este proceso con más de 1.500 usuarios registrados, gestión de parcelas mediante mapas interactivos e integración total con APIs oficiales (SIGPAC, REA, ROMA, RETO, ROPO).",
      challenges: "Lo más complejo no fue solo la visualización de datos geográficos, sino garantizar la fiabilidad y seguridad de la información al sincronizar con fuentes externas. Este proyecto reafirmó que el software real exige una arquitectura escalable y segura, orientando mi perfil hacia DevSecOps / AppSec.",
      stack: "Frontend: React + Zustand + Tailwind. Backend: Laravel + Inertia + MySQL. Infra: Cloudinary y APIs gubernamentales.",
    }
  },
  {
    id: "fichaje-palacin",
    name: "Fichaje Palacin",
    description:
      "¿Control horario o dolor de cabeza? Automatizando el registro de jornada. Solución personalizada para digitalizar el flujo de fichaje legal.",
    isVertical: true,
    tags: [
      { name: "ReactNative", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "ExcelJS", color: "orange-text-gradient" },
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
      problem: "El registro de jornada laboral es una obligación legal, pero para muchas empresas sigue siendo un proceso manual propenso a errores y difícil de auditar.",
      solution: "Fichaje en un clic con interfaz intuitiva, panel administrativo centralizado para revisión de horas/incidencias y diseño mobile-first adaptado a empleados en movilidad.",
      challenges: "Asegurar la integridad y validez legal de los datos mediante validaciones estrictas en el backend y autenticación robusta, alineado con mi enfoque en Ciberseguridad y AppSec.",
      stack: "Frontend: React Native + Tailwind CSS (NativeWind). Backend & DB: Supabase (JWT + RLS).",
    }
  },
  {
    id: "documentos-pantallas",
    name: "Documentos Pantallas",
    description:
      "Sistema de automatización para la generación masiva de documentación técnica (Word/PDF) integrando datos dinámicos de Google Sheets para centros educativos.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "GoogleAPI", color: "orange-text-gradient" },
    ],
    image: "/proyectos/documentos_pantallas/1.jpeg",
    images: ["/proyectos/documentos_pantallas/1.jpeg"],
    source_code_link: null, // Proyecto privado
    source_link: "https://pantallas-app.vercel.app/",
    details: {
      problem: "La generación manual de informes para cientos de colegios consumía cientos de horas hombre y era propensa a errores de transcripción.",
      solution: "Una herramienta web que consume datos de hojas de cálculo y los inyecta en plantillas predefinidas para generar documentos listos para su uso legal y administrativo.",
      challenges: "Manipulación de flujos de archivos .docx y su conversión fiel a PDF manteniendo estilos corporativos complejos.",
      stack: "React, Tailwind, Node.js, Express, Puppeteer/Docxtemplater.",
    }
  },
  {
    id: "alquimara-web",
    name: "Alquimara Web",
    description:
      "E-commerce completo premium con carrito de compras, pasarela de pago Stripe integrada y agente de IA entrenado en psicología astrológica para brindar asesoría personalizada.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "Stripe", color: "pink-text-gradient" },
      { name: "AI-SDK", color: "orange-text-gradient" },
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
      problem: "Necesidad de conectar con usuarios a través de una experiencia profunda y personalizada antes de agendar servicios terapéuticos premium y vender productos exclusivos.",
      solution: "Plataforma integral de venta de artículos con carrito de compras y pagos seguros mediante Stripe. Incluye un chatbot IA que analiza cartas astrales para fidelizar y guiar al usuario hacia la compra y agendamiento.",
      challenges: "Entrenamiento del agente IA con un framework de conocimiento específico y asegurar una transición fluida al proceso de venta y agendamiento.",
      stack: "Next.js 14, TypeScript, Tailwind, Stripe, Vercel AI SDK, Supabase.",
    }
  },
  {
    id: "etiquetas-ia",
    name: "Etiquetas IA",
    description:
      "Aplicación innovadora para una tienda de jabones que utiliza IA para generar diseños de etiquetas imprimibles en formato A4 y ZIP.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "Gemini", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "Automation", color: "orange-text-gradient" },
    ],
    image: "/proyectos/etiquetas/1.jpeg",
    images: [
      "/proyectos/etiquetas/1.jpeg",
      "/proyectos/etiquetas/2.jpeg",
    ],
    source_code_link: "https://github.com/criss717/Etiquetas-automatizadas",
    source_link: "https://etiquetas-automatizadas.vercel.app/",
    details: {
      problem: "El diseño de etiquetas personalizadas para pequeños lotes de productos era un cuello de botella creativo y técnico.",
      solution: "Generador automático que interactúa con Google Gemini para crear descripciones y diseños que luego se montan automáticamente en un lienzo A4 listo para imprimir.",
      challenges: "Montaje dinámico de imágenes en el cliente para descarga en alta resolución.",
      stack: "Next.js, Tailwind, AI SDK Vercel (Google Gemini).",
    }
  },
];

export const CV_URL = "/cv/CV-Cristian Guzmán -.pdf";

export { services, technologies, experiences, educations, testimonials, projects };
