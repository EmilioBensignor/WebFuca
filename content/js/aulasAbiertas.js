// Constantes
const caracteristicasContainer = document.getElementById("caracteristicasContainer");
const colegiosContainer = document.getElementById("colegiosContainer");
const linksContainer = document.getElementById("linksContainer");
const trabajosAlumnosContenedor = document.getElementById("trabajosAlumnosContenedor");
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
  "Boston College",
  "Chaltel College",
  "Colegio Acción Educativa Personalizada",
  "Colegio Ana María Mogas",
  "Colegio Argentina del Oeste",
  "Colegio Belgrano Day's School",
  "Colegio Belgrano Uno",
  "Colegio Boston College",
  "Colegio Buen Consejo",
  "Colegio Buenos Aires"
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
      <div>
        <p>${caracteristicas[caracteristica].texto}</p>
        <p class="font-weight-bold">${caracteristicas[caracteristica].dato}</p>
      </div>
    </article>
  `;
}

// Colegios
for (let colegio = 0; colegio < colegios.length; colegio++) {
  colegiosContainer.innerHTML += `
    <p>${colegios[colegio]}</p>
  `;
}

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
    });
  }

  if (document.querySelector('.swiperAcompanan')) {
    const swiperAcompanan = new Swiper('.swiperAcompanan', {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }

  // Rest of your code
});


for (let trabajo = 0; trabajo < trabajosAlumnos.length; trabajo++) {
  trabajosAlumnosContenedor.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/img/aulasAbiertas/Dibujo-Alumnos-${trabajosAlumnos[trabajo]}.png" alt="Trabajo Alumnos" />
    </div>
  `;
}

for (let logo = 0; logo < acompanan.length; logo++) {
  acompananContenedor.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/img/aulasAbiertas/Icon-${acompanan[logo].img}.svg" alt="${acompanan[logo].alt}" />
    </div>
  `;
}