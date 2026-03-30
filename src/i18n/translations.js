const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Web',
      description:
        'Especializado en crear experiencias digitales excepcionales, intuitivas y con un diseño interactivo de alta calidad.',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contáctame',
    },
    about: {
      title: 'Sobre Mí',
      heading: 'Desarrollador Apasionado',
      p1: 'Soy un desarrollador con un fuerte enfoque en el diseño moderno y la interactividad. Disfruto creando aplicaciones web rápidas, estéticamente atractivas y funcionales. Mi objetivo es ofrecer productos que sorprendan visualmente mientras mantienen una experiencia de usuario excepcional y accesible.',
      p2: 'Siempre busco estar en constante aprendizaje y aplicando las mejores prácticas y metodologías de la industria para lograr la excelencia técnica.',
      skills: {
        frontend: {
          title: 'Frontend',
          desc: 'React, Vite, Vanilla CSS, HTML5 modernos con animaciones.',
        },
        backend: {
          title: 'Backend',
          desc: 'Node.js, Express, APIs REST resolutivas y seguras.',
        },
        databases: {
          title: 'Databases',
          desc: 'MongoDB, PostgreSQL, MySQL con modelado óptimo.',
        },
        responsive: {
          title: 'Responsive',
          desc: 'Diseño Mobile-first, adaptable a cualquier dispositivo.',
        },
      },
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          role: 'Desarrollador Web Moderno',
          company: 'Freelance',
          period: '2023 - Presente',
          description:
            'Creación de interfaces de usuario interactivas y rápidas. Uso de React, Vite y CSS moderno para lograr experiencias premium en tiendas e-commerce y portfolios.',
        },
        {
          role: 'Desarrollador Junior',
          company: 'Agencia Digital',
          period: '2021 - 2023',
          description:
            'Mantenimiento y desarrollo de nuevas funcionalidades en aplicaciones web. Colaboración en diseño de bases de datos y consumo de APIs REST.',
        },
        {
          role: 'Formación y Proyectos',
          company: 'Autodidacta / Bootcamp',
          period: '2020 - 2021',
          description:
            'Aprendizaje intensivo de JavaScript, CSS3, HTML5 y ecosistema React. Desarrollo de proyectos personales orientados a resolver problemas reales.',
        },
      ],
    },
    projects: {
      title: 'Mis Proyectos',
      moreOnGithub: 'Ver más en GitHub',
      items: [
        {
          title: 'E-commerce Premium',
          description:
            'Plataforma de ventas con carrito dinámico, pagos integrados y panel de administración.',
        },
        {
          title: 'Dashboard Analítico',
          description:
            'Aplicación para visualización de datos en tiempo real con gráficos interactivos y reportes exportables.',
        },
        {
          title: 'App de Gestión de Tareas',
          description:
            'Herramienta colaborativa con tableros Kanban estilo Trello, notificaciones y chat en tiempo real.',
        },
      ],
    },
    contact: {
      title: 'Contáctame',
      heading: 'Hablemos de tu próximo proyecto',
      description:
        'Estoy disponible para trabajos freelance o nuevas oportunidades laborales. Ponte en contacto conmigo si quieres que colaboremos.',
      email: 'Email',
      location: 'Ubicación',
      locationValue: 'España / Remoto',
      phone: 'Teléfono',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado correctamente! (Simulación)',
      },
    },
    footer: '© {year} gmcp.dev - Todos los derechos reservados.',
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Web Developer',
      description:
        'Specialized in creating exceptional, intuitive digital experiences with high-quality interactive design.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      heading: 'Passionate Developer',
      p1: "I'm a developer with a strong focus on modern design and interactivity. I enjoy creating fast, aesthetically appealing, and functional web applications. My goal is to deliver visually stunning products while maintaining an exceptional and accessible user experience.",
      p2: "I'm always seeking continuous learning and applying industry best practices and methodologies to achieve technical excellence.",
      skills: {
        frontend: {
          title: 'Frontend',
          desc: 'React, Vite, Vanilla CSS, modern HTML5 with animations.',
        },
        backend: {
          title: 'Backend',
          desc: 'Node.js, Express, secure and reliable REST APIs.',
        },
        databases: {
          title: 'Databases',
          desc: 'MongoDB, PostgreSQL, MySQL with optimal modeling.',
        },
        responsive: {
          title: 'Responsive',
          desc: 'Mobile-first design, adaptable to any device.',
        },
      },
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Modern Web Developer',
          company: 'Freelance',
          period: '2023 - Present',
          description:
            'Building interactive and fast user interfaces. Using React, Vite and modern CSS for premium e-commerce and portfolio experiences.',
        },
        {
          role: 'Junior Developer',
          company: 'Digital Agency',
          period: '2021 - 2023',
          description:
            'Maintenance and development of new features for web applications. Collaboration on database design and REST API consumption.',
        },
        {
          role: 'Training & Projects',
          company: 'Self-taught / Bootcamp',
          period: '2020 - 2021',
          description:
            'Intensive learning of JavaScript, CSS3, HTML5 and the React ecosystem. Development of personal projects aimed at solving real-world problems.',
        },
      ],
    },
    projects: {
      title: 'My Projects',
      moreOnGithub: 'See more on GitHub',
      items: [
        {
          title: 'Premium E-commerce',
          description:
            'Sales platform with dynamic cart, integrated payments, and admin panel.',
        },
        {
          title: 'Analytics Dashboard',
          description:
            'Real-time data visualization app with interactive charts and exportable reports.',
        },
        {
          title: 'Task Management App',
          description:
            'Collaborative tool with Trello-style Kanban boards, notifications, and real-time chat.',
        },
      ],
    },
    contact: {
      title: 'Contact Me',
      heading: "Let's talk about your next project",
      description:
        "I'm available for freelance work or new job opportunities. Get in touch if you'd like to collaborate.",
      email: 'Email',
      location: 'Location',
      locationValue: 'Spain / Remote',
      phone: 'Phone',
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'How can I help you?',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! (Simulation)',
      },
    },
    footer: '© {year} gmcp.dev - All rights reserved.',
  },
};

export default translations;
