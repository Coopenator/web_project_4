import FormValidate from './FormValidate.js';
import Card from './Card.js';

const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

const editProfileModal = document.querySelector(".edit-info");
const addImageModal = document.querySelector(".add-image");
const largeImageModal = document.querySelector(".image-large")// Use the querySelector() method
const nameInput = editProfileModal.querySelector(".name");// Use querySelector()
const jobInput = editProfileModal.querySelector(".job");// Use querySelector()
const nameSet = document.querySelector(".profile__name");
const jobSet = document.querySelector(".profile__profession");
const imageNameInput = addImageModal.querySelector(".image-name");
const imageInput = addImageModal.querySelector(".image-url");
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonEditClose = editProfileModal.querySelector(".popup__button-close");
const buttonAdd = document.querySelector(".profile__button-add");
const buttonAddClose = addImageModal.querySelector(".popup__button-close");
const addImage = addImageModal.querySelector(".popup__button-save");
const buttonImageClose = largeImageModal.querySelector(".popup__button-close");

const list = document.querySelector(".elements");

//Form Validation
const addCardForm = addImageModal.querySelector(".popup__container");
const editProfileForm = editProfileModal.querySelector(".popup__container");

const editProfileValidation = new FormValidate(defaultConfig, editProfileForm);
const addCardValidation = new FormValidate(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//Popup controls
function togglePopup(popup) {
    popup.classList.toggle("popup_active");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    if(evt.submitter == buttonEditClose) {
        return;
    }

    nameSet.textContent = nameInput.value;
    jobSet.textContent = jobInput.value;
    togglePopup(editProfileModal);

}

editProfileModal.addEventListener('submit', formSubmitHandler);

buttonEdit.addEventListener("click", () => {
    togglePopup(editProfileModal);
})

buttonEditClose.addEventListener("click", () => {
    togglePopup(editProfileModal);
})

buttonAdd.addEventListener("click", () => {
    togglePopup(addImageModal);
})

buttonAddClose.addEventListener("click", () => {
    togglePopup(addImageModal);
})

buttonImageClose.addEventListener("click", () => {
    togglePopup(largeImageModal);
})


//Create Card
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const cardTemplateSelector = ".card-template";


//Render Cards
const renderCard = (data, image) => {
    const card = new Card(data, cardTemplateSelector);

    list.prepend(card.generateCard());
}

initialCards.forEach((data) => {
    renderCard(data.name, data.link);
})

addImage.addEventListener('click', (e) => {
    e.preventDefault();
    renderCard(imageNameInput.value, imageInput.value);
    togglePopup(addImageModal);
  });