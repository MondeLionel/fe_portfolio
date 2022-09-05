const options = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    900: {
      slidesPerView:3,
      spaceBetween:30
    },
    600: {
      slidesPerView:2,
      spaceBetween:20
    }
  }
}


const workSwiper = new Swiper('.corporate', options);
const projectSwiper = new Swiper('.projects', options);
const expSwiper = new Swiper('.experiments', options);

