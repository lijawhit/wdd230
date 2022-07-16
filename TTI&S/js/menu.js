const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

let hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('nav')

menuBtn.addEventListener('click', () => {mainnav.classList.toggle('slide')}, false);
