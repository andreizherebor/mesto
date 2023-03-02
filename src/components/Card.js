export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._imageLink = data.link;
    this._imageName = data.name;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handleLikeButtonClick(evt);
    });
    this._cardElement.querySelector('.element__trash-button').addEventListener('click', (evt) => {
      this._handleRemoveButtonClick(evt);
    });
    this._cardsElementImage.addEventListener('click', () => this._handleCardClick());
  }

  _getTemplateElement() {
    return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  _handleLikeButtonClick(evt) {
    evt.target.classList.toggle('element__like-active-button');
  }

  _handleRemoveButtonClick(evt) {
    evt.target.closest('.element').remove();
  }

  generateCard() {
    this._cardElement = this._getTemplateElement();
    this._cardsElementImage = this._cardElement.querySelector('.element__image');
    this._setEventListeners();

    this._cardsElementImage.src = this._imageLink;
    this._cardsElementImage.alt = this._imageName;
    this._cardElement.querySelector('.element__title').textContent = this._name;

    return this._cardElement;
  }
}
