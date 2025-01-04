const verContainer = document.getElementById('verContainer');

const ver = [
    {
        link: "#",
        titulo: "Vivos en instagram",
        texto: "Invitamos a destacados profesionales para conversar sobre temas relevantes relacionados con el cáncer. Participá en tiempo real y realizá tus preguntas.",
        img: "Vivos-en-instagram",
    },
    {
        link: "#",
        titulo: "Charlas y talleres",
        texto: "Unite a nuestra comunidad en YouTube, allí encontrarás charlas, talleres y actividades exclusivas con nuestros destacados profesionales.",
        img: "Charlas-y-talleres",
    },
];

ver.forEach((item) => {
    verContainer.innerHTML += `
        <div class="verItem columnAlignCenter bg-gris">
            <img src="/content/img/charlasProfesionales/${item.img}.png" alt="${item.titulo}" class="w-100" />
            <div class="column">
                <h2>${item.titulo}</h2>
                <p>${item.texto}</p>
            </div>
            <a href=${item.link} class="primaryButton">VER</a>
        </div>
        `;
});