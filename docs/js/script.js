/* Гамбургер */
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu_close');
        menuList = document.querySelector('.menu_list');

        items = menuList.querySelectorAll('.menu_link');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('_lock');
});

for (let i=0; i< items.length; i++){
    items[i].addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.classList.remove('_lock');
    });
}



/* Проценты навыков */
const number = document.querySelectorAll('.progress_item-number'),
      lines = document.querySelectorAll('.progress_item-line span');


number.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});