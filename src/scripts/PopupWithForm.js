import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor({handleSubmitForm, popupSelector}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popupElement.querySelector(".popup__container");
        this._popupName = document.querySelector(".name");
        this._popupJob = document.querySelector(".job");
        this._profileName = document.querySelector(".profile__name");
        this._profileJob = document.querySelector(".profile__profession");
    }

    _getInputValues() {
        const inputValues = Array.from(this._form.querySelectorAll(".popup__input"));
        this._formValues = {};
        inputValues.forEach(input => this.formValues[input.name]= input.value);
        return this._formValues;
    }

    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault;
            this._handleSubmitForm();
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }

    open() {
        
        if(this._popupElement.classList.contains('add-image')) {
            this._popupElement.querySelector('.popup__container').reset();
        }

        if(this._popupElement.classList.contains('edit-info')) {
            this._popupName.value = this._profileName.textContent;
            this._popupJob.value = this._profileJob.textContent;
        }
        super.open();
    }
}

export default PopupWithForm