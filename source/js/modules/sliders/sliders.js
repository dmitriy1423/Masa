import Swiper from '../../vendor/swiper';

function initSliders() {
  const heroSlider = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
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
        allowTouchMove: true,
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
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
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

  const news = document.querySelector('.news__slider');
  const newsSlides = Array.from(document.querySelectorAll('.news-card'));
  const mobileWidth = window.matchMedia('(max-width: 767px)');


  function mobileSizeNewsSlides() {
    if (mobileWidth.matches && news.dataset.mobile === 'false') {
      const firstSlideBelowIndex = Math.ceil(newsSlides.length / 2);
      for (let i = 0; i < firstSlideBelowIndex; i++) {
        newsSlides[i].style.height = '330px';
      }
      for (let i = firstSlideBelowIndex; i < newsSlides.length; i++) {
        newsSlides[i].style.height = '240px';
      }
      news.dataset.mobile = 'true';
    }

    if (!mobileWidth.matches) {
      news.dataset.mobile = 'false';
      for (let i = 0; i < newsSlides.length; i++) {
        newsSlides[i].style.height = 'auto';
      }
    }
  }

  mobileSizeNewsSlides();
  window.addEventListener('resize', mobileSizeNewsSlides);

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
        allowTouchMove: true,
        slidesPerView: 1.28,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
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
