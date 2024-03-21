const burgerMenu  = document.querySelector('#burger_menu');
const nav = document.querySelector('nav')

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle("none");
})