
window.onload=function(){

let hambutton = document.querySelector('.hambutton');
const mainnav = document.querySelector('.nava')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


document.querySelector('#lastupdate').textContent = document.lastModified;
var year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `${fulldate}`;
}


window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};