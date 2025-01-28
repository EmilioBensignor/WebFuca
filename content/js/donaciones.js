// Obtener los elementos
const qrModal = document.getElementById('qrModal');
const cerrarQR = document.getElementById('cerrarQR');

codigoQRBtn.addEventListener('click', function () {
  qrModal.style.display = 'flex';
});

cerrarQR.addEventListener('click', function () {
  qrModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === qrModal) {
    qrModal.style.display = 'none';
  }
});
