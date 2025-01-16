import { nosAcompanan } from "./nosAcompanan.js";

const acompananCursos = document.getElementById("acompananCursos");

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.swiperAcompananCursos')) {
    const swiperAcompananCursos = new Swiper('.swiperAcompananCursos', {
      slidesPerView: 2,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      spaceBetween: 16,
      breakpoints: {
        480: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
      }
    })
  }
})

// Slider Acompanan
for (let logo = 0; logo < nosAcompanan.length; logo++) {
  acompananCursos.innerHTML += `
    <div class="swiper-slide flexCenter bg-white">
      <a href="${nosAcompanan[logo].link}">
        <img src="/content/img/home/nos-acompanan/${nosAcompanan[logo].img}_blanco.svg" alt="${nosAcompanan[logo].alt}" />
      </a>
    </div>
  `;
}