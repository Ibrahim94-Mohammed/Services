$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  margin: 0,
  nav: false,
  dots: true,
  mouseDrag: false,
  slideBy: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
})

$(document).ready(function () {
  var carousel = $('.owl-carousel')

  $('#prev').click(function () {
    carousel.trigger('prev.owl.carousel')
  })

  $('#next').click(function () {
    carousel.trigger('next.owl.carousel')
  })
})

const btn1 = document.querySelector('#btn-1')
const icon1 = document.querySelector('.icon-1')
const btn2 = document.querySelector('#btn-2')
const icon2 = document.querySelector('.icon-2')
const btn3 = document.querySelector('#btn-3')
const icon3 = document.querySelector('.icon-3')

// Add hover effect to other buttons

btn1.addEventListener('mouseover', function () {

  icon1.style.backgroundColor = '#ff8813' 
}),
  btn1.addEventListener('mouseout', function () {
    icon1.style.backgroundColor = '#0d6efd' 
  })

btn2.addEventListener('mouseover', function () {

  icon2.style.backgroundColor = '#ff8813' 
}),
  btn2.addEventListener('mouseout', function () {
    icon2.style.backgroundColor = '#0d6efd' 
  })

btn3.addEventListener('mouseover', function () {
  icon3.style.backgroundColor = '#ff8813' 
}),
  btn3.addEventListener('mouseout', function () {
    icon3.style.backgroundColor = '#0d6efd' 
  })
