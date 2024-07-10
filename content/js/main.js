const redes = document.getElementById("redes");
const pilares = document.getElementById("pilares");
const filtrosNovedades = document.getElementById("filtrosNovedades");
const novedadesContainer = document.getElementById("novedadesContainer");

const iconosRedes = [
  {
    img: "Icon-Whatsapp",
    alt: "Icono Whatsapp",
  },
  {
    img: "Icon-Instagram",
    alt: "Icono Instagram",
  },
  {
    img: "Icon-Facebook",
    alt: "Icono Facebook",
  },
  {
    img: "Icon-LinkedIn",
    alt: "Icono LinkedIn",
  },
  {
    img: "Icon-Youtube",
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

for (let iconRed = 0; iconRed < iconosRedes.length; iconRed++) {
  redes.innerHTML += `
    <div class="iconRedes columnAlignCenter bg-white">
      <img src="./content/images/${iconosRedes[iconRed].img}.svg" alt="${iconosRedes[iconRed].alt}" />
    </div>
  `;
}

for (let pilar = 0; pilar < nuestrosPilares.length; pilar++) {
  pilares.innerHTML += `
  <div class="pilar column ga-05 bgImgCover ${nuestrosPilares[pilar].fondo}">
    <h3 class="text-white">${nuestrosPilares[pilar].titulo}</h3>
    <p class="text-white">${nuestrosPilares[pilar].text}</p>
  </div>
  `;
}

for (let filtro = 0; filtro < filtros.length; filtro++) {
  filtrosNovedades.innerHTML += `
    <button class="filtroNovedad">
      ${filtros[filtro]}
    </button>
  `;
}

for (let novedad = 0; novedad < novedades.length; novedad++) {
  novedadesContainer.innerHTML += `
    <div>
      <div class="headerNovedades bg-primary">
        <p class="text-white">${novedades[novedad].mes}</p>
        <p class="text-white">${novedades[novedad].dia}</p>
        <p class="text-white">${novedades[novedad].anio}</p>
      </div>
      <div>
        <p class="contentNovedades">${novedades[novedad].texto}</p>
        <button class="novedadesBtn primaryButton">${novedades[novedad].cta}</button>
      </div>
    </div>
  `;
}

document.querySelectorAll('.filtroNovedad').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('selected')
  })
});