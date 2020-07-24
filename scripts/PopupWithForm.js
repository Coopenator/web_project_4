import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor({handleSubmitForm, popupSelector}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValues() {
        this.inputValues = Array.from(popupElement.querySelector(".popup__container").querySelectorAll(".popup__input"));
        return this.inputValues
    }

    setEventListeners() {
        this._popupElement.querySelector(".popup__container").addEventListener(`submit`, (evt) => {
            evt.preventDefault;
            this._handleSubmitForm(this._getInputValues());
        });
        super.setEventListeners();
    }

    open() {
        this.setEventListeners();
        super.open();
    }

    close() {
        this._popupElement.removeEventListener("submit", this._submitHandler);
        super.close();
    }
}

export default PopupWithForm