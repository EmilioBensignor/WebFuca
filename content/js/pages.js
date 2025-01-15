const modalConfigs = {
  home: {
    modalText: "Dejá tus datos para que nos pongamos en contacto contigo.",
    buttonText: "CONTACTARME"
  },
  aulasAbiertas: {
    modalText: "Dejá tus datos para poder inscribir a tu colegio en Aulas Abiertas.",
    buttonText: "INSCRIBIR A MI COLEGIO"
  },
  solicitarGuia: {
    modalText: "Dejá tus datos para solicitar la guía de actividades para docentes",
    buttonText: "SOLICITAR GUÍA",
  },
  biblioteca: {
    modalText: "Dejá tus datos para poder unirte a nuestra Biblioteca Biomédica.",
    buttonText: "UNIRME A LA BIBLIOTECA"
  },
};

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const modal = this.closest('.modalPages');
      formValidation(modal);
    });
  }
});

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
		<input type="hidden" name="caso" value="${configKey}">
          <div>
            <div>
              <label for="nombre">Nombre</label>
              <input id="nombre" name="nombre" placeholder="Ingrese su nombre">
              <p id="nombreError" class="error-message"></p>
            </div>
            <div>
              <label for="mail">Correo electrónico</label>
              <input id="mail" name="mail" placeholder="Ingrese su correo electrónico">
              <p id="mailError" class="error-message"></p>
            </div>
          </div>
          <div>
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje..."></textarea>
            <p id="mensajeError" class="error-message"></p>
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

  const modalForm = modal.querySelector('#contactForm');
  if (modalForm) {
    modalForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const modal = this.closest('.modalPages');
      formValidation(modal);
    });
  }

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
        <button type="button" id="btnCerrar" class="btnActionModal">CERRAR</button>
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

function formValidation(modal) {
  const contactForm = modal ? modal.querySelector('#contactForm') : document.getElementById('contactForm');

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
    
    if (modal) {
      modal.style.display = 'none';
      modal.remove();
    }
    
    miAjax(modal, contactForm, mostrarResultado);
  }
}

function mostrarResultado(xmlHttp) {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    var cod = xmlHttp.responseText;
    if (cod == "OK") {
      modalExito();
    } else {
      window.alert(cod);
    }
  }
}

function miAjax(modal, form, f) {
  let xmlHttp = new XMLHttpRequest();
  var formData = new FormData(form);
  xmlHttp.open("POST", "/cgi-bin/fcmandarmail.pl", true);
  xmlHttp.send(formData);
  xmlHttp.onreadystatechange = function () { f(xmlHttp); };
}