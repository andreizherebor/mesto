const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditOpen = document.querySelector('.profile__edit-button');
const profileAddOpen = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = document.forms["profileEdit"];
const nameEditInput = popupEdit.querySelector('.popup__input_type_name');
const textEditInput = popupEdit.querySelector('.popup__input_type_text');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = document.forms["profileAdd"];
const titleAddInput = popupAdd.querySelector('.popup__input_type_title');
const urlAddInput = popupAdd.querySelector('.popup__input_type_url');

const cardsContainer = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('.card_template').content;

const popupImage = document.querySelector('.popup_photos');
const popupPhotosImage = document.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__figcaption');

const closeButtons = document.querySelectorAll('.popup__close-button');

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

function handleProfileFormSubmit(evt) {
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
  cardElement.querySelector('.element__like-button').addEventListener('click', handleLikeButtonClick);
  cardElement.querySelector('.element__trash-button').addEventListener('click', handleRemoveButtonClick);

  return cardElement;
}

function handleProfileCardSubmit(evt) {
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
  popupPhotosImage.src = evt.target.src;
  popupPhotosImage.alt = evt.target.alt;
  popupImageCaption.textContent = evt.target.alt;
  openPopup(popupImage);
}

initialCards.forEach (card => {
  cardsContainer.append( createCard(card) );
});


function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('element__like-active-button');
}

function handleRemoveButtonClick(evt) {
  evt.target.closest('.element').remove();
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

profileEditOpen.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit',  handleProfileFormSubmit);

profileAddOpen.addEventListener('click', () => openPopup(popupAdd));
popupAddForm.addEventListener('submit', handleProfileCardSubmit);


