const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// variable icon heart
const btnCategory = $$('.btn-category');
const productsHeart = $$('.feature-product .feature-icon');
const productHeartFill = $$('.feature-product .feature-icon--active');

// variable menu

const menuOpen = $('.menu-icon');
const menuClose = $('.close-icon');
// variable slider

const nextBtn = $('.next-btn');
const preBtn= $('.pre-btn');
const boxImages = $$('.slider-contain');
const mainSlide = $('.hero-container__wrap');
const size = boxImages[0].offsetWidth;

btnCategory.forEach(function(ele)
{
    ele.style.left = `calc(50% - ${ele.clientWidth/2}px)`;
})

productsHeart.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.add('disable');
        productHeartFill[index].classList.add('active');
    }
   
})

productHeartFill.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.remove('active');
        productsHeart[index].classList.remove('disable');
    }
   
})

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

// slider

function silderCustomer() {
    let counter = 1;

    mainSlide.style.transform = `translateX(${-size * counter}px)`;
    
    nextBtn.addEventListener('click', function() {
        if(counter >= boxImages.length) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        mainSlide.style.transform = `translateX(${-size * counter}px)`
       
    });

    preBtn.addEventListener('click', function() {
        if(counter <= 0) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        mainSlide.style.transform = `translateX(${-size * counter}px)`
       
    });

    mainSlide.addEventListener('transitionend', function() {
        if(boxImages[counter].id === 'lastClone') {
            mainSlide.style.transition = "none";
            counter = boxImages.length - 2;
            mainSlide.style.transform = `translateX(${-size * counter}px)`

        }
        if(boxImages[counter].id === 'firstClone') {
            console.log(counter)
            mainSlide.style.transition = "none";
            counter = boxImages.length - counter;
            mainSlide.style.transform = `translateX(${-size * counter}px)`

        }
    })
}

silderCustomer();





