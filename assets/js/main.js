const items = document.querySelectorAll('.novelty__item');
const btnPrev = document.querySelector('.arrow__prev--second');
const btnNext = document.querySelector('.arrow__next--second');
const itemsCount = items.length;

let i = 0;


function myFoo1() {
    items[i++].style.display = 'none';
    if (i >= itemsCount) {
        i = 0;
    };
    items[i].style.display = 'block';
}

btnNext.addEventListener('click', myFoo1);


function myFoo2() {
    items[i--].style.display = 'none';
    if (i === -1) {
        i = itemsCount;
        i--;
    };
    items[i].style.display = 'block';
}

btnPrev.addEventListener('click', myFoo2);
