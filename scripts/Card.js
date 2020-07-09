function togglePopup(popup) {
    popup.classList.toggle("popup_active");
}

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

class Card {
    constructor(data, cardTemplateSelector) {
        this._link = data.link;
        this._text = data.name;

        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getCardTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector(".card")
            .cloneNode(true);

        return cardTemplate;
    }

    _addEventListeners() {
        const cardLikeButton = this._card.querySelector(".element__button-like");
        const cardRemoveButton = this._card.querySelector(".element__button-remove");
        const cardImage = this._card.querySelector(".element__image");
        const popupImage = this._card.querySelector(".popup__image");
        const popupTitle = this._card.querySelector(".popup__image-title");
        const largeImageModal = document.querySelector(".image-large")
        

        cardLikeButton.addEventListener("click", () => {
            // change Heart color()
            cardLikeButton.classList.toggle("element__button-like_active");
        })
    
        cardRemoveButton.addEventListener("click", (e) => {
            // remove card()
            e.target.closest(".card").remove();
        })
    
        cardImage.addEventListener("click", () => {
            popupImage.src = this._link;
            popupImage.alt = this._text;
            popupTitle.textContent = this._text;
    
            togglePopup(largeImageModal);
        })

        
    }

    generateCard = () => {
        const element = this._getCardTemplate();

        this._card = element;

        this._card.querySelector('.element__image').style.backgroundImage = `url('${this._link}')`;
        this._card.querySelector('.element__title').textContent = this._text;
    
        this._addEventListeners();
    
        return this._card;
    }
}

export default Card
