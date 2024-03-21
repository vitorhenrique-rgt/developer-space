const burgerMenu  = document.querySelector('#burger_menu');
const aside = document.querySelector('aside')

burgerMenu.addEventListener('click', () => {
  aside.classList.toggle("none");
})