import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({link, name}) {
        this._popupElement.querySelector('.popup__image').src = link;
        this._popupElement.querySelector('.popup__image').alt = link;
        this._popupElement.querySelector('.popup__image-title').textContent = name;
        super.open();
    }
}

export default PopupWithImage