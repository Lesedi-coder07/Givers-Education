const open_nav = document.querySelector('.menu_icon');
const close_nav = document.querySelector('#close_nav_btn');
const mobile_nav = document.querySelector('#overlay');
const nav_header = document.querySelector("#header__navbar")

open_nav.addEventListener('click',   () => {
    mobile_nav.style.display = 'flex';
    nav_header.style.display = 'none'
    
})

mobile_nav.addEventListener('click', () => {
    mobile_nav.style.display = 'none';
     nav_header.style.display = 'flex'


} )
close_nav.addEventListener('click', () => {
    mobile_nav.style.display = 'none';
     nav_header.style.display = 'flex'
})