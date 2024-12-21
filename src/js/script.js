// humburger

const humb = document.querySelector('#humb');
const navMenu = document.querySelector('#nav-menu');

humb.addEventListener('click', function() {
    humb.classList.toggle('humb-active');
    navMenu.classList.toggle('hidden');
});

// navbar

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else (
        header.classList.remove('navbar-fixed')
    );
};