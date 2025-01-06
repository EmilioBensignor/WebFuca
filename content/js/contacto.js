const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = contactForm.querySelector('#nombre');
    const mail = contactForm.querySelector('#mail');
    const mensaje = contactForm.querySelector('#mensaje');

    const nombreError = contactForm.querySelector('#nombreError');
    const mailError = contactForm.querySelector('#mailError');

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

    if (isValid) {
        console.log({
            nombre: nombre.value,
            correo: mail.value,
            mensaje: mensaje.value
        });
    }

    contactForm.reset();
});