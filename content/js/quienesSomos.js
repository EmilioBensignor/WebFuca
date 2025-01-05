const consejoContainer = document.getElementById('consejoContainer');

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