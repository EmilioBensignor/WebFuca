const caracteristicasContainer = document.getElementById("caracteristicasContainer");

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