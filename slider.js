let nextButton = document.querySelector('.bttnnx');
let prevButton = document.querySelector('.bttnpr');
let cards = document.querySelectorAll('.history__card');
let cardsWrapper = cards[0].parentElement;
const lastCardIndex = cards.length -1;
let leftCardIndex = 0;

// 0 1 2 3 
// --------
// 0 1 (2)
// 1 2 (3)
// 2 3 (4 - количество карточек = 0)
// 3 0 (5 - количество карточек = 1)
// 0 1 (2)
// 1 2 (3)
// 2 3 (4 - количество карточек = 0)
// 3 0 (5 - количество карточек = 1)


nextButton.addEventListener("click", ()=>{
    let hiddenCardIndex;
    // определяем индекс карточки, которую надо будет показать справа
    if (leftCardIndex+2>lastCardIndex) { // проверка на то, что следующей карточкой должна стать первая карточка
        hiddenCardIndex = leftCardIndex +2 - cards.length; 
    } else {
        hiddenCardIndex = leftCardIndex +2;
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

prevButton.addEventListener("click", ()=>{
    let leftHiddenCardIndex;
    let rightHiddenCardIndex;
    
    if (leftCardIndex === 0) {
        leftHiddenCardIndex = lastCardIndex;
    } else {
        leftHiddenCardIndex = leftCardIndex - 1;
    }
    if (leftCardIndex+1>lastCardIndex) {
        rightHiddenCardIndex = leftCardIndex +1 - cards.length;
    } else {
        rightHiddenCardIndex = leftCardIndex +1;
    }


    let leftCard = cards[leftHiddenCardIndex];
    let rightCard = cards[rightHiddenCardIndex];
    leftCard.classList.toggle("hidden");
    rightCard.classList.toggle("hidden");
    cardsWrapper.removeChild(leftCard);
    cardsWrapper.insertAdjacentElement('afterbegin', leftCard);


    if (leftCardIndex === 0) {
        leftCardIndex = lastCardIndex;
    } else {
        leftCardIndex--;
    }
});