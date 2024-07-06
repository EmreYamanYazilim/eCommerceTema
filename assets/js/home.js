const swiper = new Swiper('.home-swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const brandSwiper = new Swiper('.nav-brand-swiper', {
  speed: 1400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay: 1000,
    pauseOnMouseEnter: true,
  }
});