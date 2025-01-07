const { sub } = require("date-fns");

const tipos = document.getElementById('tipos');
const opcionesContainer = document.getElementById('opcionesContainer');
const opcionBody = document.getElementById('opcionBody');

const tiposCancer = [
    {
        img: "cabeza-cuello",
        nombre: "Cáncer de cabeza y cuello",
        body: [
            {
                subtitulo: "Sobre el cáncer de cabeza y cuello",
                textos: [
                    "Los tumores que, en conjunto, se denominan cánceres de cabeza y cuello se originan, por lo general, en las superficies húmedas y mucosas del interior de las estructuras que conforman la región de cabeza y cuello (por ejemplo, dentro de la boca, de la nariz y de la garganta).",
                    "Si bien pueden originarse en distintos tipo de células, su variante más frecuente es la de “células escamosas”. Por este motivo se los suele agrupar bajo la denominación de “carcinomas escamosos de cabeza y cuello”",
                    "Algunas de estas neoplasias pueden tener su origen en las glándulas salivales, aunque con menor frecuencia. Las glándulas salivales contienen muchos tipos diferentes de células que pueden volverse cancerosas, por lo que existen muchos tipos diferentes de cáncer de glándulas salivales.",
                    "Los tumores de cabeza y cuello se categorizan, a su vez, de acuerdo a su sitio de origen: cavidad oral, faringe, laringe, senos paranasales y cavidad nasal, glándulas salivales.",
                    "Los cánceres de cerebro, de ojo, de esófago y de glándula tiroides, así como los cánceres de cuero cabelludo, de piel, músculos y huesos de la cabeza y del cuello no se clasifican generalmente dentro del término “cánceres de cabeza y cuello”.",
                    "Los tumores de cabeza y cuello son más frecuentes en hombres y también en personas mayores de 50 años.",
                ],
            },
            {
                subtitulo: "Factores de riesgo para desarrollar cáncer de cabeza y cuello",
                textosDescriptivo: [
                    "Los factores de riesgo más importantes para el desarrollo de esta enfermedad son el consumo de alcohol y el tabaco, especialmente los tumores de la cavidad oral, hipofaringe, y laringe. Al menos el  75% de los cánceres de cabeza y cuello (con excepción de los de las glándulas salivales) son causados por el uso de tabaco y consumo de alcohol."
                ],
                lista: [
                    "La infección por virus del papiloma humano (VPH o HPV por su sigla en inglés) en particular para tumores que afectan las amígdalas o la base de la lengua.",
                    "Alimentos salados o preservados: el consumo excesivo de ciertos alimentos salados o preservados durante la niñez es un factor de riesgo de cáncer de nasofaringe.",
                    "Salud bucal: la higiene bucal pobre y la falta de dientes pueden ser factores de riesgo leves de tumores de la cavidad oral.",
                    "Exposición ocupacional: la exposición ocupacional al polvo de madera y a ciertos productos industriales, como al asbesto y a fibras sintéticas es un factor de riesgo de cáncer de nasofaringe y laringe. La exposición industrial al polvo de madera o de níquel o de formaldehído es un factor de riesgo de tumores de los senos paranasales y de cavidad nasal.",
                    "Exposición a radiación: la radiación a la cabeza y al cuello, por padecimientos no oncológicos o por cáncer, es un factor de riesgo de cáncer de glándulas salivales y tiroides.",
                    "Infección por el virus de Epstein-Barr: es un factor de riesgo, fundamentalmente de cáncer de nasofaringe.",
                ]
            },
            {
                subtitulo: "Síntomas del cáncer de cabeza y cuello",
                textosDescriptivo: [
                    "Es importante prestar atención a los siguientes signos y síntomas: <span>la aparición de un bulto en el cuello o una llaga en la lengua, encías, o la cavidad oral que no sana, irritación de garganta que no desaparece, dificultad para tragar, cambio o ronquera en la voz.</span>",
                    "<span class='decoration'>Pero estos síntomas pueden ser causados también por otras afecciones menos graves. Es importante consultar a su médico o a su odontólogo/a sobre cualquiera de estos síntomas.</span>"
                ],
                lista: [
                    "<span>Cavidad oral:</span> un parche blanco o rojo en la encía, en la lengua o en el revestimiento de la boca; inflamación de la mandíbula que causa que la prótesis dental no esté ajustada o que se sienta incómoda; y sangrado o dolor poco común en la boca.",
                    "<span>Faringe:</span> dificultad para respirar o para hablar; dolor al tragar; dolor en el cuello o en la garganta que no desaparece; dolores de cabeza frecuentes, dolor o zumbido en los oídos; dificultad para oír.",
                    "<span>Glándulas salivales:</span> hinchazón debajo del mentón o alrededor de la mandíbula, adormecimiento o parálisis de los músculos en la cara o dolor en la cara, en el mentón o en el cuello que no desaparece.",
                    "<span>Laringe:</span> disfonía, dolor al tragar o dolor de oído.",
                    "<span>Senos paranasales y cavidad nasal:</span> congestión en los senos nasales que no sana; sinusitis que no reacciona al tratamiento con antibióticos; sangrado por la nariz; dolores frecuentes de cabeza, inflamación u otros problemas de ojos; dolor en los dientes superiores o problemas con las prótesis dentales.",
                ],
            },
            {
                subtitulo: "¿Quién trata los cánceres de cabeza y cuello?",
                textos: [
                    "Como ya se describió, estos tumores se originan e involucran diferentes órganos/estructuras de la anatomía que participan en diversas funciones fisiológicas (normales) esenciales, como son la respiración, la deglución, el habla; sentidos, como el olfato, la audición y la visión. Es de suponer, entonces, que su tratamiento requiere, la mayoría de las veces, con el fin de asegurar la mejor tolerancia al mismo y una recuperación más adecuada y con menores secuelas, de una interacción muy fluida entre diferentes especialidades de la medicina que están involucradas en el manejo de estos tumores.",
                    "Este grupo de especialistas conforman lo que se denomina equipo multidisciplinario, requisito fundamental para el tratamiento de estos pacientes en centros especializados, e incluye: cirujanos (especialistas en cabeza y cuello), radioterapeutas (especialistas en tratamiento de radioterapia), oncólogos, especialistas en imágenes, odontólogos, nutricionistas, fonoaudiólogos / foniatras, patólogos, entre otros."
                ],
            },
            {
                subtitulo: "¿Cómo se trata el cáncer de cabeza y cuello?",
                textos: [
                    "El plan de tratamiento para cada paciente depende de varios factores: la ubicación del tumor, el estadio del cáncer, la edad y el estado de salud general de la persona.",
                    "El tratamiento para el cáncer de cabeza y cuello puede incluir cirugía, radioterapia, quimioterapia, terapia dirigida, inmunoterapia, o una combinación de estos tratamientos.",
                    "El paciente y su médico deberán considerar las opciones de tratamiento cuidadosamente. Deberán hablar de cada tipo de tratamiento y de cómo el tratamiento podría cambiar el aspecto del paciente, su forma de hablar, de comer o de respirar.",
                    "El tratamiento será indicado por un oncólogo clínico, que es un médico especializado en el tratamiento de personas con cáncer. Como se mencionó anteriormente, los pacientes siempre se benefician con el apoyo de un equipo multidisciplinario, así como también el apoyo de un/a psico-oncólogo/a.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dr. Agustín Falco",
                textos: [
                    "Oncólogo clínico",
                    "(MN 113.572)",
                ],
            },
            {
                nombre: "Dr. Mariano Leiva",
                textos: [
                    "Oncólogo clínico",
                    "(MN 139.519)",
                    "Julio 2021",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Cuadernillo para pacientes",
                pdf: "#"
            },
        ],
    },
    {
        img: "colon",
        nombre: "Cáncer de colon",
        body: [
            {
                subtitulo: "¿Qué es el colon?",
                textos: [
                    "El colon o intestino grueso es el último tramo del tubo digestivo. Tiene una longitud aproximada de 1,5 metros y se extiende desde el final del intestino delgado hasta el ano."
                ],
            },
            {
                subtitulo: "¿Qué es el cáncer colorrectal?",
                textos: [
                    "El cáncer colorrectal es el que se origina en el colon o el recto. A estos tumores se les puede llamar por separado cáncer de colon o cáncer de recto (rectal) dependiendo del lugar donde se origina. Tanto el cáncer de colon como el cáncer de recto comparten muchas características en común en relación a su biología o comportamiento. Es la segunda causa más común de muerte asociada a cáncer en la población general."
                ],
            },
            {
                subtitulo: "El cáncer colorrectal ¿se puede prevenir?",
                textos: [
                    "El cáncer colo-rectal es una enfermedad prevalente, es decir tiene una elevada frecuencia en la población. Se inicia siempre en un pólipo, que es una lesión que altera la mucosa del intestino y se transforma en maligno. Si podemos detectarlo en forma temprana, evitaremos la aparición del cáncer. El mejor estudio para detectar los pólipos tempranamente es la video-colonoscopia, pero también existen otros métodos como la sangre oculta en materia fecal."
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de colon",
                lista: [
                    "Pérdida de peso inexplicable.",
                    "Cambios en ritmo evacuatorio habitual.",
                    "Sangre con la materia fecal.",
                ],
            },
            {
                subtitulo: "¿A quiénes y cuándo hacer los estudios?",
                lista: [
                    "Todas las personas a partir de los 50 años",
                    "Sin síntomas.",
                    "Sin historia personal de cáncer colorectal.",
                    "Sin historia de enfermedad inflamatoria intestinal.",
                    "Sin historia familiar de cáncer colorectal.",
                    "Individuos de riesgo:",
                    "Familiar primer grado con antecedentes de cáncer de colon.",
                    "Cáncer hereditario (poliposis múltiple u otros síndromes hereditarios) o larga historia de enfermedad inflamatoria.",
                ],
            },
            {
                subtitulo: "Cambios del estilo de vida: ejercicio físico",
                lista: [
                    "Mejora su estado cardiovascular.",
                    "Fortalece sus músculos.",
                    "Reduce el cansancio y le ayuda a obtener más energía.",
                    "Ayuda a reducir la ansiedad y la depresión.",
                ],
            },
            {
                subtitulo: "",
            },
            {
                subtitulo: "",
            },
        ],
        materialDescarga: [
            {
                nombre: "Cuadernillo sobre prevención, diagnóstico y tratamiento del cáncer de colon",
                pdf: "#"
            },
            {
                nombre: "Campaña #MarzoAzul",
                pdf: "#"
            },
        ],
    },
    {
        img: "cuello-uterino",
        nombre: "Cáncer de cuello uterino",
        body: [
            {
                subtitulo: "Sobre el cáncer de cuello de útero",
                lista: [
                    "El cáncer de cuello uterino se produce por un crecimiento anormal de las células del cuello de útero causado por algunos tipos de VPH (Virus de Papiloma Humano).",
                    "Afecta principalmente a mujeres jóvenes de entre 25 y 45 años.",
                    "Hay dos tipos de células epiteliales que revisten el cuello uterino: células escamosas en la parte más externa y células cilíndricas glandulares en el conducto interno. La zona de transición entre las células escamosas y las células cilíndricas se llama zona de transición. La mayoría de los cambios precancerosos y cancerosos surgen en esta zona.",
                    "<span>La mayoría de los casos de cáncer de cuello uterino se pueden prevenir mediante el uso de vacunas contra los distintos tipos de VPH, exámenes de detección de lesiones precursoras como el Papanicolaou y el tratamiento de las lesiones precancerosas.</span>",
                ],
            },
            {
                subtitulo: "Factores de riesgo para desarrollar cáncer de cuello uterino",
                lista: [
                    "El principal factor de riesgo del cáncer de cuello uterino es la infección por el virus del papiloma humano (VPH o HPV, por sus siglas en inglés).",
                    "Otros factores de riesgo del cáncer de cuello uterino incluyen:",
                    "Tabaquismo.",
                    "Consumo prolongado de anticonceptivos orales.",
                    "Inmunodepresión (por ejemplo, HIV).",
                    "Edad temprana en el momento de la primera relación sexual.",
                    "Número elevado de parejas sexuales.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de cuello uterino",
                lista: [
                    "Sangrado anormal fuera de la menstruación.",
                    "Dolor o sangrado con las relaciones sexuales.",
                    "Flujo vaginal maloliente.",
                    "Sangrado después de la menopausia.",
                    "Dolor pélvico persistente y sin razón aparente.",
                    "<span>El tiempo estimado desde que se produce una lesión hasta que se desarrolla un cáncer en el cuello del útero es entre 10 y 20 años. Por este motivo el cáncer de cuello de útero es una enfermedad que puede ser detectada precozmente antes de que se transforme en cáncer.</span>",
                ],
            },
            {
                subtitulo: "Exámenes de detección precoz del cáncer de cuello de útero",
                lista: [
                    "El mejor método de detección para cáncer de cuello uterino es el examen ginecológico con PAP y colposcopía a toda mujer desde que inicia las relaciones sexuales o a partir de los 25 años de edad y se recomienda realizarlo de forma anual.",
                    "El riesgo de desarrollar cáncer de cuello de útero aumenta con la edad y es mayor en las mujeres de más de 45 años, por eso es importante que las mujeres, aunque ya estén en menopausia, continúen realizándose este estudio.",
                    "El Papanicolaou (PAP) es un estudio sencillo que puede detectar lesiones precancerosas en el cuello del útero y tratarlas antes de que se conviertan en cáncer.",
                    "También se puede realizar el test de VPH que detecta la presencia de los distintos tipos de VPH que pueden afectar el cuello de útero.",
                    "<span>Si durante la pandemia retrasaste tus controles ginecológicos, es fundamental que los retomes lo antes posible.</span>",
                ],
            },
            {
                subtitulo: "Incidencia y mortalidad",
                lista: [
                    "El cáncer de cuello uterino es el cuarto tipo de cáncer más frecuente en las mujeres de todo el mundo y el cuarto como causa de muerte por cáncer.",
                    "En Argentina ocupa el tercer lugar en incidencia, después del cáncer de mama y cáncer colorrectal, con una tasa de incidencia de 16,7 casos por 100.000 mujeres y representa la principal causa de muerte por cáncer ginecológico en nuestro país.",
                ],
            },
            {
                subtitulo: "Cáncer de cuello uterino y VPH",
                lista: [
                    "El VPH es un virus muy común que afecta tanto a varones como a mujeres y se transmite por contacto sexual.",
                    "Se estima que 8 de cada 10 personas lo tendrán en algún momento de sus vidas. En la mayoría de los casos, el virus desaparece sin causar lesiones. Sólo en una pequeña proporción, (alrededor del 5% de los casos), este virus provoca lesiones (malformaciones en las células) que con el tiempo pueden convertirse en cáncer.",
                    "La infección por el virus del papiloma humano es un paso necesario para la formación de casi todas las lesiones precancerosas y cancerosas. El 90% de los casos de cáncer de cérvix están relacionados con la infección por el VPH.",
                    "Hay más de 80 tipos de virus del papiloma humano, de los que casi 30 tipos pueden afectar el tracto genital. Los tipos 16 y 18 de VPH son los que se relacionan con mayor frecuencia al cáncer de cuello uterino y se consideran de alto riesgo , mientras que los tipo 6 y 11 se asocian a verrugas genitales y son de bajo riesgo.",
                    "Otros cánceres asociados a VPH son el cáncer de vulva, vagina, ano, pene, garganta, etc.",
                ],
            },
            {
                subtitulo: "¿Cómo evitar el contagio del VPH?",
                lista: [
                    "Vacunarse contra el VPH. Las vacunas que protegen contra las infecciones por el VPH reducen en gran medida el riesgo de cáncer de cuello uterino.",
                    "Usar un método anticonceptivo de barrera, como un preservativo, ayuda a protegerse contra las infecciones por el VPH y otras enfermedades de transmisión sexual.",
                ],
            },
            {
                subtitulo: "Vacuna del VPH",
                lista: [
                    "La vacuna del VPH forma parte del calendario nacional de vacunación y es obligatoria y gratuita para niñas y niños de 11 años. Consta de dos dosis.",
                    "Se recomienda a esta edad porque en los estudios clínicos se demostró que la mayor efectividad de la vacuna se observa antes del inicio de las relaciones sexuales y, por ende, antes del contacto con el VPH.",
                    "Estas vacunas no protegen a las mujeres que ya están infectadas por el VPH.",
                    "La vacuna contra el VPH es segura, eficaz y previene la infección por los tipos de VPH de alto riesgo que causan el 80% de los casos de cáncer de cuello de útero, vulva, ano, pene, boca o garganta y el 90% de las verrugas genitales.",
                    "<span>Es muy importante tener en cuenta que aún las mujeres vacunadas se debe continuar realizando el control ginecológico anual con PAP, así como también las no vacunadas mayores, la consulta personalizada con el ginecólogo.</span>",
                ],
            },
            {
                subtitulo: "Puntos importantes para recordar",
                lista: [
                    "El cáncer de cuello uterino afecta a mujeres jóvenes y es la principal causa de muerte por cáncer ginecológico en nuestro país.",
                    "La mayoría de los casos de cáncer de cuello uterino se pueden prevenir mediante los exámenes de detección de rutina (PAP, colposcopia, test de VPH) y el tratamiento apropiado de las lesiones precancerosas.",
                    "La infección por VPH es el principal factor de riesgo para desarrollar cáncer de cuello uterino.",
                    "Los signos y síntomas del cáncer de cuello uterino incluyen el sangrado vaginal anormal y el dolor pélvico.",
                    "La vacuna contra el VPH previene la infección por los tipos de VPH de alto riesgo que causan el 80% de los casos de cáncer de cuello de útero, vulva, ano, pene, boca o garganta y el 90% de las verrugas genitales.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dr. Gonzalo Giornelli",
                textos: [
                    "Oncólogo clínico",
                    "(MN 95.788)",
                ],
            },
            {
                nombre: "Dra. Ana Laura Mendaña",
                textos: [
                    "Oncóloga clínica",
                    "(MN 135.188)",
                    "Marzo 2021",
                ],
            },
        ],
    },
    {
        img: "mama",
        nombre: "Cáncer de mama",
        titulo: "El cáncer de mama afectará a 1 de cada 8 mujeres en Argentina",
        body: [
            {
                subtitulo: "Estadísticas del cáncer de mama",
                lista: [
                    "El cáncer de mama es el tumor maligno más frecuente en la mujer.",
                    "Es la segunda causa de muerte por cáncer en la mujer.",
                    "El cáncer de mama puede curarse con cirugía más radioterapia, quimioterapia, hormonoterapia y/o anticuerpos monoclonales.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de mama",
                lista: [
                    "Notarse un nódulo en la mama, secreción sanguinolenta por el pezón, úlcera o lesión sobre la piel de la mama que no cura."
                ],
            },
            {
                subtitulo: "¿Quiénes tienen mayor riesgo al habitual?",
                lista: [
                    "Mujeres con antecedentes familiares (maternos y/o paternos) de cáncer de mama.",
                    "Mujeres con madre o hermana con cáncer de mama en la pre-menopausia o bilateral o cáncer de ovario.",
                    "Antecedentes personales de cáncer de mama u ovario.",
                    "Diagnóstico por punción de neoplasia lobulillar in situ.",
                    "Antecedentes personales de radioterapia torácica.",
                    "En estas mujeres los estudios para detección precoz del cáncer de mama deben iniciarse desde los 30 años o desde 10 años antes de la edad de diagnóstico de cáncer en el familiar más joven.",
                ],
            },
            {
                subtitulo: "Mamografía, ¿A quiénes y cada cuánto?",
                textos: [
                    "La Sociedad Argentina de Mastología (SAM) recomienda una mamografía de base a los 35 años en pacientes asintomáticas y, en caso de tener antecedentes familiares, el primer control debe hacerse 10 años antes de la edad en que el familiar tuvo cáncer de mama.",
                    "A todas las mujeres con riesgo promedio (sin factores que aumenten sus probabilidades de tener cáncer de mama) desde los 50 años, una vez por año (excepto que el estudio realizado sugiera hacerlo semestralmente).",
                ],
            },
            {
                subtitulo: "¿Cuándo realizar ecografía mamaria?",
                lista: [
                    "Puede detectar lesiones que no se ven en la mamografía convencional.",
                    "Se recomienda en mujeres con mamas densas y antecedentes de cirugía o radioterapia o para evaluación de lesiones sospechosas.",
                ],
            },
            {
                subtitulo: "¿Y la resonancia?",
                textos: [
                    "Se realiza en mujeres con mutación genética conocida o alto riesgo de cáncer heredo - familiar."
                ],
            },
            {
                subtitulo: "¿Y el auto examen?",
                lista: [
                    "No ha demostrado ser útil como único método.",
                    "No reemplaza a la realización de mamografía anual.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dra. Verónica Fabiano",
                textos: [
                    "Ginecóloga y Mastóloga",
                    "(MN 122.874)",
                    "Agosto 2021",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Cuadernillo con información para entender tu diagnostico",
                pdf: "#"
            },
            {
                nombre: "Folleto del cáncer de mama",
                pdf: "#"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/XoUImAt_h-0?si=RuqdXv9mV2eh79BT",
            "https://www.youtube.com/embed/CXCHQc0eWWg?si=qKtn9I3SZsBAn0-c",
            "https://www.youtube.com/embed/cIOyrmMX3PI?si=hpwwjfzh7B9IM179"
        ],
    },
    {
        img: "ovario",
        nombre: "Cáncer de ovario",
        body: [
            {
                subtitulo: "Sobre el cáncer de ovario",
                textos: [
                    "El cáncer de ovario es un tumor maligno que se puede originar en los ovarios, trompas de Falopio o peritoneo. El tipo más común de cáncer de ovario es el cáncer epitelial, que representa el 90% de los casos.",
                    "El cáncer de ovario es el octavo cáncer más común en las mujeres de todo el mundo y el séptimo más frecuente en Argentina. Se diagnostican 2.200 nuevos casos por año en nuestro país. Afecta principalmente a mujeres posmenopáusicas de más de 50 años, pero puede aparecer a cualquier edad.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de ovario",
                textos: [
                    "En sus primeros estadios, el cáncer epitelial de ovario puede tener pocos o ningún síntoma, lo cual dificulta el diagnóstico. Los síntomas se observan más comúnmente en una fase avanzada de la enfermedad y pueden incluir: dolor abdominal o pélvico, sangrado vaginal anormal, estreñimiento, abdomen distendido o hinchazón abdominal que no mejora, diarrea, sensación de cansancio extremo, necesidad frecuente de orinar, pérdida del apetito, sentirse llena poco después de comenzar a comer, dificultad para respirar.",
                    "Si presenta algunos de estos síntomas es importante que consulte con su médico de cabecera o ginecólogo. Sin embargo, es importante recordar que estos síntomas son comunes en las personas que no tienen cáncer epitelial de ovario y que también pueden ser causados por otras enfermedades.",
                ],
            },
            {
                subtitulo: "Causas y factores de riesgo para desarrollar cáncer de ovario",
                textosDescriptivo: [
                    "La causa exacta del cáncer de ovario se desconoce, pero se han identificado varios factores de riesgo para el desarrollo de la enfermedad.",
                ],
                lista: [
                    "Entre los factores que pueden aumentar el riesgo de cáncer de ovario se encuentran:",
                    "Antecedentes familiares como madre o hermana que hayan tenido cáncer de ovario, útero o mama.",
                    "Edad: las mujeres mayores de 50 años tienen un riesgo mayor. La mayoría de los cánceres de ovario se detectan después de la menopausia.",
                    "Factores hormonales: no haber tenido hijos, no haber tomado anticonceptivos, comienzo de menstruaciones a edades tempranas o inicio de la menopausia de manera tardía.",
                    "Factores genéticos: ciertos rasgos genéticos pueden aumentar el riesgo. Las mujeres con mutaciones en los genes BRCA 1 o BRCA2 tienen un riesgo de desarrollar cáncer de ovario que va del 23% al 54%.",
                    "Problemas ginecológicos previos como quistes ováricos o endometriosis.",
                    "Estilo de vida: obesidad, sedentarismo, tabaquismo.",
                ],
                textosFinales: [
                    "Es importante recordar que el hecho de tener un factor de riesgo no significa que se vaya a padecer cáncer con seguridad. Por el contrario, el hecho de no tener ningún factor de riesgo no significa que nunca se vaya a padecer cáncer. Los factores de riesgo pueden aumentar el riesgo de padecer la enfermedad.",
                ],
            },
            {
                subtitulo: "¿Cómo se diagnostica el cáncer de ovario?",
                textos: [
                    "Ante síntomas de alarma, su médico le realizará un examen físico y, de ser necesario, le solicitará estudios que pueden incluir una ecografía pelviana o transvaginal, tomografía computada, resonancia magnética y análisis de sangre para detectar niveles elevados de la proteína Ca 125.",
                    "Para confirmar el diagnóstico y determinar la etapa o estadio en la que se encuentra la enfermedad es necesario realizar una cirugía de exploración del abdomen y pelvis o en algunos casos una toma de biopsia.",
                    "El cáncer de ovario se estadifica de acuerdo con el tamaño del tumor, el compromiso o no de los tejidos circundantes al ovario llamado peritoneo, la afectación de los ganglios linfáticos y el hecho de que se haya diseminado a otras partes del cuerpo fuera de la cavidad abdominal. Esta información se utiliza para ayudar a decidir el mejor tratamiento.",
                ],
            },
            {
                subtitulo: "¿Se puede prevenir el cáncer de ovario?",
                textos: [
                    "El cáncer de ovario es difícil de prevenir en la población general. No disponemos de métodos eficaces para realizar el diagnóstico precoz o tamizaje para la detección temprana de esta enfermedad.",
                    "En aquellas mujeres portadoras sanas de ciertas mutaciones como los genes BRCA 1 y BRCA 2 si pueden realizarse estudios para detección precoz y cirugías para reducir el riesgo a desarrollar la enfermedad.",
                ],
            },
            {
                subtitulo: "¿Cómo se trata el cáncer de ovario?",
                textos: [
                    "En la actualidad disponemos de múltiples herramientas terapéuticas para tratar a las pacientes con diagnóstico de cáncer de ovario. Entre las opciones disponibles, la cirugía tiene un rol muy importante en la evolución y pronóstico de las pacientes. También existen distintas opciones de tratamiento médico como quimioterapia y terapias blanco dirigidas que permiten prolongar la supervivencia y mejorar la calidad de vida de las pacientes.",
                    "Es muy importante remarcar la importancia que tiene en la evolución de las pacientes con cáncer de ovario la atención en centros especializados y el manejo en equipos multidisciplinarios.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dra. Ana Laura Mendaña",
                textos: [
                    "Oncóloga clínica",
                    "(MN 135.188)",
                    "Mayo 2021",
                ],
            },
        ],
    },
    {
        img: "piel",
        nombre: "Cáncer de piel: Melanoma",
        body: [
            {
                subtitulo: "¿Qué es el cáncer de piel: melanoma?",
                textos: [
                    "Es un tipo de cáncer de piel agresivo y con alta mortalidad. La exposición solar es el principal factor de riesgo. En su gran mayoría se pueden prevenir y curar.",
                ],
            },
            {
                subtitulo: "Factores de riesgo",
                lista: [
                    "Piel y ojos claros.",
                    "Exposición solar (principalmente de forma intermitente).",
                    "Antecedentes de quemaduras solares frecuentes en infancia y adolescencia.",
                    "Uso de camas solares.",
                    "Exposición Múltiples lunares.",
                    "Lunares atípicos (bordes y color irregular).",
                    "Historia familiar de Melanoma.",
                    "Historia personal de Melanoma.",
                ],
            },
            {
                subtitulo: "¿Cuándo debo pensar en melanoma?",
                lista: [
                    "Mancha negra, marrón o raramente rosada nueva sobre la piel o cambio de color, tamaño, bordes o sangrado de un lunar previo.",
                    "Crecimiento sobre la piel de verruga de superficie rugosa.",
                    "Herida abierta que no cura.",
                ],
            },
            {
                subtitulo: "Protección solar: ¿cómo protegerme de los rayos UV?",
                lista: [
                    "Elegir y buscar la sombra.",
                    "Usar protector solar: UVA/UVB, FPS 15 o más todos los días.",
                    "Evitar la exposición directa al sol de 10 AM a 4 PM.",
                    "Usar ropa y accesorios adecuados (sombreros, anteojos).",
                    "Evitar el uso de camas solares.",
                    "Los episodios de quemaduras durante la infancia y adolescencia son un factor de riesgo independiente para desarrollar Melanoma en la edad adulta.",
                    "A los 20 años, una persona ya se expuso al 50 % del total de las radiaciones solares que recibirá en toda su vida.",
                    "En los niños el sistema natural de protección no está desarrollado, en ellos el daño solar es máximo. Ser insistente con los niños!.",
                    "El bronceado seguro no existe.",
                    "Los protectores solares se deben usar siempre que nos exponemos a radiaciones solares, no solo en verano.",
                ],
            },
            {
                subtitulo: "Consulta dermatológica ¿cuándo consultar?",
                lista: [
                    "Consulta anual.",
                    "Lesión nueva.",
                    "Cambios de una lesión pre-existente.",
                    "Controles post-tratamiento.",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Tríptico sobre prevención de melanoma",
                pdf: "#"
            },
        ],
    },
    {
        img: "prostata",
        nombre: "Cáncer de próstata",
        body: [
            {
                subtitulo: "Estadísticas",
                lista: [
                    "Es el cáncer más frecuente en el hombre: 1 de cada 4 cánceres diagnosticados son de la próstata.",
                    "La segunda causa de muerte por cáncer en el hombre.",
                    "1 de cada 6 hombres desarrollará cáncer de próstata a lo largo de su vida.",
                    "81% de todos los cánceres de próstata se diagnostican en hombres mayores de 65 años.",
                ],
            },
            {
                subtitulo: "Síntomas",
                textos: [
                    "El cáncer de próstata a menudo no genera síntomas tempranos. El cáncer de próstata avanzado puede hacer que los hombres orinen con más frecuencia o tengan un flujo débil de orina, pero estos síntomas también obedecen a afecciones benignas de la próstata."
                ],
            },
            {
                subtitulo: "¿Qué es el PSA?",
                textos: [
                    "Antígeno Prostático Específico. Es una enzima secretada por la próstata. Su valor normal aceptado es hasta 4 ng/ml, pero varía según la edad del hombre."
                ],
            },
            {
                subtitulo: "El cáncer de próstata ¿se puede prevenir?",
                listas: [
                    "El cáncer de próstata no se puede prevenir.",
                    "Durante mucho tiempo se recomendó realizar la detección precoz del cáncer de próstata con el uso de los valores de PSA en sangre y el tacto rectal realizado de forma periódica. Actualmente no se recomienda realizar estos exámenes a toda la población, ya que estudios realizados en miles de personas no demostraron su utilidad en la disminución de muertes por cáncer de próstata.",
                    "La decisión de realizar o no estudios para la detección precoz de cáncer de próstata tiene que ser discutida con su médico de cabecera (decisiones compartidas).",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/X7F2pbhIXeI?si=9CfKqzFMGPRWcfTw",
            "https://www.youtube.com/embed/4OtMrilx6mo?si=op2yTBZaJZ1uMESs",
        ],
    },
    {
        img: "pulmon",
        nombre: "Cáncer de pulmón",
        body: [
            {
                subtitulo: "¿Qué es el cáncer de pulmón?",
                textos: [
                    "Es una enfermedad en la cual las células malignas se originan en el tejido pulmonar.",
                    "Es la principal causa de muerte por cáncer en el hombre y en la mujer, a pesar de ser menos frecuente que el cáncer de próstata y de mama, respectivamente.",
                ],
            },
            {
                subtitulo: "¿Qué puede causar el cáncer de pulmón?",
                listas: [
                    "Causas conocidas:",
                    "Tabaquismo.",
                    "Tabaquismo pasivo.",
                    "Exposición a factores ambientales (asbesto, arsénico, cromo, niquel y radón).",
                ],
            },
            {
                subtitulo: "Síntomas",
                listas: [
                    "Falta de aire.",
                    "Dolor con la respiración.",
                    "Tos crónica.",
                    "Expectoración con sangre, sobretodo en personas fumadoras o que han fumado.",
                ],
            },
            {
                subtitulo: "Tabaquismo y cáncer de pulmón",
                listas: [
                    "El 80% cánceres de pulmón son causados por el tabaquismo.",
                    "Aumenta 10-20 veces el riesgo de padecer cáncer de pulmón.",
                    "Se asocia a otros 15 tipos de tumores.",
                    "Es independiente del tipo de tabaco que se consume.",
                ],
            },
            {
                subtitulo: "Beneficios de dejar de fumar",
                listas: [
                    "Disminuye el riesgo de todas las enfermedades asociadas al tabaco.",
                    "Se recomienda dejar de fumar SIEMPRE independientemente de la edad.",
                ],
            },
            {
                subtitulo: "Sugerencias",
                listas: [
                    "Consulta temprana ante la aparición de síntomas, sobre todo en tabaquistas.",
                    "Dejar de fumar.",
                    "Los fumadores pesados deben discutir los riesgos y beneficios de la tomografía computada con su médico de cabecera.",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Díptico sobre prevención del cáncer de pulmón",
                pdf: "#"
            },
            {
                nombre: "Cuadernillo sobre prevención, diagnóstico y tratamiento de cáncer de pulmón",
                pdf: "#"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/TyJdYJnLkS0?si=4sAlVJAZPVG_Lp6D",
            "https://www.youtube.com/embed/mYyVSKFIBpw?si=vWrwj603yWdFtB8a",
            "https://www.youtube.com/embed/Q9JGGYxDAsc?si=tyS_6qjLTMjehnme",
            "https://www.youtube.com/embed/G4itzwoXFJk?si=27uzvLmDkSvhWtw5",
            "https://www.youtube.com/embed/6hSLi4JYSXw?si=toFY_DzUE6GydQks",
        ],
    },
    {
        img: "tiroides",
        nombre: "Cáncer de tiroides",
        body: [
            {
                subtitulo: "Sobre la tiroides",
                textos: [
                    "<span>¿Qué es la tiroides?</span>",
                    "La tiroides es una glándula que se localiza en la región anterior del cuello y participa en múltiples procesos metabólicos del organismo.",
                    "<span>Es frecuente el desarrollo de nódulos en esta glándula, pero la gran mayoría de ellos son benignos.</span>",
                ],
            },
            {
                subtitulo: "Factores de riesgo para desarrollar cáncer de tiroides",
                listas: [
                    "Déficit de Yodo en la dieta.",
                    "Antecedentes de radiación en el cuello en la infancia.",
                    "Antecedentes de cáncer de tiroides en la familia.",
                    "Sindromes hereditarios como la “neoplasia endócrina múltiple” o la “poliposis adenomatosa familiar”.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de tiroides",
                listas: [
                    "Casi en la totalidad de los casos se presenta con un nódulo tiroideo asintomático.",
                    "Puede manifestarse como masa palpable en el cuello, ganglios aumentados de tamaño en las regiones laterales del mismo.",
                ],
            },
            {
                subtitulo: "¿Cómo prevenir cáncer de tiroides?",
                listas: [
                    "Adecuado aporte de Yodo en la dieta (suplementación del agua en zonas de déficit).",
                ],
            },
            {
                subtitulo: "Exámenes de detección precoz del cáncer de tiroides",
                listas: [
                    "No existe actualmente una sistemática de estudio para detección precoz de esta patología, dada su baja frecuencia y mortalidad.",
                    "El diagnóstico suele ser incidental, por autopalpación de un nódulo en la región anterior del cuello, por detección del nódulo en un examen médico de rutina, o por imágenes realizadas por otros motivos.",
                ],
            },
            {
                subtitulo: "Tipos de cáncer de tiroides",
                listas: [
                    "Aprox. Un 95% de estos tumores está constituido por las “carcinomas diferenciados” que son el papilar y el folicular, con sus variantes y que conllevan mejor pronóstico.",
                    "Aprox. un 3% se trata de carcinomas medulares, de curso más agresivo que los diferenciados pero de todos modos con buen pronóstico.",
                    "Un bajo porcentaje (1,5%) está constituido por los “carcinomas anaplásicos”, de curso más agresivo y presentación en adultos mayores.",
                ],
            },
            {
                subtitulo: "¿Cómo se trata el cáncer de tiroides?",
                listas: [
                    "En la gran mayoría de los casos el tratamiento inicial es quirúrgico, con remoción total o parcial de la glándula.",
                    "Según los factores de riesgo propios de cada tumor, luego de la cirugía, requerirá o no tratamiento con Yodo radioactivo.",
                    "Un reducido número de pacientes evolucionará con enfermedad recurrente o avanzada que requerirá tratamiento con drogas específicas.",
                ],
            },
            {
                subtitulo: "Incidencia y mortalidad del cáncer de tiroides",
                listas: [
                    "Son tumores de baja frecuencia (aprox. 3% de todos los tipos de cáncer).",
                    "Por lo general tienen buen pronóstico (0,4% de las muertes por cáncer).",
                    "Son más frecuentes en mujeres que en hombres (relación 3:1).",
                    "Se presentan mayormente a edad joven (antes de los 50 años).",
                ],
            },
            {
                subtitulo: "Puntos importantes para recordar",
                listas: [
                    "Como en muchos otros tipos de tumor, <span>es fundamental el abordaje multidisciplinario de esta patología, con equipo conformado por endocrinólogos, cirujanos de cabeza y cuello, especialistas en medicina nuclear, oncólogos, anatomopatólogos.</span>",
                    "Ante la aparición de un nódulo tiroideo, recordar que lo más probable es que sea benigno, pero de todos modos <span>consultar a su médico/a de confianza para su correcto estudio y derivación cuando corresponda.</span>",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dr. Mariano Leiva",
                textos: [
                    "Oncólogo clínico",
                    "(MN 139.519)",
                ],
            },
            {
                nombre: "Dr. Agustín Falco",
                textos: [
                    "Oncólogo clínico",
                    "(MN 113.572)",
                    "Septiembre 2021",
                ],
            },
        ],
    },
    {
        img: "vejiga",
        nombre: "Cáncer de vejiga",
        videos: [
            "https://www.youtube.com/embed/tHdfO_sw224?si=0PBs-tSXDTS6jnTI",
        ],
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
    // {
    //     titulo: "Cáncer hereditario",
    // },
    // {
    //     titulo: "Hábitos saludables",
    // },
    // {
    //     titulo: "Nutrición",
    // },
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
    // {
    //     titulo: "Glosario",
    // },
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