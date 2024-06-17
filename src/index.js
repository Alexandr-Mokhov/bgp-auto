const body = document.querySelector('.body');
const header = body.querySelector('.header');
const logoContainer = header.querySelector('.header__logo-container');
const addressContainer = header.querySelector('.header__address-container');

const navigation = body.querySelector('.navigation');
const menuButton = navigation.querySelector('.navigation__button-menu');
const navigationContainer = navigation.querySelector('.navigation__container');
const navigationOverlay = navigation.querySelector('.navigation__overlay');
const linksContainer = navigation.querySelector('.navigation__links');
const navigationLinksList = navigation.querySelectorAll('.navigation__link');

const servicesContainer = body.querySelector('.services__grid');
const buttonUp = body.querySelector('.button-up');
const sectionList = body.getElementsByTagName('section');
const heightHeader = 93;
const footerCopywritingDate = body.querySelector('.footer__copywriting_date');

let currentIndex = 0;
const worksSection = body.querySelector('.work');
const workListItems = worksSection.querySelectorAll('.work-list__item');
const workList = worksSection.querySelector('.work-list');
const workButtonPrev = worksSection.querySelector('.work-button_prev');
const workButtonNext = worksSection.querySelector('.work-button_next');

const sectionContacts = body.querySelector('.contacts');
const buttonPhoneIvan = sectionContacts.querySelector('.contacts__connection_ivan');
const buttonPhoneDmitriy = sectionContacts.querySelector('.contacts__connection_dmitriy');
const buttonPhoneAlexei = sectionContacts.querySelector('.contacts__connection_alexei');

const popup = body.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close');
const popupContainer = popup.querySelector('.popup__container');
const popupImage = popup.querySelector('.popup__image');

const containerPrices = popup.querySelector('.prices');
const pricesEngine = containerPrices.querySelector('.prices__work_engine');
const pricesChassis = containerPrices.querySelector('.prices__work_chassis');
const pricesTransmission = containerPrices.querySelector('.prices__work_transmission');
const pricesTo = containerPrices.querySelector('.prices__work_to');
const pricesDiagnostics = containerPrices.querySelector('.prices__work_diagnostics');

const services = body.querySelector('.services');
const buttonEngine = services.querySelector('.services__item_engine');
const buttonChassis = services.querySelector('.services__item_chassis');
const buttonTransmission = services.querySelector('.services__item_transmission');
const buttonTo = services.querySelector('.services__item_to');
const buttonDiagnostics = services.querySelector('.services__item_diagnostics');

const phoneIvan = '+7 (951) 814-96-59';
const phoneDmitriy = '+7 (982) 114-11-94';
const phoneAlexei = '+7 (902) 605-47-42';

function addPopupTitle(arr) {
  for (let item of arr) {
    popupContainer.insertAdjacentHTML("beforeend", `<p class="popup__title">${item.textContent}</p>`)
  }
}

function removePopupTitle(arr) {
  for (let item of arr) {
    item.remove();
  }
}

function openPopup(evt) {
  if (evt.target.classList.contains('work-list__layout')) {
    popup.classList.add('popup_opened');
    const imagePath = evt.target.nextElementSibling.src;
    const pathBigImage = imagePath.replace('.jpg', '-big.jpg');
    const altText = evt.target.nextElementSibling.nextElementSibling.textContent;
    const arrTitle = evt.target.nextElementSibling.nextElementSibling.nextElementSibling.children;

    popupImage.setAttribute('src', pathBigImage);
    popupImage.setAttribute('alt', altText);
    popupImage.classList.add('popup__image_visible');
    addPopupTitle(arrTitle);
  } else if (evt.currentTarget.classList.contains('services__item')) {
    popup.classList.add('popup_opened');
    containerPrices.classList.add('prices_visible');

    if (evt.currentTarget === buttonEngine) {
      pricesEngine.classList.add('prices__work_visible');
    } else if (evt.currentTarget === buttonChassis) {
      pricesChassis.classList.add('prices__work_visible');
    } else if (evt.currentTarget === buttonTransmission) {
      pricesTransmission.classList.add('prices__work_visible');
    } else if (evt.currentTarget === buttonTo) {
      pricesTo.classList.add('prices__work_visible');
    } else {
      pricesDiagnostics.classList.add('prices__work_visible');
    }
  }
}

function closePopup(evt) {
  if (evt.target === buttonClosePopup || evt.target === popup) {
    if (popupImage.classList.contains('popup__image_visible')) {
      const popupHeadings = popup.querySelectorAll('.popup__title');
      removePopupTitle(popupHeadings);
      popupImage.classList.remove('popup__image_visible');
    } else if (containerPrices.classList.contains('prices_visible')) {
      const pricesWorks = popup.querySelectorAll('.prices__work');
      for (let item of pricesWorks) {
        item.classList.remove('prices__work_visible');
      }
    }

    popup.classList.remove('popup_opened');
  }
}

function handleClickButtonPhone(evt) {
  if (evt.target === buttonPhoneIvan) {
    if (buttonPhoneIvan.textContent === 'Показать телефон') {
      buttonPhoneIvan.textContent = phoneIvan;
    } else {
      buttonPhoneIvan.textContent = 'Показать телефон';
    }
  } else if (evt.target === buttonPhoneDmitriy) {
    if (buttonPhoneDmitriy.textContent === 'Показать телефон') {
      buttonPhoneDmitriy.textContent = phoneDmitriy;
    } else {
      buttonPhoneDmitriy.textContent = 'Показать телефон';
    }
  } else if (evt.target === buttonPhoneAlexei) {
    if (buttonPhoneAlexei.textContent === 'Показать телефон') {
      buttonPhoneAlexei.textContent = phoneAlexei;
    } else {
      buttonPhoneAlexei.textContent = 'Показать телефон';
    }
  }
}

function goToSlide(index) {
  const windowWidth = window.innerWidth;

  if (index < 0) {
    index = workListItems.length - 1;
  } else if (index >= workListItems.length - 1) {
    index = 0;
  }
  currentIndex = index;

  if (windowWidth > 1160) {
    workList.style.transform = `translateX(-${currentIndex * 330}px`;
  } else if (windowWidth > 1010) {
    workList.style.transform = `translateX(-${currentIndex * 280}px`;
  } else if (windowWidth > 760) {
    workList.style.transform = `translateX(-${currentIndex * 220}px`;
  } else if (windowWidth > 510) {
    workList.style.transform = `translateX(-${currentIndex * 170}px`;
  } else if (windowWidth < 510) {
    workList.style.transform = `translateX(-${currentIndex * 220}px`;
  }
}

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

setInterval(goToNextSlide, 3000);

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
  if (evt.target.classList.contains('navigation__link')) {
    disactiveLink();
    evt.target.classList.add('navigation__link_active');
  }

  const windowWidth = window.innerWidth;
  if (windowWidth < 850) {
    handleMenu();
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
  const windowHeight = window.innerHeight;

  if (scrollY < windowHeight - heightHeader) {
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
buttonUp.addEventListener('click', handleClickUp);
window.addEventListener('scroll', debounce(checkScroll, 100));
workButtonPrev.addEventListener('click', goToPrevSlide);
workButtonNext.addEventListener('click', goToNextSlide);
sectionContacts.addEventListener('click', handleClickButtonPhone);
worksSection.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
buttonEngine.addEventListener('click', openPopup);
buttonChassis.addEventListener('click', openPopup);
buttonTransmission.addEventListener('click', openPopup);
buttonTo.addEventListener('click', openPopup);
buttonDiagnostics.addEventListener('click', openPopup);
