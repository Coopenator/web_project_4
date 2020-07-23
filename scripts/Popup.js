//const escKey = 27;
class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this.setEventListeners();
        this._popupElement.classList.add('.popup_active')
        document.addEventListener('keyup', this._handleEscClose)
    }

    close() {
        this._popupElement.classList.remove('.popup_active')
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(e) {
        if (e.which === 27) {
            this.close()
        }
    }

    setEventListeners() {
        this._popupElement
            .querySelector('.popup__button-close')
            .addEventListener('click', (e) => {
                this.close()
        })
    }
}

export default Popup