const menuBtn = document.querySelector('.menu-btn');
const blurDiv = document.querySelector('.blurDiv');
let menuOpen = false;

blurDiv.addEventListener('click', () => menuFunction());
menuBtn.addEventListener('click', () => menuFunction());


function menuFunction(){

    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        
        document.querySelector('.blurDiv').classList.add('blur');

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        
        document.querySelector('.blurDiv').classList.remove('blur');
    }
};
  
const mainnav = document.querySelector('nav')
blurDiv.addEventListener('click', () => navSlide())
menuBtn.addEventListener('click', () => navSlide());



function navSlide() {
    mainnav.classList.toggle('slideHorizontal')
}


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
    body.classList.add("top-padding");
  } else {
    header.classList.remove("sticky");
    body.classList.remove("top-padding");
  }
};

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(a => {
    if(a.href.includes(`${activePage}`)){
        a.classList.add('active');
    };
});


document.querySelector('#lastupdate').textContent = document.lastModified;
var year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `${fulldate}`;

function dateTime() {
    return new Date().toLocaleString();
  }
  //store the time the page was loaded inside the form data
document.querySelector("#curtime").value =  dateTime();
