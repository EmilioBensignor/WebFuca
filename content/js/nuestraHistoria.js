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
            "Fundación de FUCA por parte de los Dres. Reinaldo Chacón y José Mordoh, y obtención de la personería jurídica.",
        ],
    },

    {
        anio: "1984",
        body: [
            "Creación de la Residencia en Oncología Clínica con la dirección del Dr. Reinaldo Chacón e inicio de los proyectos de Investigación en Oncología. FUCA otorga las primeras becas a los residentes.",
        ],
    },
    {
        anio: "1991",
        body: [
            "Un equipo interdisciplinario comienza el proyecto de lo que luego se llamaría el Instituto Alexander Fleming (I.A.F.). Dicho instituto tiene como postulado brindar una atención integral y de excelencia tendiendo a la cura del cáncer. Con el lema de “lo mejor, todo junto y siempre” se sintetiza el rumbo del esfuerzo.",
        ],
    },
    {
        anio: "1994",
        body: [
            "Se inaugura oficialmente el Instituto Alexander Fleming con el Dr. Reinaldo Chacón como Director Médico, el Dr. José Mordoh a cargo del área de Investigación, y el Dr. Julio Kaplan a cargo de la Docencia.",
            "Creación del Centro de Investigaciones Oncológicas (C.I.O.), con la dirección del Dr. José Mordoh.",
            "Designación del Instituto Alexander Fleming como Institución afiliada a la Facultad de Medicina de la Universidad de Buenos Aires.",
        ],
    },
    {
        anio: "1996",
        body: [
            "I Simposio de Educación para la Salud y Prevención de Cáncer, realizado en el Centro Cultural Gral. San Martín con la asistencia de alumnos del ciclo secundario. Declarado de Interés Municipal por el Gobierno de la Ciudad de Buenos Aires.",
        ],
    },
    {
        anio: "1997",
        body: [
            "Se celebra el Convenio de Colaboración entre el I.A.F. y FUCA.",
            "FUCA inicia el Programa Aulas Abiertas, consistente en clases semanales gratuitas para estudiantes y docentes de escuelas secundarias.",
            "II Simposio de Educación para la Salud y Prevención de Cáncer realizado en el Centro Cultural Gral. San Martín con la asistencia de 1.000 estudiantes secundarios. Declarado de interés municipal por el Gobierno de la Ciudad de Buenos Aires.",
        ],
    },
    {
        anio: "2001",
        body: [
            "FUCA realiza el Simposio Internacional “Ganglio Centinela en cáncer de mama”, con la participación del Dr. Armando Giuliano M. D., Jefe de Cirugía Oncológica del John Wayne Cancer Institute - Sta. Mónica, E.E.U.U., con más de 400 médicos de todo el país.",
            "En Octubre FUCA ilumina de rosa monumentos del país para concientizar sobre la prevención y detección precoz del cáncer de mama. Se adhieren a FUCA el Ministerio de Salud de la Nación, el Gobierno de la Ciudad de Buenos Aires y municipalidades de todo el país.",
        ],
    },
    {
        anio: "2002",
        body: [
            "Dos proyectos de FUCA son seleccionados por el Ministerio de Salud de la Nación en el marco del “Programa Vigía”, con un subsidio del Banco Mundial: 1. Líderes de prevención: “Formador de formadores”; 2. “Tabaquismo pasivo, medición del grado de exposición infantil e impacto de una intervención específica”. Este trabajo obtiene el premio CAESPO -Comité Argentino de Educación para la Salud de la Población.",
        ],
    },
    {
        anio: "2004",
        body: [
            "FUCA lanza la primera campaña publicitaria de concientización sobre cáncer de mama dirigida al hombre. El objetivo es alentar a los hombres para que acompañen a las mujeres tanto en la prevención como en el tratamiento.",
            "La escuela cordobesa I.P.E.M Nº 292 “Agr. Liliam Priotto” realiza conjuntamente con el Ministerio de Salud de la Provincia de Córdoba y FUCA, la Investigación “Cáncer aprender a vencer barreras” sobre el aumento de enfermos de cáncer en la localidad de Adelia María. Obtiene el 3º premio en la Feria de Ciencia y Tecnología, instancia nacional.",
        ],
    },
    {
        anio: "2006",
        body: [
            "Se amplía el número de becas para la Residencia en Oncología Clínica, pasando a ser tres los médicos becados para cada año de la residencia, privilegiando a los profesionales del interior del país.",
        ],
    },
    {
        anio: "2007",
        body: [
            "FUCA fue seleccionada por la American Cancer Society (E.E.U.U.) con los proyectos “Reclutamiento y Organización de Voluntarios”, y el “Programa de Apoyo Integral para la Detección temprana del cáncer”.",
        ],
    },
    {
        anio: "2008",
        body: [
            "El C.I.O. obtiene por primera vez un subsidio de la Agencia Nacional de Promoción Científica y Tecnológica (A.N.P.C.yT.) dependiente del Ministerio de Ciencia, Tecnología e Innovación Productiva de la Nación, que proporciona equipamiento altamente especializado.",
        ],
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
        body: [
            "A través de la obtención de un Subsidio de Cooperación Internacional Franco Argentina en Investigación Médica CONICET-INSERM, el C.I.O. realiza una colaboración científica con el Centre de Recherche des Cordeliers, París, Francia. Proyecto: Uso de anticuerpos monoclonales para mejorar la vacunación anti-tumoral.",
        ],
    },
    {
        anio: "2012",
        body: [
            "El Instituto Alexander Fleming incorpora un Fellow de Uro-oncología y otro de Infectología, quienes son apoyados por FUCA mediante el otorgamiento de becas.",
            "El C.I.O. obtiene por primera vez el subsidio “Asistencia Financiera a Proyectos de Investigación Clínica de Origen Nacional de Investigación en Cáncer II”, del Instituto Nacional del Cáncer, Ministerio de Salud de la Nación, para financiar parte del Ensayo Clínico de Fase II/III, por 2 años.",
        ],
    },
    {
        anio: "2014",
        body: [
            "FUCA y la Agencia Benteveo desarrollan la aplicación web www.cuidateatiempo.org, para que las mujeres se registren y reciban alertas automáticamente programadas para cada una, recordándoles la fecha de su próxima mamografía, y actualizando su rutina de chequeos.",
        ],
    },
    {
        anio: "2015",
        body: [
            "El Ministro de Ciencia, Tecnología e Innovación Productiva de la Nación, Dr. Lino Barañao, visita las instalaciones del C.I.O.",
        ],
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