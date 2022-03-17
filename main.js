const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnCategory = $$('.btn-category')

btnCategory.forEach(function(ele)
{
    ele.style.left = `calc(50% - ${ele.clientWidth/2}px)`;
})