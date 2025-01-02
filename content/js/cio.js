const proyectosContainer = document.getElementById('proyectosContainer');
const aniosTesis = document.getElementById('aniosTesis');
const bodyTesis = document.getElementById('bodyTesis');
const aniosTesinas = document.getElementById('aniosTesinas');
const bodyTesinas = document.getElementById('bodyTesinas');
const aniosPublicaciones = document.getElementById('aniosPublicaciones');
const bodyPublicaciones = document.getElementById('bodyPublicaciones');
const aniosPremios = document.getElementById('aniosPremios');
const bodyPremios = document.getElementById('bodyPremios');

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
const publicaciones = [
    {
        anio: "2022",
        body: [
            "Mordoh A, Aris M, Carri I, Bravo AI, Podaza E, Pardo JCT, Cueto GR, Barrio MM, Mordoh J. An Update of Cutaneous Melanoma Patients Treated in Adjuvancy With the Allogeneic Melanoma Vaccine VACCIMEL and Presentation of a Selected Case Report With In-Transit Metastases. Front Immunol. 2022 Apr 1;13:842555. doi: 10.3389/fimmu.2022.842555.",
            "Sifón MR, Marcolini N, Barber MJ, Mclean I, Rizzo MM, Rivero S, Costanzo MV, Nervo A, Crimi G, Perazzo F, Levy EM, Mandó P: “Lack of Prognostic Value of Pretreatment Neutrophil-to-Lymphocyte Ratio in Early Breast Cancer”. Breast Care (Karger) 2022. doi: 10.1159/000525287"
        ],
    },
    {
        anio: "2021",
    },
    {
        anio: "2020",
    },
    {
        anio: "2019",
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
    {
        anio: "2015",
    },
    {
        anio: "2014",
    },
    {
        anio: "2013",
    },
    {
        anio: "2012",
    },
];
const premios = [
    {
        anio: "2018",
        body: [
            {
                titulo: "IUIS-ALAI-MEXICO-IMMUNOINFORMATICS COURSE.",
                texto: "Center of Complexity Sciences UNAM, Mexico DF. Abril, 2018. “Evaluation of T-cell response against predicted neoantigens for a patient treated with the CSF-470 vaccine”. Enrique Podaza, IbelCarri, Mariana Aris, Patricio Yankilevich, Morten Nielsen, José Mordoh, María Marcela Barrio. Mención segundo mejor trabajo expuesto por los alumnos del curso.",
            },
            {
                titulo: "SAI - LEONARDO SATZ AWARD.",
                texto: "Título “The role of BIN1 in the expression of PD-L1 in inflammatory bowel disease and colorectal cancer might explain a differential regulatory t cell activity through the PD-1/PD-L1 axis”. Andrés Machicote, Rodrigo Papa Gobbi, Estrella Levy, Andrés Rocca, Alicia Sambuelli, Martín Yantorno, Gustavo Correa, María Teresa Pombo, Luisina Bruno, Guillermo Docena, Leonardo Fainboim.",
            },
            {
                titulo: "XIX JORNADA ANUAL DE MEDICINA INTERNA “DR. NORBERTO FRAGA” CENTRO DE EDUCACIÓN MEDICA E INVESTIGACIONES CLÍNICAS (CEMIC).",
                texto: "Primer premio 2018. “Linfocitos periféricos TIM-3+ como potencial biomarcador en pacientes con carcinoma de pulmón no pequeñas células y carcinoma renal” Mandó P; Juliá EP; Rizzo M; Tsou F; Lucca R; Bravo AI; Astorino W; Mordoh J; Martín C and Levy EM.",
            },
            {
                titulo: "PREMIO FESS 2018 A LA EXCELENCIA MÉDICA.",
                texto: "Otorgado por la Fundación de Estudios para la Salud y la Seguridad Socialal Dr. José Mordoh.",
            },
        ],
    },
    {
        anio: "2013",
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
            ${tesis[item].anio}
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
            ${tesinas[item].anio}
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

/* Publicaciones */

for (let item = 0; item < publicaciones.length; item++) {
    aniosPublicaciones.innerHTML += `
        <button class="pill anioPublicaciones column" data-anio="${item}">
            ${publicaciones[item].anio}
        </button>
    `;
}

const botonesAnioPublicaciones = document.querySelectorAll('.anioPublicaciones');

function mostrarContenidoPublicaciones(index) {
    bodyPublicaciones.innerHTML = '';
    botonesAnioPublicaciones.forEach(btn => btn.classList.remove('pillSeleccionada'));
    botonesAnioPublicaciones[index].classList.add('pillSeleccionada');
    if (publicaciones[index].body) {
        publicaciones[index].body.forEach(parrafo => {
            const publicacionDiv = document.createElement('div');
            const pElement = document.createElement('p');
            pElement.innerHTML = parrafo;
            publicacionDiv.appendChild(pElement);
            bodyPublicaciones.appendChild(publicacionDiv);
        });
    }
}

botonesAnioPublicaciones.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenidoPublicaciones(index));
});

mostrarContenidoPublicaciones(0);

/* Premios */

for (let item = 0; item < premios.length; item++) {
    aniosPremios.innerHTML += `
        <button class="pill anioPremios column" data-anio="${item}">
            ${premios[item].anio}
        </button>
    `;
}

const botonesAnioPremios = document.querySelectorAll('.anioPremios');

function mostrarContenidoPremios(index) {
    bodyPremios.innerHTML = '';
    botonesAnioPremios.forEach(btn => btn.classList.remove('pillSeleccionada'));
    botonesAnioPremios[index].classList.add('pillSeleccionada');
    if (premios[index].body) {
        premios[index].body.forEach(item => {
            const premioDiv = document.createElement('div');
            const h3Element = document.createElement('h3');
            h3Element.textContent = item.titulo;
            premioDiv.appendChild(h3Element);

            const pElement = document.createElement('p');
            pElement.innerHTML = item.texto;
            premioDiv.appendChild(pElement);

            bodyPremios.appendChild(premioDiv);
        });
    }
}

botonesAnioPremios.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenidoPremios(index));
});

mostrarContenidoPremios(0);