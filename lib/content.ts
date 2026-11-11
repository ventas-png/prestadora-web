export type Lang = "es" | "en";

export const contact = {
  phoneDisplay: "+502 2310 5905",
  phoneHref: "tel:+50223105905",
  whatsapp: "50223105905",
  email: "ventas@prestadoradeservicios.com",
  portal: "https://administratodo.com",
  mapEmbed:
    "https://maps.google.com/maps?q=19+avenida+B+0-43+Zona+15+Vista+Hermosa+2+Guatemala&output=embed&z=15",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Equivalent routes in each language, used by the ES/EN switch. */
export const routes = {
  home: { es: "/", en: "/en" },
  services: { es: "/servicios", en: "/en/services" },
  about: { es: "/nosotros", en: "/en/about" },
  contact: { es: "/contacto", en: "/en/contact" },
  forms: { es: "/formularios", en: "/en/forms" },
} as const;

export type RouteKey = keyof typeof routes;

type Item = { title: string; text: string };

const es = {
  meta: {
    title: "Prestadora de Servicios Básicos | Administración de condominios en Guatemala",
    description:
      "Más de 20 años administrando condominios, redes de agua, mantenimiento y propiedades en renta en Guatemala.",
  },
  nav: { home: "Inicio", services: "Servicios", about: "Nosotros", contact: "Contacto", portal: "Acceso clientes", forms: "Formularios", careers: "Trabaja con nosotros" },
  topbar: { hours: "Lun a vie 8:00–17:00 · Sáb 8:00–12:00" },
  cta: {
    whatsapp: "Escríbenos por WhatsApp",
    whatsappMsg: "Hola, me interesa información sobre sus servicios.",
    quote: "Solicita una cotización",
    quoteMsg: "Hola, quisiera solicitar una cotización.",
    services: "Ver servicios",
    call: "Llamar",
  },
  home: {
    eyebrow: "Administración de condominios desde 2005",
    title: "Administramos su condominio y su inversión con la calidad que merecen",
    subtitle: "Más de 20 años administrando condominios, redes de agua y propiedades en renta en Guatemala.",
    stats: [
      { value: "+20 años", label: "de experiencia" },
      { value: "24/7", label: "atención a emergencias" },
    ],
    badgeTitle: "Personal capacitado y verificado",
    badgeText: "Hacemos las cosas bien desde la primera vez",
    servicesEyebrow: "Servicios",
    servicesTitle: "Todo lo que su propiedad necesita, en un solo lugar",
    services: [
      { title: "Administración de condominios", text: "Residenciales, comerciales e industriales: cobranza, áreas comunes, seguridad y manejo de desechos." },
      { title: "Agua potable y tratamiento", text: "Operación de redes de agua potable y de plantas de tratamiento de aguas residuales." },
      { title: "Mantenimiento preventivo y correctivo", text: "Plomería, electricidad, remodelación, jardinería y carpintería, con respuesta rápida." },
      { title: "Administración de inmuebles", text: "Rentas a corto plazo por plataformas y arrendamientos tradicionales, de principio a fin." },
    ] as Item[],
    whyEyebrow: "Por qué elegirnos",
    whyTitle: "Cuidamos la plusvalía de su inversión",
    why: [
      { title: "+20 años de experiencia", text: "Condominios, comercios y edificios desde 2005." },
      { title: "Disponibilidad 24/7", text: "Atención a emergencias de agua y electricidad." },
      { title: "Transparencia", text: "Estados de cuenta y solicitudes en línea en el portal de clientes." },
      { title: "Personal verificado", text: "Equipo capacitado y en mejora continua." },
    ] as Item[],
    finalTitle: "¿Tiene un condominio, un desarrollo o una propiedad en renta?",
    finalText: "Contáctenos y coordinamos una visita técnica sin compromiso.",
    portalTitle: "¿Ya es cliente?",
    portalText: "Consulte su estado de cuenta y sus solicitudes en el portal de clientes.",
  },
  services: {
    eyebrow: "Servicios",
    title: "Servicios para condominios, desarrollos y propiedades",
    intro: "Contratos de administración de largo plazo y trabajos puntuales con respuesta rápida.",
    expertiseTitle: "Áreas de experiencia",
    expertise: [
      { title: "Administración de condominios", text: "Administramos condominios residenciales, comerciales e industriales: cobranza y manejo de fondos, áreas comunes, seguridad y vigilancia, y manejo de desechos." },
      { title: "Redes de agua potable", text: "Operamos sistemas de distribución de agua potable y de reúso." },
      { title: "Tratamiento de aguas", text: "Gestionamos plantas de tratamiento de aguas residuales y el mantenimiento de sus equipos." },
      { title: "Mantenimiento preventivo y correctivo", text: "Mantenimiento y recuperación de inmuebles individuales o de conjuntos completos." },
      { title: "Administración de inmuebles", text: "Gestionamos su propiedad en renta a corto plazo (plataformas) o con arrendamiento tradicional." },
      { title: "Eficiencia energética", text: "Soluciones de medición, generación y ahorro de energía." },
    ] as Item[],
    quickTitle: "Respuesta rápida",
    quick: [
      { title: "Plomería", text: "Fugas, taponamientos, cambio de artefactos y llaves." },
      { title: "Electricidad", text: "Fallas eléctricas, flipones y contadores." },
      { title: "Remodelaciones", text: "Tabiques, impermeabilización, pintura, ventanería, tablayeso y trabajos en altura." },
      { title: "Carpintería", text: "Muebles a medida, pérgolas y decks." },
      { title: "Jardinería", text: "Diseño y mantenimiento de áreas verdes y jardines verticales." },
      { title: "Decoración", text: "Ambientación y transformación de espacios." },
    ] as Item[],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { title: "¿Pueden atender mi condominio?", text: "Sí. Coordinamos una visita técnica y le presentamos una propuesta." },
      { title: "¿Cómo funciona la administración de rentas?", text: "Nos encargamos de publicar, recibir huéspedes o inquilinos, cobrar y mantener la propiedad." },
      { title: "¿Mi proyecto es muy pequeño?", text: "Ningún proyecto es pequeño para nosotros." },
    ] as Item[],
  },
  about: {
    eyebrow: "Nosotros",
    title: "Más de 20 años cuidando su inversión",
    intro: "Prestadora de Servicios Básicos, S.A. (PSB) nació en 2005 para dar a cada condominio una administración eficiente, transparente y a precio justo.",
    missionTitle: "Misión",
    mission: "Proveer servicios de alta calidad que generen ventajas competitivas para nuestros clientes.",
    visionTitle: "Visión",
    vision: "Contribuir al crecimiento de la plusvalía de cada inversión mediante una administración eficiente con personal capacitado.",
    valuesTitle: "Valores",
    values: ["Confianza", "Respeto por el cliente", "Integridad", "Mejora continua", "Hacer las cosas bien desde la primera vez"],
    historyTitle: "Nuestra historia",
    history: [
      { title: "2005", text: "Fundación de la empresa, administrando condominios residenciales." },
      { title: "2013", text: "Iniciamos la administración de áreas comerciales." },
      { title: "2019", text: "Sumamos la administración de propiedades en renta, tradicional y por plataformas." },
      { title: "2023", text: "Comenzamos a administrar edificios de apartamentos." },
    ] as Item[],
    careersTitle: "¡Únete a nuestro equipo!",
    careersText: "Capacitación constante, oportunidad de crecimiento y todas las prestaciones de ley.",
    careersCta: "Envíanos tu CV",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de su propiedad",
    intro: "Escríbanos por WhatsApp, llámenos o déjenos sus datos y le respondemos en horario de oficina.",
    phone: "Teléfono",
    email: "Correo",
    address: "Dirección",
    addressValue: "19 avenida B 0-43, Zona 15, Vista Hermosa 2, Guatemala",
    hours: "Horario",
    hoursValue: "Lun a vie 8:00–17:00 · Sáb 8:00–12:00 · Dom cerrado",
    formTitle: "Envíenos un mensaje",
    name: "Nombre",
    phoneField: "Teléfono",
    service: "Tipo de servicio",
    serviceOptions: ["Administración de condominio", "Agua y tratamiento", "Mantenimiento", "Administración de inmuebles", "Otro"],
    message: "Mensaje",
    send: "Enviar por WhatsApp",
    formNote: "Al enviar se abre WhatsApp con su mensaje listo.",
  },
  forms: {
    eyebrow: "Formularios",
    title: "Formularios para clientes y colaboradores",
    projectsTitle: "Clientes y proyectos",
    staffTitle: "Personal",
  },
  footer: { company: "Prestadora de Servicios Básicos, S.A.", clients: "Clientes", rights: "Todos los derechos reservados." },
  langSwitch: "Cambiar idioma",
};

type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Prestadora de Servicios Básicos | Condominium management in Guatemala",
    description: "Over 20 years managing condominiums, water systems, maintenance and rental properties in Guatemala.",
  },
  nav: { home: "Home", services: "Services", about: "About", contact: "Contact", portal: "Client login", forms: "Forms", careers: "Careers" },
  topbar: { hours: "Mon–Fri 8:00–17:00 · Sat 8:00–12:00" },
  cta: {
    whatsapp: "Chat with us on WhatsApp",
    whatsappMsg: "Hi, I'd like information about your services.",
    quote: "Request a quote",
    quoteMsg: "Hi, I'd like to request a quote.",
    services: "Our services",
    call: "Call",
  },
  home: {
    eyebrow: "Condominium management since 2005",
    title: "We manage your condominium and your investment with the care they deserve",
    subtitle: "Over 20 years managing condominiums, water systems and rental properties in Guatemala.",
    stats: [
      { value: "20+ years", label: "of experience" },
      { value: "24/7", label: "emergency support" },
    ],
    badgeTitle: "Trained, vetted staff",
    badgeText: "Done right the first time",
    servicesEyebrow: "Services",
    servicesTitle: "Everything your property needs, in one place",
    services: [
      { title: "Condominium management", text: "Residential, commercial and industrial: collections, common areas, security and waste management." },
      { title: "Water and treatment", text: "Operation of potable water networks and wastewater treatment plants." },
      { title: "Preventive and corrective maintenance", text: "Plumbing, electrical, renovation, landscaping and carpentry, with quick response." },
      { title: "Property management", text: "Short-term rentals on booking platforms and traditional leases, end to end." },
    ],
    whyEyebrow: "Why choose us",
    whyTitle: "We protect the value of your investment",
    why: [
      { title: "20+ years of experience", text: "Condominiums, retail and buildings since 2005." },
      { title: "24/7 availability", text: "Emergency response for water and electrical issues." },
      { title: "Transparency", text: "Account statements and requests online in the client portal." },
      { title: "Vetted staff", text: "A trained team committed to continuous improvement." },
    ],
    finalTitle: "Own a condominium, a development or a rental property?",
    finalText: "Contact us to schedule a no-obligation site visit.",
    portalTitle: "Already a client?",
    portalText: "Check your account and requests in the client portal.",
  },
  services: {
    eyebrow: "Services",
    title: "Services for condominiums, developments and properties",
    intro: "Long-term management contracts and one-off jobs with quick response.",
    expertiseTitle: "Areas of expertise",
    expertise: [
      { title: "Condominium management", text: "We run residential, commercial and industrial condominiums, including collections and funds, common areas, security and waste management." },
      { title: "Potable water networks", text: "We operate potable and reclaimed water distribution systems." },
      { title: "Wastewater treatment", text: "We manage treatment plants and maintain their equipment." },
      { title: "Preventive and corrective maintenance", text: "Maintenance and recovery for single properties or entire developments." },
      { title: "Property management", text: "Short-term rentals on platforms or traditional long-term leases." },
      { title: "Energy efficiency", text: "Metering, generation and energy savings solutions." },
    ],
    quickTitle: "Quick response",
    quick: [
      { title: "Plumbing", text: "Leaks, clogs, fixture and faucet replacement." },
      { title: "Electrical", text: "Faults, breakers and meters." },
      { title: "Renovations", text: "Partitions, waterproofing, painting, windows, drywall and work at heights." },
      { title: "Carpentry", text: "Custom furniture, pergolas and decks." },
      { title: "Landscaping", text: "Green areas and vertical gardens." },
      { title: "Interior styling", text: "Space makeovers and decoration." },
    ],
    faqTitle: "FAQ",
    faq: [
      { title: "Can you manage my condominium?", text: "Yes. We schedule a site visit and send you a proposal." },
      { title: "How does rental management work?", text: "We handle listing, guests or tenants, collections and upkeep." },
      { title: "Is my project too small?", text: "No project is too small for us." },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Over 20 years protecting your investment",
    intro: "Prestadora de Servicios Básicos, S.A. (PSB) was founded in 2005 to give every condominium efficient, transparent and fairly priced management.",
    missionTitle: "Mission",
    mission: "To provide high-quality services that give our clients a competitive edge.",
    visionTitle: "Vision",
    vision: "To grow the value of every investment through efficient management and trained staff.",
    valuesTitle: "Values",
    values: ["Trust", "Respect for our clients", "Integrity", "Continuous improvement", "Doing it right the first time"],
    historyTitle: "Our history",
    history: [
      { title: "2005", text: "The company was founded, managing residential condominiums." },
      { title: "2013", text: "We began managing commercial areas." },
      { title: "2019", text: "We added rental property management, traditional and platform-based." },
      { title: "2023", text: "We began managing apartment buildings." },
    ],
    careersTitle: "Join our team!",
    careersText: "Ongoing training, room to grow and full statutory benefits.",
    careersCta: "Send us your CV",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your property",
    intro: "Message us on WhatsApp, call us, or leave your details and we'll reply during office hours.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressValue: "19 avenida B 0-43, Zona 15, Vista Hermosa 2, Guatemala",
    hours: "Hours",
    hoursValue: "Mon–Fri 8:00–17:00 · Sat 8:00–12:00 · Sun closed",
    formTitle: "Send us a message",
    name: "Name",
    phoneField: "Phone",
    service: "Service",
    serviceOptions: ["Condominium management", "Water and treatment", "Maintenance", "Property management", "Other"],
    message: "Message",
    send: "Send via WhatsApp",
    formNote: "Sending opens WhatsApp with your message ready to go.",
  },
  forms: {
    eyebrow: "Forms",
    title: "Forms for clients and staff",
    projectsTitle: "Clients and projects",
    staffTitle: "Staff",
  },
  footer: { company: "Prestadora de Servicios Básicos, S.A.", clients: "Clients", rights: "All rights reserved." },
  langSwitch: "Change language",
};

export const dict: Record<Lang, Dict> = { es, en };

/** Forms hosted on Zoho / the current site, linked from the Forms page. */
export const formLinks = {
  projects: [
    { es: "Consultas y dudas", en: "Questions", href: "https://forms.zohopublic.com/zohodocs254/form/ConsultasyDudasPSB/formperma/eeD2cRwGu_QpffWKEVE8cmd66fkEsJWtrEX85T7-t9o" },
  ],
  staff: [
    { es: "Solicitud de vacaciones", en: "Vacation request", href: "https://forms.zohopublic.com/zohodocs254/form/SolicituddeVacaciones/formperma/Onb2hpeBJ9QY2Rsai5VImKIul5c0grL1k1jwnVDKMFY" },
    { es: "Ausencia de labores", en: "Absence notice", href: "https://forms.zohopublic.com/zohodocs254/form/AusenciadeLabores/formperma/Q9x3A9hPekfhIw7OLTSPy4H4DHrvyezNKG3u17z8NtI" },
    { es: "Control de personal", en: "Staff check-in", href: "https://forms.zohopublic.com/zohodocs254/form/NotificacindeIngresoaLabores/formperma/79np-f5GQllxnibFBb1-6y5rcrieNpvHT52BUBStAX0" },
    { es: "Sanciones de personal", en: "Staff sanctions", href: "https://forms.zohopublic.com/zohodocs254/form/NotificacindeSancin/formperma/YcxzwaHgjs4PeqLKWFM9j1IIwH8KwjxRYFz6p3lRKVE" },
  ],
};
