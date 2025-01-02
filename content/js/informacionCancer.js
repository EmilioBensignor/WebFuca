const tipos = document.getElementById('tipos');
const opcionesContainer = document.getElementById('opcionesContainer');
const opcionBody = document.getElementById('opcionBody');

const tiposCancer = [
    {
        img: "cabeza-cuello",
        nombre: "Cáncer de cabeza y cuello"
    },
    {
        img: "colon",
        nombre: "Cáncer de colon"
    },
    {
        img: "cuello-uterino",
        nombre: "Cáncer de cuello uterino"
    },
    {
        img: "mama",
        nombre: "Cáncer de mama"
    },
    {
        img: "ovario",
        nombre: "Cáncer de ovario"
    },
    {
        img: "piel",
        nombre: "Cáncer de piel: Melanoma"
    },
    {
        img: "prostata",
        nombre: "Cáncer de próstata"
    },
    {
        img: "pulmon",
        nombre: "Cáncer de pulmón"
    },
    {
        img: "tiroides",
        nombre: "Cáncer de tiroides"
    },
    {
        img: "vejiga",
        nombre: "Cáncer de vejiga"
    },
    {
        img: "gastrico",
        nombre: "Cáncer gástrico"
    },
    {
        img: "renal",
        nombre: "Cáncer renal"
    },
    {
        img: "leucemias",
        nombre: "Leucemias"
    },
    {
        img: "linfomas",
        nombre: "Linfomas"
    },
    {
        img: "mieloma",
        nombre: "Mieloma múltiple"
    },
    {
        img: "sarcomas",
        nombre: "Sarcomas"
    },
    {
        img: "sindrome-mielodisplasico",
        nombre: "Síndrome mielodisplásico"
    },
];
const opciones = [
    {
        titulo: "Ensayos clínicos",
        contenido: [
            "<span>¿Qué es lo que se debe saber acerca de investigación y ensayos clínicos?</span>",
            "<span>Cuando un paciente toma conocimiento de que tiene cáncer renal, su médico puede proponerle participar en un ensayo clínico.</span>",
            "Los ensayos clínicos son estudios de investigación médica que evalúan la seguridad y la eficacia de avances de la ciencia prometedores en la prevención, diagnóstico y tratamiento de una enfermedad. Los tratamientos que llegan a esta etapa son los que demostraron eficacia y toxicidad tolerable en estudios previos. Estos ensayos son cuidadosamente conducidos por médicos especialistas y equipos entrenados para asegurar que los pacientes reciban el mejor cuidado posible.",
            "Algunas personas piensan que sólo deben considerar ingresar a un ensayo clínico cuando agotaron todas las opciones convencionales de tratamiento. Sin embargo puede suceder que entre las opciones tempranas de tratamiento haya un ensayo clínico que se ajuste a las características específicas de su tumor. Por ejemplo, algunos ensayos son para pacientes de reciente diagnóstico o que presentan estadios tempranos de cáncer.",
            "Las personas a veces también sienten temor creyendo que si participan en un ensayo clínico pueden sólo recibir una pastilla de azúcar (placebo) y ningún tratamiento efectivo. Esta modalidad que puede ocurrir en estudios relativos a enfermedades leves, no se implementa habitualmente en pacientes con cáncer, ya que éstos siempre reciben un tratamiento activo. Si un placebo va a ser usado en un estudio, los pacientes deben recibir información fehaciente obligatoriamente.",
            "La participación en un ensayo clínico es totalmente voluntaria y el paciente puede retirarse en cualquier momento y volver al tratamiento convencional.",
        ],
    },
    {
        titulo: "Cáncer hereditario",
    },
    {
        titulo: "Hábitos saludables",
    },
    {
        titulo: "Nutrición",
    },
    {
        titulo: "Psico-Oncología",
        contenido: [
            "<span>Cuando una persona se enferma, su vida sufre un impacto importante. Cuando esa enfermedad es cáncer, ese impacto es comparable a un terremoto o un tsunami, en el que la vida ya no vuelve a ser como antes.</span>",
            "Se afectan todas las áreas de la vida, incluso los roles familiares y laborales. El momento del diagnóstico y el afrontamiento de los distintos tratamientos que deberá realizar imponen un espacio de contención emocional, de reflexión y de preparación para optimizar todos los recursos psicológicos de que dispone con la finalidad de que la experiencia de enfermedad deje las menores cicatrices posibles.",
            "La necesidad de información adecuada y suficiente es una de las llaves más importantes para superar los momentos de mayor angustia e incertidumbre. La comprensión acerca de la enfermedad, de los cuidados necesarios durante los tratamientos, y la “traducción” de la terminología médica ocupan un lugar relevante dentro de esta experiencia. En este contexto, es altamente beneficioso el poder contar con el apoyo de la psicoterapia.",
            "<span>La psicoterapia psicooncológica focalizada es un abordaje psicoterapéutico centrado en esta situación específica.</span>",
            "Se utilizan distintas técnicas, con respaldo científico y con probados resultados en la experiencia clínica. El objetivo principal es el manejo y disminución del “distress” emocional del paciente y la familia u otras personas significativas.",
            "Otro objetivo es el reforzamiento de las estrategias de afrontamiento exitosas con que la persona cuenta y la incorporación de nuevos recursos (psicológicos, familiares, comunitarios, sociales). La reflexión acerca de los cambios necesarios en el estilo de vida ocupa un espacio en la psicoterapia. Se realizan entrevistas de pareja y/o familiares cuando es necesario y oportuno.",
            "Otro objetivo importante es la elaboración de esta experiencia como un evento dentro de la línea temporal que implica la vida. (“Estoy - estuve enfermo”, NO “soy enfermo”) El desafío mayor para la Oncología y la Psicooncología es el trabajo con las personas que superaron la experiencia del cáncer y deben encarar su vida con este bagaje."
        ],
    },
    {
        titulo: "Glosario",
    },
];

/* Tipos Cancer */

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
    document.querySelectorAll('.tipo').forEach(p => p.classList.remove('tipoSeleccionado'));
};

for (let tipo = 0; tipo < tiposCancer.length; tipo++) {
    tipos.innerHTML += `
        <button class="tipo column" data-tipo="${tipo}">
            <img src="/content/img/informacionCancer/tiposCancer/${tiposCancer[tipo].img}.svg" alt="${tiposCancer[tipo].nombre}">
            <h3>${tiposCancer[tipo].nombre}</h3>
        </button>
    `;
}

document.querySelectorAll('.tipo').forEach(tipo => {
    tipo.addEventListener('click', (e) => {
        const index = e.currentTarget.dataset.tipo;
        document.querySelectorAll('.tipo').forEach(p => p.classList.remove('tipoSeleccionado'));
        tipo.classList.add('tipoSeleccionado');

        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = tiposCancer[index].nombre;
        modal.style.display = 'flex';
    });
});

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.querySelectorAll('.tipo').forEach(p => p.classList.remove('tipoSeleccionado'));
    }
}

/* Informacion General */

for (let opcion = 0; opcion < opciones.length; opcion++) {
    opcionesContainer.innerHTML += `
        <button class="opcion">${opciones[opcion].titulo}</button>
    `;
}

const botonesOpciones = document.querySelectorAll('.opcion');

function mostrarContenido(index) {
    opcionBody.innerHTML = '';
    botonesOpciones.forEach(btn => btn.classList.remove('opcionSeleccionada'));
    botonesOpciones[index].classList.add('opcionSeleccionada');
    if (opciones[index].contenido) {
        opciones[index].contenido.forEach(parrafo => {
            opcionBody.innerHTML += `<p>${parrafo}</p>`;
        });
    }
}

botonesOpciones.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenido(index));
});

mostrarContenido(0);