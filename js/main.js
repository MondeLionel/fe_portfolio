window.addEventListener('load', function(){
   animateLoad()

})

const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


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

// circularize
// const rtext = document.getElementById("rText");
// const ct = new CircleType(rtext)


// detect scroll
ScrollOut({
  cssProps: {
    viewportY: true,
    visibleY: true
  }
});


function animateLoad(){

  const heading = document.querySelector('.header h1')
  const text = document.querySelectorAll('.header p')
  const bgImg = document.querySelector('.bg img')
  const cover = document.querySelector('.bgCover')
  const loader = document.querySelector('.loader')
  const counter = document.querySelector('.count')
  const ball = document.querySelector('.ball')
  const codes = document.querySelector('.codes')
  const rotatercuff = document.querySelector('.rotateText')

  const initAnimations = {
    duration:500,
    easing:'linear',

  }
  // MSDV - mass, stiffness, damping, velocity
  const elasticEasing = 'spring(1,0.8,0.1,0.1)'
  const loadTL = anime.timeline(initAnimations)

  loadTL
  .add({
    targets: counter,
    innerHTML: [0, 100],
    easing: 'linear',
    round: 10
  })
  .add({
    targets:ball,
    scale:[100,1],
    duration:500
  })
  .add({
    targets:ball,
      keyframes: [
      {translateY: 0},
      {translateY: -40},
      {translateY: 0},
      {translateY: -30},
      {translateY: 0},
      {translateY: -20},
      {translateY: 0},
      {translateY: -10},
      {translateY: 0}
  ],
  duration: 1000,
  easing: 'easeInOutQuad',
  loop: true
  })
  .add({
    targets:loader,
    opacity:[1,0],
    duration:400,
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
    opacity:[1,0]
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
  .add({
    targets: codes,
    delay:100,
    opacity:[0,1],
    translateY:['10px','0px']
  })

 
}



