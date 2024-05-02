import Swiper, { Navigation, Pagination } from "swiper";

const sarahSlidersNodes = document.querySelectorAll(".slider__body");
sarahSlidersNodes.forEach(slider => {
  if (slider) {
    const sarahSlider = new Swiper(slider, {
      modules: [Navigation, Pagination],
      wrapperClass: "slider__wrapper",
      slideClass: "slider__slide",
      spaceBetween: 30,
      speed: 900,
      loop: true,
      navigation: {
        prevEl: ".slider__prev",
        nextEl: ".slider__next",
      },

      pagination: {
        el: ".pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: false,
        },
        576: {
          slidesPerView: 1.8,
          spaceBetween: 20,
          centeredSlides: false,
        },
        920: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: "auto",
          spaceBetween: 30,
          centeredSlides: true,
        },
      },
    });
  }
});
