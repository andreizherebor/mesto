import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, classData } from './initialCards.js';

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditOpen = document.querySelector('.profile__edit-button');
const profileAddOpen = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = document.forms["profileEdit"];
const nameEditInput = popupEdit.querySelector('.popup__input_type_name');
const textEditInput = popupEdit.querySelector('.popup__input_type_text');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = document.forms["placeAdd"];
const titleAddInput = popupAdd.querySelector('.popup__input_type_title');
const urlAddInput = popupAdd.querySelector('.popup__input_type_url');

const cardsContainer = document.querySelector('.elements__cards');
const cardTemplate = '#card-template';

const popupImage = document.querySelector('.popup_photos');
const popupPhotosImage = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__figcaption');

const popups = Array.from(document.querySelectorAll('.popup'));

const popupEditFormValidator = new FormValidator(classData, popupEditForm);
popupEditFormValidator.enableValidation();

const popupAddFormValidator = new FormValidator(classData, popupAddForm);
popupAddFormValidator.enableValidation();

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick);
}

function openPopupEdit() {
  nameEditInput.value = profileTitle.textContent;
  textEditInput .value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameEditInput.value;
  profileSubtitle.textContent = textEditInput.value;
  closePopup(popupEdit);
}

function createCard(item) {
  const card = new Card(item, cardTemplate);
  return card.generateCard();
}

function handleProfileCardSubmit(evt) {
  evt.preventDefault();
  const cardElement = {
    name: titleAddInput.value,
    link: urlAddInput.value
  };
  popupAddForm.reset();
  cardsContainer.prepend(createCard(cardElement));
  closePopup(popupAdd);
  popupAddFormValidator.toggleButtonState();
}

export function openPopupPhotos(imageLink, imageName) {
  popupPhotosImage.src = imageLink;
  popupPhotosImage.alt = imageName;
  popupImageCaption.textContent = imageName;
  openPopup(popupImage);
}

initialCards.forEach (card => {
  cardsContainer.append( createCard(card) );
});


function closePopupEscapeClick(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}


popups.forEach((element) => {
  element.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(element);
    }
  });
})

profileEditOpen.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit',  handleProfileFormSubmit);

profileAddOpen.addEventListener('click', () => openPopup(popupAdd));
popupAddForm.addEventListener('submit', handleProfileCardSubmit);


