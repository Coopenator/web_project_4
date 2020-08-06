import FormValidate from '../components/FormValidate.js';
import Card from '../components/Card.js';
import { togglePopup } from '../utils/utils.js';
import { defaultConfig, initialCards, cardTemplateSelector, nameInput, jobInput, nameSet, jobSet, imageNameInput, imageInput, buttonEdit, buttonEditClose, buttonAdd, buttonAddClose, addImage, buttonImageClose, list, editProfileModal, addImageModal, largeImageModal } from '../utils/constants.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const imagePopup = new PopupWithImage(largeImageModal);


//Initial Cards
const cardGroup = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card({
            data,
            handleCardClick: () => {
                imagePopup.open(data);
            }
        }, ".card-template")
        cardGroup.addItem(card.generateCard());
    },

}, list)
cardGroup.renderItems();

//Edit Profile Form
const userInfo = new UserInfo(".profile__name", ".profile__profession");
const profileForm = new PopupWithForm({
    popupSelector: editProfileModal, handleSubmitForm: () => {
        userInfo.setUserInfo({ userName: nameInput.value, userJob: jobInput.value });
    }
});

//Add Image Form
const imageForm = new PopupWithForm({
    popupSelector: addImageModal, handleSubmitForm: () => {
        const newCard = new Card({
            data: { name: imageNameInput.value, link: imageInput.value },
            handleCardClick: (data) => {
                imagePopup.open({ data });
                if (this._popupElement.classList.contains('add-image')) {
                    this._popupElement.querySelector('.popup__container').reset();
                };
            }
        }, ".card-template");
        cardGroup.addItem(newCard.generateCard());
        imageForm.close();
    }
})

//Form Validation
const addCardForm = addImageModal.querySelector(".popup__container");
const editProfileForm = editProfileModal.querySelector(".popup__container");

const editProfileValidation = new FormValidate(defaultConfig, editProfileForm);
const addCardValidation = new FormValidate(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();



buttonEdit.addEventListener("click", () => profileForm.open());
buttonAdd.addEventListener("click", () => imageForm.open());