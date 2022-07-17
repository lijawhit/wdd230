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



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector("header");
var body = document.querySelector("body")

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    body.classList.add("top-padding")
  } else {
    header.classList.remove("sticky");
    body.classList.remove("top-padding")
  }
}