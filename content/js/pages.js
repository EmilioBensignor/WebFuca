const modalConfigs = {
  aulasAbiertas: {
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
        <form>
          <div>
            <label for="nombre">Nombre</label>
            <input id="nombre" placeholder="Ingrese su nombre">
          </div>
          <div>
            <label for="mail">Correo electrónico</label>
            <input id="mail" placeholder="Ingrese su correo electrónico">
          </div>
          <div>
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" placeholder="Escriba su mensaje..."></textarea>
          </div>
          <button class="btnActionModal">${config.buttonText}</button>
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

  return modal;
}