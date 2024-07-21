// Constantes
const mobileMenu = document.getElementById("mobile-menu");
const desktopMenu = document.getElementById("desktop-menu");
const menuDesktopList = document.getElementById("menuDesktopList");
const redes = document.getElementById("redes");
const pilares = document.getElementById("pilares");
const filtrosNovedades = document.getElementById("filtrosNovedades");
const novedadesContainer = document.getElementById("novedadesContainer");
const acompanan = document.getElementById("acompanan");
const redesFooter = document.getElementById("redesFooter");
const menuFooterMobile = document.getElementById("menuFooterMobile");
const contactateList = document.getElementById("contactateList");
const contactateListDesktop = document.getElementById("contactateListDesktop");
const menuFooterDesktop = document.getElementById("menuFooterDesktop");
const menuFooterColumnList = document.getElementById("menuFooterColumnList");

//Arrays
const menu = [
  {
    titulo: "EDUCACIÓN MÉDICA",
    tituloMinus: "Educación Médica",
    paginas: [
      {
        nombre: "Biblioteca biomédica",
        link: "#",
        info: [
          "Presentación de la biblioteca",
          "REDIO",
          "Información  y comunicación científica"
        ],
      },
      {
        nombre: "Formación Médica",
        link: "#",
        info: [
          "Residencia en Oncología Clínica",
          "Residencia en Mastología",
          "Fellowship en Onco-Hematología",
          "Fellowship en Urología Oncológica",
          "Fellowship en Ortopedia Oncológica",
          "Fellowship en Cirugía Torácica",
          "Fellowship en Psico-Oncología",
          "Residencia en DxI"
        ],
      },
      {
        nombre: "Becarios y Ex Becarios",
        link: "#",
        info: [
          "Nuestros Becarios y Ex Becarios"
        ],
      },
      {
        nombre: "Cursos",
        link: "#",
        info: [
          "Campus virtual",
          "Curso de Oncología Molecular",
          "Capacitaciones"
        ],
      },
    ],
  },
  {
    titulo: "INVESTIGACIÓN",
    tituloMinus: "Investigación",
    paginas: [
      {
        nombre: "Centro de investigaciones Oncológicas",
        link: "#",
        info: [
          "Presentación del CIO",
          "Proyectos de investigación",
          "Actividad académica",
          "Publicaciones científicas",
          "Premios recibidos"
        ],
      },
    ],
  },
  {
    titulo: "INFORMATE",
    tituloMinus: "Informate",
    paginas: [
      {
        nombre: "Aulas Abiertas",
        link: "#",
        info: [
          "Sobre Aulas Abiertas",
          "Inscribí a tu colegio"
        ],
      },
      {
        nombre: "Información del cáncer",
        link: "#",
        info: [
          "¿Qué es el cáncer?",
          "La importancia de conocer sobre el cáncer",
          "Medidas de prevención",
          "Tipos de cáncer",
          "Ensayos clínicos",
          "Cáncer hereditario",
          "Hábitos saludables",
          "Nutrición",
          "Psico-Oncología",
          "Glosario",
        ],
      },
      {
        nombre: "Charlas de profesionales",
        link: "#",
        info: [
          "Vivos en Instagram",
          "Charlas y talleres",
          "Inscripción "
        ],
      },
    ],
  },
  {
    titulo: "CONOCENOS",
    tituloMinus: "Conocenos",
    paginas: [
      {
        nombre: "Quiénes somos",
        link: "#",
        info: [
          "Consejo de administración",
          "Equipo",
          "Voluntarios"
        ],
      },
      {
        nombre: "Nuestra historia",
        link: "#",
        info: [
          "Misión",
          "Historia",
          "Memoria y balance"
        ],
      },
      {
        nombre: "Novedades",
        link: "#",
        info: [
          "Últimas noticias",
          "Suscribite al newsletter",
          "Cena de recaudación de fondos",
          "Eventos y campañas"
        ],
      },
      {
        nombre: "Donaciones",
        link: "#",
        info: [
          "Doná a FUCA",
          "Aumentá tu donación",
          "Solicitá tu recibo anual",
          "Donaciones en especie"
        ],
      },
      {
        nombre: "Espacio FUCA Online",
        link: "#",
        info: [],
      },
      {
        nombre: "Contacto",
        link: "#",
        info: [],
      },
    ],
  },
];
const iconosRedes = [
  {
    img: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.2513 1.74603C9.69841 1.19039 9.03991 0.749834 8.31415 0.450065C7.5884 0.150296 6.80992 -0.00268806 6.02412 3.57417e-05C2.73166 3.57417e-05 0.0482413 2.67003 0.0482413 5.94602C0.0482413 6.99601 0.325628 8.01601 0.844221 8.91601L0 12L3.16583 11.172C4.0402 11.646 5.02312 11.898 6.02412 11.898C9.31658 11.898 12 9.22801 12 5.95202C12 4.36202 11.3789 2.86803 10.2513 1.74603ZM6.02412 10.89C5.13166 10.89 4.25729 10.65 3.49146 10.2L3.31055 10.092L1.42915 10.584L1.92965 8.76001L1.80905 8.57401C1.31321 7.78619 1.04993 6.87556 1.04925 5.94602C1.04925 3.22203 3.2804 1.00203 6.01809 1.00203C7.34472 1.00203 8.59297 1.51803 9.52764 2.45403C9.99044 2.91241 10.3572 3.45762 10.6067 4.05808C10.8561 4.65853 10.9833 5.30229 10.9809 5.95202C10.993 8.67601 8.76181 10.89 6.02412 10.89ZM8.74975 7.19401C8.59899 7.12201 7.86332 6.76202 7.73065 6.70802C7.59196 6.66002 7.49548 6.63602 7.39296 6.78002C7.29045 6.93002 7.00704 7.26601 6.92261 7.36201C6.83819 7.46401 6.74774 7.47601 6.59698 7.39801C6.44623 7.32601 5.96382 7.16401 5.39698 6.66002C4.95075 6.26402 4.65528 5.77802 4.56482 5.62802C4.4804 5.47802 4.55276 5.40002 4.63116 5.32202C4.69749 5.25602 4.78191 5.14802 4.85427 5.06402C4.92663 4.98002 4.95678 4.91402 5.00502 4.81802C5.05327 4.71602 5.02915 4.63202 4.99296 4.56002C4.95678 4.48802 4.65528 3.75602 4.53467 3.45603C4.41407 3.16803 4.28744 3.20403 4.19699 3.19803H3.90754C3.80502 3.19803 3.64824 3.23403 3.50955 3.38403C3.37688 3.53403 2.99095 3.89402 2.99095 4.62602C2.99095 5.35802 3.52764 6.06602 3.6 6.16202C3.67236 6.26402 4.65528 7.76401 6.15075 8.40601C6.50653 8.56201 6.78392 8.65201 7.00101 8.71801C7.35678 8.83201 7.68241 8.81401 7.94171 8.77801C8.23116 8.73601 8.82814 8.41801 8.94874 8.07001C9.07538 7.72201 9.07538 7.42801 9.03317 7.36201C8.99095 7.29601 8.9005 7.26601 8.74975 7.19401Z' fill='#17AF95'/></svg>",
    alt: "Icono Whatsapp",
  },
  {
    img: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.00048 6C4.00048 4.89547 4.89567 3.99984 6.00024 3.99984C7.10481 3.99984 8.00048 4.89547 8.00048 6C8.00048 7.10453 7.10481 8.00016 6.00024 8.00016C4.89567 8.00016 4.00048 7.10453 4.00048 6ZM2.91919 6C2.91919 7.7016 4.29857 9.08093 6.00024 9.08093C7.70191 9.08093 9.08129 7.7016 9.08129 6C9.08129 4.2984 7.70191 2.91907 6.00024 2.91907C4.29857 2.91907 2.91919 4.2984 2.91919 6ZM8.48324 2.79691C8.48308 3.19456 8.80532 3.51704 9.20298 3.5172C9.60064 3.51736 9.92313 3.19513 9.92329 2.79749C9.92345 2.39984 9.60121 2.07736 9.20355 2.0772H9.20326C8.80579 2.07739 8.48358 2.39946 8.48324 2.79691ZM3.57614 10.8839C2.99114 10.8572 2.67318 10.7598 2.46187 10.6775C2.18174 10.5684 1.98186 10.4385 1.7717 10.2287C1.56155 10.0188 1.43147 9.81912 1.32288 9.53899C1.24051 9.32779 1.14307 9.00974 1.11648 8.42477C1.08739 7.79232 1.08158 7.60234 1.08158 6.00005C1.08158 4.39776 1.08787 4.2083 1.11648 3.57533C1.14312 2.99035 1.24128 2.67293 1.32288 2.4611C1.43195 2.18098 1.56184 1.9811 1.7717 1.77096C1.98157 1.56082 2.18126 1.43074 2.46187 1.32216C2.67308 1.23979 2.99114 1.14235 3.57614 1.11576C4.20862 1.08667 4.39861 1.08086 6.00024 1.08086C7.60187 1.08086 7.79206 1.08715 8.42506 1.11576C9.01006 1.1424 9.32749 1.24056 9.53933 1.32216C9.81946 1.43074 10.0193 1.5611 10.2295 1.77096C10.4396 1.98082 10.5693 2.18098 10.6783 2.4611C10.7607 2.6723 10.8581 2.99035 10.8847 3.57533C10.9138 4.2083 10.9196 4.39776 10.9196 6.00005C10.9196 7.60234 10.9138 7.79179 10.8847 8.42477C10.8581 9.00974 10.7602 9.3277 10.6783 9.53899C10.5693 9.81912 10.4394 10.019 10.2295 10.2287C10.0196 10.4383 9.81946 10.5684 9.53933 10.6775C9.32812 10.7598 9.01006 10.8573 8.42506 10.8839C7.79258 10.9129 7.60259 10.9188 6.00024 10.9188C4.39789 10.9188 4.20842 10.9129 3.57614 10.8839ZM3.52646 0.036336C2.8877 0.065424 2.45122 0.166704 2.07003 0.315024C1.67527 0.468192 1.34108 0.67368 1.00713 1.00709C0.673179 1.3405 0.468211 1.6752 0.315037 2.06995C0.166711 2.45136 0.0654266 2.88758 0.0363375 3.52632C0.00676827 4.16606 0 4.37059 0 6C0 7.62941 0.00676827 7.83394 0.0363375 8.47368C0.0654266 9.11246 0.166711 9.54864 0.315037 9.93005C0.468211 10.3246 0.673227 10.6596 1.00713 10.9929C1.34103 11.3262 1.67527 11.5314 2.07003 11.685C2.45194 11.8333 2.8877 11.9346 3.52646 11.9637C4.16657 11.9928 4.37077 12 6.00024 12C7.62971 12 7.83425 11.9932 8.47402 11.9637C9.11283 11.9346 9.54902 11.8333 9.93045 11.685C10.325 11.5314 10.6594 11.3263 10.9934 10.9929C11.3273 10.6595 11.5318 10.3246 11.6854 9.93005C11.8338 9.54864 11.9355 9.11242 11.9641 8.47368C11.9932 7.83346 12 7.62941 12 6C12 4.37059 11.9932 4.16606 11.9641 3.52632C11.9351 2.88754 11.8338 2.45112 11.6854 2.06995C11.5318 1.67544 11.3268 1.34102 10.9934 1.00709C10.6599 0.673152 10.325 0.468192 9.93093 0.315024C9.54902 0.166704 9.11278 0.064944 8.4745 0.036336C7.83473 0.007248 7.63019 0 6.00072 0C4.37125 0 4.16657 0.006768 3.52646 0.036336Z' fill='#17AF95'/></svg>",
    alt: "Icono Instagram",
  },
  {
    img: "<svg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.23685 1.90275C4.44518 1.90275 4.22013 2.23275 4.22013 2.96025V4.161H6.3258L6.11831 6.10613H4.21973V12H1.69986V6.10575H0V4.16062H1.70066V2.99362C1.70066 1.03125 2.53782 0 4.88611 0C5.39008 0 5.99301 0.0375 6.35294 0.08475V1.911' fill='#17AF95'></svg>",
    alt: "Icono Facebook",
  },
  {
    img: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 1.33818C0 0.950296 0.135139 0.630296 0.405405 0.378182C0.675672 0.126057 1.02703 0 1.45946 0C1.88417 0 2.2278 0.124114 2.49035 0.372364C2.76061 0.628364 2.89575 0.961932 2.89575 1.37309C2.89575 1.74546 2.76448 2.05575 2.50193 2.304C2.23166 2.56 1.87645 2.688 1.43629 2.688H1.42471C0.999996 2.688 0.656375 2.56 0.393822 2.304C0.13127 2.048 0 1.72606 0 1.33818ZM0.150579 11.52V3.74691H2.72201V11.52H0.150579ZM4.14672 11.52H6.71815V7.17964C6.71815 6.90812 6.74904 6.69866 6.81081 6.55128C6.91892 6.28751 7.08301 6.06448 7.30309 5.88218C7.52317 5.69988 7.79922 5.60873 8.13127 5.60873C8.99614 5.60873 9.42857 6.19442 9.42857 7.36582V11.52H12V7.06328C12 5.91515 11.7297 5.04437 11.1892 4.45091C10.6486 3.85746 9.93437 3.56073 9.04633 3.56073C8.05019 3.56073 7.27413 3.99127 6.71815 4.85237V4.87564H6.70656L6.71815 4.85237V3.74691H4.14672C4.16216 3.99515 4.16988 4.76702 4.16988 6.06255C4.16988 7.35806 4.16216 9.17721 4.14672 11.52Z' fill='#17AF95'/></svg>",
    alt: "Icono LinkedIn",
  },
  {
    img: "<svg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.51916C12 1.1284 10.8296 0 9.38701 0H2.61292C1.17038 0 0 1.1284 0 2.51916V5.58084C0 6.9716 1.17038 8.1 2.61292 8.1H9.38701C10.8296 8.1 12 6.9716 12 5.58084V2.51916ZM7.72524 4.20283L5.02511 5.63179C4.90887 5.69292 4.80316 5.61142 4.80316 5.48151V2.54972C4.80316 2.41981 4.91145 2.3383 5.03034 2.40198L7.75162 3.90482C7.87051 3.97104 7.85206 4.13915 7.73053 4.20283H7.72524Z' fill='#17AF95'/></svg>",
    alt: "Icono Youtube",
  },
];
const nuestrosPilares = [
  {
    fondo: "centroInvestigacionesOncologicas",
    titulo: "Centro de Investigaciones Oncológicas (CIO)",
    text: "Nuestros investigadores trabajan para innovar en los tratamientos para el cáncer.",
  },
  {
    fondo: "educacionMedicaOncologia",
    titulo: "Educación médica y especialización en oncología",
    text: "Programas de especialización médica en Oncología. Conocé a nuestros becarios y ex becarios.",
  },
  {
    fondo: "aulasAbiertasConcientizacion",
    titulo: "Aulas abiertas y concientización de la comunidad",
    text: "Clases presenciales y virtuales, materiales informativos, charlas y talleres, vivos en Instagram.",
  },
  {
    fondo: "bibliotecaBiomedicaProfesionalesSalud",
    titulo: "Biblioteca biomédica para profesionales de la salud",
    text: "Un servicio de información científica diseñado como biblioteca activa y esencial.",
  },
];
const filtros = [
  "Cáncer de mama",
  "Investigaciones CIO",
  "Redio",
  "Campus virtual",
  "Cena a beneficio"
];
const novedades = [
  {
    mes: "MAYO",
    dia: "06",
    anio: "2024",
    texto: "El próximo 6 de mayo a las 18s h te invitamos a participar del vivo deInstagram que realizaremos junto al Dr. GonzaloGiornelli sobre cáncer de ovario.",
    cta: "INSCRIBIRME",
  },
  {
    mes: "JUNIO",
    dia: "20",
    anio: "2024",
    texto: "El próximo 20 de junio a las 20 hs te invitamos a participar del vivo de Instagram que realizaremos junto al Dr. GonzaloGiornelli sobre cáncer de ovario.",
    cta: "LEER MÁS",
  },
  {
    mes: "AGOSTO",
    dia: "15",
    anio: "2024",
    texto: "El próximo 15 de agosto a las 18 hs te invitamos a participar del vivo de Instagram que realizaremos junto al Dr. GonzaloGiornelli sobre cáncer de ovario.",
    cta: "INFÓRMATE",
  },
  {
    mes: "SEPTIEMBRE",
    dia: "28",
    anio: "2024",
    texto: "El próximo 28 de septiembre a las 18 hs te invitamos a participar del vivo de Instagram que realizaremos junto al Dr. GonzaloGiornelli sobre cáncer de ovario.",
    cta: "INSCRIBIRME",
  },
];
// Cambiar nombres
const nosAcompanan = [
  {
    img: "Logo-AAOC.png",
    link: "#",
    alt: "Logo"
  },
  {
    img: "Logo-SAMastologia.png",
    link: "#",
    alt: "Logo"
  },
  {
    img: "Logo-Salesforce.png",
    link: "#",
    alt: "Logo"
  },
  {
    img: "Logo-AAOC.png",
    link: "#",
    alt: "Logo"
  },
  {
    img: "Logo-SAMastologia.png",
    link: "#",
    alt: "Logo"
  },
  {
    img: "Logo-Salesforce.png",
    link: "#",
    alt: "Logo"
  },
];
const contactate = [
  {
    icon: "iconEmail",
    texto: "info@fuca.com.ar",
  },
  {
    icon: "iconTelefono",
    texto: "Oficina: +54 9 4047-5040",
  },
  {
    icon: "iconTelefono",
    texto: "Espacio FUCA: +54 9 6188-8929",
  },
];

// Nav Mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', function () {
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
      overlay.style.display = 'none';
    } else {
      mobileMenu.style.display = 'flex';
      overlay.style.display = 'flex';
    }
  });

  overlay.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    overlay.style.display = 'none';
  });
});

for (let navItemMobile = 0; navItemMobile < menu.length; navItemMobile++) {
  let paginasFucaMobile = "";
  for (let pagina = 0; pagina < menu[navItemMobile].paginas.length; pagina++) {
    paginasFucaMobile += `<li><a href="${menu[navItemMobile].paginas[pagina].link}" class="navLink text-black">${menu[navItemMobile].paginas[pagina].nombre}</a></li>`;
  }

  mobileMenu.innerHTML += `
    <div class="column">
      <div class="navTitle" onclick="toggleMenuNav(${navItemMobile})">
        <div class="titleUnderline">
          <p class="text-primary font-weight-bold">${menu[navItemMobile].titulo}</p>
          <span class="underlineNav greenUnderlineTitle"></span>
        </div>
        <div class="iconFlecha iconFlechaNav flexCenter bg-white">
          <img src="/content/images/Icon-Flecha-Desplegable.svg" alt="Flecha Toggle Desplegable" id="iconFlechaNav${navItemMobile}" />
        </div>
      </div>
      <ul id="menuNavColumnList${navItemMobile}" class="menuNavColumnList">
        ${paginasFucaMobile}
      </ul>
    </div>
  `;
};

const donaHoyMobile = document.createElement('a');
donaHoyMobile.href = "#";
donaHoyMobile.classList.add('primaryButton');
donaHoyMobile.classList.add('btnNav');
donaHoyMobile.textContent = "DONÁ HOY";

mobileMenu.appendChild(donaHoyMobile);

function toggleMenuNav(index) {
  const menuList = document.getElementById(`menuNavColumnList${index}`);
  const iconFlechaNav = document.getElementById(`iconFlechaNav${index}`);

  if (menuList) {
    if (menuList.classList.contains('show')) {
      menuList.style.maxHeight = menuList.scrollHeight + "px";
      requestAnimationFrame(() => {
        menuList.style.maxHeight = "0px";
      });
      menuList.classList.remove('show');
      if (iconFlechaNav) {
        iconFlechaNav.classList.remove('rotate');
      }
    } else {
      menuList.classList.add('show');
      menuList.style.maxHeight = menuList.scrollHeight + "px";
      requestAnimationFrame(() => {
        menuList.style.maxHeight = "500px";
      });
      if (iconFlechaNav) {
        iconFlechaNav.classList.add('rotate');
      }
    }
  }
}

// Nav Desktop
for (let navItemDesktop = 0; navItemDesktop < menu.length; navItemDesktop++) {
  let paginasFucaDesktop = "";
  for (let pagina = 0; pagina < menu[navItemDesktop].paginas.length; pagina++) {
    let infoPaginas = "";
    for (let info = 0; info < menu[navItemDesktop].paginas[pagina].info.length; info++) {
      infoPaginas += `
        <li>${menu[navItemDesktop].paginas[pagina].info[info]}</li>
      `;
    }
    paginasFucaDesktop += `
      <li class="subMenuLink">
        <div>
          <a href="${menu[navItemDesktop].paginas[pagina].link}" class="navLink text-black">
            ${menu[navItemDesktop].paginas[pagina].nombre}
          </a>
          <ul>
            ${infoPaginas}
          </ul>
        </div>
      </li>`;
  }

  menuDesktopList.innerHTML += `
    <ul class="menuDesktopList">
      <li class="menuDesktopItem">
        <div class="column">
          <p class="text-white font-weight-bold">${menu[navItemDesktop].tituloMinus}</p>
          <span class="underlineNavDesktop"></span>
        </div>
        <ul class="submenuDesktop">
          ${paginasFucaDesktop}
        </ul>
      </li>
    </ul>
  `;
}

  const donaHoyDesktop = document.createElement('a');
  donaHoyDesktop.href = "#";
  donaHoyDesktop.classList.add('secondaryButton');
  donaHoyDesktop.classList.add('btnNavDesktop');
  donaHoyDesktop.textContent = "DONÁ HOY";

  desktopMenu.appendChild(donaHoyDesktop);

  // Redes Hero
  for (let iconRed = 0; iconRed < iconosRedes.length; iconRed++) {
    redes.innerHTML += `
    <div class="iconRedes columnAlignCenter bg-white">
      ${iconosRedes[iconRed].img}
    </div>
  `;
  }

  // Nuestros pilares
  for (let pilar = 0; pilar < nuestrosPilares.length; pilar++) {
    pilares.innerHTML += `
  <div class="pilar column ga-05 bgImgCover ${nuestrosPilares[pilar].fondo}">
    <h3 class="text-white">${nuestrosPilares[pilar].titulo}</h3>
    <p class="text-white">${nuestrosPilares[pilar].text}</p>
  </div>
  `;
  }

  // Filtros novedades
  for (let filtro = 0; filtro < filtros.length; filtro++) {
    filtrosNovedades.innerHTML += `
    <button class="filtroNovedad">
      ${filtros[filtro]}
    </button>
  `;
  }

  document.querySelectorAll('.filtroNovedad').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected')
    })
  });

  // Novedades
  for (let novedad = 0; novedad < novedades.length; novedad++) {
    novedadesContainer.innerHTML += `
    <div class="novedad column">
      <div>
        <div class="headerNovedades bg-primary">
          <p class="text-white">${novedades[novedad].mes}</p>
          <p class="text-white">${novedades[novedad].dia}</p>
          <p class="text-white">${novedades[novedad].anio}</p>
        </div>
        <p class="contentNovedades">${novedades[novedad].texto}</p>
      </div>
      <div>
        <button class="novedadesBtn primaryButton">${novedades[novedad].cta}</button>
      </div>
    </div>
  `;
  }

  // Redes Footer
  for (let iconRed = 0; iconRed < iconosRedes.length; iconRed++) {
    redesFooter.innerHTML += `
    <div class="iconRedesFooter columnAlignCenter bg-white">
      ${iconosRedes[iconRed].img}
    </div>
  `;
  }

  // for (let logo = 0; logo < nosAcompanan.length; logo++) {
  //   acompanan.innerHTML += `
  //     <a href="${nosAcompanan[logo].link}" class="slideAcompanan rowCenter bg-white">
  //       <img src="/content/images/${nosAcompanan[logo].img}" alt="/content/images/${nosAcompanan[logo].alt}" />
  //     </a>
  //   `;
  // } 

  // Footer Mobile
  for (let menuItemMobile = 0; menuItemMobile < menu.length; menuItemMobile++) {
    let paginasFucaMobile = "";
    for (let pagina = 0; pagina < menu[menuItemMobile].paginas.length; pagina++) {
      paginasFucaMobile += `<li><a href="${menu[menuItemMobile].paginas[pagina].link}" class="text-white">${menu[menuItemMobile].paginas[pagina].nombre}</a></li>`;
    }

    menuFooterMobile.innerHTML += `
    <div class="menuFooterColumn column">
      <div class="footerTitle" onclick="toggleMenuFooter(${menuItemMobile})">
        <div class="titleUnderline">
          <p class="text-white font-weight-bold">${menu[menuItemMobile].titulo}</p>
          <span class="underlineFooter whiteUnderlineTitle"></span>
        </div>
        <div class="iconFlecha flexCenter bg-white">
          <img src="/content/images/Icon-Flecha-Desplegable.svg" alt="Flecha Toggle Desplegable" id="iconFlechaFooter${menuItemMobile}" />
        </div>
      </div>
      <ul id="menuFooterColumnList${menuItemMobile}" class="menuFooterColumnList">
        ${paginasFucaMobile}
      </ul>
    </div>
  `;
  }

  function toggleMenuFooter(index) {
    const menuList = document.getElementById(`menuFooterColumnList${index}`);
    const iconFlechaFooter = document.getElementById(`iconFlechaFooter${index}`);

    if (menuList) {
      if (menuList.classList.contains('show')) {
        menuList.style.maxHeight = menuList.scrollHeight + "px";
        requestAnimationFrame(() => {
          menuList.style.maxHeight = "0px";
        });
        menuList.classList.remove('show');
        if (iconFlechaFooter) {
          iconFlechaFooter.classList.remove('rotate');
        }
      } else {
        menuList.classList.add('show');
        menuList.style.maxHeight = menuList.scrollHeight + "px";
        requestAnimationFrame(() => {
          menuList.style.maxHeight = "500px";
        });
        if (iconFlechaFooter) {
          iconFlechaFooter.classList.add('rotate');
        }
      }
    }
  }

  for (let contactateItemMobile = 0; contactateItemMobile < contactate.length; contactateItemMobile++) {
    contactateList.innerHTML += `
  <div class="rowAlign ga-05">
    <div class="${contactate[contactateItemMobile].icon} bgImgContain"></div>
    <p class="contactateText text-white">${contactate[contactateItemMobile].texto}</p>
  </div>
  `;
  }

  // Footer Desktop
  for (let menuItemDesktop = 0; menuItemDesktop < menu.length; menuItemDesktop++) {
    let paginasFucaDesktop = "";
    for (let pagina = 0; pagina < menu[menuItemDesktop].paginas.length; pagina++) {
      paginasFucaDesktop += `<li><a href="${menu[menuItemDesktop].paginas[pagina].link}" class="text-white">${menu[menuItemDesktop].paginas[pagina].nombre}</a></li>`;
    }

    menuFooterDesktop.innerHTML += `
    <div class="menuFooterColumn column">
      <div class="titleUnderline">
        <p class="text-white font-weight-bold">${menu[menuItemDesktop].titulo}</p>
        <span class="underlineFooter whiteUnderlineTitle"></span>
      </div>
      <ul id="menuFooterColumnList" class="menuFooterColumnList column ga-05 mt-05">
        ${paginasFucaDesktop}
      </ul>
    </div>
  `;
  }

  for (let contactateItemDesktop = 0; contactateItemDesktop < contactate.length; contactateItemDesktop++) {
    contactateListDesktop.innerHTML += `
  <div class="rowAlign ga-05">
    <div class="${contactate[contactateItemDesktop].icon} bgImgContain"></div>
    <p class="contactateText text-white">${contactate[contactateItemDesktop].texto}</p>
  </div>
  `;
  }