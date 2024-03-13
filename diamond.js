document.addEventListener('DOMContentLoaded', function() {
    const bannerContent = document.querySelector('.banner__content')
    const diamonds = document.querySelectorAll('.diamond');
    let activeDiamond = null;

    // При загрузке страницы делаем первый ромбик активным
    if (diamonds.length > 0) {
        diamonds[0].classList.add('active');
        activeDiamond = diamonds[0];
    }

    diamonds.forEach(diamond => {
        diamond.addEventListener('click', function() {
            // Если уже есть активный ромбик, снимаем с него класс active
            if (activeDiamond) {
                activeDiamond.classList.remove('active');
            }
            // Делаем текущий ромбик активным
            this.classList.add('active');
            activeDiamond = this;

            const imgUrl = activeDiamond.getAttribute("data-imageUrl")
            bannerContent.style.background = `url(${imgUrl}) center center no-repeat`

            // Здесь можно добавить код для изменения изображения баннера
            // Например, измените атрибут src у изображения внутри .banner__content
            // document.querySelector('.banner__content img').src = 'путь/к/новому/изображению.jpg';
        });
    });
});