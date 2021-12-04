const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
//counters 
const width = document.querySelectorAll('.technologies__counters-percent'),
    lines = document.querySelectorAll('.technologies__counters-scale .technologies__counters-scale_percent');
    
    width.forEach((item, i) => {
        lines[i].style.width = item.innerHTML
    });
