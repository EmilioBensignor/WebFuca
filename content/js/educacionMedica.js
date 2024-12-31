const formacionesContainer = document.getElementById("formacionesContainer");

let formas = [
  {
    link: "oncologia-clinica",
    img: "oncoClinica",
    texto: "Residencia en Oncología clínica",
  },
  {
    link: "mastologia",
    img: "mastologia",
    texto: "Residencia en Mastología",
  },
  {
    link: "onco-hematologia",
    img: "hematologia",
    texto: "Fellowship en Onco-Hematología",
  },
  {
    img: "urologia",
    texto: "Fellowship en Urología Oncológica",
  },
  {
    img: "ortopedia",
    texto: "Fellowship en Ortopedía Oncológica",
  },
  {
    img: "torax",
    texto: "Fellowship en Cirugía Torácica",
  },
  {
    img: "psico",
    texto: "Fellowship en Psico Oncología",
  },
];

for (let forma = 0; forma < formas.length; forma++) {
  if (formas[forma].link) {
    formacionesContainer.innerHTML += `
    <a class="forma" href="/formaciones?seccion=${formas[forma].link}">
      <div class="bgImgContain ${formas[forma].img}"></div>
      <p>${formas[forma].texto}</p>
    </a>
  `;
  } else {
    formacionesContainer.innerHTML += `
    <div class="forma">
      <div class="bgImgContain ${formas[forma].img}"></div>
      <p>${formas[forma].texto}</p>
    </div>
  `;
  }
}