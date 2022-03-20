const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listQuestion = $$('.list-questions__item');
const questionMore = $$('.list-questions__title span');
console.log(questionMore)
const solve = $$('.solve');
console.log(solve)


listQuestion.forEach(function(ele, index)
{
    ele.addEventListener('click', function(e){
        if(questionMore[index].innerText === '+'){
            questionMore[index].innerHTML = '-';
            solve[index].style.height = '446px';
        }
        else {
            questionMore[index].innerHTML = '+';
            solve[index].style.height = '0';

        }
        solve[index].style.transition = 'all 0.5s ease';
    })
})