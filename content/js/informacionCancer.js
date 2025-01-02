const proyectos = document.getElementById('proyectos');

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

for (let tipo = 0; tipo < tiposCancer.length; tipo++) {
    proyectos.innerHTML += `
        <button class="proyecto column">
            <img src="/content/img/informacionCancer/tiposCancer/${tiposCancer[tipo].img}.svg" alt="${tiposCancer[tipo].nombre}">
            <h3>${tiposCancer[tipo].nombre}</h3>
        </button>
    `;
}