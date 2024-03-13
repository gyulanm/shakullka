const createSlider = (containerClass) => {
    const container = document.querySelector(containerClass);

    let nextButton = container.querySelector('.next_btn');
    let cards = container.querySelectorAll('.rec__item');
    let numberOfShownCards = 0;
    cards.forEach(card => {
        if (!card.classList.contains('hidden')) {
            numberOfShownCards++;
        }
    });
    let cardsWrapper = cards[0].parentElement;
    const lastCardIndex = cards.length -1;
    let leftCardIndex = 0;

    nextButton.addEventListener("click", ()=>{
        // debugger;
        let hiddenCardIndex;
        // определяем индекс карточки, которую надо будет показать справа
        if (leftCardIndex + numberOfShownCards > lastCardIndex) { // проверка на то, что следующей карточкой должна стать первая карточка
            hiddenCardIndex = leftCardIndex + numberOfShownCards - cards.length; 
        } else {
            hiddenCardIndex = leftCardIndex + numberOfShownCards;
        }
    
        let leftCard = cards[leftCardIndex]; // получаем левую карточку
        let rightCard = cards[hiddenCardIndex]; // получаем правую карточку
        leftCard.classList.toggle("hidden"); // скрываем левую карточку
        rightCard.classList.toggle("hidden"); // показываем правую карточку
    
        // левую карточку перносим вниз списка ()чтобы потом она появилась справа, а не на значальной своей позиции слева
        cardsWrapper.removeChild(leftCard); 
        cardsWrapper.insertAdjacentElement('beforeend', leftCard);
    
        // обновляем индекс левой карточки 
        if (leftCardIndex === lastCardIndex) {
            leftCardIndex = 0;
        } else {
            leftCardIndex++;
        }
    });
}

// createSlider('.popular__slider');
// createSlider('.rec__slider');

