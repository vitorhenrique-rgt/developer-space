const burgerMenu  = document.querySelector('#burger_menu');
const nav = document.querySelector('nav')
const textLogo = document.querySelector('.text-logo')

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle("none");
  if (nav.classList.contains("none")) {
    textLogo.style.display="none"
  }else{
    textLogo.style.display="block"
  }

})