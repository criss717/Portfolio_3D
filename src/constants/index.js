import {
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  docker,
  postgres,
  python,
  aws,
  githubactions,
  solidworks,
  mastercam,
  joaquin,
  integrando,
} from "../assets";

export const navLinks = [
  { id: "projects", title: "Proyectos" },
  { id: "experience", title: "Experiencia" },
  { id: "education", title: "Estudios" },
  { id: "about", title: "Sobre mí" },
  { id: "contact", title: "Contacto" },
];

const services = [
  {
    title: "Desarrollo de Software (Industrial)",
    icon: reactjs,
    description: "Aplicaciones a medida: ERP, SaaS, web, móvil y escritorio.",
  },
  {
    title: "Integración de IA (LLMs & Vision)",
    icon: python,
    description:
      "Modelos de lenguaje y visión aplicados a procesos industriales.",
  },
  {
    title: "Automatización de Procesos",
    icon: docker,
    description:
      "Pipelines que eliminan la entrada manual de datos en la planta.",
  },
  {
    title: "CAD/CAM",
    icon: solidworks,
    description:
      "Diseño de maquinaria, estructura y chapa metálica, programación CNC.",
  },
];

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "TypeScript", icon: typescript },
  { name: "Python", icon: python },
  { name: "AWS", icon: aws },
  { name: "CI/CD", icon: githubactions },
  { name: "Docker", icon: docker },
  { name: "PostgreSQL", icon: postgres },
  { name: "SolidWorks", icon: solidworks },
  { name: "Mastercam", icon: mastercam },
];

const experiences = [
  {
    title: "Diseñador Industrial & Desarrollador FullStack",
    company_name: "Joaquin Palacin (Úbeda – Jaén)",
    icon: joaquin,
    iconBg: "#ffffff",
    date: "Jul 2023 - Actualidad",
    points: [
      "Modelado 3D CAD/CAM para maquinaria industrial, logrando el diseño y fabricación del primer decanter de aceite de oliva en España.",
      "Diseño y desarrollo de un ERP/SAAS a medida para la gestión de la producción, integrando la lógica del taller mecánico y eliminando dependencias externas.",
      "Implementación de sistema de fichaje legal europeo con geolocalización y panel administrativo.",
      "Desarrollo de un pipeline de automatización en Python (OCR + NLP con embeddings) para digitalizar la entrada de albaranes de proveedores mecánicos directamente en el sistema de gestión ERP, reduciendo errores de inventario.",
    ],
  },
  {
    title: "Full Stack Developer (Media jornada)",
    company_name: "Informática del Futuro (Úbeda – Jaén)",
    icon: reactjs,
    iconBg: "#ffffff",
    date: "Ene 2024 - Ene 2026",
    points: [
      "Proyecto principal: Agrobita - Gestión Agrícola (+1500 usuarios registrados): desarrollo integral (React/Laravel) y despliegue de plataforma SaaS para gestión de explotaciones.",
      "Integración de mapas interactivos con Leaflet y conexión con APIs gubernamentales (SIGPAC, REA, RETO).",
      "Arquitectura de seguridad con sistema de roles y gestión documental robusta.",
    ],
  },
  {
    title: "Diseñador Industrial",
    company_name: "Integrando Cassarella (Pereira)",
    icon: integrando,
    iconBg: "#ffffff",
    date: "Dic 2021 - Ene 2023",
    points: [
      "Modelado 3D CAD (SolidWorks) para maquinaria industrial, troqueles y partes de motocicletas.",
      "Realización de planimetría industrial cumpliendo con las normas ISO.",
    ],
  },
  {
    title: "Diseñador Industrial",
    company_name: "Joaquin Palacin (Úbeda – Jaén)",
    icon: joaquin,
    iconBg: "#ffffff",
    date: "Dic 2019 - Jul 2021",
    points: [
      "Modelado 3D CAD (SolidWorks) para maquinaria industrial, estructura y chapa metálica y tubería.",
    ],
  },
];

const educations = [
  {
    title: "Python Avanzado, Linux & Hacking Web",
    institution: "Hack4u (S4vitar) | Formación intensiva",
    icon: python,
    iconBg: "#ffffff",
    date: "Ene - Ago 2026",
    points: [
      "Especialización en Python avanzado, hardening de Linux y Python ofensivo aplicado a sistemas industriales.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    institution: "Bootcamp Teórico-Práctico",
    icon: reactjs,
    iconBg: "#ffffff",
    date: "2023",
    points: [
      "Formación intensiva en el ecosistema JavaScript/TypeScript, arquitecturas cloud y despliegue de soluciones escalables.",
    ],
  },
  {
    title: "Técnico en Mecanizado de Productos Metalmecánicos",
    institution: "SENA",
    icon: mastercam,
    iconBg: "#ffffff",
    date: "2014",
    points: [
      "Formación en mecanizado con torno CNC y convencional, centro de mecanizado y fresadoras CNC.",
    ],
  },
  {
    title: "Tecnología Mecánica Industrial (Diseño Industrial)",
    institution: "Universidad Tecnológica de Pereira",
    icon: creator,
    iconBg: "#ffffff",
    date: "2013",
    points: [
      "Formación de 3 años en diseño de máquinas, dibujo técnico, termodinámica, estática, dinámica, física, matemáticas y ciencia e ingeniería de materiales.",
      "Bases sólidas en procesos de manufactura, CAD/CAM y diseño paramétrico tridimensional.",
    ],
  },
];

const projects = [
  {
    id: "text-to-cad",
    name: "Text/Image to CAD (IA)",
    description:
      "Aplicación Full-Stack (Next.js + Python) que convierte imágenes o descripciones de texto en modelos 3D paramétricos industriales.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NextJS 15", color: "green-text-gradient" },
      { name: "Gemini 3.1 Pro", color: "pink-text-gradient" },
      { name: "build123d", color: "orange-text-gradient" },
    ],
    image: "/proyectos/TextToCad/1.jpg",
    images: [
      "/proyectos/TextToCad/1.jpg",
      "/proyectos/TextToCad/2.jpg",
      "/proyectos/TextToCad/3.jpg",
      "/proyectos/TextToCad/4.jpg",
      "/proyectos/TextToCad/5.jpg",
      "/proyectos/TextToCad/6.jpg",
      "/proyectos/TextToCad/7.jpg",
      "/proyectos/TextToCad/8.jpg",
    ],
    source_code_link: null,
    source_link: null,
    details: {
      problem:
        "El alto coste temporal del modelado desde cero en software CAD convencional y el consumo excesivo de tokens al usar IA generativa en producción.",
      solution:
        "Arquitectura híbrida: Gemini procesa el razonamiento espacial (visión/cotas) y OpenCode GO/ZEN genera el código CAD en Python, logrando equilibrio coste/precisión.",
      challenges:
        "Mitigar las limitaciones espaciales de los LLMs para interpretar superficies curvas o complejas en los 3 ejes (X,Y,Z).",
      stack: "Next.js, Python, build123d, Gemini API, OpenCode, Tailwind.",
    },
  },
  {
    id: "bot-classicges",
    name: "ERP Auto-Data Bot",
    description:
      "Bot inteligente en Python que automatiza la entrada de albaranes al ERP ClassicGes usando IA OCR y embeddings semánticos.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Gemini / OCR", color: "green-text-gradient" },
      { name: "RapidFuzz", color: "pink-text-gradient" },
      { name: "ClassicGes", color: "orange-text-gradient" },
    ],
    image: "/proyectos/Bot_Telegram/1.jpg",
    images: [
      "/proyectos/Bot_Telegram/1.jpg",
      "/proyectos/Bot_Telegram/2.jpg",
      "/proyectos/Bot_Telegram/3.jpg",
      "/proyectos/Bot_Telegram/4.jpg",
    ],
    source_code_link: null,
    source_link: null,
    details: {
      problem:
        "Horas perdidas introduciendo a mano los datos de todos los albaranes de proveedores en el ERP ClassicGes: errores de escritura constantes, mal manejo al recibir pedidos y un proceso lento que frenaba toda la gestión de compras.",
      solution:
        "Un flujo por Telegram: el usuario envía la foto, el sistema extrae los datos vía IA, cruza artículos por lógica difusa (embeddings/rapidfuzz) y actualiza el ERP directamente.",
      challenges:
        "Múltiples formatos de proveedores y complejas conversiones de unidades industriales (ej. kilos a metros según densidades).",
      stack: "Python, Telegram API, Gemini OCR, RapidFuzz, SQL.",
    },
  },
  {
    id: "gantt-kanban-app",
    name: "ERP Producción Gantt + Kanban",
    description:
      "Sistema de planificación industrial con algoritmos BFS para propagación en cascada y sincronización total en red local offline.",
    tags: [
      { name: "NextJS 15", color: "blue-text-gradient" },
      { name: "Prisma", color: "green-text-gradient" },
      { name: "Docker / CI-CD", color: "pink-text-gradient" },
      { name: "Postgres", color: "orange-text-gradient" },
    ],
    image: "/proyectos/Gantt_kanban_app/1.jpg",
    images: [
      "/proyectos/Gantt_kanban_app/1.jpg",
      "/proyectos/Gantt_kanban_app/2.jpg",
      "/proyectos/Gantt_kanban_app/3.jpg",
      "/proyectos/Gantt_kanban_app/4.jpg",
      "/proyectos/Gantt_kanban_app/5.jpeg",
      "/proyectos/Gantt_kanban_app/6.jpeg",
    ],
    source_code_link: "https://github.com/criss717/SAAS-Joaquin-palacin",
    source_link: null,
    details: {
      problem:
        "Planificación ineficiente que ignoraba calendarios laborales reales y dependencia de software externo costoso.",
      solution:
        "Motor de tiempos inteligente y sincronización Kanban-Gantt real, desplegado con CI/CD mediante GitHub Actions.",
      challenges:
        "Lógica de negocio compleja para cálculos de entrega real descontando festivos y vacaciones.",
      stack: "Next 15, React 19, Docker, Prisma, PostgreSQL, GitHub Actions.",
    },
  },
  {
    id: "agrobita",
    name: "Agrobita SaaS",
    description:
      "Digitalización del campo con +1500 usuarios. Solución integral que cumple normativas europeas mediante integración con APIs oficiales.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Inertia", color: "pink-text-gradient" },
      { name: "Zustand", color: "orange-text-gradient" },
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
      problem:
        "Cumplimiento de la normativa de cuaderno de campo digital para miles de agricultores.",
      solution:
        "Plataforma con gestión de parcelas por mapas interactivos, integración total con SIGPAC, REA, ROMA.",
      challenges:
        "Garantizar la soberanía de los datos y escalabilidad para una infraestructura con alta concurrencia de usuarios.",
      stack: "React, Laravel, Inertia, Zustand, Leaflet JS, MySQL.",
    },
  },
  {
    id: "home-lab",
    name: "Home Lab: Nube Privada & Seguridad",
    description:
      "Arquitectura Zero Trust sobre Proxmox VE. Gestión soberana de datos con VPN Wireguard y filtrado DNS Pi-hole.",
    tags: [
      { name: "Proxmox", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "Nginx PM", color: "pink-text-gradient" },
      { name: "Pi-hole", color: "orange-text-gradient" },
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
      problem:
        "Dependencia de proveedores SaaS externos y falta de soberanía sobre los datos personales y profesionales.",
      solution:
        "Despliegue de un cluster Proxmox gestionando Nextcloud e Immich bajo arquitectura Zero Trust con SSL automatizado.",
      challenges:
        "Configuración de seguridad perimetral resiliente y automatización de backups en red local segura.",
      stack:
        "Proxmox VE, LXC, Docker, Nginx Proxy Manager, Pi-hole, Wireguard.",
    },
  },
  {
    id: "fichaje-palacin",
    name: "Fichaje Empleados App",
    description:
      "APP móvil y Web para el control horario legal con geolocalización, dashboard administrativo en tiempo real y descarga de informes Excel.",
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
      problem:
        "Necesidad de cumplir con la ley de fichaje de forma económica y segura frente a soluciones externas costosas.",
      solution:
        "App nativa con descarga de informes Excel, geolocalización y gestión de empleados.",
      challenges:
        "Asegurar la integridad de los registros horarios cumpliendo con la normativa de privacidad europea.",
      stack: "React Native (APK Android + Web), Supabase.",
    },
  },
];

export const CV_URL = "/cv/CV_Cristian_Guzman_01.pdf";
export const GITHUB_URL = "https://github.com/criss717";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/cristian-guzman-bb5867233/";

export { services, technologies, experiences, educations, projects };
