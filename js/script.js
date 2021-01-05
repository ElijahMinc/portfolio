// menu-bar

// const showMenu = (toggleId, navId) => {
//    const toggle = document.getElementById(toggleId),
//       nav = document.getElementById(navId)


//    if (toggle && nav) {
//       nav.addEventListener('click', () => {
//          nav.classList.toggle('show-menu')
//       })
//    }
// }
// showMenu('nav-toggle', 'nav-menu')
function showMenu() {
   const toggle = document.getElementById('nav-toggle');
   const nav = document.getElementById('nav-menu');

   toggle.addEventListener('click', function () {
      nav.classList.toggle('show-menu')
   })
}
showMenu()

//remove menu mobile

const navLink = document.getElementsByClassName('nav__link')


for (let index = 0; index < navLink.length; index++) {
   const link = navLink[index];

   link.addEventListener('click', linkAction)

}
function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}


// scroll section active link

// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//    const scrollY = window.pageYOffset

//    sections.forEach(current => {

//       const sectionHeight = current.offsetHeight
//       const sectionTop = current.offsetTop - 50

//       let sectionId = current.getAttribute('id')
//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//          document.querySelector('.nav-menu a[href*=' + sectionId + ']'.classList.add('active-link'))
//       } else {
//          document.querySelector('.nav-menu a[href*=' + sectionId + ']'.classList.remove('active-link'))
//       }
//    })
// }
// window.addEventListener('scroll', scrollActive)


// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', function () {

//    const scrollY = window.pageYOffset;

//    for (let i = 0; i < sections.length; i++) {

//       const section = sections[i];
//       const sectionHeight = section.offsetHeight;
//       const sectionTop = section.offsetTop - 50;

//       let sectionId = section.getAttribute('id')

//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//          var hrefAdd = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
//          hrefAdd.classList.add('active-link')
//       } else {
//          var hrefRem = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
//          hrefRem.classList.remove('active-link')
//       }
//    }
// })

const sections = document.querySelectorAll('section[id]')

function activeLink() {
   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight; // высота всей секции . window.innerHeight // высота окна
      const sectionTop = current.offsetTop - 50;

      const sectionId = current.getAttribute('id');

      if (pageYOffset > sectionTop && pageYOffset <= sectionTop + sectionHeight) {
         const activeAdd = document.querySelector('.nav-list a[href*=' + sectionId + ']')

         activeAdd.classList.add('active-link')
      } else {
         const activeBlock = document.querySelector('.nav-list a[href*=' + sectionId + ']')

         activeBlock.classList.remove('active-link')
      }
      // console.log('Высота секции' + sectionHeight)
      // console.log('Расстояние сверху секции от родительского элемента' + sectionTop)
      // console.log('Сколько прокручено пикселей' + pageYOffset)
   })

}
window.addEventListener('scroll', activeLink)



// change background header 

function scrollHeader() {
   const header = document.getElementById('header')
   if (scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)

// show background header 

function scrollTop() {
   const scrollTop = document.getElementById('scroll-top')
   if (scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');

}

window.addEventListener('scroll', scrollTop)

// MIXITUP FILTER PORTFOLIO

const mixer = mixitup('.portfolio__container', {
   selectors: {
      target: '.portfolio__content '
   },
   animation: {
      duration: 400
   }
});

// LINK ACTIVE PORTFOLIO

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
   linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
   this.classList.add('active-portfolio')
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

//SWIPER
var mySwiper = new Swiper('.testimonial__container', {
   spaceBetween: 16,
   loop: true,
   grabCursor: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      640: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   }
})
// GSAP ANIMATION

gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: .8, y: 25, ease: 'expo.out', stagger: .2 })

