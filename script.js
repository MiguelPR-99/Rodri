const translations = {
  es: {
    pageTitle: "Rodrigo Gómez | Desarrollador Backend",
    pageDescription:
      "Portafolio profesional de Rodrigo Gómez Castañeda, desarrollador backend e ingeniero mecatrónico.",
    navExperience: "Experiencia",
    navSkills: "Habilidades",
    navEducation: "Formación",
    navContact: "Contacto",
    themeLabel: "Cambiar tema",
    menuLabel: "Abrir navegación",
    eyebrow: "León, Guanajuato · Disponible para colaborar",
    greeting: "Hola, soy",
    role: "Desarrollador Backend e Ingeniero Mecatrónico.",
    intro:
      "Construyo APIs REST y sistemas backend con Node.js, Express y bases de datos relacionales. Me enfoco en crear soluciones escalables, automatizar procesos y mejorar continuamente la operación detrás de cada producto.",
    resume: "Ver CV (EN)",
    emailAria: "Correo electrónico",
    experienceTitle: "Experiencia",
    goLaserDate: "Mar 2023 — Actualidad",
    goLaserRole: "Asistente de producción · Desarrollo backend",
    goLaser1:
      "Desarrollé el backend del sitio web para recibir archivos de corte láser y pedidos personalizados en línea.",
    goLaser2:
      "Implementé autenticación, control de acceso y sesiones con JWT.",
    goLaser3:
      "Administré datos de usuarios, pedidos, archivos vectoriales y estados de producción en PostgreSQL.",
    goLaser4:
      "Integré la API con el sistema interno para automatizar actualizaciones y notificaciones por correo.",
    ciatecDate: "Ene 2022 — Feb 2023",
    ciatecRole: "Desarrollador Junior · Biomecatrónica",
    ciatec1:
      "Desarrollé un sistema de gestión de pacientes con Node.js, Express y MySQL.",
    ciatec2:
      "Diseñé una base de datos relacional para escaneos, modelos 3D y expedientes clínicos.",
    ciatec3:
      "Automaticé la generación de reportes PDF con plantillas HTML y Puppeteer.",
    ciatec4:
      "Colaboré con el equipo de biomecánica para validar la consistencia de los datos.",
    pressDate: "Jul 2021 — Dic 2021",
    pressRole: "Ingeniero en prácticas · Optimización de producción",
    press1:
      "Construí un sistema de monitoreo de producción con Node.js y WebSockets.",
    press2: "Desarrollé una API con Express para métricas de eficiencia.",
    press3:
      "Implementé persistencia local con SQLite para operar sin conexión.",
    press4: "Contribuí a reducir en 15% el tiempo de ciclo por pieza.",
    skillsTitle: "Habilidades",
    skillsLead:
      "Tecnologías y herramientas con las que desarrollo soluciones backend.",
    educationTitle: "Formación y logros",
    educationLabel: "Educación",
    degree: "Licenciatura en Ingeniería Mecatrónica · Febrero 2023",
    achievementsLabel: "Liderazgo y formación",
    achievement1:
      "Vicepresidente de la Sociedad de Alumnos de Ingeniería.",
    achievement2: "Secretario del Consejo de Sociedades de Alumnos.",
    achievement3:
      "Curso completo de desarrollo web: HTML5, CSS3, JavaScript, PHP y MySQL.",
    languagesLabel: "Idiomas",
    spanishLevel: "Español · Nativo",
    englishLevel: "Inglés · Intermedio, lectura técnica y comunicación",
    contactEyebrow: "¿Tienes un proyecto en mente?",
    contactTitle: "Hablemos",
    contactCopy:
      "Estoy abierto a nuevas oportunidades y colaboraciones en desarrollo backend.",
    emailButton: "Enviar correo",
    footerCredit: "Basado en Cleanfolio Minimal",
    scrollAria: "Volver arriba",
  },
  en: {
    pageTitle: "Rodrigo Gómez | Backend Developer",
    pageDescription:
      "Professional portfolio of Rodrigo Gómez Castañeda, backend developer and mechatronics engineer.",
    navExperience: "Experience",
    navSkills: "Skills",
    navEducation: "Background",
    navContact: "Contact",
    themeLabel: "Toggle theme",
    menuLabel: "Open navigation",
    eyebrow: "León, Guanajuato · Open to collaborate",
    greeting: "Hi, I am",
    role: "Backend Developer and Mechatronics Engineer.",
    intro:
      "I build REST APIs and backend systems with Node.js, Express, and relational databases. I focus on scalable solutions, process automation, and continuously improving the operations behind every product.",
    resume: "View resume",
    emailAria: "Email",
    experienceTitle: "Experience",
    goLaserDate: "Mar 2023 — Present",
    goLaserRole: "Production Assistant · Backend Development",
    goLaser1:
      "Developed the website backend to receive laser-cutting files and custom orders online.",
    goLaser2:
      "Implemented authentication, access control, and session management with JWT.",
    goLaser3:
      "Managed users, orders, vector files, and production status data in PostgreSQL.",
    goLaser4:
      "Integrated the API with the internal system to automate status updates and email notifications.",
    ciatecDate: "Jan 2022 — Feb 2023",
    ciatecRole: "Junior Developer · Biomechatronics",
    ciatec1:
      "Developed a patient management system with Node.js, Express, and MySQL.",
    ciatec2:
      "Designed a relational database for scans, 3D models, and clinical records.",
    ciatec3:
      "Automated PDF report generation using HTML templates and Puppeteer.",
    ciatec4:
      "Collaborated with the biomechanics team to validate data consistency.",
    pressDate: "Jul 2021 — Dec 2021",
    pressRole: "Trainee Engineer · Production Optimization",
    press1:
      "Built a production monitoring system with Node.js and WebSockets.",
    press2: "Developed an Express API for efficiency metrics.",
    press3: "Implemented offline data persistence with SQLite.",
    press4: "Helped reduce cycle time per piece by 15%.",
    skillsTitle: "Skills",
    skillsLead:
      "Technologies and tools I use to develop backend solutions.",
    educationTitle: "Education & achievements",
    educationLabel: "Education",
    degree: "Bachelor’s Degree in Mechatronics Engineering · February 2023",
    achievementsLabel: "Leadership & training",
    achievement1:
      "Vice President of the Engineering Student Society.",
    achievement2: "Secretary of the Student Society Council.",
    achievement3:
      "Complete web development course: HTML5, CSS3, JavaScript, PHP, and MySQL.",
    languagesLabel: "Languages",
    spanishLevel: "Spanish · Native",
    englishLevel: "English · Intermediate, technical reading and communication",
    contactEyebrow: "Have a project in mind?",
    contactTitle: "Let’s talk",
    contactCopy:
      "I am open to new opportunities and collaborations in backend development.",
    emailButton: "Send an email",
    footerCredit: "Based on Cleanfolio Minimal",
    scrollAria: "Back to top",
  },
}

const body = document.body
const themeIcon = document.querySelector("#btn-theme")
const themeButton = document.querySelector(".theme-toggle")
const hamburgerButton = document.querySelector(".nav__hamburger")
const hamburgerIcon = hamburgerButton.querySelector(".menu-icon")
const navList = document.querySelector(".nav__list")
const languageButtons = document.querySelectorAll("[data-language]")
const descriptionMeta = document.querySelector('meta[name="description"]')

const setLanguage = (language, persist = true) => {
  const locale = translations[language] ? language : "es"
  const dictionary = translations[locale]

  document.documentElement.lang = locale
  document.title = dictionary.pageTitle
  descriptionMeta.content = dictionary.pageDescription

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n
    if (dictionary[key]) element.textContent = dictionary[key]
  })

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key])
  })

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === locale
    button.classList.toggle("is-active", isActive)
    button.setAttribute("aria-pressed", String(isActive))
  })

  if (persist) localStorage.setItem("portfolio-language", locale)
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language))
})

const setTheme = (theme, persist = true) => {
  const isDark = theme === "dark"
  body.classList.toggle("dark", isDark)
  body.classList.toggle("light", !isDark)
  themeIcon.textContent = isDark ? "☀" : "☾"

  if (persist) localStorage.setItem("portfolio-theme", isDark ? "dark" : "light")
}

themeButton.addEventListener("click", () => {
  setTheme(body.classList.contains("dark") ? "light" : "dark")
})

const closeNavigation = () => {
  navList.classList.remove("display-nav-list")
  hamburgerIcon.textContent = "☰"
  hamburgerButton.setAttribute("aria-expanded", "false")
}

hamburgerButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("display-nav-list")
  hamburgerIcon.textContent = isOpen ? "×" : "☰"
  hamburgerButton.setAttribute("aria-expanded", String(isOpen))
})

navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation)
})

document.addEventListener("scroll", () => {
  const scrollButton = document.querySelector(".scroll-top")
  const isVisible =
    document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
  scrollButton.style.display = isVisible ? "block" : "none"
})

document.querySelector("#year").textContent = new Date().getFullYear()

const savedTheme = localStorage.getItem("portfolio-theme")
const preferredTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
setTheme(preferredTheme, false)

// Spanish is the first-visit default; a visitor's explicit choice is remembered.
setLanguage(localStorage.getItem("portfolio-language") || "es", false)
