import Popup from './Popup.js'

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = document.querySelector('.popup__image');
        this._imageTitle = document.querySelector('.popup__image-title');
    }

    open({link, name}) {
        this._image.src = link;
        this._image.alt = link;
        this._imageTitle.textContent = name;
        super.open();
    }
}

export default PopupWithImage