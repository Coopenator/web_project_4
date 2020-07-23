import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor(handleSubmitForm, popupSelector) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValues() {
        this.inputValues = Array.from(popupElement.querySelector(".popup__container").qurySelectorAll(".popup__input"));
        return this.inputValues
    }

    setEventListeners() {
        this._submitHandler = (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        }

        this._popupForm.addEventListener("submit", this._submitHandler);
        super.setEventListeners();
    }

    open() {
        this.setEventListeners();
        super.open();
    }

    close() {
        this._popupForm.removeEventListener("submit", this._submitHandler);
        super.close();
    }
}

export default PopupWithForm