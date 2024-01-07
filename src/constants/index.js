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
    webs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
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
      title: "Industrial designer",
      company_name: "Joaquin Palacin",
      icon: joaquin,
      iconBg: "#E6DEDD",
      date: "Jul 2023- Actual",
      points: [
        "Manejo de software de diseño 3D..",
        "Mejorar escandallo de productos, obteniendo datos más precisos sobre los costos de los procesos y/ o productos.",
        "Entrega de proyectos industriales y acompañamiento desde el diseño, su fabricación y la entrega al cliente.",      
      ],
    }, 
    {
      title: "Industrial designer",
      company_name: "Integrando",
      icon: integrando,
      iconBg: "#383E56",
      date: "Ago 2021 - July 2023",
      points: [
        "Manejo de software de diseño 3D.",
        "Mejorar el rendimiento de procesos.",
        "Reducir costes de materia prima con la implementación de cálculos detallados.",      
      ],
    },
    {
      title: "Industrial designer",
      company_name: "Joaquin Palacin",
      icon: joaquin,
      iconBg: "#E6DEDD",
      date: "Dec 2019 - Jul 2021",
      points: [
        "Manejo de software de diseño 3D..",
        "Mejorar escandallo de productos, obteniendo datos más precisos sobre los costos de los procesos y/ o productos.",
        "Entrega de proyectos industriales y acompañamiento desde el diseño, su fabricación y la entrega al cliente.",      
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
      name: "G3ekHub Shop",
      description:
        "E-commerce de productos geek, con autenticación por google, pasarela de pago, carrito de compras, generacion de facturas, comentarios a productos y panel de administrador.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name:"node_js",
          color:"green-text-gradient"
        },        
      ],
      image: geekhub,
      source_code_link: "https://github.com/Guardianes-de-la-Tukineta",
      source_link:"https://ge3k-client-team.vercel.app/"
    },
    {
      name: "Countries App",
      description:
        "App de países donde podrás buscar información relevante de cualquier país, ver su detalle, filtrar, ordenar y agregar actividades turísticas, posee su propia base de datos y backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node_js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
      ],
      image: countries,
      source_code_link: "https://github.com/criss717/PI_COUNTRIES",
      source_link:"https://pi-countries-topaz.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };