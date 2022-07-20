import choosespotlight from '../js/spotlight';


const requestURL2 = 'json/temples.json';

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    alert(temples)
  });

function alert(temple){
    const API = `https://api.weatherapi.com/v1/forecast.json?key=087fe58ffb314648b00140139221907&q=${temple.weatherId}&days=3&aqi=no&alerts=yes`;
    
    fetch(API, temple)
    .then((response) => response.json())
    .then((weatherinfo) => { 

    });
};