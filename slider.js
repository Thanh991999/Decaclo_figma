
const nextBtn = $('.next-btn');
const preBtn= $('.pre-btn');
const boxImages = $$('.slider-contain');
const mainSlide = $('.hero-container__wrap');
const size = boxImages[0].offsetWidth;

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


