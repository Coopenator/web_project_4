import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor({handleSubmitForm, popupSelector}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popupElement.querySelector(".popup__container");
    }

    _getInputValues() {
        const inputValues = Array.from(this._form.querySelectorAll(".popup__input"));
        this._formValues = {};
        inputValues.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm