let articleTypeButton = document.querySelector('.filter__link--selecteed');
let articleType = articleTypeButton.getAttribute("data-filter-type");
let searchValue = "";

const articles = document.querySelectorAll('.rec__item');
const searchInput = document.querySelector('.services__search');
const articlesTypesContainer = document.querySelector(".menu__filter");

const filterCards = () => {
    let filteredCards = articles;
    if (!searchValue && articleType === "all") {
        for (const card of filteredCards) {
            card.style.display = 'grid'; // делаем видимыми все карточки
        }
        return;
    }

    for (const card of filteredCards) {
        card.style.display = 'none';
    }
    if (articleType !== "all") {
        let result = [];
        for (const card of filteredCards) {
            const cardTypes = card.getAttribute("data-article-type");
            if (cardTypes.includes(articleType)) {
                result.push(card)
            }
        }
        filteredCards = result;
    }
    if (searchValue) {
        let result = [];
        for (const card of filteredCards) {
            const cardTitle = card.querySelector(".rec__title").textContent.toUpperCase();
            if (cardTitle.includes(searchValue.toUpperCase())) {
                result.push(card)
            }
        }
        filteredCards = result
    }
    for (const card of filteredCards) {
        card.style.display = 'grid';
    }
};

articlesTypesContainer.addEventListener("click", (e) => {
    const type = e.target.closest(".filter__link");

    if (!type) {
        return;
    }

    const typeValue = type.getAttribute("data-filter-type")
    const isTypeed = articleType === typeValue;




    if (isTypeSelected) {
        return;
    } else {
        articleType = typeValue;
        type.classList.add("filter__link--selecteed");
        articleTypeButton.classList.remove("filter__link--selecteed");
        articleTypeButton = type;

    }
    return filterCards();
});



searchInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') { //проверяем, нажали на ентер или нет
        //нажали на ентер
        e.preventDefault();
        searchValue = e.target.value; //вытаскиваем из инпута фразу, которую ввел пользователь
        filterCards(); // запускаем фильтр карточек
        searchInput.blur(); // снимаем фокус с инпута
    }
});
