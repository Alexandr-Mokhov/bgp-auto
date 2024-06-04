const body = document.querySelector('.body');
const header = body.querySelector('.header');
const logoContainer = header.querySelector('.header__logo-container');
const addressContainer = header.querySelector('.header__address-container')
const navigation = body.querySelector('.navigation');
const menuButton = navigation.querySelector('.navigation__button-menu');
const navigationContainer = navigation.querySelector('.navigation__container');
const navigationOverlay = navigation.querySelector('.navigation__overlay');
const linksContainer = navigation.querySelector('.navigation__links');
const navigationLinksList = navigation.querySelectorAll('.navigation__link');

function handleMenu() {
  menuButton.classList.toggle('navigation__button-menu_close');
  navigationContainer.classList.toggle('navigation__container_hide');
  navigationOverlay.classList.toggle('navigation__overlay_hide');
}

function disactiveLink() {
  navigationLinksList.forEach(link => link.classList.remove('navigation__link_active'));
}
function paintingLinks(evt) {
  disactiveLink();
  evt.target.classList.add('navigation__link_active');
  
  const windowWidth = window.innerWidth;
  if (windowWidth < 850) {
    handleMenu();
  }
}

menuButton.addEventListener('click', handleMenu);
navigationOverlay.addEventListener('click', handleMenu);
linksContainer.addEventListener('click', paintingLinks);
logoContainer.addEventListener('click', disactiveLink);
addressContainer.addEventListener('click', disactiveLink);
