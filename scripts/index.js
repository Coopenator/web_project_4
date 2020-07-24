import FormValidate from './FormValidate.js';
import Card from './Card.js';
import {togglePopup} from '../utils/utils.js';
import {defaultConfig, initialCards, cardTemplateSelector, nameInput, jobInput, nameSet, jobSet, imageNameInput, imageInput, buttonEdit, buttonEditClose, buttonAdd, buttonAddClose, addImage, buttonImageClose, list, editProfileModal, addImageModal, largeImageModal} from '../utils/constants.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
//import '../pages/index.css';

//Initial Cards
const cardGroup = new Section({
    items: initialCards,
    renderer: (data)=> { 
        const card = new Card ({
            data, handleCardClick:()=>{
                const imagePopup = new PopupWithImage(largeImageModal);
                imagePopup.open({data});} 
            }, ".card-template")
            cardGroup.addItem(card.generateCard());
        }, 
        
}, list)
cardGroup.renderItems();

//Edit Profile Form
const profileForm = new PopupWithForm({popupSelector:editProfileModal, handleSubmitForm: ()=> {
    const profileInfo = new UserInfo(nameInput.value, jobInput.value);
    profileInfo.setUserInfo();
    profileForm.close()
    }
})
    
//Form Validation
const addCardForm = addImageModal.querySelector(".popup__container");
const editProfileForm = editProfileModal.querySelector(".popup__container");

const editProfileValidation = new FormValidate(defaultConfig, editProfileForm);
const addCardValidation = new FormValidate(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//Add Image Form
const imageForm = new PopupWithForm({popupSelector:addImageModal, handleSubmitForm: () => {
        const card = new Card ({imageForm:inputValues, handleCardClick:() => {
            const imagePopup = new PopupWithImage(largeImageModal);
            imagePopup.open({link:imageInput.value, name:imageNameInput.value});}
        }, ".card-template");
        cardGroup.addItem(card.generateCard());
        imageForm.close();
    }
})

buttonEdit.addEventListener("click", () => profileForm.open());
buttonAdd.addEventListener("click", () => imageForm.open());

//Popup controls
//function formSubmitHandler (evt) {
    //evt.preventDefault(); 

   //if(evt.submitter == buttonEditClose) {
       // return;
   //}

    //nameSet.textContent = nameInput.value;
    //jobSet.textContent = jobInput.value;
    //togglePopup(editProfileModal);

//}

//editProfileModal.addEventListener('submit', formSubmitHandler);

//buttonEdit.addEventListener("click", () => {
    //togglePopup(editProfileModal);
//})

//buttonEditClose.addEventListener("click", () => {
    //togglePopup(editProfileModal);
//})

//buttonAdd.addEventListener("click", () => {
    //togglePopup(addImageModal);
//})

//buttonAddClose.addEventListener("click", () => {
    //togglePopup(addImageModal);
//})

//buttonImageClose.addEventListener("click", () => {
    //togglePopup(largeImageModal);
//})


//Create Card





//Render Cards
const renderCard = (data) => {
    const card = new Card(data, cardTemplateSelector);

    list.prepend(card.generateCard());
}

initialCards.forEach((data) => {
    renderCard(data);
})

//addImage.addEventListener('click', (e) => {
    //e.preventDefault();
    //renderCard({name: imageNameInput.value, link: imageInput.value});
    //togglePopup(addImageModal);
  //});