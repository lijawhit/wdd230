
const now = new Date();

let hambutton = document.querySelector('.hambutton');
const mainnav = document.querySelector('.nava')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const announcementbanner = document.querySelector(".announcement-banner");
if( now.getDay() === 1 || now.getDay() === 2 || now.getDay() === 3){
announcementbanner.style.display = "flex";
}else{
announcementbanner.style.display = "none";
}


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
