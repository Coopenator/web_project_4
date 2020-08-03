import FormValidate from './scripts/FormValidate.js';
import Card from './scripts/Card.js';
import {togglePopup} from './utils/utils.js';
import {defaultConfig, initialCards, cardTemplateSelector, nameInput, jobInput, nameSet, jobSet, imageNameInput, imageInput, buttonEdit, buttonEditClose, buttonAdd, buttonAddClose, addImage, buttonImageClose, list, editProfileModal, addImageModal, largeImageModal} from './utils/constants.js';
import Popup from './scripts/Popup.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
//import './pages/index.css';

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
        const newCard = new Card ({data:{name: imageNameInput.value, link: imageInput.value}, handleCardClick:(data)=>{
            const imagePopup = new PopupWithImage(largeImageModal);
            imagePopup.open({data});} 
        }, ".card-template");
        cardGroup.addItem(newCard.generateCard());
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

addImage.addEventListener('click', (e) => {
    e.preventDefault();
    renderCard({name: imageNameInput.value, link: imageInput.value});
    togglePopup(addImageModal);
  });