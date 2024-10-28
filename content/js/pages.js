const modalConfigs = {
  aulasAbiertas: {
    modalText: "Dejá tus datos para poder inscribir a tu colegio en Aulas Abiertas.",
    buttonText: "INSCRIBIR A MI COLEGIO"
  },
  bibliotecaBiometica: {
    modalText: "Dejá tus datos para poder inscribir a tu colegio en Aulas Abiertas.",
    buttonText: "INSCRIBIR A MI COLEGIO"
  },
};

function createModal(configKey) {
  const config = modalConfigs[configKey];
  const body = document.body;

  const modalHTML = `
    <div class="modalPages">
      <div class="columnAlignCenter">
        <div class="headerPages rowSpaceBetween">
          <p>${config.modalText}</p>
          <button class="cerrarModal">
            <div class="closeIconModal bgImgContain"></div>
          </button>
        </div>
        <form id="contactForm">
          <div>
            <div>
              <label for="nombre">Nombre</label>
              <input id="nombre" placeholder="Ingrese su nombre">
              <p id="nombreError" class="error-message"></p>
            </div>
            <div>
              <label for="mail">Correo electrónico</label>
              <input id="mail" placeholder="Ingrese su correo electrónico">
              <p id="mailError" class="error-message"></p>
            </div>
          </div>
          <div>
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" placeholder="Escriba su mensaje..."></textarea>
          </div>
          <button type="submit" class="btnActionModal">${config.buttonText}</button>
        </form>
      </div>
    </div>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  const modal = modalContainer.firstElementChild;
  body.appendChild(modal);

  const closeButton = modal.querySelector('.cerrarModal');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.remove();
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.remove();
    }
  });

  setupFormValidation(modal);

  return modal;
}

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

function setupFormValidation(modal) {
  const formModal = modal.querySelector('#contactForm');

  formModal.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = modal.querySelector('#nombre');
    const mail = modal.querySelector('#mail');
    const mensaje = modal.querySelector('#mensaje');

    const nombreError = modal.querySelector('#nombreError');
    const mailError = modal.querySelector('#mailError');

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

      modal.style.display = 'none';
      modal.remove();
      modalExito();
    }
  });
}