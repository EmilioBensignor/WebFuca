const accionesContainer = document.getElementById("accionesContainer");
const linksRedioContainer = document.getElementById("linksRedioContainer");
const equipoContainer = document.getElementById("equipoContainer");
const colaboradoresContainer = document.getElementById("colaboradoresContainer");

let acciones = [
  {
    img: "AccionRedes",
    texto: "Usar tecnologías innovadoras para la mejora continua de la transferencia de información a los usuarios finales.",
  },
  {
    img: "AccionLibros",
    texto: "Promover la biblioteca académica hacia los usuarios reales y potenciales, respecto a los servicios que ofrece.",
  },
  {
    img: "AccionCompartir",
    texto: "Gestionar eficazmente los recursos de información, facilitar el acceso y la difusión del material documental.",
  },
  {
    img: "AccionArchivos",
    texto: "Apoyar en la obtención y acceso a la información a las comunidades de usuarios.",
  },
  {
    img: "AccionRed",
    texto: "Participar en el desarrollo de programas de cooperación con otras instituciones, a fin de establecer mecanismos que mejoren los sistemas de intercambio de información científica entre las bibliotecas del área de la Salud.",
  },
  {
    img: "AccionDialogo",
    texto: "Colaboración y participación docente en programas propios o de distintos Departamentos del Instituto.",
  },
];
let linksRedio = [
  {
    link: "/content/img/bibliotecaBiomedica/REDIO/REDIO-Abril-Junio-2024.pdf",
    meses: "ABRIL-JUNIO",
    anio: "2024",
  },
  {
    link: "/content/img/bibliotecaBiomedica/REDIO/REDIO-Enero-Marzo-2024.pdf",
    meses: "ENERO-MARZO",
    anio: "2024",
  },
  {
    link: "/content/img/bibliotecaBiomedica/REDIO/REDIO-Octubre-Diciembre-2023.pdf",
    meses: "OCTUBRE-DICIEMBRE",
    anio: "2023",
  },
  {
    link: "/content/img/bibliotecaBiomedica/REDIO/REDIO-Julio-Septiembre-2023.pdf",
    meses: "JULIO-SEPTIEMBRE",
    anio: "2023",
  },
];
let equipo = [
  {
    nombre: "Prof. María Luisa Poljak",
    rol: "Coordinadora general",
  },
  {
    nombre: "DG. Daniela Callegari",
    rol: "Coordinadora en comunicación",
  },
  {
    nombre: "Dr. Reinaldo Chacón",
    rol: "Asesor académico",
  },
  {
    nombre: "Dr. José Mordoh",
    rol: "Asesor científico",
  },
];
let colaboradores = [
  {
    nombre: "Dr. Martín Ángel",
    rol: "Asesor médico y representante formación médica",
  },
  {
    nombre: "Dra. Ayelén Pesce Viglietti",
    rol: "Representante Centro de Investigaciones Oncológicas CIO",
  },
  {
    nombre: "Servicios del Instituto Alexander Fleming",
  },
];

for (let accion = 0; accion < acciones.length; accion++) {
  accionesContainer.innerHTML += `
    <div>
      <div class="iconoAccion ${acciones[accion].img}"></div>
      <p>${acciones[accion].texto}</p>
    </div>
  `;
}

for (let link = 0; link < linksRedio.length; link++) {
  linksRedioContainer.innerHTML += `
    <button onclick="openPDF('${linksRedio[link].link}')">
      <p>${linksRedio[link].meses}</p>
      <p>${linksRedio[link].anio}</p>
    </button>
  `;
}

for (let profesional = 0; profesional < equipo.length; profesional++) {
  equipoContainer.innerHTML += `
    <div class="w-100 equipo">
      <p>${equipo[profesional].nombre}</p>
      <p>${equipo[profesional].rol}</p>
    </div>
  `;
}

for (let colaborador = 0; colaborador < colaboradores.length; colaborador++) {
  if (colaboradores[colaborador].rol) {
    colaboradoresContainer.innerHTML += `
      <div class="w-100 colaborador">
        <p>${colaboradores[colaborador].nombre}</p>
        <p>${colaboradores[colaborador].rol}</p>
      </div>
    `;
  } else {
    colaboradoresContainer.innerHTML += `
      <div class="w-100 colaborador">
        <p>${colaboradores[colaborador].nombre}</p>
      </div>
    `;
  }
}

// PDF
function openPDF(link) {
  window.open(link, '_blank');
}