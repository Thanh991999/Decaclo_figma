

const listQuestion = $$('.list-questions__item');
const questionMore = $$('.list-questions__title span');
const solve = $$('.solve');

// active menu 

const menuItem = $$('.fqa-menu__item');
const menuLink = $$('.fqa-menu__link');





const heightSolveEle = solve[2].clientHeight;
console.log(heightSolveEle)


listQuestion.forEach(function(ele, index)
{   solve[index].style.height = '0';
    document.querySelector('.solve.active').style.height = `${heightSolveEle}px`;

    ele.addEventListener('click', function(e){
        if(questionMore[index].innerText === '+'){
            questionMore[index].innerHTML = '-';
            solve[index].style.height = `${heightSolveEle}px`;

        }
        else {
            questionMore[index].innerHTML = '+';
            solve[index].style.height = '0';

        }
        solve[index].style.transition = 'all 0.5s ease';
    })
})


// menu

menuItem.forEach(function(ele, index){
    ele.addEventListener('click', function(e){
        document.querySelector('.active.fqa-menu__item').classList.remove('active');
        document.querySelector('.fqa-menu__link--active.fqa-menu__link').classList.remove('fqa-menu__link--active');

        ele.classList.add('active');
        menuLink[index].classList.add('fqa-menu__link--active');
    })
})