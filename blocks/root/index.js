// Let's find the form in the DOM
let formElement = document.querySelector(".popup")// Use the querySelector() method

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = formElement.querySelector("#name")// Use querySelector()
    let jobInput = formElement.querySelector("#job")// Use querySelector()


    // Get the values of each field from the corresponding value property

    // Select elements where the field values will be entered
    document.querySelector("profile__name").textContent = nameInput.value;
    document.querySelector("profile__profession").textContent = jobInput.value;

    // Insert new values using the textContent property of the querySelector() method
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', formSubmitHandler);

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonClose = document.querySelector(".popup__button-close");

function visible() {   
    document.querySelector(".popup").classList.add("popup_active");
    return;
}

function hidden() {
    document.querySelector(".popup").classList.remove("popup_active");
    return;
}

buttonEdit.addEventListener("click", visible);
buttonClose.addEventListener("click", hidden);