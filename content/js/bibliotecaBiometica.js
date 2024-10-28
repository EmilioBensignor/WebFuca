const accionesContainer = document.getElementById("accionesContainer");

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

for (let accion = 0; accion < acciones.length; accion++) {
  accionesContainer.innerHTML += `
    <div>
      <div class="iconoAccion ${acciones[accion].img}"></div>
      <p>${acciones[accion].texto}</p>
    </div>
  `;
}