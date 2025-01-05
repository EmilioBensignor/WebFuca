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
                "Rol de las células NK en la terapia blanco específica en Cáncer de Mama Triple Negativo. Estudio y optimización de la respuesta inmune antitumoral mediada por anticuerpos monoclonales de isotipo IgG1.",
                "<span>Tesis Doctoral Bioq. Estefanía Juliá Facultad Farmacia y Bioquímica UBA.</span>Calificación sobresaliente. Febrero 2020.",
                "<span>Directora:</span> Dra. Estrella Levy."
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
        body: [
            [
                "Ensayo clínico de fase II de una vacuna antitumoral para pacientes con melanoma cutáneo: Resultados clínicos y análisis de la respuesta inmune.",
                "<span>Tesis Doctoral Lic. María Betina Pampena, FCEyN, UBA.</span>Finalizada, a defender. Octubre 2018.",
                "<span>Directora:</span> Dra. Estrella Levy."
            ],
        ],
    },
    {
        anio: "2017",
        body: [
            [
                "<span>Tesis de Doctorado de la Dra. Yamila Sol Rocca, Departamento de Química Biológica de la Facultad de Ciencias Exactas y Naturales de la UBA.</span>",
                "Calificación: sobresaliente. Junio de 2017.",
                "<span>Director:</span> Dr. José Mordoh.",
                "<span>Co Directora:</span> Dra. Estrella M. Levy."
            ],
        ],
    },
    {
        anio: "2016",
        body: [
            [
                "<span>Tesis de doctorado de la Lic. Gabriela Pizzurro obteniendo el título de Doctora en Ciencias Biológicas de la FCEyN de la Universidad de Buenos Aires.</span>",
                "Calificación: sobresaliente. Noviembre 2016.",
                "<span>Director:</span> Dr. José Mordoh.",
                "<span>Co Directora:</span> Dra. Marcela Barrio."
            ],
        ],
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
        body: [
            "Tesis de licenciatura: “Determinación del status mutacional del oncogén BRAF en biopsias líquidas de melanoma cutáneo.",
            "<span>Eduardo Urigüen Zabalgogeazcoa. Grado en Biotecnología. Universidad Francisco de Vitoria, Madrid, España.</span> Calificación: sobresaliente.",
            "<span>Directora:</span> Dra. Mariana Aris.",
        ],
    },
    {
        anio: "2015",
        body: [
            "Estudio del status mutacional del oncogén BRAF en pacientes con melanoma cutáneo en diferentes estadíos y su relación con variables clínico-patológicas.",
            "<span>Maestría en Biología Molecular Médica (UBA), Ing. Michelle Yepez Crow.</span> Calificación: sobresaliente.",
            "<span>Director:</span> Dr. José Mordoh.",
            "<span>Co Directora:</span> Dra. Estrella M. Levy.",
        ],
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
        body: [
            "Front Pharmacol. 11;11:612573. doi: 10.3389/fphar.2020.612573. Ruiz MS, Sánchez MB, Bonecker S, Furtado C, Koile D, Yankilevich P, Cranco S, Custidiano MDR, Freitas J, Moiraghi B, Pérez MA, Pavlovsky C, Varela AI, Ventriglia V, Sánchez Ávalos JC, Larripa I, Zalcberg I, Mordoh J, Valent P, Bianchini M. miRNome profiling of LSC-enriched CD34+CD38-CD26+ fraction in Ph+ CML-CP samples from Argentinean patients: a potential new pharmacogenomic tool.",
            "2021 Blood Adv. doi: 10.1182/bloodadvances.2020003235. Pavlovsky C, Abello Polo V, Pagnano KBB, Varela AI, Agudelo Lopez C, Bianchini M, Boquimpani C, Centrone RT, Conchon M, Delgado N, Funke VAM, Giere IA, Pinto IL, Meillon-Garcia L, Moiraghi B, Navarro JR, Pilleux L, Prado AI, Undurraga MS, Cortes J. Treatment free remission in patients with chronic myeloid leukemia: recommendations of LALNET expert panel.",
            "Clin Chem Lab Med. 2021 Jun 23;59(12):e449-e453. doi: 10.1515/cclm-2020-1482. Print 2021 Nov 25. Development of an inverse-PCR approach for characterization of the major BCR-ABL1 breakpoint sequences on genomic DNA: proof of concept. Gutiérrez LG, Abelleyro MM, Ruiz MS, Anchordoqui MS, Freitas J, Bianchini M, De Brasi CD, Larripa IB.",
            "The Breast 60 (2021). 15e25. DOI:<a href='https://www.thebreastonline.com/article/S0960-9776(21)00437-9/fulltext' target='_blank'>https://doi.org/10.1016/j.breast.2021.08.007</a>. Pablo Mandó, Sergio G. Rivero, Manglio M. Rizzo, Marina Pinkasz, Estrella M. Levy. “Targeting ADCC: A different approach to HER2 breast cancer in the immunotherapy era”. Review article."
        ],
    },
    {
        anio: "2020",
        body: [
            "Evaluation of T-Cell Responses Against Shared Melanoma Associated Antigens and Predicted Neoantigens in Cutaneous Melanoma Patients Treated With the CSF-470 Allogeneic Cell Vaccine Plus BCG and GM-CSF. Podaza E, Carri I, Aris M, von Euw E, Bravo AI, Blanco P, Ortiz Wilczyñski JM, Koile D, Yankilevich P, Nielsen M, Mordoh J and Barrio MM (2020) Front. Immunol. 11:1147. doi: 10.3389/fimmu.2020.01147",
            "Clinical Chemistry and Laboratory Medicine Programme for Harmonization to the International Scale in Latin America for BCR-ABL1 quantification in CML patients: findings and recommendations. Ruiz MS, Sánchez MB, Vera Contreras YM, Agrielo E, Alonso M, Altuna ME, Anchordoqui MS, Asinari M, Bonetto ME, Camargo M, Giere I, González J, Granda Alacote AC, Guerra J, Gutiérrez M, Maldonado C, Makiya R, Manrique G, Monaco ME, Rozo JC, Santamaría C, Seravalle A, Zea O, Zubillaga MN, Mordoh J, Larripa I, Bianchini M. Clin Chem Lab Med. (2019) doi: 10.1515/cclm-2019-1283.",
            "Epigenetic inhibitors eliminate senescent melanoma BRAFV600E cells that survive long‑term BRAF inhibition. Madorsky Rowdo FP, Barón A, Gallagher SJ, Hersey P, Emran AA, Von Euw EM, Barrio MM, Mordoh J. Int J Oncol. 2020 Jun;56(6):1429-1441. doi: 10.3892/ijo.2020.5031. Epub 2020 Mar 30. PMID: 32236593",
            "Evaluation of T-Cell Responses Against Shared Melanoma Associated Antigens and Predicted Neoantigens in Cutaneous Melanoma Patients Treated With the CSF-470 Allogeneic Cell Vaccine Plus BCG and GM-CSF. Podaza E, Carri I, Aris M, von Euw E, Bravo AI, Blanco P, Ortiz Wilczyñski JM, Koile D, Yankilevich P, Nielsen M, Mordoh J and Barrio MM (2020) Front. Immunol. 11:1147. doi: 10.3389/fimmu.2020.01147",
            "Cetuximab and IL-15 Promote NK and Dendritic Cell Activation In Vitro in Triple Negative Breast Cancer. Juliá, E.P.; Mordoh, J.; Levy, E.M.  Cells 2020, 9(7), 1573; https://doi.org/10.3390/cells9071573 (registering DOI) Special Issue “Dendritic Cells in Immunity and Inflammation”. ",
        ],
    },
    {
        anio: "2019",
        body: [
            "<span>“Immunization With the CSF-470 Vaccine Plus BCG and rhGM-CSF Induced in a Cutaneous Melanoma Patient a TCRβ Repertoire Found at Vaccination Site and Tumor Infiltrating Lymphocytes That Persisted in Blood”.</span> Aris M, Bravo AI, Garcia Alvarez HM, Carri I, Podaza E, Blanco PA, Rotondaro C, Bentivegna S, Nielsen M, Barrio MM and Mordoh J. (2019) Front. Immunol. 10:2213. doi: 10.3389/fimmu.2019.02213",
            "“Peripheral changes in immune cell populations and soluble mediators after anti-PD-1 therapy in non-small cell lung cancer and renal cell carcinoma patients” en Cancer Immunology Immunotherapy. <a href='https://link.springer.com/article/10.1007/s00262-019-02391-z' target='_blank'>https://doi.org/10.1007/s00262-019-02391-z</a>",
        ],
    },
    {
        anio: "2018",
        body: [
            "Dissecting the immune stimulation promoted by CSF-470 vaccine plus adjuvants in cutaneous melanoma patients: long-term antitumor immunity and short term release of acute inflammatory reactants. Pampena MB; Cartar H; Cueto G; Levy EM, Blanco PA, Barrio MM and Mordoh J. (Frontiers in Immunology, l. 9:2531. doi: 10.3389/fimmu.2018.02531).",
            "Aris M, Bravo AI, Pampena MB, Blanco PA, Carri I, Koile D, Yankilevich P, Levy EM, Barrio MM and Mordoh J (2018) Changes in the TCRβ Repertoire and Tumor Immune Signature From a Cutaneous Melanoma Patient Immunized With the CSF-470 Vaccine: A Case Report. Front. Immunol. 9:955. doi: 10.3389/fimmu.2018.00955",
            "<span>Avelumab, an IgG1 anti-PD-L1Immune Checkpoint Inhibitor, TriggersNK Cell-Mediated Cytotoxicity andCytokine Production Against TripleNegative Breast Cancer Cells.</span> Juliá EP, Amante A, Pampena MB,Mordoh J and Levy EM (2018). Front. Immunol. 9:2140.doi: 10.3389/fimmu.2018.02140.",
            "<span>High neutrophil to lymphocyte ratio and decreased CD69+NK cells represents a phenotype of high risk in early stage breast cancer patients.</span> Mandó Pablo, Rizzo Manglio, Roberti María Paula, Juliá Estefanía Paula; Pampena María Betina; Pérez de la Puente Constanza Loza Martín, Ponce Carolina, Nadal Jorge, Coló Federico; Mordoh José, and Levy Estrella Mariel. OncoTargets and Therapy 2018: 11 2901-2910.",
            "Oncotarget Vol. 9, (No. 29): 20255-20264 María Sol Ruiz, María Belén Sanchez, Leandro Gutiérrez, Daniel Koile, Patricio Yankilevich, Celeste Mosqueira, Santiago Cranco, María del Rosario Custidiano, Josefina Freitas, Cecilia Foncuberta, Beatriz Moiraghi, Carolina Pavlovsky, Mariel Ana Pérez, Verónica Ventriglia, Julio Sanchez Ávalos, José Mordoh, Irene Larripa and Michele Bianchini. Evaluation of the primitive fraction by functional in vitro assays at the RNA and DNA level represents a novel tool for complementing molecular monitoring in chronic myeloid leukemia.",
            "MEDICINA (Buenos Aires);77(1):61-72. Larripa I, Ruiz MS, Gutiérrez M, Bianchini M. Recomendaciones metodológicas para el monitoreo molecular de pacientes con Leucemia Mieloide Crónica por PCR cuantitativa en tiempo real del BCR-ABL1.",
        ],
    },
    {
        anio: "2017",
        body: [
            "Metallothionein 1G promotes the differentiation of HT-29 human colorectal cancer cells. Arriaga JM, Bravo AI, Mordoh J, Bianchini M.Oncol Rep. 2017 May;37(5):2633-2651. doi: 10.3892/or.2017.5547. Epub 2017 Apr 3.",
            "In vitro long-term treatment with MAPK inhibitors induces melanoma cells with resistance plasticity to inhibitors while retaining sensitivity to CD8 T cells. MadorskyRowdo FP, Barón A, von Euw EM, Mordoh J. Oncol Rep. 2017 Mar;37(3):1367-1378. doi: 10.3892/or.2017.5363. Epub 2017 Jan 13.",
            "Phase II Study of Adjuvant Immunotherapy with the CSF-470 Vaccine Plus Bacillus Calmette-Guerin Plus Recombinant Human Granulocyte Macrophage-Colony Stimulating Factor vs Medium-Dose Interferon Alpha 2B in Stages IIB, IIC, and III Cutaneous Melanoma Patients: A Single Institution, Randomized Study. Mordoh J y col. Front Immunol. 2017 May 31;8:625).",
            "Immunomodulatory Monoclonal Antibodies in Combined Immunotherapy Trials for Cutaneous Melanoma. Aris M, Mordoh J, Barrio MM. Front Immunol. 2017 Aug 25;8:1024).",
            "<span>Early Events of the Reaction Elicited by CSF-470 Melanoma Vaccine Plus Adjuvants: An In Vitro Analysis of Immune Recruitment and Cytokine Release.</span> Pampena MB, Barrio MM, Juliá EP, Blanco PA, von Euw EM, Mordoh J, Levy EM. Front Immunol. 2017 Oct 23;8:1342. doi: 10.3389/fimmu.2017.01342.",
        ],
    },
    {
        anio: "2016",
        body: [
            "Oncology Reports May-2017 Volume 37 Issue 5. doi.org/10.3892/or.2017.5547 Arriaga JM, Bravo AI, Mordoh J, Bianchini M. Metallothionein 1G promotes differentiation of HT-29 human colorectal cancer cells.",
            "Leukemia; 30(11):2258-2260. Ruiz MS, Medina M, Tapia I, Mordoh J, Cross NCP, Larripa I, Bianchini M. Standardization of molecular monitoring for chronic myeloid leukemia in Latin America using locally produced secondary cellular calibrators.",
            "<span>“Phenotypic and Functional Dysregulated Blood NK Cells in Colorectal Cancer Patients Can Be Activated by Cetuximab Plus IL-2 or IL-15”. Rocca YS, Roberti MP, Juliá EP, Pampena MB, Bruno L, Rivero S, Huertas E, Sánchez Loria F, Pairola A, Caignard A, Mordoh J, Levy EM. Front Immunol. 2016 Oct 10;7:413.</span>",
        ],
    },
    {
        anio: "2015",
        body: [
            "Combining immunotherapy with oncogene-targeted therapy: a new road for melanoma treatment. Aris M, Barrio MM. Front Immunol. 2015 Feb 9;6:46. doi: 10.3389/fimmu.2015.00046. eCollection 2015.",
            "Overexpression of CD85j in TNBC patients inhibits Cetuximab-mediated NK-cell ADCC but can be restored with CD85j functional blockade.Roberti MP, Juliá EP, Rocca YS, Amat M, Bravo AI, Loza J, Coló F, Loza CM, Fabiano V, Maino M, Podhorzer A, Fainboim L, Barrio MM, Mordoh J, Levy EM. Eur J Immunol. 2015 May;45(5):1560-9. doi: 10.1002/eji.201445353. Epub 2015 Apr 7.",
            "<a href='https://pubmed.ncbi.nlm.nih.gov/26197849/' target='_blank'>-Cytokine-enhanced maturation and migration to the lymph nodes of a human dying melanoma cell-loaded dendritic cell vaccine.</a> Pizzurro GA, Tapia IJ, Sganga L, Podhajcer OL, Mordoh J, Barrio MM. Cancer Immunol Immunother 2015 Nov;64(11):1393-406. doi: 10.1007/s00262-015-1743-z.",
            "Editorial: “Cancer Immunotherapy: Lights and Shadows”.  Barrio MM, Levy EM, Mordoh J. Front Immunol. 2015 Jul 7;6:350. doi: 10.3389/fimmu.2015.00350. eCollection 2015.",
            "<a href='https://pubmed.ncbi.nlm.nih.gov/25870600/' target='_blank'>Inoculation site from a cutaneous melanoma patient treated with an allogeneic therapeutic vaccine: a case report.</a>Aris M, Bravo AI, Barrio MM, Mordoh J. Front Immunol. 2015 Mar 30;6:144. doi: 10.3389/fimmu.2015.00144. eCollection 2015.",
            "<a href='https://pubmed.ncbi.nlm.nih.gov/25784913/' target='_blank'>Dendritic cell-based vaccine efficacy: aiming for hot spots.</a> Pizzurro GA, Barrio MM. Front Immunol. 2015 Mar 3;6:91. doi: 10.3389/fimmu.2015.00091. eCollection 2015. Review.",
            "<a href='https://pubmed.ncbi.nlm.nih.gov/25709607/' target='_blank'>Combining immunotherapy with oncogene-targeted therapy: a new road for melanoma treatment.</a> Aris M, Barrio MM. Front Immunol. 2015 Feb 9;6:46. doi: 10.3389/fimmu.2015.00046. eCollection 2015.",
            "<a href='https://pubmed.ncbi.nlm.nih.gov/25674087/' target='_blank'>Natural killer cells as helper cells in dendritic cell cancer vaccines.</a> Pampena MB, Levy EM. Front Immunol. 2015 Jan 28;6:13. doi: 10.3389/fimmu.2015.00013. eCollection 2015. Review.",
            "Chemokine receptor-specific antibodies in cancer immunotherapy: achievements and challenges. Vela M, Aris M, Llorente M, Garcia-Sanz JA, Kremer L. Front Immunol. 2015 Jan 30;6:12. doi: 10.3389/fimmu.2015.00012.",
        ],
    },
    {
        anio: "2014",
        body: [
            "Mol Cancer Ther;13(5):1369-81. doi: 10.1158/1535-7163.MCT-13-0944 Arriaga JM, Greco A, Mordoh J, Bianchini M. Metallothionein 1G and zinc sensitize human colorectal cancer cells to chemotherapy.",
        ],
    },
    {
        anio: "2013",
        body: [
            "<span>Development of a novel methodology for cryopreservation of melanoma cells applied to CSF470 therapeutic vaccine</span>  Ivana J. Tapia, Mariana Aris, Juan Martín Arriaga, Paula A. Blanco, Florencia  Mazzobre, Julio Vega, José Mordoh and  María Marcela Barrio. Cryobiology. 2013 Oct;67(2):163-9. doi: 10.1016/j.cryobiol.2013.06.007.",
            "<span>A word of caution: do not wake sleeping dogs; micrometastases of melanoma suddenly grew after progesterone treatment.</span> Mordoh J, Tapia IJ, Barrio MM. BMC Cancer. 2013 Mar 20;13:132. doi: 10.1186/1471-2407-13-132. ",
            "<span>Early detection and quantification of mutations in the tyrosine kinase domain of chimerical BCR-ABL1 gene combining high-resolution melting analysis and mutant-allele specific quantitative PCR.</span> Leukemia and Lymphoma 2013; 54(3):598-606 Ferri, C., Bianchini, M., Icardi, G., Belli, C., Bengió, R., Larripa, I.",
            "<span>CUTANEOUS MELANOMA: MOLECULAR BIOLOGY, RISK FACTORS AND TREATMENT OPTIONS.</span> Mariana Aris, Ivana Jaqueline Tapia, José Mordoh and María Marcela Barrio. Capítulo de libro “Melanoma: Molecular Biology, Risk Factors and Treatment Options, Editor: Alexander C. Jones. Nova Publishers, 2013. https://www.novapublishers.com/catalog/product_info.php?products_id=39784.",
            "<span>Una vacuna terapéutica para el melanoma cutáneo en su fase final.</span> Mariana Aris, Marcela Barrio y José Mordoh. Newsletter REDIO 2013, enero - febrero; 9(1-2). sección “News Report”.",
            "<span>Vacuna terapéutica CSF-470 para melanoma cutáneo.</span> M. Aris; M. M. Barrio; J. Mordoh. Act Terap Dermatol 2013; 36: 40.",
        ],
    },
    {
        anio: "2012",
        body: [
            "<span>Metallothionein expression in colorectal cancer: relevance of different isoforms for tumor progression and patient survival.</span> Arriaga JM, Levy EM, Bravo AI, Bayo SM, Amat M, Aris M, Hannois A, Bruno L, Roberti MP, Loria FS, Pairola A, Huertas E, Mordoh J, Bianchini M. Hum Pathol. 2012 Feb;43(2):197-208.",
            "<span>Combined metallothioneins and p53 proteins expression as a prognostic marker in patients with Dukes' stage B and C colorectal cancer.</span> J.M. Arriaga, I.A. Bravo, L. Bruno, S. Morales Bayo, A. Hannois, F. Sanchez Loria, F. Pairola, E. Huertas, M.P. Roberti, Y.S. Rocca, M. Aris, M.M. Barrio, S. Baffa Trasci, E.M. Levy, J. Mordoh, M. Bianchini. Hum Pathol. 2012 , Oct;43(10):1695-703.",
            "<span>Lessons from cancer immunoediting in Cutaneous Melanoma.</span> Mariana Aris, María Marcela Barrio and José Mordoh, Clin Dev Immunol. 2012;2012:192719. Epub 2012 Aug 14. ",
            "<span>High lipid content of irradiated human melanoma cells does not affect cytokine-matured dendritic cell function.</span> Pizzurro Gabriela A, Madorsky Rowdo Florencia P, Pujol-Lereis Luciana M, Quesada-Allué Luis A, Copati Andrea M, Roberti María P, Teillaud Jean-Luc, Levy Estrella M, Barrio María M, Mordoh José. Cancer Immunol Immunother. 2012 Jun 22. [Epub ahead of print]",
            "<span>Human macrophages and dendritic cells can equally present MART-1 antigen to CD8+ T cells after phagocytosis of gamma-irradiated melanoma cells.</span> María Marcela Barrio, Riad Abes, Marina Colombo, Gabriela Pizzurro, Charlotte Boix, María Paula Roberti, Emmanuelle Gélizé, Mariana Rodriguez-Zubieta, José Mordoh, Jean-Luc Teillaud. PLoS One. 2012;7(7):e40311. Epub 2012 Jul 2.",
            "<span>Protein expression changes during human triple negative breast cancer cell line progression to lymph node metastasis in a xenografted model in nude mice.</span> María Paula Roberti, Juan Martín Arriaga, Michele Bianchini,  Héctor Ramiro Quintá, Alicia Inés Bravo, Estrella Mariel Levy, José Mordoh, María Marcela Barrio. Cancer Biol Ther. 2012 Sep 1;13(11):1123-40. Epub 2012 Jul 24.",
            "<span>Altered phenotype in peripheral blood and tumor-associated NK cells from colorectal cancer patients.</span> Rocca YS, Roberti MP, Arriaga JM, Amat M, Bruno L, Pampena MB, Huertas E, Sanchez Loria F, Pairola A, Bianchini M, Mordoh J, Levy EM. Innate Immun. 2012 Jul 10. [Epub ahead of print].",
            "<span>IL-2- or IL-15-activated NK cells enhance Cetuximab-mediated activity against triple-negative breast cancer in xenografts and in breast cancer patients.</span> Roberti MP, Rocca YS, Amat M, Pampena MB, Loza J, Coló F, Fabiano V, Loza CM, Arriaga JM, Bianchini M, Barrio MM, Bravo AI, Domenichini E, Chacón R, Mordoh J, Levy EM. Breast Cancer Res Treat. 2012 Oct 14. [Epub ahead of print]",
            "<span>Biological role of NK cells and immunotherapeutic approaches in breast cancer. Roberti, MP; Mordoh J and Levy EM.</span> Frontiers in NK cell Biology (Nov 2012, in press).",
            "<span>MART-1- and gp100-expressing and -non-expressing melanoma cells are equally proliferative in tumors and clonogenic in vitro</span> Aris M, Zubieta MR, Colombo M, Arriaga JM, Bianchini M, Alperovich M, Bravo AI, Barrio MM, Mordoh J. J Invest Dermatol. 2012 Feb;132(2):365-74. doi: 10.1038/jid.2011.312",
        ],
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
        body: [
            {
                titulo: "PREMIO FUNDACIÓN BARÓN 2013. “LAS METALOTIONEÍNAS COMO NUEVOS MARCADORES DE PRONÓSTICO EN CÁNCER COLORRECTAL HUMANO.",
                texto: "Arriaga JM, Bravo AI, Levy EM, Bruno L, Roberti MP, Bianchini M. LVI Reunión de la Sociedad Argentina de Investigación Clínica. Mar del Plata, 16 al 19 de noviembre de 2011. Premio al mejor trabajo en avances en inmunología: Montuori-Gador. Título: “Estrategias inmunológicas en cáncer: Restauración del fenotipo y la funcionalidad de las células NK en cáncer de mama”. Roberti M, Rocca Y, Amat M, Pampera MB, Loza J, Coló F, Fabiano V, Loza C, Nervo A, Arriaga J, Bianchini M, Bravo A, Barrio M, Chacón R, Mordoh J, Levy EM.",
            },
        ],
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