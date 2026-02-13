// // Menú mobile
// const toggle = document.getElementById('menuToggle')
// const nav = document.getElementById('nav')

// toggle?.addEventListener('click', () => {
//   nav.classList.toggle('open')
// })

// Acordeones
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling
    content.style.display = content.style.display === 'block' ? 'none' : 'block'
  })
})

// Service modal data
const services = {
  contable: {
    icon: 'fa-solid fa-calculator',
    title: 'Contable',
    items: [
      'Registración de operaciones contables',
      'Cumplimentar los Libros Contables',
      'Elaboración de Estados Contables',
      'Realizar análisis, diagnósticos y reportes',
      'Liquidación de sueldos',
      'Certificaciones de Ingresos y de Origen y licitud de fondos. Manifestaciones de Bienes',
      'Constitución de LLC o C/Corp en EEUU, obtención de EIN, cuenta bancaria, cumplimiento de presentaciones ante el IRS.'
    ]
  },
  impositiva: {
    icon: 'fa-solid fa-book-bookmark',
    title: 'Impositiva',
    items: [
      'Inscripciones ARCA, ingresos brutos, municipalidad',
      'Elaboración y presentación de declaraciones juradas mensuales (iva, ingresos brutos, convenio multilateral, F.931, canón municipal)',
      'Elaboración y presentación de declaraciones juradas anuales (Ganancias, bienes personales, ganancia mínima presunta, ingresos brutos)',
      'Inspecciones fiscales. Embargos',
      'Planes de facilidades de pago'
    ]
  },
  juridica: {
    icon: 'fa-solid fa-gavel',
    title: 'Jurídica',
    items: [
      'Constitución de Sociedades (S.A., S.R.L., S.A.S., entre otras)',
      'Registro de marcas y patentes',
      'Elaboración de contratos',
      'Asesoramiento en derecho empresarial'
    ]
  },
  financiera: {
    icon: 'fa-solid fa-chart-line',
    title: 'Financiera',
    items: [
      'Análisis de alternativas de inversión',
      'Elaboración de proyectos de inversión',
      'Administración de carteras de inversión',
      'Asesoramiento bancario'
    ]
  },
  comercio: {
    icon: 'fa-solid fa-ship',
    title: 'Comercio Exterior',
    items: [
      'Nos encargamos de unir la oferta exportable de Argentina, con las demandas globales de mercadería (Exportación)',
      'Búsqueda, análisis y gestión de compra de mercadería extranjera (Importación)',
      'Abrimos y analizamos mercados nacionales e internacionales',
      'Gestión y asesoramiento integral (normativa, clasificación arancelaria, documentación, despacho, logística, certificados, licencias, permisos, seguimientos, reintegros, entre otros)'
    ]
  },
  inmobiliaria: {
    icon: 'fa-solid fa-building',
    title: 'Inmobiliaria',
    items: [
      'Administración de consorcios',
      'Tasaciones de inmuebles',
      'Gestión de propiedades (alquiler y administración)',
      'Gestión documental',
      'Gestión de proyectos (desarrollo y coordinación de obras)'
    ]
  },
  higiene: {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Seguridad e Higiene',
    items: [
      'Elaboración de planes de evacuación',
      'Implementación de medidas preventivas',
      'Inspecciones para identificar peligros y condiciones inseguras',
      'Medición de factores de riesgo (iluminación, ruido, carga térmica)',
      'Estudios de cargas de fuego y eléctricos para prevención de incendios'
    ]
  },
  patrimonial: {
    icon: 'fa-solid fa-shield-halved',
    title: 'Seguridad Patrimonial',
    items: [
      'Identificación, análisis y evaluación de riesgos',
      'Elaboración del plan de gestión de riesgos (Diagnósticos, procedimientos y protocolos)',
      'CPTED (Crime Prevention Through Environmental Design - Prevención del crimen a través del diseño ambiental)',
      'Planificación de seguridad física (fija, móviles y escoltas) y electrónica (alarmas, cámaras, control de acceso)',
      'Planificación de sistemas y dispositivos exteriores (accesos, cercos, cierres, iluminación, muros, entre otros) e interiores (instalaciones, sensores, alarmas, control de accesos, monitoreo, sistemas biométricos, entre otros)',
      'Auditorías internas'
    ]
  },
  marketing: {
    icon: 'fa-solid fa-bullhorn',
    title: 'Marketing & Ventas',
    items: [
      'Definición de marca (Branding)',
      'Estrategias para alcanzar objetivos comerciales',
      'Gestión de redes sociales',
      'Diseño ly desarrollo web',
      'Diseño gráfico (logos, flyers, plantillas, tarjetas, cartelería, entre otros)'
    ]
  },
  seguros: {
    icon: 'fa-solid fa-file-contract',
    title: 'Seguros',
    items: [
      'Gestión de contratación de seguros patrimoniales (Automotor, comercio, hogar, etc)',
      'Gestión de contratación de seguros personales (Vida, ART, accidentes personales, etc)',
      'Gestión de contratación de seguros específicos (agropecuarios, responsabilidad civil, consorcio, caución, etc)'
    ]
  },
  automotor: {
    icon: 'fa-solid fa-car',
    title: 'Gestoría del automotor',
    items: [
      'Servicio integral de gestión y asesoramiento de documentación del automotor',
      'Patentamientos, transferencias, bajas',
      'Informes de dominio y jurídicos',
      'Cancelación de deudas de patentes',
      'Altas y bajas de motor con recupero'
    ]
  },
  coaching: {
    icon: 'fa-solid fa-comments',
    title: 'Coaching',
    items: [
      'Diagnóstico de perfil comunicacional y medición de clima post interveción',
      'Valor para la empresa. Reducción de la rotación de personal y mejora en la toma de decisiones bajo presión',
      'Células de acompañamiento grupal',
      'Talleres mensuales para asegurar que las habilidades se apliquen en el día a día',
      'Alineación de objetivos y mejora drástica en la comunicación interna'
    ]
  }
}

const overlay = document.getElementById('modalOverlay')
const card = document.getElementById('modalCard')
const closeBtn = document.getElementById('modalClose')
const modalIcon = document.getElementById('modalIcon')
const modalTitle = document.getElementById('modalTitle')
const modalList = document.getElementById('modalList')

function openModal(key) {
  const s = services[key]
  if (!s) return
  modalIcon.className = s.icon
  modalTitle.textContent = s.title
  modalList.innerHTML = s.items.map(i => `<li>${i}</li>`).join('')
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
  card.style.cursor = 'pointer'
  card.addEventListener('click', () => openModal(card.dataset.service))
})

closeBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal()
})

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal()
})

// Contact form
const form = document.getElementById('contactForm')
const success = document.getElementById('formSuccess')
form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })

  if (response.ok) {
    form.style.display = 'none'
    success.style.display = 'flex'
  }
}
