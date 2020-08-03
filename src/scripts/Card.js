class Card {
    constructor({data, handleCardClick}, cardTemplateSelector) {
        this._link = data.link;
        this._text = data.name;
        this._handleCardClick = handleCardClick;
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

    generateCard() {
      const element = this._getCardTemplate();

      this._card = element;

      this._card.querySelector('.element__image').style.backgroundImage = `url('${this._link}')`;
      this._card.querySelector('.element__title').textContent = this._text;
      this._addEventListeners();
  
      return this._card;
  }

    _addEventListeners() {
        this._heartButton = this._card.querySelector(".element__button-like");
        this._trashCanButton = this._card.querySelector(".element__button-remove");
        //const cardImage = this._card.querySelector(".element__image");
        //const popupImage = this._card.querySelector(".popup__image");
        //const popupTitle = this._card.querySelector(".popup__image-title");
        
        

        this._heartButton.addEventListener("click", () => {
            // change Heart color()
            this._heartButton.classList.toggle("element__button-like_active");
        })
    
        this._trashCanButton.addEventListener("click", (e) => {
            // remove card()
            this._card.closest(".card").remove();
        })

        this._card.querySelector(".element__image").addEventListener("click", () => { 
          this._handleCardClick(this._card); 
        });
    
        //cardImage.addEventListener("click", () => {
            //popupImage.src = this._link;
            //popupImage.alt = this._text;
           // popupTitle.textContent = this._text;
    
            //togglePopup(largeImageModal);
       // })

        //this._card.querySelector(".element__image").addEventListener("click", (evt) => {
         //onst picturePopup = document.querySelector(".popup__image-container");
          //const popupImage = picturePopup.querySelector(".popup__image");
          //const popupTitle = picturePopup.querySelector(".popup__image-title");
          //const largeImageModal = document.querySelector(".image-large")
  
          //popupImage.src = this._link;
          //popupImage.alt = this._text;
          //popupTitle.textContent = this._text;
          //togglePopup(largeImageModal);
        //})

        
    }
}

export default Card
