const contactForm = document.getElementById('contactForm');

function modalExito() {
    const body = document.body;

    const modalHTML = `
        <div class="modalPages">
            <div class="columnAlignCenter">
            <div class="headerPages rowSpaceBetween">
                <p>Hemos recibido tu consulta. Te contactaremos vía correo electrónico.</p>
                <button class="cerrarModal">
                <div class="closeIconModal bgImgContain"></div>
                </button>
            </div>
            <button type="submit" id="btnCerrar" class="btnActionModal">CERRAR</button>
            </div>
        </div>
        `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    const modal = modalContainer.firstElementChild;
    body.appendChild(modal);

    const closeButton = modal.querySelector('.cerrarModal');
    const btnCerrar = modal.querySelector('#btnCerrar');

    const closeModal = () => {
        modal.style.display = 'none';
        modal.remove();
    };

    closeButton.addEventListener('click', closeModal);
    btnCerrar.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    return modal;
}

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = contactForm.querySelector('#nombre');
    const mail = contactForm.querySelector('#mail');
    const mensaje = contactForm.querySelector('#mensaje');

    const nombreError = contactForm.querySelector('#nombreError');
    const mailError = contactForm.querySelector('#mailError');
    const mensajeError = contactForm.querySelector('#mensajeError');

    let isValid = true;

    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre no puede estar vacío';
        nombreError.style.display = 'block';
        nombre.classList.add('error');
        isValid = false;
    } else if (nombre.value.trim().length < 2) {
        nombreError.textContent = 'El nombre debe tener al menos 2 letras';
        nombreError.style.display = 'block';
        nombre.classList.add('error');
        isValid = false;
    } else {
        nombreError.style.display = 'none';
        nombre.classList.remove('error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail.value.trim() === '') {
        mailError.textContent = 'El correo electrónico no puede estar vacío';
        mailError.style.display = 'block';
        mail.classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(mail.value.trim())) {
        mailError.textContent = 'El correo electrónico debe contener un @ y un punto (.)';
        mailError.style.display = 'block';
        mail.classList.add('error');
        isValid = false;
    } else {
        mailError.style.display = 'none';
        mail.classList.remove('error');
    }

    if (mensaje.value.trim() === '') {
        mensajeError.textContent = 'El mensaje no puede estar vacío';
        mensajeError.style.display = 'block';
        mensaje.classList.add('error');
        isValid = false;
    } else if (mensaje.value.trim().length < 10) {
        mensajeError.textContent = 'El mensaje debe tener al menos 10 caracteres';
        mensajeError.style.display = 'block';
        mensaje.classList.add('error');
        isValid = false;
    } else {
        mensajeError.style.display = 'none';
        mensaje.classList.remove('error');
    }

    if (isValid) {
        console.log({
            nombre: nombre.value,
            correo: mail.value,
            mensaje: mensaje.value
        });
        contactForm.reset();
        modalExito();
    }
});