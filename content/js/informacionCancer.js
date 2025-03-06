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
                    "Este grupo de especialista conforman lo que se denomina equipo multidisciplinario, requisito fundamental para el tratamiento de estos pacientes en centros especializados, e incluye: cirujanos (especialista en cabeza y cuello), radioterapeutas (especialista en tratamiento de radioterapia), oncólogos, especialista en imágenes, odontólogos, nutricionistas, fonoaudiólogos / foniatras, patólogos, entre otros."
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
                nombre: "Cuadernillo para pacientes de cáncer de cabeza y cuello",
                pdf: "fuca_cabezaycuello_2018"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/G3gI1i--trs?si=UXHNGMIB65abQvk1",
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
                nombre: "Qué es el Cáncer Colorrectal",
                pdf: "guia-ccr-2024"
            },
            {
                nombre: "Cáncer Colorrectal",
                pdf: "fuca_colon_2017"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/8PMRHdtkFGc?si=ghmgTrUrgygzDNR5",
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
                pdf: "fuca_mama_2015"
            },
            {
                nombre: "Folleto del cáncer de mama",
                pdf: "folleto-mama"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/XoUImAt_h-0?si=RuqdXv9mV2eh79BT",
            "https://www.youtube.com/embed/CXCHQc0eWWg?si=qKtn9I3SZsBAn0-c",
            "https://www.youtube.com/embed/cIOyrmMX3PI?si=hpwwjfzh7B9IM179",
            "https://www.youtube.com/embed/4_Rcp2VjZ-8?si=U0SkKTTAy7_4_bml",
            "https://www.youtube.com/embed/6NFtgeT7ZA4?si=tn8_R1pUunB4rKfy",
            "https://www.youtube.com/embed/sSpAyvWlXNg?si=aBdfYMoKaNeFckg7"
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
        videos: [
            "https://www.youtube.com/embed/sSpAyvWlXNg?si=zOEAjwBy5Ob0OUdX",
            "https://www.youtube.com/embed/y4ZMkt29DfU?si=N6P7EG4SospXQIaJ",
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
                nombre: "Información sobre la prevención de Melanoma",
                pdf: "fuca_melanoma_2016"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/xotgg9G8qrw?si=s9HvWoEqRPXGohtr",
            "https://www.youtube.com/embed/SQxj3XynaKM?si=MU0okOG8agGv-l0K",
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
                lista: [
                    "El cáncer de próstata no se puede prevenir.",
                    "Durante mucho tiempo se recomendó realizar la detección precoz del cáncer de próstata con el uso de los valores de PSA en sangre y el tacto rectal realizado de forma periódica. Actualmente no se recomienda realizar estos exámenes a toda la población, ya que estudios realizados en miles de personas no demostraron su utilidad en la disminución de muertes por cáncer de próstata.",
                    "La decisión de realizar o no estudios para la detección precoz de cáncer de próstata tiene que ser discutida con su médico de cabecera (decisiones compartidas).",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/X7F2pbhIXeI?si=9CfKqzFMGPRWcfTw",
            "https://www.youtube.com/embed/4OtMrilx6mo?si=op2yTBZaJZ1uMESs",
            "https://www.youtube.com/embed/DYMLSW8f4ig?si=RoUGyO_ZO_tRR3Vi",
            "https://www.youtube.com/embed/X7F2pbhIXeI?si=2-MJdijXSfPdzPDv",
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
                lista: [
                    "Causas conocidas:",
                    "Tabaquismo.",
                    "Tabaquismo pasivo.",
                    "Exposición a factores ambientales (asbesto, arsénico, cromo, niquel y radón).",
                ],
            },
            {
                subtitulo: "Síntomas",
                lista: [
                    "Falta de aire.",
                    "Dolor con la respiración.",
                    "Tos crónica.",
                    "Expectoración con sangre, sobretodo en personas fumadoras o que han fumado.",
                ],
            },
            {
                subtitulo: "Tabaquismo y cáncer de pulmón",
                lista: [
                    "El 80% cánceres de pulmón son causados por el tabaquismo.",
                    "Aumenta 10-20 veces el riesgo de padecer cáncer de pulmón.",
                    "Se asocia a otros 15 tipos de tumores.",
                    "Es independiente del tipo de tabaco que se consume.",
                ],
            },
            {
                subtitulo: "Beneficios de dejar de fumar",
                lista: [
                    "Disminuye el riesgo de todas las enfermedades asociadas al tabaco.",
                    "Se recomienda dejar de fumar SIEMPRE independientemente de la edad.",
                ],
            },
            {
                subtitulo: "Sugerencias",
                lista: [
                    "Consulta temprana ante la aparición de síntomas, sobre todo en tabaquistas.",
                    "Dejar de fumar.",
                    "Los fumadores pesados deben discutir los riesgos y beneficios de la tomografía computada con su médico de cabecera.",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Díptico sobre prevención del cáncer de pulmón",
                pdf: "diptico-pulmon-cv"
            },
            {
                nombre: "Cuadernillo sobre prevención, diagnóstico y tratamiento de cáncer de pulmón",
                pdf: "fuca_pulmon_2017"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/TyJdYJnLkS0?si=4sAlVJAZPVG_Lp6D",
            "https://www.youtube.com/embed/mYyVSKFIBpw?si=vWrwj603yWdFtB8a",
            "https://www.youtube.com/embed/Q9JGGYxDAsc?si=tyS_6qjLTMjehnme",
            "https://www.youtube.com/embed/G4itzwoXFJk?si=27uzvLmDkSvhWtw5",
            "https://www.youtube.com/embed/6hSLi4JYSXw?si=toFY_DzUE6GydQks",
            "https://www.youtube.com/embed/TyJdYJnLkS0?si=AK9cYiovr8WZqFUu",
            "https://www.youtube.com/embed/Q9JGGYxDAsc?si=e7raFBt2-iatQXa9",
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
                lista: [
                    "Déficit de Yodo en la dieta.",
                    "Antecedentes de radiación en el cuello en la infancia.",
                    "Antecedentes de cáncer de tiroides en la familia.",
                    "Sindromes hereditarios como la “neoplasia endócrina múltiple” o la “poliposis adenomatosa familiar”.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer de tiroides",
                lista: [
                    "Casi en la totalidad de los casos se presenta con un nódulo tiroideo asintomático.",
                    "Puede manifestarse como masa palpable en el cuello, ganglios aumentados de tamaño en las regiones laterales del mismo.",
                ],
            },
            {
                subtitulo: "¿Cómo prevenir cáncer de tiroides?",
                lista: [
                    "Adecuado aporte de Yodo en la dieta (suplementación del agua en zonas de déficit).",
                ],
            },
            {
                subtitulo: "Exámenes de detección precoz del cáncer de tiroides",
                lista: [
                    "No existe actualmente una sistemática de estudio para detección precoz de esta patología, dada su baja frecuencia y mortalidad.",
                    "El diagnóstico suele ser incidental, por autopalpación de un nódulo en la región anterior del cuello, por detección del nódulo en un examen médico de rutina, o por imágenes realizadas por otros motivos.",
                ],
            },
            {
                subtitulo: "Tipos de cáncer de tiroides",
                lista: [
                    "Aprox. Un 95% de estos tumores está constituido por las “carcinomas diferenciados” que son el papilar y el folicular, con sus variantes y que conllevan mejor pronóstico.",
                    "Aprox. un 3% se trata de carcinomas medulares, de curso más agresivo que los diferenciados pero de todos modos con buen pronóstico.",
                    "Un bajo porcentaje (1,5%) está constituido por los “carcinomas anaplásicos”, de curso más agresivo y presentación en adultos mayores.",
                ],
            },
            {
                subtitulo: "¿Cómo se trata el cáncer de tiroides?",
                lista: [
                    "En la gran mayoría de los casos el tratamiento inicial es quirúrgico, con remoción total o parcial de la glándula.",
                    "Según los factores de riesgo propios de cada tumor, luego de la cirugía, requerirá o no tratamiento con Yodo radioactivo.",
                    "Un reducido número de pacientes evolucionará con enfermedad recurrente o avanzada que requerirá tratamiento con drogas específicas.",
                ],
            },
            {
                subtitulo: "Incidencia y mortalidad del cáncer de tiroides",
                lista: [
                    "Son tumores de baja frecuencia (aprox. 3% de todos los tipos de cáncer).",
                    "Por lo general tienen buen pronóstico (0,4% de las muertes por cáncer).",
                    "Son más frecuentes en mujeres que en hombres (relación 3:1).",
                    "Se presentan mayormente a edad joven (antes de los 50 años).",
                ],
            },
            {
                subtitulo: "Puntos importantes para recordar",
                lista: [
                    "Como en muchos otros tipos de tumor, <span>es fundamental el abordaje multidisciplinario de esta patología, con equipo conformado por endocrinólogos, cirujanos de cabeza y cuello, especialista en medicina nuclear, oncólogos, anatomopatólogos.</span>",
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
        videos: [
            "https://www.youtube.com/embed/9Xkh1b65Q80?si=JiLUoj9faFqiER4-",
        ],
    },
    {
        img: "vejiga",
        nombre: "Cáncer de vejiga",
        videos: [
            "https://www.youtube.com/embed/tHdfO_sw224?si=0PBs-tSXDTS6jnTI",
            "https://www.youtube.com/embed/tHdfO_sw224?si=8adY4jzgZr3SMU25",
        ],
    },
    {
        img: "gastrico",
        nombre: "Cáncer gástrico",
        body: [
            {
                subtitulo: "¿Qué es el cáncer gástrico?",
                textos: [
                    "El cáncer de estómago o gástrico es un tipo de cáncer en el que se forman células malignas en el revestimiento del estómago. Suele desarrollarse muy lentamente durante varios años; muchas veces ocurren lesiones precancerosas en la pared interna del estómago. Existen además diferentes tipos de cáncer gástrico. El más común, denominado adenocarcinoma, es el que comienza en las células que se encuentran en el revestimiento interno del estómago.",
                    "Las diferentes ubicaciones que tienen los tumores en el estómago pueden determinar a su vez síntomas y consecuencias diversos, y su tratamiento también puede variar. Por ejemplo, los cánceres que se originan en la unión entre el estómago y el esófago (o que crecen hacia la misma) se tratan de la misma forma que el cáncer de esófago.",
                    "<span>El cáncer de estómago se diagnostica con frecuencia en un estadio avanzado porque no presenta signos o síntomas tempranos.</span>",
                ],
            },
            {
                subtitulo: "¿Cuáles son los factores de riesgo del cáncer de estómago?",
                textosDescriptivo: [
                    "Un factor de riesgo es alguna circunstancia que incrementa las probabilidades de tener una enfermedad. Algunos factores de riesgo, como el fumar, pueden depender de la voluntad de la persona o controlarse y otros no, como la edad. Sin embargo, presentar uno o algunos factores de riesgo no implica que la persona contraerá la enfermedad y por el contrario, muchos contraen una enfermedad aunque no tengan factores de riesgo.",
                    "En general los siguientes factores indican mayor propensión a padecer este tipo de cáncer:",
                ],
                lista: [
                    "SEXO: el cáncer de estómago es más frecuente en los hombres.",
                    "EDAD: la incidencia de cáncer de estómago aumenta en los mayores de 50 años, y sobre todo entre los 60 y 89 años de edad.",
                    "INFECCIÓN CON HELICOBACTER PYLORI: las infecciones con esta bacteria parece ser la causa principal de cáncer gástrico, especialmente en la parte inferior del estómago. La infección prolongada del estómago con este germen puede conducir a inflamación (gastritis atrófica crónica) y provocar cambios precancerosos en el revestimiento interno del estómago. La infección con H pylori se asocia también con algunos tipos de linfoma de estómago.",
                    "LINFOMA DEL ESTÓMAGO: las personas que han padecido cierto tipo de linfoma de estómago conocido como linfoma de tejido linfático asociado con la mucosa tienen un riesgo aumentado de padecer adenocarcinoma del estómago.",
                    "ALIMENTACIÓN: las personas que tienen una alimentación con grandes cantidades de alimentos ahumados, pescado y carne salada, y vegetales conservados en vinagre tienen un riesgo mayor de padecer este tipo de cáncer. Por otra parte, consumir muchas frutas, verduras y vegetales frescos parece reducir el riesgo de cáncer de estómago.",
                    "EL CONSUMO DE TABACO: el hábito de fumar aumenta el riesgo de cáncer de estómago, en especial de la parte superior cercana al esófago.",
                    "SOBREPESO U OBESIDAD: el sobrepeso o la obesidad es una posible causa de cáncer en la parte superior del estómago.",
                    "CIRUGÍA DEL ESTÓMAGO: las personas a las que se les ha extraído parte del estómago para tratar enfermedades no cancerosas como las úlceras son más propensas a padecer cáncer gástrico.",
                    "ANEMIA PERNICIOSA: este tipo de anemia ocurre por una deficiencia en la absorción de la vitamina B12 de los alimentos, lo que a su vez afecta la capacidad del organismo de producir glóbulos rojos. Esta enfermedad también incrementa el riesgo de padecer cáncer gástrico.",
                    "GASTRITIS CRÓNICA: consiste en la inflamación de la mucosa gástrica y puede ser también un factor predisponente de cáncer gástrico.",
                    "ALGUNOS TIPOS DE PÓLIPOS EN EL ESTÓMAGO: en general los pólipos (crecimientos no cancerosos en el revestimiento del estómago) no aumentan el riesgo de padecer cáncer de estómago, salvo los pólipos denominados adenomatosos o adenomas, los que se pueden convertir en cáncer.",
                    "LOS CÁNCERES HEREDITARIOS: tienen mayores probabilidades de desarrollar cáncer de estómago las personas con familiares de primer grado (padres, hermanos e hijos) que lo hayan padecido.",
                ],
            },
            {
                subtitulo: "Prevención",
                textosDescriptivo: [
                    "La prevención consiste en tomar medidas para evitar o reducir la probabilidad de enfermar de cáncer. De este modo al disminuir el número de nuevos casos baja también la mortalidad por cáncer.",
                    "En el caso del cáncer de estómago no podemos prevenir en sentido absoluto pero sí evitar los factores de riesgo que pueden controlarse y tomar medidas de protección, o sea aquellas que tienden a reducir el riesgo.",
                ],
                lista: [
                    "En general se recomienda:",
                    "No fumar",
                    "Tener una alimentación saludable, rica en frutas y verduras y limitar el consumo de carnes procesadas y saladas.",
                    "Realizar actividad física regular",
                    "Combatir la obesidad o el sobrepeso",
                    "Tratar la enfermedad por reflujo (acidez gástrica), si se presenta",
                    "Realizar controles médicos periódicos",
                    "Consultar al médico ante la aparición de alguno de los síntomas y seguir sus indicaciones en caso de que se detecten lesiones precancerosas.",
                ],
            },
            {
                subtitulo: "Síntomas del cáncer gástrico",
                textosDescriptivo: [
                    "Las primeras etapas del cáncer gástrico suele no tener síntomas o tener pocos síntomas, sin embargo, es importante estar atento a los siguientes signos que pueden presentarse:",
                ],
                lista: [
                    "Indigestión o malestar estomacal.",
                    "Sensación de hinchazón después de comer.",
                    "Náuseas suaves.",
                    "Pérdida del apetito.",
                    "Acidez estomacal.",
                    "Sensación de cansancio.",
                    "En los estadios más avanzados del cáncer de estómago se pueden presentar los siguientes signos y síntomas:",
                    "Sangre en las heces o heces de color negro.",
                    "Vómitos.",
                    "Pérdida de peso sin razón conocida.",
                    "Dolor de estómago, especialmente después de las comidas.",
                    "Ictericia (color amarillento de los ojos y la piel).",
                    "Ascitis (acumulación de líquidos en el abdomen).",
                    "Problema para tragar.",
                    "<span>Consulte con su médico si tiene cualquiera de estos problemas.</span>",
                ],
            },
            {
                subtitulo: "¿Cómo se diagnostica el cáncer de estómago?",
                textosDescriptivo: [
                    "Para detectar y diagnosticar el cáncer de estómago, se utilizan una serie de pruebas que examinan el estómago y el esófago:",
                ],
                lista: [
                    "EXAMEN FÍSICO Y ANTECEDENTES: el examen del cuerpo que realiza el médico está destinado a verificar si existen signos generales de salud o signos de enfermedad, como bultos o cualquier otra condición que considere inusual o indicio de algún problema. También se tienen en cuenta los los hábitos de salud del paciente, así como los antecedentes médicos de sus enfermedades y tratamientos anteriores, y de sus parientes directos.",
                    "ANÁLISIS BIOQUÍMICO DE LA SANGRE: este procedimiento mide las cantidades de ciertas sustancias liberadas a la misma por los órganos y tejidos. Una cantidad anormal (más alta o baja de lo normal) de una sustancia puede ser un signo de enfermedad. Además se realizará el recuento sanguíneo completo, que medirá la cantidad de glóbulos rojos, glóbulos blancos y plaquetas, la hemoglobina en los glóbulos rojos para detectar anemia, entre otros indicadores.",
                    "ENDOSCOPIA SUPERIOR: este procedimiento es el principal estudio para detectar el cáncer gástrico, y se utiliza para observar el interior del esófago, el estómago y el duodeno (primera parte del intestino delgado) con el fin de verificar si hay zonas anormales. El médico introduce un endoscopio en el esófago a través de la boca y la garganta. El endoscopio es un tubo delgado y flexible con una luz y una pequeña cámara de video en su extremo.",
                    "Si observa áreas anormales, puede tomar biopsias (muestras de tejido) utilizando instrumentos que se introducen a través del endoscopio. Las muestras de tejido se envían a un laboratorio, donde se examinan con un microscopio para determinar si hay cáncer.",
                    "Este estudio se realiza previa administración de un medicamento para sedar. Si se emplea anestesia, el paciente deberá estar acompañado para el regreso a su casa. Lamentablemente, en el síndrome de cáncer gástrico difuso hereditario muchas veces el cáncer no puede observarse durante una endoscopia.",
                    "ECOGRAFÍA ENDOSCÓPICA: en la ecografía las imágenes de los órganos son producidas colocando en la piel una sonda llamada transductor que emite ondas sonoras y detecta los ecos a medida que rebotan de los órganos internos. Una computadora procesa el patrón de ecos para crear una imagen en la pantalla.",
                    "En la ecografía endoscópica, se coloca un transductor pequeño en la punta de un endoscopio, por lo que se ubica directamente en la pared del estómago, lo que permite al médico observar las capas de la pared estomacal, así como los ganglios linfáticos cercanos y otras estructuras fuera del estómago. La calidad de la imagen es mejor en comparación con la ecografía convencional debido a la distancia reducida con relación al sitio de observación. Este procedimiento es más útil para ver cuánto se pudo ha propagado el cáncer hacia la pared del estómago, los tejidos circundantes y a los ganglios linfáticos cercanos. También puede ser usado para ayudar a guiar la aguja en un área sospechosa para obtener una muestra de tejido (biopsia con aguja guiada por ecografía endoscópica).",
                    "BIOPSIA: es la única manera de determinar con certeza si existe cáncer cuando se observa un área que luce anormal en una endoscopia o en un estudio por imágenes.",
                    "Este procedimiento se realiza habitualmente durante la endoscopía superior: el médico extrae una muestra del área anormal introduciendo los instrumentos necesarios a través del endoscopio.",
                    "ULTRASONIDO ENDOSCÓPICO: mediante la utilización del ultrasonido el médico puede obtener una imagen más detallada del interior de la pared del estómago, y facilita la determinación de la extensión del cáncer incluso sobre los ganglios linfáticos, tejidos y órganos adyacentes.",
                    "EXPLORACIÓN POR TOMOGRAFÍA COMPUTARIZADA: este examen permite producir una imagen tridimensional del interior del cuerpo utilizando rayos X desde diferentes ángulos. Posteriormente, mediante una computadora se obtiene una combinación de estas imágenes en forma de cortes transversales que permiten observar y medir los tumores. Algunas veces se administra por vía oral o por vena una solución llamada contraste antes de la exploración, lo que permite obtener mejores detalles en la imagen.",
                    "RESONANCIA MAGNÉTICA: es otro método para producir imágenes del organismo, pero que utiliza campos magnéticos en lugar de rayos X. También en este caso suele utilizarse una solución de contraste inyectable por vena para lograr una imagen más nítida del área que debe explorarse.",
                    "TOMOGRAFÍA POR EMISIÓN DE POSITRONES (PET): este estudio, llamado PET por sus siglas en inglés, es otro método para tomar imágenes de los órganos y tejidos. Se inyecta por vía intravenosa al paciente una pequeña cantidad de una sustancia radiactiva, lo que permite detectar la aparición temprana de un tumor, antes de que sea visible con otras pruebas por imagen. Los componentes de esta sustancia, denominados “radiofármacos” tienen una vida media de corta duración.",
                    "El PET-TC es la fusión del PET con una tomografía computada (TC) de alta tecnología, combinando la información estructural de la lesión que aporta la TC, con la información metabólica o fisiológica que proporciona el PET en un solo procedimiento. Estos estudios son muy útiles en oncología para determinar la extensión del cáncer y para evaluar la respuesta al tratamiento en los casos que su médico considere necesario.",
                    "LAPAROSCOPIA: es una cirugía menor en la cual el médico cirujano inserta en la cavidad abdominal un instrumento denominado laparoscopio, para evaluar la extensión del cáncer de estómago a los tejidos de dicha cavidad o al hígado, lo que no puede observarse con una CT o PET.",
                ],
            },
            {
                subtitulo: "Tratamiento",
                textosDescriptivo: [
                    "Para la selección del tratamiento, el médico debe tener en cuenta diferentes factores:"
                ],
                lista: [
                    "La edad, el estado de salud general del paciente, su situación nutricional y la existencia de otras patologías importantes.",
                    "Las características del tumor: zona del estómago donde está localizado, estadio de la enfermedad y el tipo de tumor, así como la posible eficacia del tratamiento.",
                ],
                textosFinales: [
                    "El tratamiento requiere un abordaje multidisciplinario en el que participen profesionales de diferentes especialidades.",
                    "Las tres terapias fundamentales son la cirugía, la quimioterapia y la radioterapia. En general, la primera opción es extirpar el tumor primario mediante la cirugía. Dependiendo de la extensión del tumor, el especialista administrará quimioterapia complementaria con o sin radioterapia.",
                    "En los casos en que existe metástasis, el tratamiento de elección es la quimioterapia. Dependiendo del paciente el oncólogo también incluirá el tratamiento con radioterapia y/o cirugía.",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Cáncer gástrico. Prevención, diagnóstico y tratamiento.",
                pdf: "fuca_gastrico_2017"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/ZfstR1dXhk0?si=GaN6gVjhW-woCsT9",
        ],
    },
    {
        img: "renal",
        nombre: "Cáncer renal",
        body: [
            {
                subtitulo: "¿Qué es el cáncer de riñón?",
                textosDescriptivo: [
                    "El cáncer de riñón ocurre cuando las células de un riñón o de ambos crecen y se multiplican en forma descontrolada, generando una masa llamada tumor en la membrana que recubre unos túbulos diminutos que están dentro de los riñones.",
                    "Existen varios tipos de cáncer de riñón:",
                ],
                lista: [
                    "Carcinoma de células renales: es el tipo más frecuente en adultos, dado que representa aproximadamente el 85% de los diagnósticos. Se desarrolla en los túbulos que forman el sistema de filtración de los riñones. Cada riñón tiene miles de esas diminutas unidades de filtración.",
                    "Carcinoma urotelial o carcinoma de células de transición: comienza en la zona del riñón en la que se acumula la orina antes de pasar a la vejiga, denominada pelvis renal, y se trata como el cáncer de vejiga; estos tumores son distintos respecto a los de riñón propiamente dichos, en términos de evolución y tratamientos.",
                    "Sarcoma: se desarrolla en la capa delgada de tejido blando que rodea el riñón llamada cápsula, o en la grasa circundante. El sarcoma de riñón es extremadamente infrecuente entre los adultos y suele tratarse con cirugía.",
                    "Tumor de Wilms: representa alrededor del 1 % de los cánceres de riñón. Es tratado en forma diferente ya que tiende a responder mejor a la radioterapia y la quimioterapia con respecto a otros tipos de cáncer de riñón. Es más frecuente en niños, y en este caso el tratamiento es distinto que en los adultos.",
                    "Linfoma: en general se asocia con los ganglios linfáticos agrandados en otras partes del cuerpo, como puede ser el cuello, el pecho y el abdomen.",
                    "Pero también, en casos raros, se presenta sólo en el riñón y puede incluir ganglios linfáticos cercanos. Si existe la posibilidad de un linfoma, es posible que el médico realice una biopsia y recomiende hacer quimioterapia en vez de cirugía.",
                    "Además, en la evaluación que realiza el patólogo a través de la observación en el microscopio, determina el tipo de células tumorales, lo que es clave para decidir el tratamiento a seguir:",
                    "Células claras: representan aproximadamente el 70% de los cánceres de riñón. Las células claras pueden tener un crecimiento lento (grado 1) o rápido (grado 4). La inmunoterapia y la terapia dirigida son especialmente efectivas para tratar el cáncer de riñón de células claras (ver sección de “tratamientos”).",
                    "Papilar: entre un 10% y un 15% de los pacientes padece este tipo de tumores, los que a su vez se dividen en dos subtipos distintos, tipo 1 y tipo 2.", "El cáncer papilar de riñón localizado a menudo se trata con cirugía, en tanto que si se disemina o hace metástasis, se suele tratar con agentes de bloqueo de los vasos sanguíneos o terapias blanco.",
                    "Sarcomatoides: se denominan así cuando las células se asemejan a un sarcoma y el crecimiento del tumor puede ser más rápido.",
                    "Medular: es un tipo de cáncer raro y muy agresivo, más frecuente en las personas afrodescendientes.",
                    "Conductos colectores: comienza en los conductos colectores de los riñones, y se presenta con mayor frecuencia en personas de entre 20 y 30 años.",
                    "Cromófobo: es poco frecuente y puede formar tumores indolentes que es poco probable que se diseminen, pero son agresivos si llegaran a hacerlo.",
                    "Oncocitoma: es de crecimiento lento y muy raramente se disemina.",
                    "Angiomiolipoma: es un tumor benigno y en general es poco probable que crezca y se disemine. Suele tratarse con cirugía o, si es pequeño, con supervisión activa.",
                ],
                textosFinales: [
                    "Asimismo, existen otras 20 entidades patológicas tumorales del riñón que ameritan la evaluación patológica por parte del especialista, lo que permitirá determinar el tratamiento más apropiado."
                ],
            },
            {
                subtitulo: "¿Cuál es la causa del cáncer de riñón?",
                textosDescriptivo: [
                    "No se habla de causas directas del cáncer de riñón, sino de “factores de riesgo”. Los factores de riesgo son elementos que aumentan la probabilidad de padecer un cáncer. Pero, puede ocurrir que una persona tenga varios factores de riesgo y no desarrolle el cáncer, mientras que otros no tengan dichos factores y sin embargo lleguen a tener un tumor.",
                    "Es importante conocer estos factores de riesgo y poder conversar con el médico para adoptar estilos de vida más saludables (aunque no todos los factores de riesgo dependen de decisiones de la persona), y de ser necesario, una atención médica oportuna.",
                    "Se enumeran a continuación los factores que incrementan el riesgo de desarrollar cáncer de riñón:",
                ],
                lista: [
                    "TABAQUISMO: fumar duplica el riesgo de desarrollar cáncer de riñón, estimándose que aproximadamente el 30% de los cánceres de riñón en los hombres y el 25% en las mujeres derivan de este hábito.",
                    "SEXO: los hombres son más propensos a padecer cáncer de riñón que las mujeres.",
                    "ORIGEN: las personas afrodescendientes tienen mayor prevalencia de cáncer de riñón.",
                    "EDAD: el cáncer de riñón suele aparecer entre los 50 y los 70 años.",
                    "NUTRICIÓN Y PESO: con frecuencia en trabajos de investigación se ha evidenciado una relación entre el cáncer de riñón y la obesidad.",
                    "PRESIÓN ARTERIAL ALTA: las personas que padecen hipertensión pueden ser más propensas a desarrollar cáncer de riñón.",
                    "CIERTOS MEDICAMENTOS: el consumo excesivo de ciertos analgésicos y diuréticos se ha relacionado con el cáncer de riñón.",
                    "EXPOSICIÓN AL CADMIO: según algunas investigaciones puede existir una relación entre el cáncer de riñón y la exposición al metal cadmio, presente en pilas, pinturas, o materiales para soldar.",
                    "ENFERMEDAD RENAL CRÓNICA: las personas que padecen insuficiencia renal pueden tener mayor riesgo de desarrollar cáncer de riñón.",
                    "DIÁLISIS A LARGO PLAZO: los pacientes que han recibido diálisis por períodos prolongados tienen tendencia a desarrollar quistes en los riñones. Estas formaciones se suelen detectar en forma temprana por lo que es posible extirparlos antes de que el cáncer se disemine.",
                    "ANTECEDENTES FAMILIARES: tienen un riesgo aumentado quienes posean padres, hermanos o hijos con cáncer de riñón. Este riesgo aumenta aún más si lo padecen o han padecido otros miembros de la familia extendida, sobre todo si el diagnóstico fue antes de los 50 años de edad, si tenían cáncer en ambos riñones y/o si han tenido más de un tumor en el mismo riñón.",
                    "<span>Es importante conocer los antecedentes familiares con precisión para informar al médico y así poder tomar medidas para reducir el riesgo.</span>",
                ],
            },
            {
                subtitulo: "¿Es hereditario el cáncer de riñón?",
                textos: [
                    "El cáncer de riñón hereditario es poco frecuente, ya que representa alrededor del 5 % de los casos (no es lo mismo “cáncer familiar” que “cáncer hereditario”).",
                    "Detectar un síndrome genético en una familia puede ser de vital importancia para el diagnóstico y el tratamiento del cáncer. Este es un tema que debe evaluarse con el médico, y en el caso de que se considere conveniente realizar esta evaluación, debe consultarse un asesor genético que acompañe en el proceso de esta decisión y en la evaluación misma.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los síntomas y signos del cáncer de riñón?",
                textosDescriptivo: [
                    "En sus etapas tempranas este tipo de cáncer no produce síntomas, o sea que los mismos suelen aparecer cuando ya el tumor aumenta de tamaño y afecta órganos cercanos.",
                    "Las personas que padecen cáncer de riñón pueden presentar algunos de los siguientes síntomas, aunque debe aclararse que éstos pueden indicar otras enfermedades y también que pueden no existir:",
                ],
                lista: [
                    "Dolor o presión en el costado o la espalda.",
                    "Un bulto en el costado o la espalda",
                    "Hinchazón de los tobillos o las piernas",
                    "Sangre en la orina",
                    "Presión arterial alta",
                    "Anemia y algunos sus signos: fatiga, pérdida del apetito.",
                    "Pérdida de peso sin razón aparente",
                    "Fiebre persistente que no se atribuye a otra causa.",
                ],
                textosFinales: [
                    "En el hombre, cuando alrededor de un testículo se detecta el desarrollo de un grupo de venas agrandadas, llamado varicocele, puede indicar la presencia de un tumor renal.",
                ],
            },
            {
                subtitulo: "¿Cómo se diagnostica el cáncer de riñón?",
                textosDescriptivo: [
                    "Suele ocurrir que el cáncer de riñón se detecta cuando se realizan estudios por alguna otra dolencia.",
                    "A continuación se mencionan algunas de las pruebas que puede solicitar el médico para diagnosticar el cáncer de riñón, pero no todas serán necesarias. El médico tendrá en cuenta el tipo de cáncer que se presume padece el paciente, sus signos y síntomas, su edad y estado de salud, el resultado de otras pruebas ya realizadas, su examen físico y otros antecedentes de salud. En general suelen utilizarse los siguientes estudios:",
                ],
                lista: [
                    "ANÁLISIS DE SANGRE Y ORINA: son un punto de partida, que pueden dar indicios de la presencia de cáncer de riñón, pero no sirven para dar un diagnóstico definitivo.",
                    "ECOGRAFÍA ABDOMINAL: es el método inicial por imágenes más frecuentemente utilizado, en el cual el radiólogo especialista en ecografía, puede observar imágenes quísticas (como bolitas de agua) o sólidas que permitirán decidir los pasos diagnósticos y terapéuticos posteriores. Actualmente, en virtud del acceso rutinario al examen ecográfico, muchos de los diagnósticos de tumor renal son hallazgos incidentales con lesiones menores a 3 cm.",
                    "BIOPSIA: consiste en la extracción de células o tejidos para que un patólogo las pueda observar mediante un microscopio o se examinen en un laboratorio, para verificar si hay signos de cáncer. Por lo general se realiza en un procedimiento ambulatorio con anestesia local, y permite identificar el tipo de células del cáncer de riñón.",
                    "En ciertos casos, es posible que en base a las pruebas por imágenes se decida extirpar primero el tumor y luego realizar la biopsia para determinar el tipo de tumor y el estadio definitivos.",
                    "EXPLORACIÓN POR TOMOGRAFÍA COMPUTARIZADA (TC): este examen permite producir una imagen tridimensional del interior del cuerpo utilizando rayos X desde diferentes ángulos. Posteriormente, mediante una computadora se obtiene una combinación de estas imágenes en forma de cortes transversales que permiten observar y medir los tumores. Algunas veces se administra por vía oral o por vena una solución llamada contraste antes de la exploración, con el fin de obtener mejores detalles en la imagen. En pacientes con insuficiencia renal, el medio de contraste no se puede usar de manera segura.",
                    "RESONANCIA MAGNÉTICA: es otro método para producir imágenes del organismo, pero que utiliza campos magnéticos en lugar de rayos X. También en este caso suele utilizarse una solución de contraste inyectable por vena para lograr una imagen más nítida del área que debe explorarse.",
                    "TOMOGRAFÍA POR EMISIÓN DE POSITRONES (PET): este estudio, llamado PET por sus siglas en inglés, es otro método para tomar imágenes de los órganos y tejidos. Se inyecta por vía intravenosa al paciente una pequeña cantidad de una sustancia radiactiva, lo que permite detectar la aparición temprana de un tumor, antes de que sea visible con otras pruebas por imagen. Los componentes de esta sustancia, denominados “radiofármacos”, tienen una vida media de corta duración.",
                    "RADIOGRAFÍA: es un modo de crear una imagen de las estructuras internas del cuerpo usando una pequeña cantidad de radiación.",
                    "CISTOSCOPIA Y NEFROURETEROSCOPIA: durante estos procedimientos, se administra un medicamento para sedar al paciente mientras se inserta un pequeño tubo iluminado en la vejiga a través del uréter y se lo introduce en el riñón. Este procedimiento puede emplearse para obtener células tumorales y examinarlas en un microscopio, realizar una biopsia y a veces destruir por completo tumores pequeños.",
                ],
            },
            {
                subtitulo: "¿Cómo se trata el cáncer de riñón?",
                textos: [
                    "El plan de tratamiento para cada paciente depende de varios factores: la ubicación del tumor, el estadio del cáncer, la edad y la salud general de la persona, y es determinado por el equipo médico y el paciente. Es conveniente conversar también sobre los efectos secundarios posibles del plan de tratamiento y las opciones de cuidados paliativos.",
                    "En la atención del cáncer suelen trabajar profesionales de la salud de distintas especialidades formando un equipo multidisciplinario. El oncólogo clínico es el médico que se especializa en el tratamiento de personas con cáncer, y particularmente en el cáncer de riñón intervienen también médicos de otras especialidades: la urología (tracto genitourinario, que incluye los riñones, la vejiga, los genitales, la próstata y los testículos); radioterapia, imágenes, nutrición, psicooncología, patología, así como también enfermeros especializados en oncología, entre otros.",
                    "Las opciones de tratamientos incluyen: la cirugía, terapia dirigida, inmunoterapia o una combinación de estos tratamientos, y ocasionalmente también la radioterapia y la quimioterapia. Cuando el cáncer se ha diseminado, se indican terapias en forma sucesiva, lo que se denomina las “líneas de tratamiento”.",
                ],
            },
        ],
        materialDescarga: [
            {
                nombre: "Cuadernillo para pacientes.",
                pdf: "fuca_renal_2020"
            },
        ],
        videos: [
            "https://www.youtube.com/embed/0ctG8BK1Fzs?si=Ue-kv6CBI4XnaCI5",
            "https://www.youtube.com/embed/0ctG8BK1Fzs?si=IpqRosC6ZDINwOP_",
        ],
    },
    {
        img: "leucemias",
        nombre: "Leucemias",
        textosIntroduccion: [
            "Las leucemias son un tipo de cáncer de la sangre. Se desarrollan a partir de una célula de la médula ósea que sufre un cambio y genera las células cencerosas de la leucemia. Depende del tipo de célula que se afecte. Si el cambio tiene lugar en un tipo de célula de la médula que forma linfocitos, la leucemia es linfocítica o linfoblástica; si el cambio se produce en la célula mieloide, que es la que suele formar glóbulos rojos, algunos glóbulos blancos y plaquetas, la leucemia va a ser de tipo mieloide. Es aguda o crónica según el tiempo de desarrollo. Las leucemias agudas son una urgencia médica, deben diagnosticarse y comenzar a tratamiento rápidamente. Las crónicas en cambio, nos dan más tiempo para diagnosticarse y tratarse.",
            "Dentro de las más frencuentes:",
        ],
        listaIntroduccion: [
            "Leucemia mieloide aguda (LMA)",
            "Leucemia linfoblástica aguda (LLA)",
            "Leucemia linfocítica crónica (LLC)",
            "Leucemia mieloide crónica (LMC)",
            "A continuación detallaremos cada entidad:",
        ],
        body: [
            {
                subtitulo: "LEUCEMIA MIELOIDE AGUDA (LMA)",
                textos: [
                    "La leucemia mieloide aguda, como todas las leucemias agudas es una urgencia médica. Se origina en la médula ósea, en una célula que sufre un cambio y genera las células cancerígenas llamados blastos, que no funcionan como células normales. Estos desplazan a las células normales de la médula ósea. Afecta a las células mieloides (que terminan produciendo los glóbulos rojos, algunos blancos y plaquetas), se allí su nombre. Por esta razón afecta la producción de estas líneas celulares causando disminución de glóbulos rojos (anemia), de plaquetas y de neutrófilos (neutropenia) lo que predispone a las infecciones. Afecta principalmente a los adultos. Requiere un diagnóstico e inicio de tratamiento rápido.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Los signos o síntomas que pueden aparecer en las leucemias agudas son los siguientes:",
                ],
                lista: [
                    "Cansancio o fatiga",
                    "Fiebre",
                    "Sudoración nocturna",
                    "Moretones que salen sin haberse golpeado",
                    "Petequias (manchitas de sangre muy pequeñas en la piel)",
                    "Dolores en los huesos",
                    "Palidez de la piel",
                    "Dificultad para respirar",
                    "Infecciones",
                ],
                textosFinales: [
                    "Cuando el número de blastos (células de la leucemia mieloide aguda) es muy elevado, pueden acumularse en los vasos capilares y dificultar el paso de los glóbulos rojos que transportan el oxígeno a los tejidos y órganos del cuerpo y producir inflamación; fenómeno conocido como leucostasis y que debe considerarse una urgencia. Los síntomas que produce este cuadro son: dolor de cabeza, confusión, somnolencia, trastornos en el habla, debilidad en un lado del cuerpo. Pero también puede producir  trastornos visuales y respiratorios.",
                    "En general los síntomas aparecen de manera rápida y obligan a consultar al médico.",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Es diagnóstico debe realizarse de manera rápida. Inicialmente el médico realiza el interrogatorio y examen físico en busca de signos o síntomas que puedan ayudar al diagnóstico. Posteriormente se deben realizar una serie de estudios, entre ellos:",
                ],
                lista: [
                    "<span>Análisis de sangre:</span> que incluya recuento de glóbulos blancos con fórmula leucocitaria, glóbulos rojos, plaquetas, pruebas de coagulación, fibrinógeno, ácido úrico, LDH, función renal, hepática, serologías, prueba de embarazo en caso (en mujeres en edad fértil), entre los más importantes.",
                    "<span>Frotis de sangre periférica:</span> puede ayudarnos rápidamente a ver la presencia de células malignas en el microscopio.",
                    "<span>Punción aspiración y biopsia de médula ósea:</span> este estudio es fundamental para el diagnóstico, permite detectar la presencia de blastos (células tumorales en la médula ósea). Una vez tomada la muestra de sangre de la médula ósea se envía a: inmunotipificación por citometría de flujo (*), citogenético y estudios moleculares (**). La biopsia se envía a patología.",
                    "<span>Análisis de líquido cefalorraquídeo:</span> en este tipo de leucemia no se realiza de manera habitual. Su análisis está justificado en pacientes que tengan síntomas que nos indiquen compromiso del sistema nervioso central.",
                    "<span>Estudios por imágenes:</span> no es la forma de manifestación frecuente. Se realizan únicamente cuando existe la sospecha de masas sólidas de células leucémicas en algún órgano, de infecciones, hemorragias u otros problemas relacionados con la enfermedad.",
                    "<span>Ecografía del corazón:</span> para evaluar su funcionalidad previo a recibir tratamiento.",
                ],
                textosFinales: [
                    "(*) Es una técnica que nos permite realizar recuento de células y clasificarlas según su morfología y presencia de ciertos anticuerpos monoclonales.",
                    "(**) citogenética es el estudio de la estructura, función y comportamiento de los cromosomas. Permite detectar alteraciones genéticas, entre ellas traslocaciones,inversiones, deleciones,  importantes al diagnóstico de las leucemias. Los estudios de citogenética y biología molecular permiten correlacionar la presencia de determinadas anomalías cromosómicas y moleculares con tipos específicos de leucemias.",
                ],
            },
            {
                subtitulo: "Una vez que se realiza el diagnóstico. ¿Cuáles son los pasos a seguir?",
                textos: [
                    "Los estudios que se realizan al diagnóstico permiten la clasificación del tipo de leucemia mieloide aguda y los factores pronósticos. Existen diferentes subtipos que junto con otros factores como la edad del paciente, el estado general (performance status), alteraciones citogenéticas, moleculares, enfermedad hematológica o tratamiento radio o quimioterapia previos, entre otros; nos permiten optar por el tipo de tratamiento que será mejor para el paciente. Las mutaciones específicas identificadas en los cromosomas de leucemia nos permiten clasificar el pronóstico de un paciente como de riesgo bueno o favorable, normal o intermedio, o malo o desfavorable. Alrededor del 60 por ciento de las personas con leucemia mieloide aguda tienen anomalías cromosómicas. Existen tratamientos que se dirigen a mutaciones genéticas específicas. La clasificación de la Organización Mundial de la Salud (OMS) es el principal sistema utilizado para clasificar la leucemia mieloide aguda en subtipos. Una vez que contamos con todos los datos propondremos al paciente cuales son las mejores opciones terapéuticas.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento?",
                textosDescriptivo: [
                    "La meta del tratamiento de la leucemia mieloide aguda es curar al paciente de la enfermedad. Dentro de la clasificación de este tipo de leucemia, los pacientes con leucemia promielocítica aguda (LPA) tienen en general tasas de curación más altas en comparación con otros subtipos de leucemia mieloide aguda. Algunos adultos con otros subtipos de leucemia mieloide aguda podrían ser curados o tener largos períodos de remisión. La remisión completa se logra cuando se cumplen todos los siguientes criterios:",
                ],
                lista: [
                    "Menos de 5% de blastos en la médula ósea.",
                    "Los conteos de glóbulos rojos, glóbulos blancos y plaquetas normales o cerca de los niveles normales.",
                    "Ausencia de signos o síntomas de leucemia mieloide aguda.",
                ],
                textosFinales: [
                    "Las opciones de tratamiento se basan en el subtipo de leucemia y los factores pronósticos, pero básicamente se dividen en quimioterapia intensiva y no intensiva.",
                    "La quimioterapia intensiva consta de:",
                    "<span>Terapia de inducción:</span> es la primera fase del tratamiento. El paciente recibe altas dosis de quimioterapia para destruir las células leucémicas en la sangre y la médula ósea. Requiere internación. En general los pacientes permanecen en el hospital de 4 a 6 semanas durante esta primera parte del tratamiento, requiere tratamiento endovenoso en la mayoría de los casos. Es en este momento donde puede ocurrir alguna infección o el paciente requerir transfusión de glóbulos rojos y plaquetas. La meta de la terapia de inducción es lograr una remisión completa.",
                    "<span>Terapia dirigida:</span> es un tipo de tratamiento donde se utilizan medicamentos u otras sustancias que identifican y atacan células tumorales específicas. Un ejemplo es el tratamiento con  medicamentos específicos que actúan sobre células que presentan ciertas mutaciones específicas y los anticuerpos monoclonales. Se utilizan anticuerpos producidos en el laboratorio que pueden identificar las sustancias de las células tumorales o de las células normales que contribuyen al crecimiento de éste tipo de células; se adhieren a las sustancias y pueden impedir el crecimiento, la diseminación o eliminar las células tumorales.",
                    "Luego de la terapia de inducción se realiza una evaluación de la respuesta de la enfermedad al tratamiento con una punción aspiración de médula ósea y según los resultados se decide cual será el tratamiento a seguir.",
                    "<span>Terapia posterior a la remisión completa:</span> es necesario administrar más tratamiento luego de que el paciente entre en remisión. Es posible que algunas células de la LMA persistan y no se detecten mediante las pruebas comunes de sangre o de médula. Esta parte del tratamiento se llama terapia posterior a la remisión o de consolidación y el objetivo es destruir cualquier resto de células leucémicas que queden después de la remisión. La quimioterapia forma parte de la terapia posterior a la remisión. Es posible que el trasplante de células madre también forme parte de esta parte del tratamiento en algunos pacientes con LMA. En el caso de los pacientes de riesgo favorable  esta parte del tratamiento consta en general de varios ciclos de quimioterapia intensiva. Los pacientes de riesgo  intermedio o desfavorable rara vez se curan solamente con quimioterapia. En estos casos dentro de las opciones de tratamiento se encuentra el trasplante alogénico de médula ósea (las células madre proceden de un donante compatible, relacionado o no relacionado), que detallaremos más adelante.",
                    "En cuanto al número de ciclos de quimioterapia, éste varía de un paciente a otro. En general, los pacientes son hospitalizados durante el período de la terapia posterior a la remisión. El tiempo de internación dependerá del tipo de tratamiento y de los posibles efectos adversos del mismo.",
                    "En cuanto a la quimioterapia no intensiva:",
                    "En el caso de pacientes adultos mayores o aquellos pacientes con otras comorbilidades o problemas médicos que no puedan recibir quimioterapia intensiva, existen opciones de tratamiento menos intensivas, que pueden no requerir internación. Las opciones de tratamiento incluyen: ",
                    "Quimioterapia a dosis baja (como con citarabina, combinada o no con otros agentes y administrada en ciclos)",
                    "Tratamiento con hipometilantes como la azacitidina o decitabine (actúan sobre la genética de la leucemia activando y desactivando genes que general la multiplicación celular)",
                    "Tratamiento combinado con hipometilantes e inhibidor de BCL2 (molécula que tiene acción en la laucemia) denominado Venetoclax.",
                    "Tratamiento de sostén, en casos donde no se pueda indicar cualquiera de las anteriores opciones, con transfusiones, hidroxiurea.",
                ],
            },
            {
                subtitulo: "¿Qué eventos adversos pueden surgir durante el tratamiento?",
                textosDescriptivo: [
                    "El tratamiento de la LMA puede afectar los niveles de células sanguíneas y causar anemia, sangrados o infecciones. En estos casos podrían ser necesarias las transfusiones de glóbulos rojos y plaquetas, la realización de cultivos u otros estudios y el tratamiento antibiótico.",
                    "A su vez la quimioterapia puede tener muchos efectos secundarios como:",
                ],
                lista: [
                    "Náuseas y vómitos",
                    "Caída del cabello",
                    "Cansancio",
                    "Pérdida del apetito",
                    "Diarrea",
                    "Úlceras en la boca",
                ],
                textosFinales: [
                    "Sin embargo, estos problemas tienden a desaparecer después de que finaliza el tratamiento. Existen tratamientos para la mayoría de los efectos secundarios de la quimioterapia.",
                    "Las infecciones pueden ser un problema muy grave para cualquier persona con leucemia mieloide aguda. Los pacientes en casa deberían comunicarse con un médico si aparece algún signo de infección. Puede que el único signo de infección en un paciente que tiene una deficiencia grave de glóbulos blancos sea una fiebre o la aparición de escalofríos. Los pacientes con infecciones también podrían tener tos, dolor de garganta, ardor o dolor al orinar, diarrea, entre otros síntomas.",
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento? ¿Cómo será el seguimiento?",
                textos: [
                    "Los médicos hematólogos estaremos pendientes del tratamiento y el seguimiento.",
                    "El seguimiento médico luego de realizar el tratamiento se realizará con el objetivo de detectar posibles recurrencias, o retornos de la leucemia mediante control clínico (interrogatorio, examen físico) y de laboratorio, repetición de punción-aspiración de médula ósea; evaluar los efectos adversos del tratamiento; ofrecer apoyo al paciente (al igual que seguimiento psicológico por parte de nuestro equipo multidisciplinario).",
                ],
            },
            {
                subtitulo: "LEUCEMIA LINFOBLÁSTICA AGUDA (LLA)",
                textos: [
                    "La leucemia linfoblástica aguda (LLA) en adultos es un tipo de cáncer por el que la médula ósea fabrica demasiados linfocitos (un tipo de glóbulos blancos). Es una urgencia médica. Se producen grandes cantidad de linfoblastos que desplazan las células normales, ocasionando bajada de los glóbulos rojos, las plaquetas y los glóbulos blancos normales lo que se traduce en anemia, posibles sangrados e infecciones. Los linfoblastos cancerosos pasan a la sangre y desde ahí pueden invadir otros territorios, otros órganos cercanos o distantes, principalmente ganglios del sistema linfático, pero también el bazo, el hígado u otros órganos. Se puede presentar a cualquier edad pero es más frecuente durante la infancia que en la vida adulta. Requiere de un diagnóstico rápido y posterior inicio de tratamiento.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Los síntomas y signos que puede presentar una persona con LLA estarán relacionados con el crecimiento descontrolado de linfoblastos y por la dificultad para la producción de las células sanguíneas normales. Los signos o síntomas que pueden presentarse en esta enfermedad son:",
                ],
                lista: [
                    "Dolores en las piernas, los brazos o las caderas",
                    "Mareos o aturdimiento",
                    "Moretones fáciles, que aparecen sin haberse golpeado",
                    "Infecciones frecuentes o que no desaparecen",
                    "Agrandamiento de los ganglios linfáticos",
                    "Fiebre sin causa aparente",
                    "Piel pálida",
                    "Petequias, que son puntos rojos en la piel del tamaño de una cabeza de alfiler",
                    "Sangrados, frecuentes o graves de las encías o nariz por ejemplo",
                    "Dificultad para respirar",
                    "Cansancio o falta de energía Pérdida de peso sin explicación",
                    "Pérdida de peso o de apetito",
                ],
                textosFinales: [
                    "En general los síntomas aparecen de manera rápida y obliga a consultar al médico.",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "La leucemia linfoblástica aguda se diagnostica mediante estudios de sangre y de médula ósea. Se divide en diferentes subtipos y por ello es muy importante realizar las siguientes pruebas para poder clasificarla y orientar el tratamiento.",
                ],
                lista: [
                    "<span>Interrogatorio y examen físico:</span> El médico inicialmente le realizará un interrogatorio, preguntando antecedentes personales, familiares, medicación habitual, signos y síntomas en caso de que los presente. Luego realizará un examen físico exhaustivo buscando cualquier signo de la enfermedad.",
                    "<span>Análisis de sangre:</span> donde se realice recuento de glóbulos blancos con fórmula leucocitaria, glóbulos rojos, plaquetas, pruebas de coagulación, fibrinógeno, ácido úrico, LDH, función renal, hepática, serologías, prueba de embarazo en caso (en mujeres en edad fértil), entre los más importantes.",
                    "<span>Frotis de sangre periférica:</span> es un procedimiento sencillo y rápido donde una muestra de sangre se mira al microscopio para determinar si hay células leucémicas, observar la cantidad y clases de glóbulos blancos, de plaquetas y glóbulos rojos. Las personas con LLA suelen tener un nivel alto de células leucémicas (blastos), éstas son células inmaduras que no funcionan como las células maduras normales. La muestra que se toma para el frotis de sangre perférica también puede utilizarse para realizar un análisis citogenético e inmunofenotipificación (por citometría de flujo), que se explican a continuación.",
                    "<span>Punción aspiración y biopsia de médula ósea:</span> este estudio es fundamental para el diagnóstico, permite detectar la presencia de blastos (células tumorales en la médula ósea). Una vez tomada la muestra de sangre de la médula ósea se envía a: inmunotipificación por citometría de flujo (*), citogenético y estudios moleculares (**) para poder orientar al subtipo de leucemia. La biopsia se envía a anatomía patológica.",
                    "<span>Análisis de líquido cefalorraquídeo:</span> será estudiado en busca de células leucémicas que se puedan haber diseminado hasta el sistema nervioso central. En ocasiones, se realiza después del diagnóstico a fin de determinar si las células leucémicas se diseminaron al encéfalo y la médula espinal. Se administra quimioterapia intratecal después de la extracción de una muestra de líquido para tratar las células leucémicas que se pudieron haber diseminado al encéfalo o a la médula espinal.",
                    "<span>Estudios por imágenes:</span> debido a que la leucemia por lo general no forma tumores, los estudios por imágenes no son tan útiles como lo son para otros tipos de cáncer. En algunos casos se pueden hacer para ayudar a determinar el grado de la enfermedad, si se piensa que puede haberse propagado afectando a órganos distintos a la médula ósea y la sangre.",
                    "<span>Ecografía del corazón:</span> para evaluar su funcionalidad previo a recibir tratamiento.",
                ],
                textosFinales: [
                    "(*) proceso que se utiliza para identificar células sobre la base del tipo de antígenos o marcadores en la superficie de la célula. Este proceso se utiliza para diagnosticar el subtipo de LLA mediante la comparación de las células cancerosas con las células normales del sistema inmunitario.",
                    "(**) prueba de laboratorio en la que se observan las células de una muestra de sangre o médula ósea al microscopio para verificar ciertos cambios en los cromosomas de los linfocitos. Dentro de los estudios moleculares, la reacción de cadena de polimerasa (PCR) es una prueba que detecta y mide algunas mutaciones genéticas y cambios cromosómicos que son demasiado pequeños para verse. Esto permite a los médicos determinar la cantidad de células leucémicas que permanecen en el cuerpo después del tratamiento, lo que se denomina enfermedad residual mínima (ERM).",
                ],
            },
            {
                subtitulo: "Una vez que se realiza el diagnóstico. ¿Cuáles son los pasos a seguir?",
                textosDescriptivo: [
                    "Los estudios anteriormente mencionados nos ayudan a poder definir qué tipo de leucemia es y el subtipo. Nos ayuda a dividir la LLA en grupos con base en el inmunofenotipo de la leucemia. Por un lado el tipo de linfocito (células B o células T) de donde las células leucémicas provienen y definir cuán maduras son estas células leucémicas. El citogenético nos permite detectar una alteración específica de la enfermedad que conlleva un tratamiento dirigido. Es la presencia del cromosoma Philadelphia (Ph +) y se detecta en aproximadamente uno de cada cuatro adultos con leucemia linfoblástica aguda.",
                    "Los subtipos de LLA conllevan cada uno un pronóstico ligeramente diferente, pero otros factores (como cambios genéticos en las células leucémicas) también pueden tener un impacto en ellos. Estos factores ayudan a los médicos a decidir si las personas con cierto tipo de leucemia deben recibir más o menos tratamiento. Entre ellos nombramos:",
                ],
                lista: [
                    "Edad",
                    "Conteo inicial de glóbulos blancos",
                    "Subtipo de LLA",
                    "Alteraciones citogenéticas",
                    "Respuesta inicial a la quimioterapia",
                    "Estado de la leucemia después del tratamiento",
                    "Remisión",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento?",
                textosDescriptivo: [
                    "La LLA es una urgencia médica y como tal debe iniciarse el tratamiento de manera rápida. La elección del mismo tiene en cuenta los datos detallados en el punto anterior, y los esquemas de tratamiento por ende difieren. La meta es curar al paciente de la enfermedad. El tratamiento de la leucemia linfoblástica aguda tiene tres fases:",
                ],
                lista: [
                    "Terapia de inducción",
                    "Terapia de consolidación (también denominada intensificación)",
                    "Terapia de mantenimiento",
                    "Todos los esquemas de tratamiento incluyen profilaxis o tratamiento del sistema nervioso central (SNC). Las terapias de consolidación y mantenimiento se administran al paciente luego de que logre la remisión, por lo cual ",
                    "El tratamiento puede incluir:",
                    "Quimioterapia",
                    "Farmacoterapia",
                    "Un trasplante de células madre",
                    "Nuevos enfoques de tratamiento y medicamentos en fase de estudio (ensayos clínicos)",
                ],
                textosFinales: [
                    "<span>Terapia de inducción:</span> es el primer ciclo de tratamiento con quimioterapia. Se administra en el hospital, en general los pacientes permanecen internados durante cuatro a seis semanas. El objetivo de esta parte del tratamiento es: 1) matar tantas células leucémicas; 2) normalizar las cantidades de células sanguíneas; 3) eliminar todos los signos de la enfermedad durante un período de tiempo prolongado. Habitualmente se administra quimioterapia intratecal, mediante la realización de una punción lumbar (PL), para prevenir la diseminación de las células leucémicas al encéfalo o erradicarlas en el caso que estén presentes en el líquido cefalorraquídeo.",
                    "<span>Terapia dirigida:</span> los medicamentos de terapia dirigida son tratamientos nuevos que pueden usarse para determinados tipos de leucemia. Es el caso de los pacientes que presenten células leucémicas con el cromosoma Filadelfia (Ph +), un cromosoma anómalo que se forma por el intercambio de sustancias entre los cromosomas 9 y 22, lo que forma un nuevo gen llamado BCR-ABL. Las células con el gen BCR-ABL producen una proteína anormal que estimula el crecimiento celular. Existen medicamentos que atacan esta proteína y son los inhibidores de tirosina quinasa (o TKIs): Imatinib, Dasatinib, Nilotinib, Bosutinib, Ponatinib. Se toman diariamente en forma de pastillas.",
                    "<span>Terapia posterior a la remisión:</span> es la segunda fase del tratamiento. Cuando conseguimos eliminar las células leucémicas como resultado del tratamiento se llama remisión. La meta de la terapia postremisión es destruir cualquier célula leucémica que haya quedado que puede no estar activa, pero que podría comenzar a crecer nuevamente y causar una recaída. Consta de una terapia de consolidación (intensificación) y una terapia de mantenimiento. La quimioterapia forma la base de esta fase del tratamiento. Para algunos pacientes con LLA, en esta fase del tratamiento es posible que pueda considerarse el trasplante de células madre. La terapia de consolidación se suele administrar en ciclos durante un período de 4 a 6 meses. La terapia de mantenimiento en cambio, suele administrarse durante unos dos años en el caso de los adultos, y de dos a tres años en el caso de los niños. Durante las terapias de consolidación y mantenimiento la mayoría de las personas reciben medicamentos diferentes de los que recibieron durante la terapia de inducción.",
                ],
            },
            {
                subtitulo: "¿Qué eventos adversos pueden surgir durante el tratamiento?",
                textosDescriptivo: [
                    "El objetivo del tratamiento para la leucemia linfoblástica aguda es matar las células de la enfermedad. Pero el tratamiento también afecta las células sanas, por lo tanto puede afectar los niveles de células sanguíneas y causar anemia, sangrados o infecciones. En estos casos podrían ser necesarias las transfusiones, la realización de cultivos u otros estudios y el inicio de tratamiento antibiótico.",
                    "Otros efectos secundarios de la quimioterapia son:",
                ],
                lista: [
                    "Náuseas y vómitos",
                    "Caída del cabello",
                    "Cansancio",
                    "Pérdida del apetito",
                    "Diarrea",
                    "Úlceras en la boca",
                ],
                textosFinales: [
                    "Las infecciones pueden ser un problema grave para los pacientes con laucemia. Dentro de los signos que deben alarmarlos se encuentran los anteriormente nombrados y: fiebre o escalofríos, tos, dolor de garganta, ardor o dolor al orinar, diarrea, entre otros síntomas.",
                    "No todos los pacientes presentan efectos secundarios. Existen tratamientos para prevenir o manejar las náuseas, los vómitos, la diarrea y otros efectos secundarios. En general, estos problemas tienden a desaparecer después de que finaliza el tratamiento.",
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento? ¿Cómo será el seguimiento?",
                textos: [
                    "Desde el momento del diagnóstico el seguimiento lo realizará su médico hematólogo junto con su equipo de trabajo. Se realizarán controles que incluyen: interrogatorio, examen físico, análisis de sangre, y a veces, también es necesario realizar pruebas de médula ósea para evaluar la respuesta al tratamiento. En cada consulta usted podrá evacuar las dudas que vayan surgiendo y el médico le explicará. El tratamiento es prolongado y estará acompañado en cada momento."
                ],
            },
            {
                subtitulo: "LEUCEMIA MIELOIDE CRONICA (LMC)",
                textos: [
                    "Esta leucemia es un tipo de cáncer que se origina en determinadas células productoras de sangre de la médula ósea. Es una enfermedad que ocurre mayormente en los adultos. En esta enfermedad se produce una mutación (cambio genético) en las formas inmaduras de las células mieloides (son las que terminan produciendo glóbulos rojos, plaquetas, y la mayoría de los tipos de glóbulos blancos (excepto linfocitos). En las células de leucemia mieloide crónica se presenta un cambio en el cromosoma 22, este cambio se conoce con el nombre de cromosoma Philadelphia (Ph). El cromosoma Ph se forma cuando un fragmento del cromosoma 22 se desprende y se adhiere al extremo del cromosoma 9. Este cambio genético del que hablamos, forma un gen anormal llamado BCR- ABL, que convierte la célula en una célula de LMC. Las células leucémicas crecen, se dividen y se acumulan en la médula ósea y en la sangre periférica. También las células pueden diseminarse a otras partes del cuerpo, incluyendo el bazo. La LMC es una leucemia de crecimiento lento, pero puede haber ocasiones en la que se transforme a leucemia aguda. Para ello la LMC se divide en diferentes fases (crónica, acelerada, blástica), dependiendo de las características celulares y la presencia de células inmaduras, todo ello es relevante al momento de indicar el tratamiento, ya que depende de la fase en la que se encuentre el paciente al momento del diagnóstico.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Algunos de los síntomas que se describen para esta enfermedad son:",
                ],
                lista: [
                    "Debilidad",
                    "Más cansancio del habitual",
                    "Sudores nocturnos",
                    "Palidez",
                    "Pérdida de peso",
                    "Fiebre",
                    "Agrandamiento del bazo (se siente una masa debajo del lado izquierdo de las costillas)",
                    "Dolor o una sensación de saciedad precoz (que se llena muy rápido cuando come)",
                    "Muchos de los signos y los síntomas de LMC ocurren porque las células leucémicas reemplazan a las células normales de la médula ósea ocasionando que no se produzcan suficientes cantidades de glóbulos rojos, blancos ni plaquetas, causando:",
                    "<span>Anemia:</span> es la disminución de glóbulos rojos. Puede causar cansancio, debilidad y dificultad para respirar.",
                    "<span>Leucopenia: es la disminución de glóbulos blancos normales.</span> Aumenta el riesgo de infecciones. A pesar de que los pacientes con LMC pueden tener un número muy alto de glóbulos blancos, las células leucémicas no protegen contra las infecciones.",
                    "<span>Neutropenia: número de neutrófilos bajo (tipo de glóbulos blancos que nos ayudan a combatir las infecciones). Esto hace que el riesgo de contraer</span> infecciones sea más alto.",
                    "<span>Trombocitopenia: es la disminución del número de plaquetas. Esto puede ocasionar moretos frecuentes, sangrados por ejemplo de encías o nariz, en materia fecal, en orina.</span> Algunos pacientes con LMC presentan un número aumentado de plaquetas, lo que se denomina trombocitosis. Esas plaquetas, en general no funcionan como deberían, lo que puede generar también problemas de sangrado y moretones.",
                ],
                textosFinales: [
                    "Tener en cuenta que estos síntomas no son exclusivos de la LMC, pueden ocurrir también en otros tipos de cáncer.",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Muchas veces los pacientes con LMC no presentan síntomas y el diagnóstico de la leucemia se detecta cuando el médico pide exámenes de sangre por algún problema médico no relacionado o durante una revisión médica de rutina. Se realizará al diagnóstico:",
                ],
                lista: [
                    "<span>Interrogatorio y examen físico:</span> en busca de síntomas y/o signos de la enfermedad.",
                    "<span>Análisis de sangre:</span> laboratorio que incluya hemograma, función renal, hepática. En la LMC la cantidad de glóbulos blancos es más alta de lo normal, la cantidad de glóbulos rojos es menor de lo normal y la de plaquetas puede ser mayor o menor de lo normal.",
                    "<span>Frotis de sangre periférica:</span> se coloca una pequeña cantidad de su sangre en un portaobjetos para que el médico analice las células con un microscopio. La mayoría de las personas con leucemia mieloide crónica como hemos nombrado anteriormente tienen valor elevado de glóbulos blancos con muchas células jóvenes (inmaduras) llamadas mieloblastos o blastos. Los médicos pueden observar el tamaño y la forma de las células que caracterizan a esta enfermedad.",
                    "<span>Punción aspiración y biopsia de médula ósea:</span> no siempre es necesario, muchas veces con las pruebas de sangre periférica alcanza para realizar el diagnóstico. El médico analiza la muestra de médula ósea en el microscopio (medulograma) para ver las características, formas, presencia o no de células inmaduras, se envía material para estudio citogenético, para detectar la presencia del cromosoma Philadelphia que comentamos inicialmente o del gen de fusión BCR-ABL que será de utilidad para el seguimiento y la respuesta al tratamiento de la enfermedad. La anatomía patológica de la médula ósea también nos ayudará a certificar el diagnóstico.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuánto tiempo durará mi tratamiento?",
                textosDescriptivo: [
                    "Para iniciar el tratamiento de un paciente con LMC se deben tener en cuenta varios factores, entre los que se nombran: la fase de la LMC al momento del diagnóstico, comorbilidades del paciente (antecedentes o enfermedades previas o actuales), riesgos (tiene en cuenta signos clínicos, laboratorio) y la edad. Entre las metas del mismo se mencionan: 1) normalizar los niveles de células sanguíneas; 2) destruir todas las células que contengan el gen BCR-ABL.",
                    "La fase crónica de la enfermedad es la más frecuente. La mayoría de las personas presentan sangrados ni infecciones. El bazo que muchas veces se encuentra agrandado con el tratamiento vuelve a su tamaño normal. En general el tratamiento es prolongado y bien tolerado.",
                    "A veces los médicos usan el tratamiento con hidroxiurea (Hydrea®) para disminuir la cantidad de glóbulos blancos. Los médicos suelen suspender la hidroxiurea e iniciar la farmacoterapia una vez que se confirma el diagnóstico de leucemia mieloide crónica.",
                    "<span>Farmacoterapia:</span> el tratamiento que se utiliza para la LMC en fase crónica es un <a href='https://www.cancer.org/es/cancer/tipos/leucemia-mieloide-cronica/tratamiento/terapias-dirigidas.html'>inhibidor de la tirosina cinasa</a> (TKI), entre ellos: Imatinib, Nilotinib, Dasatinib o Bosutinib. Si se inicia el tratamiento con uno de ellos y se pierde la respuesta que se había logrado o en realidad el medicamento nunca funcionó bien se puede aumentar la dosis o cambiar a otro TKI. El Ponatinib es una opción luego de que se haya intentado el tratamiento con todos los demás TKI o si las células de la leucemia desarrollan posteriormente la mutación T315I. Cambiar a otro inhibidor de la tirosina cinasa también es una opción si la persona no puede tomar el que se le indicó debido a la mala tolerancia o eventos adversos.",
                    "Existen diferentes eventos adversos que puede surgir durante el tratamiento con los TKI y éstos varían de uno a otro, se nombran en rangos generales algunos de ellos:",
                ],
                lista: [
                    "Conteos bajos de células de la sangre (glóbulos rojos, blancos, plaquetas)",
                    "Sarpullido",
                    "Calambres",
                    "Náuseas y vómitos",
                    "Diarrea",
                    "Exceso de líquido en los pulmones",
                    "Aleraciones en el electrocardiograma",
                    "Sobrecarga de líquidos en el cuerpo",
                ],
                textosFinales: [
                    "Terapia biológica (interferón): son una familia de sustancias producidas por nuestro sistema inmunitario. El interferón alfa es el que se usa con más frecuencia para la LMC. Reduce el crecimiento y la división de las células leucémicas. Alguna vez se consideró que el interferón era el mejor tratamiento para la LMC, pero se ha demostrado actualmente que los TKI son el tratamiento de elección, y el interferón se usa en pocas ocasiones.",
                    "En la fase acelerada de la leucemia mieloide crónica, la meta de la terapia es destruir todas las células que contienen el gen cancerígeno BCR-ABL, o hacer que la enfermedad de la persona vuelva a la fase crónica. Los TKI son tratamientos eficaces.",
                    "En el caso de la fase blástica, según el paciente, la edad, comorbilidades, el tratamiento es TKI o TKI asociado a esquema de quimioterapia, ya que el objetivo también es destruir todas las células que contienen el gen BCR-ABL. En casos muy específicos se puede la necesidad/posibilidad de un trasplante de médula ósea. Muchas veces los médicos indican tratamiento con hidroxiurea que se toma vía oral y ayuda a disminuir el número de glóbulos blancos antes del inicio del tratamiento definitivo.",
                ],
            },
            {
                subtitulo: "¿Es necesario estar hospitalizado durante todo o alguna parte del tratamiento?",
                textos: [
                    "El tratamiento es ambulatorio, es decir los pacientes toman la medicación vía oral en sus casas, exceptuando los pacientes en crisis blástica que requieran tratamiento con quimioterapia y en ese caso deban ser internados.",
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento y de la respuesta al mismo?",
                textos: [
                    "Los médicos hematólogos son los que estarán pendientes del tratamiento, los controles y la respuesta al mismo. Se realizarán controles: clínico con examen físico, interrogatorio para evaluar tolerancia al tratamiento y análisis de sangre donde se controlarán ciertos parámetros que necesitan controlarse durante el tratamiento, al igual que la muestra para evaluar el gen BCR-ABL. Específicamente para ver si va disminuyendo el porcentaje con respecto al valor del diagnóstico y poder evaluar así la respuesta al tratamiento.  ",
                ],
            },
            {
                subtitulo: "LEUCEMIA LINFÁTICA CRÓNICA (LLC)",
                textos: [
                    "La leucemia linfática crónica es un tipo de cáncer que comienza en la médula ósea, produce demasiados linfocitos (un tipo de glóbulo blanco que ayuda a combatir las infecciones). Los linfocitos nacen en la médula ósea y circulan por todo el organismo a través de la sangre y los conductos linfáticos. En la LLC, los linfocitos B sufren cambios de tipo tumoral que hace que se acumulen en los tejidos, órganos linfáticos y en la sangre. Las células de la leucemia linfática crónica no combaten las infecciones como lo hacen los linfocitos normales. Puede afectar los glóbulos rojos, glóbulos blancos y las plaquetas. Es una enfermedad de los adultos. ",
                    "Muchas personas tienen una LLC de progresión lenta, no presentan síntomas ni manifestaciones de la enfermedad durante muchos años por lo que no necesitan recibir tratamiento de inmediato. En otras personas en cambio, la progresión se presenta de manera más rápida y necesitan recibir tratamiento después del diagnóstico.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "En general la LLC se manifiesta generalmente como un aumento de los linfocitos, por encima de los límites normales en un análisis de sangre de control. Muchas veces no presenta síntomas. Con el tiempo, puede desarrollase con lentitud y al cabo de años puede producir síntomas o alteraciones en el organismo que necesiten tratamiento. En otros pacientes, la LLC se desarrolla de manera más rápida, tiende a producir acúmulos patológicos de linfocitos o daños de órganos y sistemas del paciente, y necesita iniciar tratamiento pronto.",
                    "Entre los signos y síntomas de la leucemia linfática crónica se incluyen:",
                ],
                lista: [
                    "Hinchazón sin dolor de los ganglios linfáticos en el cuello, la axila, ingle u otros sitios.",
                    "Bazo agrandado",
                    "Más cansancio de lo normal",
                    "Infecciones a repetición",
                    "Dificultad para respirar",
                    "Pérdida de peso sin razón aparente",
                ],
                textosFinales: [
                    "A veces, las personas presentan síntomas como dolores del cuerpo, sudoración nocturna o fiebre, que no son síntomas exclusivos de la LLC sino que también se presentan en otras enfermedades.",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "En la mayoría de los casos la LLC se identifica por un análisis de sangre, en un paciente sin síntomas. Lo que se observa es recuento anormalmente elevado de leucocitos (glóbulos blancos).",
                ],
                lista: [
                    "Por lo tanto para poder diagnosticar la enfermedad se realiza:",
                    "Interrogatorio y examen físico en busca de ganglios o bazo agrandados de tamaño u otros síntomas o signos que puedan orientarnos al diagnóstico.",
                    "<span>Análisis de sangre:</span> hemograma, formula leucocitaria, serologías, B2 microglobulina y otros parámetros necesarios al diagnóstico.",
                    "<span>Frotis de sangre periférica:</span> se extiende en un portaobjetos una pequeña muestra de sangre para que el hematólogo pueda ver al microscopio. Los linfocitos de la LLC tiene una característica particular y y algunos aparecen rotos formando las llamadas manchas de Grumpetch.",
                    "<span>Citometría de flujo de sangre periférica:</span> se hace para averiguar si la leucemia linfocítica crónica es la causa del conteo alto de linfocitos. La citometría de flujo también muestra si la leucemia linfocítica crónica es de células B o de células T.",
                    "Muestras para estudio citogenético y molecular de ciertas mutaciones específicas de LLC que ayudan a determinar el pronóstico de la enfermedad.",
                    "<span>Punción-aspiración de médula ósea y la biopsia:</span> no son necesarias para el diagnóstico, pero podrían ser de utilidad en casos seleccionados.",
                    "<span>Biopsia ganglionar:</span> en el caso de adenopatías que aumentaran rápidamente en un paciente con LLC conocida",
                    "<span>Estudio por imágenes:</span> ya se Tomografia axial computada, Tomografía por emisión de positrones, en caso de ser necesario.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuánto tiempo durará mi tratamiento?",
                textosDescriptivo: [
                    "Como hemos dicho anteriormente, dado que la LLC suele crecer lentamente, no todas las personas necesitan tratamiento al momento del diagnóstico. Según como evolucione la enfermedad puede ser necesario iniciar tratamiento. En esta enfermedad existe un modelo estadificación que utilizamos los médicos para ayudar a planificar el tratamiento de las personas que lo necesiten y ciertos criterios estrictos que se debe cumplir. Se basa en aspectos clínicos, de imágenes y laboratorio. Las metas del tratamiento son: 1) Retrasar la proliferación de las células de la LL; 2) lograr períodos prolongados de remisión (es decir, cuando no hay signos ni síntomas de la LLC y las personas se sienten bien para hacer sus actividades); 3) Ayudar a las personas a sentirse mejor si presentan infecciones, cansancio, falta de aire u otros síntomas.",
                    "Al momento de planificar un tratamiento en pacientes con LLC se tiene en cuenta: 1) etapa de la leucemia (riesgo bajo, intermedio, alto): 2) laboratorio y examen físico; 3) edad de la persona, comorbilidades. El tratamiento debe adaptarse a las características de la LLC y a las condiciones del paciente, para poder entonces conseguir efectividad sin producir toxicidades o lograr las menores posibles.",
                    "Las terapias actuales no les ofrecen a los pacientes una cura para la leucemia linfocítica crónica, pero hay tratamientos que ayudan a controlar la enfermedad. Los tratamientos para la LLC incluyen:",
                ],
                lista: [
                    "<span>Observar y esperar:</span> el paciente necesita consultas de seguimiento con el médico, donde él lo examinará para ver si hay algún cambio en su estado de salud y realizará laboratorio para objetivar si hay algún cambio en el mismo.",
                    "<span>Quimioterapia:</span> tratamiento con medicamentos que destruyen o dañan las células cancerosas. Algunos medicamentos se administran por vía oral. Otros medicamentos se administran a través de una vena (intravenoso). La quimioterapia se suele dar en ciclos, que son un período de tratamiento de unos días seguido de un período de descanso para permitir que su cuerpo se recupere. Los ciclos de quimioterapia se dan generalmente cada 4 semanas. En general se dan en un número no mayor de seis. A menudo se usan dos o más medicamentos juntos. Para el tratamiento de las personas con leucemia linfática crónica, se administran los medicamentos fludarabina, ciclofosfamida, bendamustina, todos aprobados por la FDA, y otros medicamentos estándar de la quimioterapia.",
                    "<span>Terapias dirigidas:</span> estos nuevos fármacos atacan uno o más blancos específicos en las células de la LLC y son letales para ellas. La mayoría de los medicamentos se administran como pastillas y en general provocan efectos secundarios más leves que la quimioterapia. El ibrutinib es la primera terapia dirigida aprobada para el tratamiento de la leucemia linfocítica crónica, luego también existen otros medicamentos como el Venetoclax, Idelalisib. Se pueden utilizar solos o combinados, según los esquemas de tratamiento.",
                    "Terapias con anticuerpos monoclonales: son tratamientos que emplean proteínas del sistema inmunitario (anticuerpos) producidas en el laboratorio. Las terapias con anticuerpos monoclonales se dirigen a un objetivo específico en la superficie de las células de la leucemia linfocítica crónica. El anticuerpo se une a la célula y después la célula muere. Este tipo de terapia se administra por vía intravenosa. Las terapias con anticuerpos monoclonales causan algunos efectos secundarios. Generalmente, los efectos secundarios son más leves que los efectos secundarios de la quimioterapia (vea la página 34). El rituximab, el obinutuzumab, el ofatumumab y el alemtuzumab. Estos medicamentos se administran por infusión intravenosa (IV) lenta, durante varias horas. Si se dan en monoterapia, como infusiones una vez por semana, para luego espaciarse. Si se combinan con quimioterapia, una vez al mes coincidiendo con el comienzo del ciclo.",
                ],
                textosFinales: [
                    "Las opciones de tratamiento para leucemia linfática crónica son variadas y en gran medida depende de la edad y condiciones del paciente y la gravedad de la enfermedad. El médico optará por la mejor opción en cada caso y en conjunto decidirán el tratamiento en caso que así lo requiera."
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento y de la respuesta al mismo?",
                textos: [
                    "Los médicos hematólogos son los que estarán pendientes de su seguimiento luego del diagnóstico de la enfermedad. Realizará controles clínicos y de la laboratorio periódicamente aunque este realizando o no tratamiento. Durante las consultas, el médico realizará un interrogatorio y examen físico para ver cómo se encuentra. Puede que considere realizar análisis de sangre o pruebas de médula ósea para evaluar respuesta al tratamiento. Si el paciente se encuentra dentro del grupo de los que no requiere tratamiento los controles se realizarán durante períodos más largos pero las consultas para su seguimiento deben continuar regularmente. Es importante que en cada consulta aproveche para consultar dudas o preguntas que se vayan generando.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "DEPARTAMENTO DE HEMATOLOGÍA Y UTH",
                textos: [
                    "Instituto Alexander Fleming",
                    "Mayo 2022",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/P8w4ZuZEIzY?si=CC5M9X4cCniSkFA1",
            "https://www.youtube.com/embed/g9upfgCfeY0?si=NaM7Lk6BIOFsA2Q-",
        ],
    },
    {
        img: "linfomas",
        nombre: "Linfomas",
        textosIntroduccion: [
            "El linfoma es un tipo de cáncer de la sangre que afecta a un tipo de glóbulo blanco llamado linfocito. Estas células forman parte del sistema linfático que a su vez integra el sistema inmunitario que ayuda al cuerpo a defenderse de las infecciones y las enfermedades. Algunos linfocitos permanecen en el torrente sanguíneo pero la mayoría se encuentran distribuidos en cientos de grupos en todo el cuerpo en los que se llaman ganglios linfáticos.  Por este motivo el linfoma puede aparecer en cualquier parte del cuerpo y esto ayuda a clasificarlos en estadios, según el compromiso.",
            "Existen dos tipos principales de linfoma: Linfoma de Hodgkin y Linfoma no Hodgkin, los detallaremos a continuación.",
        ],
        body: [
            {
                subtitulo: "LINFOMA DE HODGKIN (LH)",
                textos: [
                    "El linfoma de Hodgkin se diagnostica con más frecuencia entre la segunda y tercera década de la vida, pero también puede afectar a pacientes mayores de 60 años. Este tipo de linfoma forma parte de los cánceres más curables. Existen diferentes subtipos de este linfoma y ello puede hacer que el tratamiento sea diferente en alguno de ellos. A su vez, al igual que el resto de los linfomas se clasifica en estadios (de 1 a 4) según la extensión y compromiso del mismo en el organismo.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Los síntomas pueden ser varios, puede presentarse uno o varios de ellos. Dentro de ellos se nombran:",
                ],
                lista: [
                    "Agrandamiento de uno o más ganglios linfáticos en cuello, axila, abdomen, tórax superior o a nivel inguinal, entre los más importantes. Este agrandamiento en este caso es indoloro a diferencia de la hinchazón de ganglios que ocurre en infecciones o inflamaciones y es dolorosa.",
                    "Fiebre sin una causa que la explique",
                    "Sudores nocturnos (que suele obligar a cambiar la ropa de cama o el pijama)",
                    "Pérdida de peso (más del 10 por ciento del peso corporal en los últimos 6 meses)",
                    "Tos",
                    "Cansancio",
                    "Picazón en la piel",
                    "Dolor en el pecho",
                    "Falta de aire",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Inicialmente el médico lo evaluará, le realizará un interrogatorio y un examen físico exhaustivo para evaluar los ganglios linfáticos, el bazo, el hígado, y su condición clínica sobre todas las cosas.",
                    "Para arribar al diagnóstico es fundamental hacer una biopsia de ganglio linfático (de una parte o de la totalidad del ganglio), el cual luego es enviado para realizar algunas pruebas (citometría de flujo, anatomía patológica) y confirmar el diagnóstico.",
                    "A su vez, para continuar con la estadificación (compromiso del linfoma en el cuerpo) de la enfermedad se deben realizar otra serie de estudios, entre ellos:",
                ],
                lista: [
                    "Análisis de sangre para evaluar el recuento de glóbulos blancos, rojos, plaquetas, otros signos de inflamación que pueden medirse por laboratorio, serologías, entre otros.",
                    "Imágenes, entre ellas tomografía por emisión de positrones (PET), tomografía axial computada corporal total para evaluar la extensión de la enfermedad.",
                    "Biopsia de médula ósea para evaluar si está comprometida o no por la enfermedad.",
                    "Ecografía del corazón y espirometría (estudio para evaluar los pulmones) con el fin de comprobar su funcionalidad al momento de iniciar tratamiento.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuál es la meta del tratamiento?",
                textosDescriptivo: [
                    "En el linfoma de Hodgkin las tasas de curación son muy altas. El tratamiento consiste en:",
                ],
                lista: [
                    "Quimioterapia",
                    "Quimioterapia y/o radioterapia",
                    "Radioterapia",
                    "Anticuerpos monoclonales (Rituximab, Brentuximab)",
                    "Inhibidores de puesto de control inmunitarios (Nivolumab, Pembrolizumab).",
                ],
                textosFinales: [
                    "Los esquemas de quimioterapia constan de una combinación de drogas y en general se realiza de manera ambulatoria, es decir no requiere internación excepto que el paciente presente alguna complicación como por ejemplo infección que así lo requiera. La quimioterapia se administra en ciclos, con varias semanas entre uno y otro. Y en general son de 6-10 meses de tratamiento, con una evaluación por imágenes que suele realizarse a la mitad del tratamiento. Cada droga presenta eventos adversos que se le comunicaran antes de iniciar el tratamiento.",
                    "Otra opción de tratamiento puede ser la quimioterapia junto con radioterapia. Lo que se hace en este caso es irradiar las regiones de los ganglios linfáticos que estén afectados, tratando de preservar la radiación de otros tejidos que se encuentren alrededor del área comprometida.",
                    "Al realizar tratamiento con quimioterapia en esta enfermedad como en otras se afectan tanto las células malas como las células sanas de la sangre, por ende durante el tratamiento pueden descender los valores de glóbulos blancos, rojos y plaquetas y en este momento es donde se realizarán los controles clínicos y de laboratorio con el médico especialista. Es en este momento donde también pueden surgir infecciones, por lo que siempre se le darán pautas de alarma para que usted pueda distinguirlas.",
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento?",
                textos: [
                    "Una vez iniciado el tratamiento, se realizarán controles clínico y de laboratorio periódicamente, en general previo y posterior a cada infusión de quimioterapia. Se le comunicará en cada consulta los eventos adversos que pueden aparecer y se le darán las pautas de alarma para que en caso de ser necesario concurra a la guardia o le comunique a su médico.",
                ],
            },
            {
                subtitulo: "LINFOMA NO HODGKIN (LNH)",
                textos: [
                    "La clasificación de los linfomas no Hodgkin es muy amplia. Puede afectar a linfocitos B (el más frecuente) o linfocitos T (los menos frecuentes). La Organización Mundial de la Salud tiene en cuenta los siguientes puntos para su clasificación: 1) el tipo de linfocito del que se originó el linfoma; 2) cómo se ve el linfoma en el microscopio (patología); 3) las características cromosómicas de las células del linfoma; 4) la presencia de ciertas proteínas en la superficie de las células.",
                    "A su vez, pueden comprometer los ganglios línfáticos; o ser extraganglionares (afectar sitios que no sean los ganglios), lo que nos permite ver la extensión del mismo y clasificar el estadío al igual que para el linfoma de Hodgkin. Existen tipos de bajo grado o evolución más lenta y otros que son de alto grado y de evolución más tórpida. Afecta a los adultos y algunos subtipos son más frecuentes en adultos mayores.",
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Los signos y síntomas que pueden presentarse son similares a los detallados para el linfoma de Hodgkin, entre ellos:",
                ],
                lista: [
                    "Hinchazón o agrandamiento de uno o más ganglios",
                    "Fiebre",
                    "Sudoración nocturna que obligue a cambiar el pijama o la ropa de cama",
                    "Pérdida de peso de más del 10% del peso corporal en los últimos 6 meses",
                    "Picazón en la piel",
                    "Sarpullido en la piel",
                    "Cansancio",
                    "Falta de aire",
                    "Tos",
                    "Pérdida de apetito",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Los estudios que se realizan en este tipo de linfoma son similares a los que se solicitan en el linfoma de Hodgkin. El médico especialista realizará una consulta inicial donde evaluará su situación clínica, sus antecedentes, comorbilidades, realizará un interrogatorio completo y examen físico para evaluar abdomen, ganglios linfáticos, y otras condiciones que puedan dirigir el diagnóstico.  Los estudios constan de:",
                ],
                lista: [
                    "Análisis de sangre que incluya hemograma, función renal, hapática, LDH, parámetros de inflamación, serologías.",
                    "Biopsia ganglionar o de algún otro tejido comprometido, enviando muestra a citometría de flujo, anatomía patológica y si es necesario estudio citogenético y molecular.",
                    "Estudios por imágenes: tomografía por emisión de positrones (PET), tomografía axil computada (TAC).",
                    "Biopsia de médula ósea para estadificación de la enfermedad.",
                    "Pruebas cardíacas (ecografía del corazón) para evaluar su funcionamiento previo al inicio del tratamiento.",
                ],
                textosFinales: [
                    "Llamamos estadificación a las pruebas que el médico realiza para determinar la cantidad de ganglios linfáticos que están afectados, la distribución de los mismo en el cuerpo, presencia de células malignas en otras partes del cuerpo que no sean los ganglios."
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuál es la meta del tratamiento?",
                textosDescriptivo: [
                    "Como hemos comentado anteriormente la clasificación de los linfomas no Hodgkin es muy amplia, por lo tanto las opciones de tratamiento también lo son, dependiendo del subtipo de linfoma al que nos enfrentemos.",
                    "Principalmente el tratamiento de este tipo de linfomas es la quimioterapia. Pero también existen otros tratamientos que fueron incorporándose en los últimos años. Detallamos los tratamientos disponibles:",
                ],
                lista: [
                    "Observación",
                    "Quimioterapia",
                    "Radioterapia",
                    "Quimioterapia +/- radioterapia",
                    "Anticuerpos monoclonales, solos o en combinación con quimioterapia",
                    "Inmunomoduladores",
                    "Inhibidores de quinasa y de histona desacetilasa",
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento?",
                textosDescriptivo: [
                    "Los médicos especialista estarán cuidando de su salud a lo largo del tratamiento, se realizarán los controles necesarios durante el mismo, tanto clínico como de laboratorio y por imágenes. En cada consulta usted podrá aclarar sus dudas y el médico a su vez remarcará los cuidados que debe tener. Si presenta algún antecedente relevante que pueda verse afectado durante el tratamiento o posteriormente se hará seguimiento del mismo con el médico especialista en el tema.",
                    "En todos los linfomas, lo que se busca lograr con el tratamiento es la remisión completa de la enfermedad (que no haya presencia de la misma en los estudios que se realizan para evaluarla), en ocasiones se puede lograr una remisión parcial (es decir la enfermedad no se fue completamente, sino de manera parcial) o en ocasiones la enfermedad puede permanecer estable con respecto al tratamiento y no haber respondido al mismo. Para cada situación existe un escenario diferente y en caso en lo que se requiera el tratamiento se cambiará. Las posibilidades de recaída de la enfermedad una vez que se haya logrado la remisión completa están. En esos casos también existen múltiples opciones de tratamiento y en caso de que pueda ser posible se realizará un trasplante de médula ósea, momento en el cual el médico especialista le comentará en detalle de que consta el tratamiento.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "DEPARTAMENTO DE HEMATOLOGÍA Y UTH",
                textos: [
                    "Instituto Alexander Fleming",
                    "Mayo 2022",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/2apC5Ufa2Ug?si=bqBghacyTqJc7qa4",
        ],
    },
    {
        img: "mieloma",
        nombre: "Mieloma múltiple",
        body: [
            {
                subtitulo: "Sobre el mieloma múltiple",
                textos: [
                    "El mieloma múltiple es un cáncer de las células plasmáticas malignas, que son un tipo de glóbulo blanco que se forma en la médula ósea (lugar donde se generan los glóbulos rojos, blancos y plaquetas). Estas células forman parte del sistema inmune y se encargan de producir anticuerpos, que son los que nos protegen de las infecciones, por tal motivo, las células del mieloma no pueden ayudar al cuerpo a combatir las infecciones. Es una enfermedad que afecta a los adultos, mayormente de más de 50 años y caracteriza por comprometer la médula ósea y otros tejidos."
                ],
            },
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Además de los criterios de laboratorio y por imágenes que detallaremos a más adelante y  se necesitan para poder arribar al diagnóstico de mieloma múltiple, los pacientes pueden manifestar:"
                ],
                lista: [
                    "Fatiga",
                    "Bajos recuentos de glóbulos rojos, blancos o plaquetas",
                    "Dolor en los huesos",
                    "Fracturas al hacer esfuerzos mínimos o ningún esfuerzo",
                    "Debilidad muscular, dolor de espalda y adormecimiento de las piernas por compresión de la médula espinal",
                    "Sangre muy espesa (hiperviscosidad)",
                    "Altos niveles de calcio en sangre que pueden generar: mucha sed, problemas renales, pérdida de apetito, somnolencia, confusión y otras alteraciones neurológicas, entre lo más importante",
                    "Infecciones frecuentes",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Para poder hacer el diagnóstico de mieloma múltiple se requieren de ciertos criterios clínicos, de laboratorio y por imágenes. Los pacientes deben realizarse ciertos estudios entre los que se encuentran:"
                ],
                lista: [
                    "Análisis de sangre que nos permite evaluar la presencia de anemia, falla en la función de los riñones, calcio elevado en sangre, entre lo más importante",
                    "Detección en sangre y orina de 24 horas de la proteína monoclonal (anticuerpo producido por las células plasmáticas de la enfermedad)",
                    "Punción/biopsia de médula ósea: para definir el compromiso de la enfermedad en la médula ósea.",
                    "Tomografía computada (TAC), resonancia magnética nuclear (RMN) o tomografía por emisión de positrones (PET) en la mayoría de los casos para determinar la presencia de lesiones en los huesos.",
                ],
                textosFinales: [
                    "Dentro de los criterios clínicos para determinar si se trata de un mieloma múltiple sintomático se detallan: anemia (recuento bajo de glóbulos rojos), el calcio elevado, la insuficiencia renal y compromiso óseo, entre los más importantes.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuánto tiempo durará mi tratamiento?",
                textosDescriptivo: [
                    "El mieloma múltiple es una enfermedad que presenta múltiples opciones de tratamiento y el mismo debe ajustarse a la edad del paciente, las comorbilidades (es decir otras enfermedades o condiciones que presente el paciente al momento del diagnóstico), ciertos parámetros de laboratorio y a la posibilidad de recibir un trasplante de médula ósea. Los objetivos del tratamiento son: Las metas del tratamiento para el mieloma son:"
                ],
                lista: [
                    "Hacer que la proliferación de las células del mieloma se retrase",
                    "Aliviar los síntomas que produce el mieloma como dolor en los huesos, fatiga u otros síntomas y fundamentalmente",
                    "Lograr períodos prolongados de remisión de la enfermedad (es decir, donde no se observan signos de la misma)",
                    "Las opciones de tratamiento son diversas, y dentro de las opciones podemos mencionar:",
                    "Corticosteroides: dexametasona, prednisona, metilprednisolona.",
                    "Quimioterapia: actúa destruyendo las células malignas del mieloma, pero también dañan las células sanas del organismo. Algunos de los medicamentos que se utilizan en esta enfermedad son: Melfalán, Ciclofosfamida, Doxorrubicina, Vincristina, Bendamustina, entre otros.",
                    "Inhibidores del proteosoma: Bortezomib, Carfilzomib, Ixazomib.",
                    "Agentes Inmunomoduladores: Talidomida, Lenalidomida, Pomalidomida.",
                    "Anticuerpos monoclonales: Daratumumab, Elotuzumab.",
                    "Inhibidores de histona deacetilasa: Panobinostat.",
                    "Radioterapia: se puede utilizar de manera dirigida sobre lesiones óseas o de tejidos específicas (plasmocitomas).",
                    "Trasplante autólogo de médula ósea (con células madre hematopoyéticas del mismo paciente): el paciente recibe dosis altas de quimioterapia para destruir las células de la médula ósea y luego recibe las células madre propias nuevas. El objetivo es lograr un mayor tiempo libre de enfermedad.",
                ],
                textosFinales: [
                    "Como existen múltiples opciones de tratamiento, también pueden combinarse de diferente manera y así lograr remisión de la enfermedad.",
                ],
            },
            {
                subtitulo: "¿Es necesario estar hospitalizado durante todo o alguna parte del tratamiento?",
                textos: [
                    "El tratamiento se divide en ciclos, en general cada 21-28 días y varía en tiempo según el tratamiento de elección. Los medicamentos se aplican de manera endovenosa, subcutánea u oral. En la mayoría de los casos los tratamientos se realizan de manera ambulatoria, no es necesaria la internación."
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento y de la respuesta al mismo?",
                textos: [
                    "Su médico hematólogo de cabecera será quien le indique el tratamiento y realice los controles tanto clínicos como de laboratorio para determinar si el tratamiento es eficaz.  Los enfermeros y médicos de hospital de día (ambulatorio) también estarán para ayudarlo, al igual que el médico clínico de cabecera. Se realizarán análisis de sangre y orina durante el tratamiento para controlar también los recuentos sanguíneos, la función renal y determinar si hay indicios de proliferación de las células del mieloma."
                ],
            },
        ],
        profesionales: [
            {
                nombre: "DEPARTAMENTO DE HEMATOLOGÍA Y UTH",
                textos: [
                    "Instituto Alexander Fleming",
                    "Mayo 2022",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/cMtFcwQa6h8?si=f8mhZqGU83imfKed",
        ],
    },
    {
        img: "sarcomas",
        nombre: "Sarcomas",
        body: [
            {
                subtitulo: "Sobre los sarcomas",
                textos: [
                    "Son un grupo heterogéneo de tumores que se pueden originar en el tejido mesenquimático de cualquier parte de nuestro cuerpo (grasa, vasos sanguíneos, hueso, cartílago, intestino, nervios periféricos y tejidos blandos). La ubicación más frecuente es las partes blandas de la raíz de las extremidades inferiores pero también pueden localizarse en el retroperitoneo, el tórax, los órganos sólidos y cabeza y cuello."
                ],
            },
            {
                subtitulo: "Factores de riesgo para desarrollar sarcoma",
                textos: [
                    "La gran mayoría de estos tumores son esporádicos, pero pueden estar asociados a algún componente hereditario o ser parte de un síndrome como es el ejemplo de la neurofibromatosis, Li Fraumeni, Retinoblastoma o la poliposis adenomatosa familiar y se pueden generar en baja frecuencia en zonas que previamente recibieron tratamiento con radioterapia o afecciones previas como enfermedad de Paget o linfedema crónico."
                ],
            },
            {
                subtitulo: "Síntomas de los sarcomas",
                textos: [
                    "La manifestación de síntomas en los sarcomas, depende del sitio de aparición y el efecto de masa que genere. Por ejemplo, en el caso de que se ubique en el abdomen, podemos sentir dolor, alteración del tránsito intestinal o deposiciones con sangre; pero si la presentación es en las extremidades puede aparecer un bulto mayor a 5 cm sin causa directa relacionada, que permanece por un largo periodo de tiempo (semanas o meses). Por eso, es importante la primera consulta con un médico de cabecera para derivar, de manera temprana, a los centros de referencia (no siempre significa que tengamos un sarcoma) y así poder realizar los estudios diagnósticos que generalmente corresponden a imágenes y la toma de una biopsia. ",
                    "No existen exámenes para detección precoz definidos ni medidas de prevención para esta patología, <span>siempre lo recomendable es que, ante la sospecha de un síntoma, tenemos que consultar con nuestro médico de cabecera y la derivación temprana a centros de referencia.</span>",
                ],
            },
            {
                subtitulo: "Tipos de sarcomas",
                textos: [
                    "Un sarcoma ocurre cuando las células normales de un tejido blando u óseo se transforman en células anormales y crecen sin control. Existen más de 70 subtipos de sarcomas y según el tejido del sitio de origen recibe su nombre. Así tenemos tres grandes grupos: tumores de partes blandas (liposarcoma, leiomiosarcoma, fibrosarcoma… etc) Tumores óseos (osteosarcoma, condrosarcoma, sarcoma de ewing) y tumores del estroma gastrointestinal."
                ],
            },
            {
                subtitulo: "¿Cómo se tratan los sarcomas?",
                textos: [
                    "Los pacientes con sospecha de sarcoma deben ser derivados de manera temprana a un grupo de especialista en sarcomas en centros de referencia. En general, el tratamiento se basa en quimioterapia y, según el caso, radioterapia y cirugía y ciertos tumores tienen tratamientos específicos blanco dirigidos como es el caso del tumor del estroma gastrointestinal."
                ],
            },
            {
                subtitulo: "Puntos importantes para recordar",
                lista: [
                    "Los sarcomas pueden ocurrir en cualquier parte del cuerpo (extremidades, tronco, intestino y órganos solidos).",
                    "Clásicamente hay tres grupos según la localización: partes blandas, óseos y estroma gastrointestinal.  ",
                    "En general la primera consulta es al médico general o de cabecera por una masa o bulto visible.",
                    "Un diagnóstico temprano es la clave para un tratamiento a tiempo. ",
                    "Pacientes con sospecha de sarcoma deben ser derivados de manera temprana para la evaluación y tratamiento por un grupo de expertos en sarcomas en centros de referencia.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "Dr. Andrés Rodríguez Romero",
                textos: [
                    "Oncólogo clínico",
                    "(MN 140.049)",
                    "Junio 2021",
                ],
            },
        ],
        videos: [
            "https://www.youtube.com/embed/dHNUfkO4biI?si=a36a-0tyfptC5AYL",
        ],
    },
    {
        img: "sindrome-mielodisplasico",
        nombre: "Síndrome mielodisplásico",
        textosIntroduccion: [
            "La médula ósea es donde se fabrican los glóbulos blancos, los glóbulos rojos y las plaquetas a partir de unas células que denominamos células madre. El síndrome mielodisplásico es una enfermedad de la médula ósea. Esta enfermedad afecta las células madre y hace de esta manera que la médula ósea no funciona adecuadamente y no se produzca de manera correcta y suficiente los glóbulos blancos, rojos y plaquetas. Por lo tanto las personas que padezcan esta enfermedad no suelen tener niveles suficientes de éstas tres líneas celulares. Cuando un especialista mira la sangre del paciente con síndrome mielodisplásico en el microscopio, las células no tienen una forma normal, es algo que lo caracteriza. En la médula ósea de un paciente con esta enfermedad también pueden aparecer blastos, que son células malignas, en un porcentaje bajo o algo más elevado y esto es importante también a la hora de realizar el diagnóstico. ",
            "Se diagnostica generalmente en personas mayores de 60 años. Puede correlacionarse además de la edad con exposición a tratamientos como radioterapia o quimioterapia, ciertas sustancias químicas como fertilizantes, solventes, plaguicidas o presentarse en pacientes con diagnóstico de ciertos síndromes hereditarios.",
        ],
        body: [
            {
                subtitulo: "¿Cuáles son los signos o síntomas que pueden aparecer?",
                textosDescriptivo: [
                    "Los sindromes mielodisplásicos pueden no dar signos o síntomas y solamente presentar alteraciones en el laboratorio (lo que los médicos solemos llamar hallazgo de laboratorio). En el caso de presentar signos o síntomas estos pueden ser:",
                ],
                lista: [
                    "Palidez de la piel, cansancio, falta de aire (causado por el recuento bajo de globulos rojos en sangre que llamamos anemia).",
                    "Infecciones frecuentes (causada muchas veces porque los glóbulos blancos, especialmente los neutrófilos, se encuentran bajos en la sangre).",
                    "Petequias (son manchitas pequeñas planas del color de la sangre que se localizan en la piel), moretones o sangrados fáciles por ejemplo en nariz, encías (causados por el recuento bajo de plaquetas en la sangre).",
                    "Fiebre",
                ],
            },
            {
                subtitulo: "¿Qué exámenes o pruebas se pueden hacer para el diagnóstico?",
                textosDescriptivo: [
                    "Para arribar al diagnóstico de síndrome mielodisplásico se necesitan realizar los siguientes estudios:",
                ],
                lista: [
                    "Análisis de sangre que incluya recuento de glóbulos blancos, rojos y plaquetas, índices hematimétricos (predominio de tamaño de los glóbulos blancos), función renal y hepática, dosaje de vitaminas y ácido fólico, entre otros.",
                    "Frotis de sangre periférica: su médico le hará un pinchazo muy pequeño en un dedo de la mano para poder tomar muestra de una gotita de sangre, extenderlo en un vidrio y mirar las células de la sangre en el microscopio. Esto nos ayuda a ver cantidad, forma, tamaño y ver si hay alguna alteración importante que nos apoye el diagnóstico.",
                    "Punción-biopsia de médula ósea: este método, sobre todo la muestra de sangre de la médula ósea (lo que llamamos medulograma) es fundamental en el diagnóstico de esta patología. Se realizarán además en esas mismas muestras estudio de citometría de flujo y citogenético. La muestra de biopsia se enviara a patología para su análisis.",
                ],
                textosFinales: [
                    "Todos estos estudios nos ayudarán a su vez a clasificar el tipo de síndrome mielodisplásico, a que riesgo pertenece (en la escala pronóstica), si es más o menos agresivo y poder de esta manera definir el tratamiento a seguir.",
                ],
            },
            {
                subtitulo: "¿Cuáles son las opciones de tratamiento? ¿Cuál es la meta del tratamiento?",
                textosDescriptivo: [
                    "Como existen formas diferentes de síndrome mielodisplásico y a su vez riesgos distintos, las opciones de tratamiento también son variadas, pueden ir desde observación y control hasta trasplante de médula ósea. Nombraremos las opciones de tratamiento a continuación:",
                ],
                lista: [
                    "Vigilar y esperar. Se puede optar por esta opción en pacientes con SMD de riesgo muy bajo, que no tienen síntomas, y el recuento de las células en sangre ha disminuido muy poco.",
                    "Tratamiento de soporte:",
                    "Transfusiones de glóbulos rojos y plaquetas.",
                    "Uso de factores de crecimiento de células de la sangre. Entre los más importantes: filgrastim (ayuda a aumentar el número de glóbulos blancos en sangre) y la eritropoyetina (estimula los glóbulos rojos).",
                    "Hipometilantes: Azacitidina, Decitabina, en general se administran de manera subcutánea.",
                    "Inmunomoduladores: Lenalidomida, Talidomida, se administran vía oral.",
                    "Tratamiento inmunosupresor: Timoglobulina, Ciclosporina, se administran de manera endovenosa.",
                    "Trasplante de médula ósea (quimioterapia fuerte o de intensidad reducida previo al mismo).",
                ],
                textosFinales: [
                    "Como hemos dicho anteriormente, según el síndrome mielodiplásico que a usted se le diagnostique, se le especificarán las opciones de tratamiento que pueden ir desde una de las opciones hasta la combinación de más de una de ellas. Dependiendo también del tratamiento que se elija, se definirá el requerimiento de internación. La mayoría de ellos se realiza de manera ambulatoria y no lo requieren."
                ],
            },
            {
                subtitulo: "¿Quiénes estarán pendientes del tratamiento?",
                textosDescriptivo: [
                    "Al momento del diagnóstico y del tratamiento si así lo requiere realizará el seguimiento y los controles con el médico especialista. Él lo acompañará en todo momento. El seguimiento en general es con controles clínicos y de laboratorio, previo, durante y posterior al tratamiento. Y si no lo requisiera, solo realizará controles clínicos y de laboratorio periódicos para monitorear el estado de la enfermedad y detectar rápidamente los cambios que puedan surgir e iniciar tratamiento siempre y cuando sea necesario.",
                    "Siempre va a contar con la posibilidad de preguntar las dudas que le surjan a lo largo de las consultas y con el apoyo del equipo médico que se encargará de su seguimiento.",
                ],
            },
        ],
        profesionales: [
            {
                nombre: "DEPARTAMENTO DE HEMATOLOGÍA Y UTH",
                textos: [
                    "Oncólogo clínico",
                    "Instituto Alexander Fleming",
                    "Mayo 2022",
                ],
            },
        ],
    },
];
const opciones = [
    {
        titulo: "Ensayos clínicos",
        contenido: [
            "<span>¿Qué es lo que se debe saber acerca de investigación y ensayos clínicos?</span>",
            "<span>Cuando un paciente toma conocimiento de que tiene cáncer renal, su médico puede proponerle participar en un ensayo clínico.</span>",
            "Los ensayos clínicos son estudios de investigación médica que evalúan la seguridad y la eficacia de avances de la ciencia prometedores en la prevención, diagnóstico y tratamiento de una enfermedad. Los tratamientos que llegan a esta etapa son los que demostraron eficacia y toxicidad tolerable en estudios previos. Estos ensayos son cuidadosamente conducidos por médicos especialista y equipos entrenados para asegurar que los pacientes reciban el mejor cuidado posible.",
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
        videos: [
            "https://www.youtube.com/embed/MBDezF0bZqA?si=RB20b6nsxSJDvZhb",
            "https://www.youtube.com/embed/MBDezF0bZqA?si=RB20b6nsxSJDvZhb",
            "https://www.youtube.com/embed/MBDezF0bZqA?si=RB20b6nsxSJDvZhb",
            "https://www.youtube.com/embed/MBDezF0bZqA?si=RB20b6nsxSJDvZhb",
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
        <div id="modalBody" class="tipoBody"></div>
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

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = '';

        if (tiposCancer[index].textosIntroduccion) {
            tiposCancer[index].textosIntroduccion.forEach(texto => {
                modalBody.innerHTML += `<p>${texto}</p>`;
            });
        }

        if (tiposCancer[index].listaIntroduccion) {
            const ulContent = document.createElement('ul');
            tiposCancer[index].listaIntroduccion.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ulContent.appendChild(li);
            });
            modalBody.appendChild(ulContent);
        }

        if (tiposCancer[index].body) {
            for (let body = 0; body < tiposCancer[index].body.length; body++) {
                if (tiposCancer[index].body[body].subtitulo) {
                    const subtitulo = tiposCancer[index].body[body].subtitulo;
                    modalBody.innerHTML += `<h3 class="tipoSubtitulo">${subtitulo}</h3>`;
                }

                if (tiposCancer[index].body[body].textosDescriptivo) {
                    tiposCancer[index].body[body].textosDescriptivo.forEach(texto => {
                        modalBody.innerHTML += `<p>${texto}</p>`;
                    });
                }

                if (tiposCancer[index].body[body].textos) {
                    tiposCancer[index].body[body].textos.forEach(texto => {
                        modalBody.innerHTML += `<p>${texto}</p>`;
                    });
                }

                if (tiposCancer[index].body[body].lista) {
                    let ulContent = '<ul>';
                    tiposCancer[index].body[body].lista.forEach(item => {
                        ulContent += `<li>${item}</li>`;
                    });
                    ulContent += '</ul>';
                    modalBody.innerHTML += ulContent;
                }

                if (tiposCancer[index].body[body].textosFinales) {
                    tiposCancer[index].body[body].textosFinales.forEach(texto => {
                        modalBody.innerHTML += `<p>${texto}</p>`;
                    });
                }
            }
        }

        if (tiposCancer[index].profesionales) {
            for (let profesional = 0; profesional < tiposCancer[index].profesionales.length; profesional++) {
                const profesionalDiv = document.createElement('div');
                profesionalDiv.className = 'profesionalDiv';
                profesionalDiv.innerHTML += `<p>${tiposCancer[index].profesionales[profesional].nombre}</p>`;
                for (let texto = 0; texto < tiposCancer[index].profesionales[profesional].textos.length; texto++) {
                    profesionalDiv.innerHTML += `<p>${tiposCancer[index].profesionales[profesional].textos[texto]}</p>`;
                }
                modalBody.appendChild(profesionalDiv);
            }
        }

        if (tiposCancer[index].materialDescarga) {
            const subtituloDescarga = document.createElement('h3');
            subtituloDescarga.textContent = 'Materiales de descarga';
            subtituloDescarga.classList.add('tipoSubtitulo');
            modalBody.appendChild(subtituloDescarga);
            const listaDescarga = document.createElement('ul');
            for (let descarga = 0; descarga < tiposCancer[index].materialDescarga.length; descarga++) {
                const descargaItem = document.createElement('li');
                descargaItem.className = 'descargaItem';
                descargaItem.innerHTML = tiposCancer[index].materialDescarga[descarga].nombre;
                const descargaLink = document.createElement('a');
                descargaLink.href = '/content/img/informacionCancer/pdf/' + tiposCancer[index].materialDescarga[descarga].pdf + '.pdf';
                descargaLink.textContent = 'Descargar';
                descargaLink.target = '_blank';
                descargaItem.appendChild(descargaLink);
                listaDescarga.appendChild(descargaItem);
            }
            modalBody.appendChild(listaDescarga);
        }

        if (tiposCancer[index].videos) {
            const subtituloVideos = document.createElement('h3');
            subtituloVideos.textContent = 'Vivos y charlas';
            subtituloVideos.classList.add('tipoSubtitulo');
            modalBody.appendChild(subtituloVideos);
            const videosContainer = document.createElement('div');
            videosContainer.className = 'videosContainer';
            for (let video = 0; video < tiposCancer[index].videos.length; video++) {
                const videoDiv = document.createElement('div');
                videoDiv.className = 'videoDiv';
                const videoIframe = document.createElement('iframe');
                videoIframe.src = tiposCancer[index].videos[video];
                videoIframe.frameborder = '0';
                videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                videoIframe.allowFullscreen = true;
                videoDiv.appendChild(videoIframe);
                videosContainer.appendChild(videoDiv);
            }
            modalBody.appendChild(videosContainer);
        }

        modal.style.display = 'flex';

        setTimeout(() => {
            modalBody.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }, 0);
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
    if (opciones[index].videos) {
        const videosContainer = document.createElement('div');
        videosContainer.className = 'videosContainer';
        for (let video = 0; video < opciones[index].videos.length; video++) {
            const opcionVideo = document.createElement('div');
            opcionVideo.className = 'opcionVideo';
            const videoIframe = document.createElement('iframe');
            videoIframe.src = opciones[index].videos[video];
            videoIframe.frameborder = '0';
            videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            videoIframe.allowFullscreen = true;
            opcionVideo.appendChild(videoIframe);
            videosContainer.appendChild(opcionVideo);
        }
        opcionBody.appendChild(videosContainer);
    }
}

botonesOpciones.forEach((boton, index) => {
    boton.addEventListener('click', () => mostrarContenido(index));
});

mostrarContenido(0);