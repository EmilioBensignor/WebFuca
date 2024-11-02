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
            alt: "Foto de Dr. Gisela Vargas",
            nombre: "Dr. Gisela Vargas",
            anios: "2022-2026",
            lugar: "Instituto Alexander Fleming, CABA"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Dulce Alzugaray",
            nombre: "Dra. Dulce Alzugaray",
            anios: "2022-2026",
          },
        ],
      },
      {
        titulo: "Segundo Año",
        becarios: [
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Carlos Ramirez",
            nombre: "Dr. Carlos Ramirez",
            anios: "2022-2026",
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Romina Ferrari",
            nombre: "Dra. Romina Ferrari",
            anios: "2022-2026",
            lugar: "Instituto Alexander Fleming, CABA"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Carlos Palmés",
            nombre: "Dr. Carlos Palmés",
            anios: "2022-2026",
            lugar: "Hospital Alta Complejidad"
          },
        ],
      },
      {
        titulo: "Tercer Año",
        becarios: [
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Dana Narvaez",
            nombre: "Dra. Dana Narvaez",
            anios: "2022-2026",
            lugar: "Hospital Alta Complejidad"
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dr. Marcos Daniel Bortz",
            nombre: "Dr. Marcos Daniel Bortz",
            anios: "2022-2026",
          },
          {
            img: "Ejemplo-Becario.png",
            alt: "Foto de Dra. Greta Cataldi",
            nombre: "Dra. Greta Catani",
            anios: "2022-2026",
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
      },
      {
        img: "Ejemplo-Becario.png",
        alt: "Foto de Dra. Andrea Carolina Muñoz",
        nombre: "Dra. Andrea Carolina Muñoz",
        anios: "2023-2025",
      },
    ],
  },
  {
    titulo: "Fellowship en Cirugía Torácica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "Dr. Miguel Ángel Lima",
        anios: "2023-2025",
      },
    ],
  },
  {
    titulo: "Fellowship en Urología Oncológica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "Dra. Tatiana Ailen Letowski",
        anios: "2023-2024",
      },
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "Dr. Gastón Fernández Candia",
        anios: "2023-2024",
      },
    ],
  },
  {
    titulo: "Fellowship en Ortopedia Oncológica",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "Dr. Miguel Alfredo Beleño Cruz",
        anios: "2022-2024",
      },
    ],
  },
  {
    titulo: "Residencia en Mastología",
    becarios: [
      {
        img: "Ejemplo-Becario.png",
        alt: "",
        nombre: "Dra. María Belén Ancao",
        anios: "2023-2025",
      },
    ],
  },
];

for (let actual of actuales) {
  becariosActualesContent.innerHTML += `
    <h2 class="w-100 titleUnderline">
      <span>${actual.titulo}</span>
      <span class="greenUnderlineTitle"></span>
    </h2>
    `;
  if (actual.multiple) {
    for (let categoria of actual.categorias) {
      becariosActualesContent.innerHTML += `<h3>${categoria.titulo}</h3>`;
      for (let becario of categoria.becarios) {
        if (becario.lugar) {
          becariosActualesContent.innerHTML += `
            <div class="becarioCard columnAlignCenter">
              <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
              <div class="becarioInfo columnAlignCenter">
                <p class="nombre">${becario.nombre}</p>
                <p class="anios">${becario.anios}</p>
                <p class="lugar">${becario.lugar}</p>
              </div>
            </div>
          `;
        } else {
          becariosActualesContent.innerHTML += `
            <div class="becarioCard columnAlignCenter">
              <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
              <div class="becarioInfo columnAlignCenter">
                <p class="nombre">${becario.nombre}</p>
                <p class="anios">${becario.anios}</p>
              </div>
            </div>
          `;
        }
      }
    }
  } else {
    for (let becario of actual.becarios) {
      if (becario.lugar) {
        becariosActualesContent.innerHTML += `
          <div class="becarioCard columnAlignCenter">
            <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
            <div class="becarioInfo columnAlignCenter">
              <p class="nombre">${becario.nombre}</p>
              <p class="anios">${becario.anios}</p>
              <p class="lugar">${becario.lugar}</p>
            </div>
          </div>
        `;
      } else {
        becariosActualesContent.innerHTML += `
          <div class="becarioCard columnAlignCenter">
            <img src="/content/img/becarios/${becario.img}" alt="${becario.alt}" class="becarioImg">
            <div class="becarioInfo columnAlignCenter">
              <p class="nombre">${becario.nombre}</p>
              <p class="anios">${becario.anios}</p>
            </div>
          </div>
        `;
      }

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