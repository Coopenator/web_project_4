const buttonEdit = document.querySelector(".profile__button-edit");
const buttonClose = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup")// Use the querySelector() method
const nameInput = formElement.querySelector(".type_name");// Use querySelector()
const jobInput = formElement.querySelector(".type_job");// Use querySelector()
const nameSet = document.querySelector(".profile__name");
const jobSet = document.querySelector(".profile__profession");

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
formElement.addEventListener('submit', formSubmitHandler);

function visible() {   
    document.querySelector(".popup").classList.toggle("popup_active");
}

function hidden() {
    document.querySelector(".popup").classList.toggle("popup_active");
}

buttonEdit.addEventListener("click", visible);
buttonClose.addEventListener("click", hidden);