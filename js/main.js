
window.onload = function(){
  animateLoad()
}


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

function animateLoad(){

  const heading = document.querySelector('.header h1')
  const text = document.querySelectorAll('.header p')
  const bgImg = document.querySelector('.bg img')
  const cover = document.querySelector('.bgCover')
  const loader = document.querySelector('.loader')
  const initAnimations = {
    duration:500,
    easing:'linear',

  }
  const loadTL = anime.timeline(initAnimations)

  loadTL
  .add({
    targets:loader,
    // translateX:['0','100%'],
    opacity:[1,0],
    duration:1000,
    delay:1000
  })
    .add({
    targets:loader,
    translateX:['0','100%'],
  })
  .add({
    targets:cover,
    translateY:['0%','-100%'],
    duration:300
  })
  .add({
    targets:bgImg,
    scale:['110%','100%'],
    duration:1000,
    easing: 'linear'
  })
  .add({
    targets: [heading,text],
    delay:100,
    opacity:[0,1],
    translateY:['10px','0px']
  })

 
}



