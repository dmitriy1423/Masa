import Swiper from '../../vendor/swiper';

function initSliders() {
  const heroSlider = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    allowTouchMouse: false,
    /* autoplay: {
      delay: 3000,
    }, */
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });

  const programsSlider = new Swiper('.programs__slider', {
    direction: 'horizontal',
    loop: false,
    allowTouchMouse: false,
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
      0: {
        allowTouchMouse: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMouse: false,
        slidesPerView: 2.13,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.programs__slider-next',
      prevEl: '.programs__slider-prev',
    },
    scrollbar: {
      el: '.programs__slider-scrollbar',
    },
  });
}

export default initSliders;
