import Swiper from '../../vendor/swiper';

function initSliders() {
  const heroSlider = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    /* autoplay: {
      delay: 3000,
    }, */
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });

  const programsSlider = new Swiper('.programs__slider', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 2.13,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
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

  const newsSlider = new Swiper('.news__slider', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: false,
    slidesPerView: 'auto',
    spaceBetween: 32,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 20,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 'auto',
        grid: {
          rows: 1,
          fill: 'row',
        },
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.news__slider-next',
      prevEl: '.news__slider-prev',
    },
    pagination: {
      el: '.news__slider-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: false,
    slidesPerView: 2,
    spaceBetween: 32,
    breakpoints: {
      0: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 1.28,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
    scrollbar: {
      el: '.reviews__slider-scrollbar',
    },
  });
}

export default initSliders;
