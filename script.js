const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.addEventListener('click', function (event) {
    event.preventDefault(); 
    navbarNav.classList.toggle('active');
});