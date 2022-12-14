let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__content');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('[name="profileName"]');
let inputText = document.querySelector('[name="profileText"]');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputText.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputText.value;
  closePopup();
}

function closePopupBackground (evt) {
  evt.stopPropagation();
}

popup.addEventListener('click', closePopup);
popupForm.addEventListener('click', closePopupBackground);
popupForm.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
