const { default: Popup } = require("./Popup");

import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor(handleSubmitForm, popupSelector) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = super.grabPopup().querySelector(".popup__container");
    }

    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._formData = {};
        this._inputList.forEach(input => {
            this._formData[input.name] = input.value;
        });

        return this._formData;
    }

    setEventListeners() {
        this._submitHandler = (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this._close();
        }

        this._popupForm.addEventListener("submit", this._submitHandler);
        super.setEventListeners();
    }

    _close() {
        this._popupForm.removeEventListener("submit", this._submitHandler);
        super.close();
    }
}

export default PopupWithForm