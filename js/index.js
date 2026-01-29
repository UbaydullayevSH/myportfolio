const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const toTop = document.querySelector('.to-top');

const workLinks = document.querySelector('.work__links');


burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  document.body.classList.toggle('menu-open');

  // Animate burger to cross
  burger.classList.toggle('open');
});

// TO TOP 

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})


