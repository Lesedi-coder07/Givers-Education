const open_nav = document.querySelector('.menu_icon');
const close_nav = document.querySelector('#close_nav_btn');
const mobile_nav = document.querySelector('#overlay');


open_nav.addEventListener('click',   () => {
    mobile_nav.style.display = 'flex';
})

mobile_nav.addEventListener('click', () => {
    mobile_nav.style.display = 'none';

} )
