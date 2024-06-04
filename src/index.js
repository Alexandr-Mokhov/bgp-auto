const body = document.querySelector('.body');
const menuButton = body.querySelector('.navigation__button-menu');
const navigationContainer = body.querySelector('.navigation__container');
const navigationOverlay = body.querySelector('.navigation__overlay');

function openMenu() {
  menuButton.classList.toggle('navigation__button-menu_close');
  navigationContainer.classList.toggle('navigation__container_hide');
  navigationOverlay.classList.toggle('navigation__overlay_hide');
}

menuButton.addEventListener('click', openMenu);
navigationOverlay.addEventListener('click', openMenu);
