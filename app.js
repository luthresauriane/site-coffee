const mmenuOpen = document.getElementById('menu-open').addEventListener('click', ()=>{
    document.body.classList.toggle('show-menu');
});

const mmenuClose = document.getElementById('menu-close').addEventListener('click', ()=>{
    document.body.classList.toggle('show-menu');
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink =>{
    navLink.addEventListener("click", ()=>{
    document.body.classList.toggle('show-menu');
    })
});


const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});