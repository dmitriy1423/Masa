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
}

export default initSliders;
