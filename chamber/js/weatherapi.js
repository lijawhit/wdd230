  import update_windchill from '../js/windchill.js';
  
  // select HTML elements to edit
  const currentTemp = document.querySelector('#current-temp');
  
  const currentWind = document.querySelector('#wind');
  
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  
  //API URL with arguments  
  const APIurl = 'https://api.openweathermap.org/data/2.5/weather?q=williamsburg&appid=4d8f272cf2208705e4404f7c9e164e21&units=imperial';

fetch(APIurl)
    .then((response) => response.json())
    .then((weatherinfo) => {
  
      console.log(weatherinfo); // this is temporary for development only
  
      //set temperature and temperature text color
      let temp = weatherinfo.main.temp.toFixed(0);
      currentTemp.innerHTML = `<strong>${temp}</strong>`;
  
      currentWind.innerHTML = `<strong>${weatherinfo.wind.speed.toFixed(0)}</strong>`;
      
      // weather icon
      const iconsrc = `https://openweathermap.org/img/w/${weatherinfo.weather[0].icon}.png`;
      const desc = weatherinfo.weather[0].description;
  
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
  
      // weather icon caption
      captionDesc.textContent = desc;
  
      update_windchill();
  
    });
  