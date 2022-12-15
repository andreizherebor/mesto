const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__content');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const textInput = document.querySelector('.popup__input_type_text');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  textInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = textInput.value;
  closePopup();
}


popupForm.addEventListener('submit', handlerFormSubmit);
popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
