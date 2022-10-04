
const btn = document.querySelector('#container-burger');
const navSideBar = document.querySelector('.nav-sidebar');
/*const menuMobile = document.querySelector('.menu-mobile');*/
const closeBtn = document.querySelector('#container-close-button');
const bgSideMenu = document.getElementById('bgSideMenu');
const navHover = document.querySelector("nav-bg");


btn.addEventListener('click', () => {
    /*console.log('Yes ! ');*/
    navSideBar.classList.add('show'); 
    navSideBar.style.width = "65%";
    navSideBar.style.transition = "0.5s"
    btn.style.display = "none";
    closeBtn.style.display = "block";      
});

closeBtn.addEventListener('click', () => {    
    navSideBar.classList.remove('show');  
    navSideBar.style.width = "0"; 
    navSideBar.style.transition = "0.5s";
    btn.style.display = "block";
    closeBtn.style.display = "none";      
});










