const btnToggleMenu = document.getElementById('navigation_burger-btn');
const asideMenu = document.getElementById('navigation_aside-menu');
const menu = document.getElementById('navigation_menu');

btnToggleMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('active')
}












