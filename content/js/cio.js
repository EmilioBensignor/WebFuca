const proyectosContainer = document.getElementById('proyectosContainer');
const aniosTesis = document.getElementById('aniosTesis');
const bodyTesis = document.getElementById('bodyTesis');
const aniosTesinas = document.getElementById('aniosTesinas');
const bodyTesinas = document.getElementById('bodyTesinas');

const proyectos = [
    {
        img: "mama",
        nombre: "Cáncer de mama"
    },
    {
        img: "vejiga",
        nombre: "Cáncer de vejiga"
    },
    {
        img: "melanoma",
        nombre: "Melanoma"
    },
    {
        img: "biopsias-liquidas",
        nombre: "Biopsias Líquidas"
    },
    {
        img: "leucemia-mieloide-cronica",
        nombre: "Leucemia Mieloide Crónica"
    },
];
const tesis = [
    {
        anio: "2020",
        body: [
            [
                "Desarrollo de una metodología de criopreservación alternativa al uso de dimetilsulfóxido, aplicado a la vacuna terapéutica CSF-470 para el tratamiento del melanoma.",
                "<span>Tesis Doctoral Lic. Ivana J. Tapia. FCEyN, UBA.</span>Calificación sobresaliente. Abril 2019.",
                "<span>Directora:</span> Dra. María Marcela Barrio."
            ],
            [
                "Caracterización molecular e impacto clínico de células madre leucémicas en pacientes con leucemia mieloide crónica.",
                "<span>Tesis Doctoral Lic. María Sol Ruiz. FCEyN, UBA.</span> Calificación sobresaliente. Julio 2019.",
                "<span>Director:</span> Dr. Michele Bianchini."
            ],
        ],
    },
    {
        anio: "2019",
        body: [
            [
                "Desarrollo de una metodología de criopreservación alternativa al uso de dimetilsulfóxido, aplicado a la vacuna terapéutica CSF-470 para el tratamiento del melanoma.",
                "<span>Tesis Doctoral Lic. Ivana J. Tapia. FCEyN, UBA.</span>Calificación sobresaliente. Abril 2019.",
                "<span>Directora:</span> Dra. María Marcela Barrio."
            ],
            [
                "Caracterización molecular e impacto clínico de células madre leucémicas en pacientes con leucemia mieloide crónica.",
                "<span>Tesis Doctoral Lic. María Sol Ruiz. FCEyN, UBA.</span> Calificación sobresaliente. Julio 2019.",
                "<span>Director:</span> Dr. Michele Bianchini."
            ],
        ],
    },
    {
        anio: "2018",
    },
    {
        anio: "2017",
    },
    {
        anio: "2016",
    },
];
const tesinas = [
    {
        anio: "2018",
        body: [
            "Evaluación de variantes germinales y somáticas a lo largo de la progresión tumoral en un caso de melanoma cutáneo esporádico.",
            "<span>Tesina de Maestría en Biología Molecular Médica, UBA, Dra. Ana Mordoh.</span> Calificación sobresaliente.",
            "<span>Director:</span> Dr. José Mordoh.",
            "<span>Co Directora:</span> Dra. Mariana Aris.",
        ],
    },
    {
        anio: "2016",
    },
    {
        anio: "2015",
    },
];

/* Proyectos */

const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modalContent">
        <h2 class="w-100 titleUnderline">
            <span id="modalTitle"></span>
            <span class="greenUnderlineTitle"></span>
        </h2>
        <div id="modalBody"></div>
        <button class="closeBtn">CERRAR</button>
    </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.closeBtn');
closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.querySelectorAll('.proyecto').forEach(p => p.classList.remove('proyectoSeleccionado'));
};

for (let proyecto = 0; proyecto < proyectos.length; proyecto++) {
    proyectosContainer.innerHTML += `
        <button class="proyecto column" data-proyecto="${proyecto}">
            <img src="/content/img/cio/${proyectos[proyecto].img}.svg" alt="${proyectos[proyecto].nombre}">
            <h3>${proyectos[proyecto].nombre}</h3>
        </button>
    `;
}

document.querySelectorAll('.proyecto').forEach(proyecto => {
    proyecto.addEventListener('click', (e) => {
        const index = e.currentTarget.dataset.proyecto;
        document.querySelectorAll('.proyecto').forEach(p => p.classList.remove('proyectoSeleccionado'));
        proyecto.classList.add('proyectoSeleccionado');

        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = proyectos[index].nombre;
        modal.style.display = 'flex';
    });
});

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.querySelectorAll('.proyecto').forEach(p => p.classList.remove('proyectoSeleccionado'));
    }
}

/* Tesis */

for (let item = 0; item < tesis.length; item++) {
    aniosTesis.innerHTML += `
        <button class="pill anioTesis column" data-anio="${item}">
            <h3>${tesis[item].anio}</h3>
        </button>
    `;
}

const botonesAnioTesis = document.querySelectorAll('.anioTesis');

function mostrarContenidoTesis(index) {
    bodyTesis.innerHTML = '';
    botonesAnioTesis.forEach(btn => btn.classList.remove('pillSeleccionada'));
    botonesAnioTesis[index].classList.add('pillSeleccionada');
    if (tesis[index].body) {
        tesis[index].body.forEach(item => {
            const tesisDiv = document.createElement('div');

            item.forEach(parrafo => {
                const p = document.createElement('p');
                p.innerHTML = parrafo;
                tesisDiv.appendChild(p);
            });

            bodyTesis.appendChild(tesisDiv);
        });
    }
}

botonesAnioTesis.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenidoTesis(index));
});

mostrarContenidoTesis(0);

/* Tesinas */

for (let item = 0; item < tesinas.length; item++) {
    aniosTesinas.innerHTML += `
        <button class="pill anioTesinas column" data-anio="${item}">
            <h3>${tesinas[item].anio}</h3>
        </button>
    `;
}

const botonesAnioTesinas = document.querySelectorAll('.anioTesinas');

function mostrarContenidoTesinas(index) {
    bodyTesinas.innerHTML = '';
    botonesAnioTesinas.forEach(btn => btn.classList.remove('pillSeleccionada'));
    botonesAnioTesinas[index].classList.add('pillSeleccionada');
    if (tesinas[index].body) {
        tesinas[index].body.forEach(parrafo => {
            const pElement = document.createElement('p');
            pElement.innerHTML = parrafo;
            bodyTesinas.appendChild(pElement);
        });
    }
}

botonesAnioTesinas.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenidoTesinas(index));
});

mostrarContenidoTesinas(0);