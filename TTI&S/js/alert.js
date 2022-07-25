import {getDays, getId} from '../js/spotlight.js'

const url2 = 'json/temples.json';

fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    onLoad(temples)
  });



function onLoad(temples) {
    var showDiv;
    if(localStorage.getItem("showDiv") == null) {
        showDiv = true;
        console.log(showDiv)
    } else {
        showDiv = localStorage.getItem("showDiv")
    }

    if (showDiv) {
        getbadweather(temples)
    } else {
        document.querySelector(".alertBlur").remove;
        document.querySelector(".weather-warning-banner").remove;
    }

    var bannerButton = document.querySelector('.banner-button');
    bannerButton.addEventListener('click', () => closeWeatherAlert())
}

function closeWeatherAlert(){
    
    const alertblur = document.querySelector(".alertBlur");
    const badweatherbanner = document.querySelector(".weather-warning-banner");
    badweatherbanner.style.display = 'none';
    alertblur.style.display = 'none';
    localStorage.setItem('showDiv', false);
  };

function getbadweather(temples) {
  let days = getDays()
  let firstDay = days[0]

  let templesCount = Object.keys(temples).length;
  let jsonTemple = getId(firstDay, templesCount)

    // let jsonTemple = 3

  let temple = temples[jsonTemple]
  badWeather(temple)
}

function badWeather(temple) {
  const APIAlerturl = `https://api.weatherapi.com/v1/forecast.json?key=087fe58ffb314648b00140139221907&q=${temple.weatherId}&days=3&aqi=no&alerts=yes`;
  console.log(APIAlerturl)
  const badweatherbanner = document.querySelector(".weather-warning-banner");
  var alertBlur = document.querySelector('.alertBlur');
  fetch(APIAlerturl)
  .then((response) => response.json())
  .then((weatherinfo) => {
    console.log(`Testing "${weatherinfo.alerts.alert}"`)
    // IF THERE IS BAD WEATHER
    if(weatherinfo.alerts.alert != ""){
        const p = document.createElement('p');
        p.innerHTML = `EVENT: ${weatherinfo.alerts.alert[0].desc}`;
        badweatherbanner.appendChild(p);
        badweatherbanner.style.display = 'grid';
        alertBlur.style.display = 'block';
    };
  });
};





