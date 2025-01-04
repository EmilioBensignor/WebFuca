const objetivosContainer = document.getElementById('objetivosContainer');
const historiaAnios = document.getElementById('historiaAnios');
const historiaBody = document.getElementById('historiaBody');

const objetivos = [
    {
        img: "formar-profesionales",
        texto: "Formar profesionales de excelencia en Oncología, tanto en el área asistencial como en la investigación.",
    },
    {
        img: "identificar-necesidades",
        texto: "Identificar las necesidades y resaltar los derechos de los afectados por el cáncer/pacientes.",
    },
    {
        img: "informar-concientizar",
        texto: "Informar y concientizar a la comunidad sobre la prevención, detección precoz y conductas de riesgo con relación al cáncer",
    },
    {
        img: "calidad-vida",
        texto: "Contribuir al mejoramiento de la calidad de vida de las personas con cáncer, y a mitigar el impacto de esta enfermedad en los pacientes, sus familiares y allegados.",
    },
    {
        img: "impulsar-traduccion",
        texto: "Impulsar la traducción a la clínica de los resultados obtenidos en modelos experimentales.",
    },
    {
        img: "cooperar-difusion",
        texto: "Cooperar en la difusión del conocimiento médico acerca del cáncer.",
    },
    {
        img: "desarrollar-tratamientos",
        texto: "Desarrollar mejores tratamientos para el cáncer.",
    },
];
const anios = [
    {
        anio: "1983",
        body: [
            "Se amplían los programas de formación post-residencia, incorporando un Fellow en Mastología en el Centro Mamario del I.A.F.",
            "Primer encuentro de Victoriosas del cáncer de mama: taller- encuentro con testimonios de sobrevivientes.",
            "El Subsidio otorgado por la Dirección General de Fortalecimiento de la Sociedad Civil, Ministerio de Desarrollo Social, Gobierno de la Ciudad de Buenos Aires permite realizar por primera vez en FUCA una capacitación formal a los voluntarios activos y la captación de nuevos voluntarios."
        ],
    },
    {
        anio: "1983",
    },
    {
        anio: "1984",
    },
    {
        anio: "1991",
    },
    {
        anio: "1994",
    },
    {
        anio: "1996",
    },
    {
        anio: "1997",
    },
    {
        anio: "2001",
    },
    {
        anio: "2002",
    },
    {
        anio: "2004",
    },
    {
        anio: "2006",
    },
    {
        anio: "2007",
    },
    {
        anio: "2008",
    },
    {
        anio: "2009",
        body: [
            "Se amplían los programas de formación post-residencia, incorporando un Fellow en Mastología en el Centro Mamario del I.A.F.",
            "Primer encuentro de Victoriosas del cáncer de mama: taller- encuentro con testimonios de sobrevivientes.",
            "El Subsidio otorgado por la Dirección General de Fortalecimiento de la Sociedad Civil, Ministerio de Desarrollo Social, Gobierno de la Ciudad de Buenos Aires permite realizar por primera vez en FUCA una capacitación formal a los voluntarios activos y la captación de nuevos voluntarios."
        ],
    },
    {
        anio: "2010",
    },
    {
        anio: "2012",
    },
    {
        anio: "2014",
    },
    {
        anio: "2015",
    },
];

objetivos.forEach(objetivo => {
    const objetivoDiv = document.createElement('div');
    objetivoDiv.classList.add('objetivo');
    objetivoDiv.innerHTML = `
        <img src="/content/img/nuestraHistoria/objetivos/${objetivo.img}.svg" alt="${objetivo.img}">
        <p>${objetivo.texto}</p>
    `;
    objetivosContainer.appendChild(objetivoDiv);
});

for (let item = 0; item < anios.length; item++) {
    historiaAnios.innerHTML += `
        <button class="pill anioHistoria column" data-anio="${item}">
            ${anios[item].anio}
        </button>
    `;
}

const anioHistoria = document.querySelectorAll('.anioHistoria');

function mostrarContenidoHistoria(index) {
    historiaBody.innerHTML = '';
    anioHistoria.forEach(btn => btn.classList.remove('pillSeleccionada'));
    anioHistoria[index].classList.add('pillSeleccionada');
    if (anios[index].body) {
        anios[index].body.forEach(parrafo => {
            const p = document.createElement('p');
            p.innerHTML = parrafo;
            historiaBody.appendChild(p);
        });
    }
}

anioHistoria.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenidoHistoria(index));
});

mostrarContenidoHistoria(0);