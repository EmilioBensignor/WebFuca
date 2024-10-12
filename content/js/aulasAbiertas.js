// Constantes
const caracteristicasContainer = document.getElementById("caracteristicasContainer");
const colegiosContainer = document.getElementById("colegiosContainer");
const cargarMas = document.getElementById("cargarMas");
const linksContainer = document.getElementById("linksContainer");
const trabajosAlumnosContenedor = document.getElementById("trabajosAlumnosContenedor");
const trabajosAlumnosDesktop = document.getElementById("trabajosAlumnosDesktop");
const acompananContenedor = document.getElementById("acompananContenedor");

// Arrays
const caracteristicas = [
  {
    img: "Aulas-Abiertas",
    alt: "Creación aulas abiertas",
    texto: "Aulas abiertas fue creada en",
    dato: "1997",
  },
  {
    img: "Alumnos-Participan",
    alt: "Alumnos que participan",
    texto: "Alumnos que participaron",
    dato: "15.710",
  },
  {
    img: "Colegios-Publicos-Privados",
    alt: "Colegios públicos y privados",
    texto: "Colegios públicos y privados",
    dato: "269",
  },
  {
    img: "Docentes-Capacitados",
    alt: "Docentes Capacitados",
    texto: "Docentes que se capacitaron",
    dato: "658",
  },
];
const colegios = [
  "Boston College", "Chaltel College",
  "Colegio Acción Educativa Personalizada",
  "Colegio Ana María Mogas",
  "Colegio Argentina del Oeste",
  "Colegio Belgrano Day's School",
  "Colegio Belgrano Uno",
  "Colegio Boston College",
  "Colegio Buen Consejo",
  "Colegio Buenos Aires",
  "Colegio Comercial N ° 31",
  "Colegio Del Arce",
  "Colegio Divina Providencia",
  "Colegio Esclavas del Sagrado Corazón",
  "Colegio Highland",
  "Colegio Hijas de Jesús",
  "Colegio Hipólito Vieytes",
  "Colegio Horacio Watson",
  "Colegio Hull Cordell - Highest College",
  "Colegio Inglés Horacio Watson",
  "Colegio Inmaculada Concepción de María",
  "Colegio Leonardo Sworn",
  "Colegio Liceo Nº 11 'Cornelio Saavedra'",
  "Colegio Liceo Nº 4",
  "Colegio Lincoln Hall",
  "Colegio Marianista",
  "Colegio Master College",
  "Colegio Nuestra Señora de la Merced",
  "Colegio Nuestra Señora de los Milagros",
  "Colegio Río de la Plata",
  "Colegio San Agustín",
  "Colegio San Gregorio El Ilumniador",
  "Colegio Santa Teresa de Jesús",
  "Colegio Scholem Aleijem",
  "Colegio Schönthal",
  "Colegio Santa Catalina de Belgrano",
  "Colegio Sarmiento",
  "Colegio Victoria S. A.",
  "E.N.E.T Sarmiento",
  "Escuela Argentina del Oeste",
  "Escuela Argentina General Belgrano",
  "Escuela Cangallo Schule",
  "Escuela Corazón Eucarístico de Jesús",
  "Escuela Comercial Nº 31 Naciones Unidas",
  "Escuela Del Pacífico",
  "Escuela de Enseñanza Media Nº 6 - Ituzaingó",
  "Escuela de Comercio N° 2 'Dr. Antonio Bermejo'",
  "Escuela de Comercio Nº 15 'Dra. Cecilia Grierson'",
  "Escuela Lenguas Vivas",
  "Escuela Manuel Belgrano H.H.M.M.",
  "Escuela Media de Ituzaingó N",
  "Escuela Nac. de Comercio Nº 32 'Dr. José L. Suárez'",
  "Escuela Normal Superior Nº 4",
  "Escuela Normal Superior Nº 5",
  "Escuela Normal Superior Nº 7 José María Torres",
  "Escuela Normal Superior Nº 12 de 15",
  "Escuela Normal Superior Nº 10 'Juan B. Alberdi'",
  "Escuela Normal Superior 'Estanislao S. Zeballos'",
  "Escuela Superior de Comercio Nº 3 'Hipólito Vieytes'",
  "Escuela Propuesta Actual",
  "Escuela Raggio",
  "Escuela Santa Catalina",
  "Escuela Sec. Integral Scholem Aleijem",
  "Instituto I.P.E.M. Nº 292, Adelia María (Córdoba)",
  "Instituto Adveniat",
  "Instituto Anunciación de María",
  "Instituto Ballester",
  "Instituto Beata Imelda",
  "Instituto Bede",
  "Instituto Carlos Pellegrini",
  "Instituto Casa de Jesús",
  "Instituto Colegio de Nuestra Señora",
  "Instituto Compañía de María",
  "Instituto Corazón Eucarístico de Jesús",
  "Instituto Corazón de Jesús",
  "Instituto de Educación Superior Toratenu",
  "Instituto de Vanguardia",
  "Instituto Dr. José Ingenieros",
  "Instituto Educacional Duayén",
  "Instituto Esquiú",
  "Instituto Espíritu Santo",
  "Instituto Euskal - Echea",
  "Instituto Jesús María de San Vicente de Paul",
  "Instituto José Hernández",
  "Instituto León XIII",
  "Instituto Madre del Buen Consejo",
  "Instituto Manuel Belgrano - Hnos. Maristas",
  "Instituto Marin",
  "Instituto Nuestra Señora de la Misericordia",
  "Instituto Nuevos Aires",
  "Instituto Patrocinio de San José",
  "Instituto San Ambrosio",
  "Instituto San Juan Iluminador",
  "Instituto San Nicolás",
  "Instituto San Rafael Hermanos",
  "Instituto Santa Rosa",
  "Instituto Sara C. de Eccleston",
  "Instituto Sarmiento",
  "Instituto Secundario Propuesta Actual",
  "Instituto Social Militar 'Dr. Dámaso Centeno'",
  "Instituto Técnico Don Orione",
  "Instituto Tomás Devoto",
  "Instituto Virgen del Valle",
  "Instituto Virgen Niña",
  "Saint Brendan's College",
  "Saint Edward's College",
  "Saint Gregory School",
  "Saint Leonard's College",
  "Saint Martin in the Fields School",
  "Saint Nicholas School",
  "Saint Peter's School"
];
const links = [
  {
    img: "inscribiImg",
    icon: "Inscribi-Colegio",
    alt: "Inscribi a tu colegio en Aulas Abiertas",
    titulo: "Inscribí a tu colegio en Aulas Abiertas",
    link: "#"
  },
  {
    img: "solicitaImg",
    icon: "Solicita-Guia",
    alt: "Solicita la guia de actividades para docentes",
    titulo: "Solicitá la guía de actividades para docentes",
    link: "#"
  },
];
const trabajosAlumnos = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];
const acompanan = [
  {
    img: "Msd",
    alt: "MSD",
  },
  {
    img: "Iaf",
    alt: "IAF",
  },
];

// Caracteristicas
for (let caracteristica = 0; caracteristica < caracteristicas.length; caracteristica++) {
  caracteristicasContainer.innerHTML += `
    <article class="caracteristica column ga-15">
      <img src="/content/img/aulasAbiertas/${caracteristicas[caracteristica].img}-icono.svg" alt="${caracteristicas[caracteristica].alt}">
      <div class="caracteristicaBody">
        <p>${caracteristicas[caracteristica].texto}</p>
        <p class="font-weight-bold">${caracteristicas[caracteristica].dato}</p>
      </div>
    </article>
  `;
}

// Colegios
let colegiosMostrados = 10;
let mobileColegios = window.innerWidth < 1080;

function mostrarColegios(inicio, fin) {
  for (let i = inicio; i < fin && i < colegios.length; i++) {
    const p = document.createElement('p');
    p.textContent = colegios[i];
    colegiosContainer.appendChild(p);
  }
}

function inicializarVistaColegios() {
  if (mobileColegios) {
    mostrarColegios(0, colegiosMostrados);
    cargarMas.style.display = 'block';
  } else {
    mostrarColegios(0, colegios.length);
    cargarMas.style.display = 'none';
  }
}

cargarMas.addEventListener('click', () => {
  const colegiosRestantes = colegios.length - colegiosMostrados;

  if (colegiosRestantes > 0) {
    mostrarColegios(colegiosMostrados, colegios.length);
    colegiosMostrados = colegios.length;
    cargarMas.style.display = 'none';
  }
});

inicializarVistaColegios();

// Links
for (let link = 0; link < links.length; link++) {
  linksContainer.innerHTML += `
    <article class="w-100 linkContainer">
      <div class="bgImgCover ${links[link].img}"></div>
      <div class="linkBody column bg-primary">
        <img src="/content/img/aulasAbiertas/${links[link].icon}-Icon.svg" alt="${links[link].alt}">
        <div>
          <p class="text-white">${links[link].titulo}</p>
          <img class="iconFlecha" src="/content/img/aulasAbiertas/Flecha-Derecha-Icon.svg" alt="Flecha Icon">
        </div>
      </div>
    </article>
  `;
}

// Swiper

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.swiperTrabajosAlumnos')) {
    const swiperTrabajosAlumnos = new Swiper('.swiperTrabajosAlumnos', {
      slidesPerView: "auto",
      spaceBetween: 16,
      breakpoints: {
        700: {
          spaceBetween: 80,
        }
      },
    });
  }

  if (document.querySelector('.swiperAcompanan')) {
    const swiperAcompanan = new Swiper('.swiperAcompanan', {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }
});


for (let trabajo = 0; trabajo < trabajosAlumnos.length; trabajo++) {
  trabajosAlumnosContenedor.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/img/aulasAbiertas/Dibujo-Alumnos-${trabajosAlumnos[trabajo]}.png" alt="Trabajo Alumnos" />
    </div>
  `;
}

for (let trabajoDesktop = 0; trabajoDesktop < trabajosAlumnos.length; trabajoDesktop++) {
  trabajosAlumnosDesktop.innerHTML += `
    <img class="trabajoAlumnoDesktop" src="/content/img/aulasAbiertas/Dibujo-Alumnos-${trabajosAlumnos[trabajoDesktop]}.png" alt="Trabajo Alumnos" />
  `;
}

for (let logo = 0; logo < acompanan.length; logo++) {
  acompananContenedor.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/img/aulasAbiertas/Icon-${acompanan[logo].img}.svg" alt="${acompanan[logo].alt}" />
    </div>
  `;
}