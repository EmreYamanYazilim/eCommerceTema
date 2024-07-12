const swiperThumbnail = new Swiper(".thumb-sliders", {
  speed        : 400,
  navigation   : {
    nextEl: ".thumb-next",
    prevEl: ".thumb-prev",
  },
  slidesPerView: 4,
  breakpoints  : {
    320 : {
      slidesPerView: 3,
      spaceBetween : 20,
    },
    640 : {
      slidesPerView: 3,
    },
    768 : {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },

});

const swiperBig = new Swiper(".big-slider", {
  speed        : 400,
  spaceBetween : 100,
  navigation   : {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  zoom         : true,
  effect       : "fade",
  fadeEffect   : {
    crossFade: true,
  },
  slidesPerView: 1,
  thumbs       : {
    swiper: swiperThumbnail,
  },
});

$(document).ready(function() {
  $(".thumb-image").click(function() {
    // var index = $(this).parent().attr("data-swiper-slide-index");
    var index = swiperThumbnail.clickedIndex;

    if (index == swiperThumbnail.slides.length - 1) {
      swiperThumbnail.slideTo(0, 500);
    } else {
      swiperThumbnail.slideTo(index, 500)
    }
  });
});