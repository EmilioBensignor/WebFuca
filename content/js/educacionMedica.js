const formacionesContainer = document.getElementById("formacionesContainer");

let formas = [
  {
    link: "#",
    img: "oncoClinica",
    texto: "Residencia en Oncología clínica",
  },
  {
    link: "#",
    img: "mastologia",
    texto: "Residencia en Mastología",
  },
  {
    link: "#",
    img: "hematologia",
    texto: "Fellowship en Onco-Hematología",
  },
  {
    link: "#",
    img: "urologia",
    texto: "Fellowship en Urología Oncológica",
  },
  {
    link: "#",
    img: "ortopedia",
    texto: "Fellowship en Ortopedía Oncológica",
  },
  {
    link: "#",
    img: "torax",
    texto: "Fellowship en Cirugía Torácica",
  },
  {
    link: "#",
    img: "psico",
    texto: "Fellowship en Psico Oncología",
  },
  {
    link: "#",
    img: "dxi",
    texto: "Residencia en DXI",
  },
];

for (let forma = 0; forma < formas.length; forma++) {
  formacionesContainer.innerHTML += `
    <a class="forma" href="${formas[forma].link}">
      <div class="bgImgContain ${formas[forma].img}"></div>
      <p>${formas[forma].texto}</p>
    </a>
  `;
}