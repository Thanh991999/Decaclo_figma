// click appear menu-list


const setting = $('.user-settings');

setting.addEventListener('click', function() {
    $('.header-setting').classList.toggle('active');
});

const notify = $('.notify');

notify.addEventListener('click', function() {
    $('.header__notify').classList.toggle('active');
});

const cart = $('.cart-has-product');

cart.addEventListener('click', function() {
    $('.header__cart-list').classList.toggle('active');
});

const toolSearch = $('.tool-search img');

toolSearch.addEventListener('click', function() {
    $('.search-form').classList.toggle('active');
});