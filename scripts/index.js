const editProfileModal = document.querySelector(".popup__edit-info");
const addImageModal = document.querySelector(".popup__add-image");
const largeImageModal = document.querySelector(".popup__image-large")// Use the querySelector() method
const nameInput = editProfileModal.querySelector(".type_name");// Use querySelector()
const jobInput = editProfileModal.querySelector(".type_job");// Use querySelector()
const nameSet = document.querySelector(".profile__name");
const jobSet = document.querySelector(".profile__profession");
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonEditClose = editProfileModal.querySelector(".popup__button-close");
const buttonAdd = document.querySelector(".profile__button-add");
const buttonAddClose = addImageModal.querySelector(".popup__button-close");

function togglePopup(popup) {
    popup.classList.toggle("popup_active");
}

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    // Get the values of each field from the corresponding value property
    // Select elements where the field values will be entered
    nameSet.textContent = nameInput.value;
    jobSet.textContent = jobInput.value;
    // Insert new values using the textContent property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
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

const createCard = (data) => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardTitle = cardElement.querySelector(".element__title");
    const cardImage = cardElement.querySelector(".element__image");
    const cardLikeButton = cardElement.querySelector(".element__button-like");
    const cardRemoveButton = cardElement.querySelector(".element__button-remove");

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;

    cardLikeButton.addEventListener("click", () => {
        // change Heart color()
        cardLikeButton.classList.toggle("element__button-like_active");
    })

    cardRemoveButton.addEventListener("click", (e) => {
        // remove card()
        e.target.closest(".card").remove();
    })

    cardImage.addEventListener("click", () => {
        togglePopup(largeImageModal);
    })

    return cardElement;
}

const reverse = initialCards.reverse();
reverse.forEach(data => createCard(data));

const list = document.querySelector(".elements");

const renderCard = (data) => {
    list.prepend(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
})