const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnCategory = $$('.btn-category');
const productsHeart = $$('.feature-product .feature-icon')
const productHeartFill = $$('.feature-product .feature-icon--active')

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


