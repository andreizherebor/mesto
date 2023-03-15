(()=>{"use strict";var e={inputSelector:"popup__input",submitButtonSelector:"popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",activeErrorClass:"popup__error_visible"},t=document.querySelector(".profile"),r=t.querySelector(".profile__edit-button"),n=t.querySelector(".profile__add-button"),o="#card-template";function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var u=function(){function e(t){var r=t.headers,n=t.baseUrl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,r;return t=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getPageNeedData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var s=function(){function e(t){var r=t.data,n=t.userId,o=t.cardSelector,i=t.handleCardClick,a=t.handleLikeButtonClick,u=t.handleRemoveButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._currentUserId=n,this._isUserCard=n===r.owner._id,this._imageLink=r.link,this._imageName=r.name,this._name=r.name,this._likes=r.likes,this._cardId=r._id,this._cardSelector=o,this._handleCardClick=i,this._handleLikeButtonClick=a,this._handleRemoveButtonClick=u}var t,r;return t=e,(r=[{key:"_getTemplateElement",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._isUserCard&&this._cardElement.querySelector(".element__trash-button").addEventListener("click",(function(t){e._handleRemoveButtonClick(t)})),this._likeButton.addEventListener("click",(function(t){return e._handleLikeButtonClick(t)})),this._cardsElementImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplateElement(),this._likeButton=this._cardElement.querySelector(".element__like-button"),this._countLikeElement=this._cardElement.querySelector(".element__like-count"),this._cardsElementImage=this._cardElement.querySelector(".element__image"),this._isUserCard||this._cardElement.querySelector(".element__trash-button").remove(),this._cardsElementImage.src=this._imageLink,this._cardsElementImage.alt=this._imageName,this._cardElement.querySelector(".element__title").textContent=this._name,this._countLikeElement.textContent=this._likes.length,this._toggleLikeState(),this._setEventListeners(),this._cardElement}},{key:"_toggleLikeState",value:function(){this._checkUserLike()?this.setLike():this.unsetLike()}},{key:"setLike",value:function(){this._likeButton.classList.add("element__like-active-button"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._likeButton.classList.remove("element__like-active-button"),this.isLiked=!1}},{key:"likesCounterUpdate",value:function(e){this._countLikeElement.textContent=e.length}},{key:"_checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._currentUserId}))}},{key:"getCardId",value:function(){return this._cardId}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._classData=t,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._classData.inputSelector))),this._buttonElement=this._formElement.querySelector(".".concat(this._classData.submitButtonSelector))}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._classData.activeErrorClass),e.classList.add(this._classData.inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._classData.activeErrorClass),t.textContent="",e.classList.remove(this._classData.inputErrorClass)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._classData.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._classData.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var d=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._containerElement=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addNewItem",value:function(e){this._containerElement.prepend(e)}},{key:"addItem",value:function(e){this._containerElement.append(e)}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},S.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._formElement=r._popup.querySelector(".popup__form"),r._formElementSubmitButton=r._formElement.querySelector(".popup__save-button"),r._inputList=r._formElement.querySelectorAll(".popup__input"),r._handlerSubmitForm=t,r}return t=a,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"getFormValues",value:function(){return this._getInputValues()}},{key:"getFormElement",value:function(){return this._formElement}},{key:"close",value:function(){this._formElement.reset(),S(w(a.prototype),"close",this).call(this)}},{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmitForm(e._getInputValues())})),S(w(a.prototype),"setEventListener",this).call(this)}},{key:"isLoadingMessage",value:function(e){this._formElementSubmitButton.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,T(n.key),n)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function U(e,t,r){return(t=T(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return U(I(e=i.call.apply(i,[this].concat(r))),"_popupImage",e._popup.querySelector(".popup__image")),U(I(e),"_popupName",e._popup.querySelector(".popup__figcaption")),e}return t=a,(r=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupName.textContent=t,C(R(a.prototype),"open",this).call(this)}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},A.apply(this,arguments)}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=a,(r=[{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),A(x(a.prototype),"setEventListener",this).call(this)}},{key:"changeHandlerSubmitForm",value:function(e){this._handlerSubmitForm=e}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}var H=function(){function e(t){var r=t.profileNameSelector,n=t.profileAboutSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(r),this._profileDescriptionElement=document.querySelector(n),this._profileAvatarElement=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._profileNameElement.textContent,userDescription:this._profileDescriptionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userDescription;this._profileNameElement.textContent=t,this._profileDescriptionElement.textContent=r}},{key:"setUserAvatar",value:function(e){var t=e.userAvatarLink;this._profileAvatarElement.src=t}},{key:"saveUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z=new u({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"db488110-6dad-46f9-bde7-6da87383f581","Content-Type":"application/json"}}),$=new H({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"});z.getPageNeedData().then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$.setUserInfo({userName:i.name,userDescription:i.about}),$.setUserAvatar({userAvatarLink:i.avatar}),$.saveUserId(i._id),G.renderItems(o)})).catch((function(e){console.error(e)}));var G=new d({renderer:function(e){var t=re(e,o);G.addItem(t)}},".elements__cards"),K=new L(".popup_form_avatar",(function(e){K.isLoadingMessage(!0),z.updateProfileAvatar({avatar:e.url}).then((function(e){$.setUserAvatar({userAvatarLink:e.avatar}),K.close()})).catch((function(e){console.error(e)})).finally((function(){K.isLoadingMessage(!1)}))}));K.setEventListener();var Q=new y(e,K.getFormElement());Q.enableValidation(),document.querySelector(".profile__avatar-edit").addEventListener("click",(function(){Q.resetValidation(),K.open()}));var W=new L(".popup_form_edit",(function(e){W.isLoadingMessage(!0),z.updateUserInfo({name:e.title,about:e.subtitle}).then((function(e){$.setUserInfo({userName:e.name,userDescription:e.about}),W.close()})).catch((function(e){console.error(e)})).finally((function(){W.isLoadingMessage(!1)}))}));W.setEventListener();var X=new y(e,W.getFormElement());X.enableValidation();var Y=new L(".popup_form_add",(function(e){Y.isLoadingMessage(!0);var t={name:e.name,link:e.url};z.addNewCard(t).then((function(e){var t=re(e,o);G.addNewItem(t),Y.close()})).catch((function(e){console.error(e)})).finally((function(){Y.isLoadingMessage(!1)}))}));Y.setEventListener();var Z=new y(e,Y.getFormElement());Z.enableValidation();var ee=new V(".popup_form_confirm");ee.setEventListener();var te=new B(".popup_viewer");function re(e,t){var r=new s({data:e,cardSelector:t,userId:$.getUserId(),handleCardClick:function(){te.open(e.link,e.name)},handleLikeButtonClick:function(){r.isLiked?z.deleteCardLike(r.getCardId()).then((function(e){r.unsetLike(),r.likesCounterUpdate(e.likes)})).catch((function(e){console.error(e)})):z.addCardLike(r.getCardId()).then((function(e){r.setLike(),r.likesCounterUpdate(e.likes)})).catch((function(e){console.error(e)}))},handleRemoveButtonClick:function(e){var t=e.target.closest(".element"),n=r.getCardId();ee.changeHandlerSubmitForm((function(e){e.preventDefault(),z.removeCard(n).then((function(){t.remove(),ee.close()})).catch((function(e){console.error(e)}))})),ee.open()}});return r.generateCard()}te.setEventListener(),r.addEventListener("click",(function(){var e=$.getUserInfo(),t=W.getFormElement();t.elements.name.value=e.userName,t.elements.description.value=e.userDescription,X.resetValidation(),W.open()})),n.addEventListener("click",(function(){Z.resetValidation(),Y.open()}))})();