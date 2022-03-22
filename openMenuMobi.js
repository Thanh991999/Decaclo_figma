const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// variable menu

const menuOpen = $('.menu-icon');
const menuClose = $('.close-icon');




// close-open menu mobile 

menuOpen.addEventListener('click',function() {
    document.querySelector('.header-list').style.transition = 'all 0.5s ease';
    document.querySelector('.header-list').style.height = '367px';
    menuOpen.classList.add('disabled');
    menuClose.classList.add('active');
    document.querySelector('.overlay').style.display='block';

})

menuClose.addEventListener('click',function() {
    document.querySelector('.header-list').style.height = '0';
    menuOpen.classList.remove('disabled');
    menuClose.classList.remove('active');
    document.querySelector('.overlay').style.display='none';

})



