const consejoContainer = document.getElementById('consejoContainer');
const voluntarioContainer = document.getElementById('voluntarioContainer');

const consejo = [
    {
        img: "Dr-Reinaldo-Chacon",
        nombre: "Dr. Reinaldo Chacón",
        rol: "Presidente",
    },
    {
        img: "Dr-Jose-Mordoh",
        nombre: "Dr. José Mordoh",
        rol: "Vicepresidente",
    },
    {
        img: "Dra-Maria-Marcela-Barrio",
        nombre: "Dra. María Marcela Barrio",
        rol: "Secretaria",
    },
    {
        img: "Dr-Julio-Kaplan",
        nombre: "Dr. Julio Kaplan",
        rol: "Pro secretario",
    },
    {
        img: "Dr-Federico-A-Colo",
        nombre: "Dr. Federico A. Coló",
        rol: "Tesorero",
    },
    {
        img: "Cdor-Luis-Balbaryski",
        nombre: "Cdor. Luis Balbaryski",
        rol: "Pro Tesorero",
    },
    {
        img: "Dr-Matas-Chacon",
        nombre: "Dr. Matías Chacón",
        rol: "Vocal Titular",
    },
    {
        img: "Dr-Alberto-Crupnicoff",
        nombre: "Dr. Alberto Crupnicoff",
        rol: "Vocal Titular",
    },
    {
        img: "Dra-Maria-Alejandra-Calvo",
        nombre: "Dra. María Alejandra Calvo",
        rol: "Vocal Titular",
    },
    {
        img: "Sr-Manuel-Arslanian",
        nombre: "Sr. Manuel Arslanian",
        rol: "Vocal Suplente",
    },
    {
        img: "Dra-Ana-Mordoh",
        nombre: "Dra. Ana Mordoh",
        rol: "Vocal Suplente",
    },
];
const voluntarios = [
    {
        img: "voluntarios",
        texto: "Nuestro equipo cuenta con un grupo de voluntarios, quienes con su tiempo, energía y aportes, colaboran en la tarea diaria de la organización."
    },
    {
        img: "espacio-fuca",
        texto: "El servicio permanente de los voluntarios se centra en la atención del “Espacio FUCA” en la recepción del Instituto Alexander Fleming (Crámer 1180, Colegiales, CABA)."
    },
    {
        img: "eventos",
        texto: "Otros voluntarios participan en eventos o bien, proponiendo acciones y alianzas con otras organizaciones o empresas."
    },
];

for (let miembro = 0; miembro < consejo.length; miembro++) {
    consejoContainer.innerHTML += `
        <div class="miembro columnAlignCenter">
            <img src="/content/img/quienesSomos/${consejo[miembro].img}.png" alt="${consejo[miembro].nombre}">
            <div class="columnAlignCenter">
                <p class="text-center">${consejo[miembro].nombre}</p>
                <p class="text-center">${consejo[miembro].rol}</p>
            </div>
        </div>
    `;
}

for (let voluntario = 0; voluntario < voluntarios.length; voluntario++) {
    voluntarioContainer.innerHTML += `
        <div class="voluntario column">
            <img src="/content/img/quienesSomos/${voluntarios[voluntario].img}.svg" alt="${voluntarios[voluntario].img}">
            <p class="text-center">${voluntarios[voluntario].texto}</p>
        </div>
    `;
}