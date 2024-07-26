import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiperCars = new Swiper(".swiperCars", {
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    910: {
      slidesPerView: 1,
    },
  },
});

const swiperPlaces = new Swiper(".swiperPlaces", {
  spaceBetween: 10,
  loop: true,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    910: {
      slidesPerView: 3,
    },
  },
});
