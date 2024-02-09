/* Гамбургер */
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


/* Проценты навыков */
const number = document.querySelectorAll('.progress_item-number'),
      lines = document.querySelectorAll('.progress_item-line span');


number.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});