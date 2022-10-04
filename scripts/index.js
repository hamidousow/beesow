const btnOpenMenu = document.getElementById('navigation_burger-btn');
const btnCloseMenu = document.querySelector('#container-close-button');
const asideMenu = document.getElementById('navigation_aside-menu');
const menu = document.getElementById('navigation_menu');

btnOpenMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('active')
}












