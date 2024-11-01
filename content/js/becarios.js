const becariosActuales = document.getElementById('becariosActuales');
const exBecarios = document.getElementById('exBecarios');
const becariosActualesContent = document.getElementById('becariosActualesContent');
const exBecariosContent = document.getElementById('exBecariosContent');

const actuales = [
  {
    titulo: "Residencia Oncológica Clínica",
    multiple: true,
    categorias: [
      {
        titulo: "Primer Año",
        becarios: [
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Cielo Vargas",
            nombre: "Dr. Cielo Vargas",
            anios: "2022-2025",
            lugar: "Instituto Alexander Fleming, CABA"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Dulce Amargura",
            nombre: "Dra. Dulce Amargura",
            anios: "2022-2026",
            lugar: "Instituto Alexander Fleming, CABA"
          },
        ],
      },
      {
        titulo: "Segundo Año",
        becarios: [
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Carlos Ramírez",
            nombre: "Dr. Carlos Ramírez",
            anios: "2022-2025",
            lugar: "Instituto Alexander Fleming, CABA"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Renata Ferrari",
            nombre: "Dra. Renata Ferrari",
            anios: "2022-2025",
            lugar: "Instituto Alexander Fleming, CABA"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Carlos Palmes",
            nombre: "Dr. Carlos Palmes",
            anios: "2022-2025",
            lugar: "Hospital Alta Complejidad"
          },
        ],
      },
      {
        titulo: "Tercer Año",
        becarios: [
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Dana Nuñez",
            nombre: "Dra. Dana Nuñez",
            anios: "2022-2025",
            lugar: "Hospital Alta Complejidad"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Marcos Daniel Boric",
            nombre: "Dr. Marcos Daniel Boric",
            anios: "2022-2025",
            lugar: "Hospital Alta Complejidad"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Carla Cataldi",
            nombre: "Dra. Carla Cataldi",
            anios: "2022-2026",
            lugar: "Instituto Alexander Fleming, CABA"
          },
        ],
      },
    ]
  },
  {
    titulo: "Fellowship en Onco-Hematología",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "Foto de Dra. Josefina Troccoli",
        nombre: "Dra. Josefina Troccoli",
        anios: "2023-2025",
        lugar: "Instituto Alexander Fleming, CABA"
      },
      {
        img: "Ejemplo-Becario.png",
        alt: "Foto de Dr. Juan Pérez",
        nombre: "Dr. Juan Pérez",
        anios: "2022-2024",
        lugar: "Instituto Alexander Fleming, CABA"
      },
    ],
  },
  {
    titulo: "Fellowship en Cirugía Torácica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "",
        anios: "",
        lugar: ""
      },
    ],
  },
  {
    titulo: "Fellowship en Urología Oncológica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "",
        anios: "",
        lugar: ""
      },
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "",
        anios: "",
        lugar: ""
      },
    ],
  },
  {
    titulo: "Fellowship en Ortopedia Oncológica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "",
        anios: "",
        lugar: ""
      },
    ],
  },
  {
    titulo: "Residencia en Mastología",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "",
        anios: "",
        lugar: ""
      },
    ],
  },
];

for (let actual of actuales) {
  becariosActualesContent.innerHTML += `
    <h2 class="w-100 titleUnderline">
      <span>${actual.titulo}</span>
      Residencia Oncológica Clínica
      <span class="greenUnderlineTitle"></span>
    </h2>
    `;
  if (actual.multiple) {
    for (let categoria of actual.categorias) {
      becariosActualesContent.innerHTML += `<h3>${categoria.titulo}</h3>`;
      for (let becario of categoria.becarios) {
        becariosActualesContent.innerHTML += `
          <div class="becarioCard">
            <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
            <div class="becarioInfo">
              <p class="nombre">${becario.nombre}</p>
              <p class="anios">${becario.anios}</p>
              <p class="lugar">${becario.lugar}</p>
            </div>
          </div>
        `;
      }
    }
  } else {
    for (let becario of actual.becarios) {
      becariosActualesContent.innerHTML += `
        <div class="becarioCard">
          <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
          <div class="becarioInfo">
            <p class="nombre">${becario.nombre}</p>
            <p class="anios">${becario.anios}</p>
            <p class="lugar">${becario.lugar}</p>
          </div>
        </div>
      `;
    }
  }
}

// Función para mostrar los becarios actuales y ocultar los ex becarios
function mostrarBecariosActuales() {
  becariosActuales.classList.add('active');
  becariosActuales.classList.remove('inactive');
  exBecarios.classList.add('inactive');
  exBecarios.classList.remove('active');
  becariosActualesContent.classList.add('activeContent');
  exBecariosContent.classList.remove('activeContent');
}

// Función para mostrar los ex becarios y ocultar los becarios actuales
function mostrarExBecarios() {
  exBecarios.classList.add('active');
  exBecarios.classList.remove('inactive');
  becariosActuales.classList.add('inactive');
  becariosActuales.classList.remove('active');
  exBecariosContent.classList.add('activeContent');
  becariosActualesContent.classList.remove('activeContent');
}

// Eventos para los botones
becariosActuales.addEventListener('click', mostrarBecariosActuales);
exBecarios.addEventListener('click', mostrarExBecarios);