const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const toTop = document.querySelector('.to-top');
// TO TOP 
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  document.body.classList.toggle('menu-open');

  // Animate burger to cross
  burger.classList.toggle('open');
});

const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

next.addEventListener('click', () => {
  const slides = slider.children.length;
  if (currentIndex < slides - 1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
