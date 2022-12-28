const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditOpen = document.querySelector('.profile__edit-button');
const profileAddOpen = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = popupEdit.querySelector('[name="profileEdit"]');
const nameEditInput = popupEdit.querySelector('.popup__input_type_name');
const textEditInput = popupEdit.querySelector('.popup__input_type_text');
const popupEditClose = popupEdit.querySelector('.popup__close-button');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = popupAdd.querySelector('[name="profileAdd"]');
const titleAddInput = popupAdd.querySelector('.popup__input_type_title');
const urlAddInput = popupAdd.querySelector('.popup__input_type_url');
const popupAddClose = popupAdd.querySelector('.popup__close-button');

const cardsContainer = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('.card_template').content;

const popupImage = document.querySelector('.popup_photos');
const popupImageClose = popupImage.querySelector('.popup__close-button');





function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function openPopupEdit() {
  nameEditInput.value = profileTitle.textContent;
  textEditInput .value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameEditInput.value;
  profileSubtitle.textContent = textEditInput.value;
  closePopup(popupEdit);
}

function createCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardsElementImage = cardElement.querySelector('.element__image');

  cardsElementImage.src = card.link;
  cardsElementImage.alt = card.name;
  cardElement.querySelector('.element__title').textContent = card.name;

  cardsElementImage.addEventListener('click', openPopupPhotos);
  cardElement.querySelector('.element__like-button').addEventListener('click', handlerLikeButtonClick);
  cardElement.querySelector('.element__trash-button').addEventListener('click', handlerRemoveButtonClick);

  return cardElement;
}

function handlerCardSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard({
    name: titleAddInput.value,
    link: urlAddInput.value
  });
  cardsContainer.prepend(cardElement);
  popupAddForm.reset();
  closePopup(popupAdd);
}

function openPopupPhotos(evt) {
  const popupPhotosImage = document.querySelector('.popup__image');

  popupPhotosImage.src = evt.target.src;
  popupPhotosImage.alt = evt.target.alt;
  popupImage.querySelector('.popup__figcaption').textContent = evt.target.alt;
  openPopup(popupImage);
}

initialCards.forEach (card => {
  cardsContainer.append( createCard(card) );
});


function handlerLikeButtonClick(evt) {
  evt.target.classList.toggle('element__like-active-button');
}

function handlerRemoveButtonClick(evt) {
  evt.target.closest('.element').remove();
}
//=>
profileEditOpen.addEventListener('click', openPopupEdit);
popupEditClose.addEventListener('click', () => closePopup(popupEdit));
popupEditForm.addEventListener('submit',  handlerFormSubmit);

profileAddOpen.addEventListener('click', () => openPopup(popupAdd));
popupAddClose .addEventListener('click', () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', handlerCardSubmit);

popupImageClose.addEventListener('click', () => closePopup(popupImage));


