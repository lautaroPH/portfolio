export type Lang = 'en' | 'es';

export const EMAIL = 'lautaroph@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/lautaroperezh';
export const GITHUB = 'https://github.com/lautaroPH';

export const ui = {
  en: {
    meta: {
      title: 'Lautaro Perez Herrera - Full Stack Engineer (TypeScript, Python, AI)',
      description:
        'Full Stack Engineer with 4+ years building AI-powered SaaS products and automation with React, Next.js, Node.js, Python and the Claude and OpenAI APIs.',
    },
    nav: { experience: 'Experience', projects: 'Projects', skills: 'Skills', about: 'About me', contact: 'Contact' },
    switchLang: { label: 'ES', title: 'Ver en español', href: '/es/' },
    home: '/',
    theme: 'Choose theme',
    hero: {
      badge: 'Open to work',
      greeting: "Hey, I'm Lautaro",
      // parts: [plain, strong, plain, strong, plain]
      intro: [
        '',
        'Full Stack Engineer',
        ' from La Plata, Argentina 🇦🇷, with 4+ years building ',
        'AI-powered SaaS products',
        ' and business automation, from MVP to production, for companies in the US, Europe and Latin America.',
      ],
      contact: 'Contact me',
      cv: 'Download CV',
      cvFile: '/Lautaro_Perez_Herrera_CV.pdf',
    },
    titles: { experience: 'Work experience', projects: 'Projects', skills: 'Skills', about: 'About me', contact: 'Contact' },
    seeMore: 'See more',
    experience: [
      {
        date: 'August 2026 - Present',
        title: 'Full Stack Engineer',
        company: 'Caliper Labs',
        description:
          'Caliper Labs is a software agency. Through it I build AI-powered products and internal tools for its clients: car dealership groups, the law firm S.AP Gestión Jurídica, Arboleya Maquinarias and Kavos Constructora. I work across about 25 services in Python (FastAPI), Next.js and TypeScript, with the Claude API and MCP servers, and I set up shared CI, security audits and monitoring for every repo.',
      },
      {
        date: 'February 2025 - June 2026',
        title: 'Full Stack Engineer',
        company: 'Ninjō',
        description:
          'I built core features of an AI-powered communication and automation platform: AI workflows with the OpenAI API, WhatsApp, Messenger and Instagram integrations through Meta APIs, Stripe subscriptions and billing, Telnyx phone numbers bought and managed inside the app, webhook-driven automations, and multi-tenant role-based access for agencies.',
        link: 'https://www.ninjo.ai',
      },
      {
        date: 'September 2023 - January 2025',
        title: 'Full Stack Developer',
        company: 'MyGuide Holiday',
        description:
          'I built a Next.js platform for booking tourist activities, with support for 4 languages, secure payments, e-tickets and role-based dashboards for admins and partners. I optimized performance and set up staging environments so new features could be tested safely.',
        link: 'https://www.myguide.holiday',
      },
      {
        date: 'February 2023 - February 2024',
        title: 'Full Stack Developer',
        company: 'Chenkster',
        description:
          'I built an MVP from scratch with React, Tailwind CSS and Supabase, added AI features, and worked with the designers and founders on the interface. I deployed it to production, set up testing environments and supported it after launch.',
        link: 'https://www.chenkster.xyz/',
      },
      {
        date: 'September 2022 - January 2023',
        title: 'Full Stack Developer',
        company: 'Marina Tortarolo Real Estate Company',
        description:
          'I built the public site and an admin dashboard where administrators create, edit and delete property listings. I migrated the codebase from React to Next.js, which improved performance and SEO.',
        link: 'https://marinatortaroloinmobiliaria.com/',
      },
    ],
    projects: [
      {
        title: 'Legal case management in the cloud',
        client: 'S.AP Gestión Jurídica · Caliper Labs',
        description:
          'A multi-tenant platform for law firms: cases, filings, courts, deadlines, hearings, documents and notifications. It also pulls court notices from the court portal, extracts the key data with Claude, fills the writ template and registers the case on its own.',
        tags: ['FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript', 'Claude API'],
      },
      {
        title: 'Bank reconciliation with AI',
        client: 'Caliper Labs',
        description:
          'Matches bank statement PDFs against the accounting ledger in several passes, breaks down bank fees and taxes (VAT, IIBB, Law 25.413) by month, and sends the cases it can’t resolve to Claude.',
        tags: ['Python', 'FastAPI', 'Claude API', 'Accounting'],
      },
      {
        title: 'Invoice automation to Colppy',
        client: 'Arboleya Maquinarias · Caliper Labs',
        description:
          'Supplier invoices arrive as phone photos, PDFs or emails. The system reads them (ARCA QR code + Claude vision), validates them, finds the supplier, detects duplicates and, after a person approves, loads them into the Colppy accounting API.',
        tags: ['Python', 'FastAPI', 'Claude vision', 'Colppy API'],
      },
      {
        title: 'Dealership assistant: app, web and MCP',
        client: 'Car dealership groups · Caliper Labs',
        description:
          'MCP servers and APIs over the dealerships’ management and savings-plan systems. They power an iPhone/iPad app, a web dashboard and a Claude assistant (also through Siri) that answers questions about sales, stock and the plan portfolio.',
        tags: ['Python', 'MCP', 'Claude API', 'PostgreSQL', 'iOS'],
      },
      {
        title: 'Construction finance dashboard',
        client: 'Kavos Constructora · Caliper Labs',
        description:
          'A responsive dashboard of each construction project’s balance, fed by the company’s Google Drive spreadsheets, with an AI chat that answers questions about the numbers.',
        tags: ['Next.js', 'TypeScript', 'Google Drive API', 'AI chat'],
      },
      {
        title: 'Omnichannel AI platform',
        client: 'Ninjō',
        description:
          'Core features of a platform that puts WhatsApp, Instagram and Messenger conversations in one inbox, with AI workflows, Stripe billing and phone numbers bought from inside the app.',
        tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Stripe'],
        link: 'https://www.ninjo.ai',
      },
    ],
    about: [
      'Hi! I’m <strong>Lautaro</strong>, a Full Stack Engineer from La Plata, Argentina. I started out building web apps with <strong>React</strong> and <strong>Next.js</strong>, and over 4+ years I’ve worked as a contractor for startups and companies in the US, Europe and Latin America, taking products from MVP to production.',
      'Today most of my work is about putting <strong>AI to work</strong> on real business processes: reading invoices and court documents, reconciling bank statements, and assistants that answer questions about a company’s own data. I build them with <strong>TypeScript</strong>, <strong>Python</strong>, the Claude and OpenAI APIs and MCP servers, and I care about the boring parts too: tests, CI, security and monitoring.',
      'I like understanding the problem first and then owning the solution end to end. I’m looking for a remote team where I can keep doing that.',
    ],
    contact: {
      text: 'Have a role or a project in mind? Write to me and I’ll answer within a day.',
      copy: 'Copy email',
      copied: 'Copied!',
      write: 'Send an email',
    },
    footer: 'Design based on a template by',
  },

  es: {
    meta: {
      title: 'Lautaro Perez Herrera - Ingeniero Full Stack (TypeScript, Python, IA)',
      description:
        'Ingeniero Full Stack con más de 4 años construyendo productos SaaS con IA y automatización con React, Next.js, Node.js, Python y las APIs de Claude y OpenAI.',
    },
    nav: { experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', about: 'Sobre mí', contact: 'Contacto' },
    switchLang: { label: 'EN', title: 'View in English', href: '/' },
    home: '/es/',
    theme: 'Elegir tema',
    hero: {
      badge: 'Disponible para trabajar',
      greeting: '¡Hola! Soy Lautaro',
      intro: [
        '',
        'Ingeniero Full Stack',
        ' de La Plata, Argentina 🇦🇷, con más de 4 años construyendo ',
        'productos SaaS con IA',
        ' y automatización de procesos, desde el MVP hasta producción, para empresas de EE. UU., Europa y Latinoamérica.',
      ],
      contact: 'Contactame',
      cv: 'Descargar CV',
      cvFile: '/Lautaro_Perez_Herrera_CV_ES.pdf',
    },
    titles: { experience: 'Experiencia laboral', projects: 'Proyectos', skills: 'Habilidades', about: 'Sobre mí', contact: 'Contacto' },
    seeMore: 'Ver más',
    experience: [
      {
        date: 'Agosto 2026 - Actualidad',
        title: 'Ingeniero Full Stack',
        company: 'Caliper Labs',
        description:
          'Caliper Labs es una agencia de software. A través de ella desarrollo productos y herramientas internas con IA para sus clientes: grupos de concesionarios, el estudio jurídico S.AP Gestión Jurídica, Arboleya Maquinarias y Kavos Constructora. Trabajo en unos 25 servicios con Python (FastAPI), Next.js y TypeScript, con la API de Claude y servidores MCP, y armé la CI compartida, las auditorías de seguridad y el monitoreo de todos los repos.',
      },
      {
        date: 'Febrero 2025 - Junio 2026',
        title: 'Ingeniero Full Stack',
        company: 'Ninjō',
        description:
          'Desarrollé funcionalidades centrales de una plataforma de comunicación y automatización con IA: flujos con la API de OpenAI, integraciones de WhatsApp, Messenger e Instagram con las APIs de Meta, suscripciones y facturación con Stripe, números de teléfono de Telnyx que se compran y gestionan desde la app, automatizaciones con webhooks y permisos por rol multi-tenant para agencias.',
        link: 'https://www.ninjo.ai',
      },
      {
        date: 'Septiembre 2023 - Enero 2025',
        title: 'Desarrollador Full Stack',
        company: 'MyGuide Holiday',
        description:
          'Construí una plataforma en Next.js para reservar actividades turísticas, en 4 idiomas, con pagos seguros, tickets electrónicos y paneles por rol para administradores y socios. Optimicé el rendimiento y armé entornos de staging para probar funcionalidades de forma segura.',
        link: 'https://www.myguide.holiday',
      },
      {
        date: 'Febrero 2023 - Febrero 2024',
        title: 'Desarrollador Full Stack',
        company: 'Chenkster',
        description:
          'Construí un MVP desde cero con React, Tailwind CSS y Supabase, agregué funcionalidades de IA y trabajé con los diseñadores y fundadores en la interfaz. Lo desplegué a producción, armé entornos de prueba y le di soporte después del lanzamiento.',
        link: 'https://www.chenkster.xyz/',
      },
      {
        date: 'Septiembre 2022 - Enero 2023',
        title: 'Desarrollador Full Stack',
        company: 'Marina Tortarolo Real Estate Company',
        description:
          'Construí el sitio público y un panel de administración donde los administradores crean, editan y eliminan propiedades. Migré el código de React a Next.js, lo que mejoró el rendimiento y el SEO.',
        link: 'https://marinatortaroloinmobiliaria.com/',
      },
    ],
    projects: [
      {
        title: 'Gestión jurídica en la nube',
        client: 'S.AP Gestión Jurídica · Caliper Labs',
        description:
          'Plataforma multi-tenant para estudios jurídicos: expedientes, radicaciones, juzgados, vencimientos, audiencias, documentos y notificaciones. Además descarga las cédulas del portal judicial, extrae los datos clave con Claude, completa el modelo de escrito y da de alta el juicio sola.',
        tags: ['FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript', 'API de Claude'],
      },
      {
        title: 'Conciliación bancaria con IA',
        client: 'Caliper Labs',
        description:
          'Concilia extractos bancarios en PDF contra el mayor contable en varias pasadas, desglosa por mes los gastos e impuestos bancarios (IVA, IIBB, ley 25.413) y deriva a Claude los casos que no puede resolver.',
        tags: ['Python', 'FastAPI', 'API de Claude', 'Contabilidad'],
      },
      {
        title: 'Facturas automáticas a Colppy',
        client: 'Arboleya Maquinarias · Caliper Labs',
        description:
          'Las facturas de proveedores llegan como fotos del celular, PDF o mails. El sistema las lee (QR de ARCA + visión de Claude), las valida, encuentra al proveedor, detecta duplicados y, cuando una persona las aprueba, las carga en la API de Colppy.',
        tags: ['Python', 'FastAPI', 'Visión de Claude', 'API de Colppy'],
      },
      {
        title: 'Asistente para concesionarios: app, web y MCP',
        client: 'Grupos de concesionarios · Caliper Labs',
        description:
          'Servidores MCP y APIs sobre los sistemas de gestión y de planes de ahorro de los concesionarios. Alimentan una app de iPhone/iPad, un panel web y un asistente con Claude (también por Siri) que responde sobre ventas, stock y la cartera de planes.',
        tags: ['Python', 'MCP', 'API de Claude', 'PostgreSQL', 'iOS'],
      },
      {
        title: 'Tablero financiero de obras',
        client: 'Kavos Constructora · Caliper Labs',
        description:
          'Tablero responsive con el balance de cada obra, alimentado por las planillas de Google Drive de la empresa, con un chat de IA que responde preguntas sobre los números.',
        tags: ['Next.js', 'TypeScript', 'API de Google Drive', 'Chat con IA'],
      },
      {
        title: 'Plataforma omnicanal con IA',
        client: 'Ninjō',
        description:
          'Funcionalidades centrales de una plataforma que junta las conversaciones de WhatsApp, Instagram y Messenger en una sola bandeja, con flujos de IA, facturación con Stripe y números de teléfono que se compran desde la app.',
        tags: ['React', 'TypeScript', 'Node.js', 'API de OpenAI', 'Stripe'],
        link: 'https://www.ninjo.ai',
      },
    ],
    about: [
      '¡Hola! Soy <strong>Lautaro</strong>, Ingeniero Full Stack de La Plata, Argentina. Empecé construyendo aplicaciones web con <strong>React</strong> y <strong>Next.js</strong>, y en más de 4 años trabajé como contratista para startups y empresas de EE. UU., Europa y Latinoamérica, llevando productos del MVP a producción.',
      'Hoy la mayor parte de mi trabajo es <strong>poner la IA a trabajar</strong> en procesos reales de negocio: leer facturas y documentos judiciales, conciliar extractos bancarios y asistentes que responden sobre los datos de la propia empresa. Los construyo con <strong>TypeScript</strong>, <strong>Python</strong>, las APIs de Claude y OpenAI y servidores MCP, y también me ocupo de lo que no se ve: tests, CI, seguridad y monitoreo.',
      'Me gusta entender bien el problema y después hacerme cargo de la solución de punta a punta. Busco un equipo remoto donde seguir haciéndolo.',
    ],
    contact: {
      text: '¿Tenés un puesto o un proyecto en mente? Escribime y te respondo en el día.',
      copy: 'Copiar email',
      copied: '¡Copiado!',
      write: 'Enviar un email',
    },
    footer: 'Diseño basado en una plantilla de',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
