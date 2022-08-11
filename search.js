

function addListeners(){
    const searchBtn = document.querySelector('.header__search');
    const searchForm = document.querySelector('.header__form');
    const escBtn = document.querySelector('.header__esc_button');

    searchBtn.addEventListener('click', function () {
        searchForm.classList.toggle('display-none');
    });

    escBtn.addEventListener('click', function() {
        searchForm.classList.toggle('display-none');
    });
}


addListeners();

