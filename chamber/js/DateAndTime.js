
window.onload=function(){

	const now = new Date();

	let hambutton = document.querySelector('.hambutton');
	const mainnav = document.querySelector('.nava')

	hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

	const announcementbanner = document.querySelector(".announcement-banner");
	if( now.getDay() === 1 || now.getDay() === 2){
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

};

window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};

