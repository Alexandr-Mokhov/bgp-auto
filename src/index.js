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
const linkPrices = navigation.querySelector('.navigation__link_prices');
const servicesContainer = body.querySelector('.services__grid');
const buttonUp = body.querySelector('.button-up');
const sectionList = body.getElementsByTagName('section');
const heightHeader = 93;
const footerCopywritingDate = body.querySelector('.footer__copywriting_date');

footerCopywritingDate.textContent += new Date().getFullYear();

function handleMenu() {
  menuButton.classList.toggle('navigation__button-menu_close');
  navigationContainer.classList.toggle('navigation__container_is-hidden');
  navigationOverlay.classList.toggle('navigation__overlay_is-hidden');
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

function handleClickServices(evt) {
  if (evt.target !== servicesContainer) {
    disactiveLink();
    linkPrices.classList.add('navigation__link_active');
  }
}

function handleClickUp() {
  disactiveLink();
}

function debounce(func, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), delay);
  }
}

function checkScroll() {
  const scrollY = window.scrollY;
  const windowWidth = window.innerHeight;

  if (scrollY < windowWidth - heightHeader) {
    buttonUp.classList.add('button-up_is-hidden');
  } else {
    buttonUp.classList.remove('button-up_is-hidden');
  }

  paintingLinkScrolling(scrollY);
}

function paintingLinkScrolling(scroll) {
  for (let section in sectionList) {
    if (checkBlockVisibility(scroll, section)) {
      navigationLinksList.forEach(link => {
        if (link.attributes.href.value.replace('#', '') === sectionList[section].id) {
          disactiveLink();
          link.classList.add('navigation__link_active');
        }
      })
    }
  }
}

function checkBlockVisibility(scroll, section) {
  const topSpace = 200;
  return scroll > sectionList[section].offsetTop - topSpace &&
    scroll < sectionList[section].clientHeight + sectionList[section].offsetTop - topSpace;
}

menuButton.addEventListener('click', handleMenu);
navigationOverlay.addEventListener('click', handleMenu);
linksContainer.addEventListener('click', paintingLinks);
logoContainer.addEventListener('click', disactiveLink);
addressContainer.addEventListener('click', disactiveLink);
servicesContainer.addEventListener('click', handleClickServices);
buttonUp.addEventListener('click', handleClickUp);
window.addEventListener('scroll', debounce(checkScroll, 100));
