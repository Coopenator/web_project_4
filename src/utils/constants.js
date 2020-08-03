const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

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

export {defaultConfig, initialCards, cardTemplateSelector, nameInput, jobInput, nameSet, jobSet, imageNameInput, imageInput, buttonEdit, buttonEditClose, buttonAdd, buttonAddClose, addImage, buttonImageClose, list, editProfileModal, addImageModal, largeImageModal}