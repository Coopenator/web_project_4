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
const popupImage = largeImageModal.querySelector(".popup__image");
const popupTitle = largeImageModal.querySelector(".popup__image-title");

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

const modalHandler = (evt) => {
  togglePopup(evt.target);
};

const keyDownHandler = (evt) => {
  const escKey = 27;
  if (evt.keyCode === escKey) {
    togglePopup(document.querySelector(".popup_active"));
    evt.target.removeEventListener('keydown', keyDownHandler);
  }
};

const togglePopupAlt = () => {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((modal) => {
    modal.addEventListener("click", modalHandler);
  });

  popupList.forEach(() => {
    document.addEventListener("keydown", keyDownHandler);
  });
};

togglePopupAlt();



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

const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");

const createCard = (title, image) => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardTitle = cardElement.querySelector(".element__title");
    const cardImage = cardElement.querySelector(".element__image");
    const cardLikeButton = cardElement.querySelector(".element__button-like");
    const cardRemoveButton = cardElement.querySelector(".element__button-remove");

    cardTitle.textContent = title;
    cardImage.style.backgroundImage = `url('${image}')`;

    cardLikeButton.addEventListener("click", () => {
        // change Heart color()
        cardLikeButton.classList.toggle("element__button-like_active");
    })

    cardRemoveButton.addEventListener("click", (e) => {
        // remove card()
        e.target.closest(".card").remove();
    })

    cardImage.addEventListener("click", () => {
        popupImage.src = image;
        popupImage.alt = title;
        popupTitle.textContent = title;

        togglePopup(largeImageModal);
    })

    return cardElement;
}

const list = document.querySelector(".elements");

const renderCard = (title, image) => {
    list.prepend(createCard(title, image));
}

initialCards.forEach((data) => {
    renderCard(data.name, data.link);
})

addImage.addEventListener('click', (e) => {
    e.preventDefault();
    renderCard(imageNameInput.value, imageInput.value);
    togglePopup(addImageModal);
  });