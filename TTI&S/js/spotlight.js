const requestURL = 'json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    choosespotlight(temples)
  });


function choosespotlight(temples){

  const firstDay = new Date();
  const secondDay = new Date(firstDay)
  const thirdDay = new Date(firstDay)
  const fourthDay = new Date(firstDay)
  secondDay.setDate(secondDay.getDate() + 1)
  thirdDay.setDate(thirdDay.getDate() + 2)
  const day1 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(firstDay);
  const day2 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(secondDay);  
  const day3 = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(thirdDay);

  let templesCount = Object.keys(temples).length;
  
  let jsonTemple = getId(firstDay, templesCount)
  // let jsonTemple = 3
  
  displayspotlight(temples[jsonTemple]);
  displayweather(temples[jsonTemple], day1, "box1", 0);
  displayweather(temples[jsonTemple], day2, "box2", 1);
  displayweather(temples[jsonTemple], day3, "box3", 2);

}

function getId(firstDay, templesCount) {
  
  let min = firstDay.getMinutes()
  let sec = firstDay.getSeconds()

  let time = min

  console.log(`Current Minute: ${min}`)
  console.log(`Current Second: ${sec}`)
  console.log(`Current Temple Count: ${templesCount}`)

  var allLists = []

  let listLength = 60 / templesCount

  
  console.log(`List Length: ${listLength}`)

  let og = -1
  
  for (let value = 0; value < templesCount; value++) {
    base = og + 1
    templeMinutesList = [base]
    for (let value = 0; value < listLength; value++) {
      minute = base + templesCount
      templeMinutesList.push(minute)
      base = minute
    }
    og++
    allLists.push(templeMinutesList)
  } 
  

  console.log(allLists)

  let jsonTemple

  for (let value = 0; value < templesCount; value++) {
        
    minutes = allLists[value];

    listId = value

    minutesLength = minutes.length;
    
    console.log(`List ID: ${listId}\nMinutes in List: ${minutes}`)

    for (let value = 0; value < minutes.length; value++) {

      minute = minutes[value]

      console.log(minute)
      if ((`${minute}`) == (`${time}`)) {
        jsonTemple = listId
        console.log(`UPLOADED SPOTLIGHT TEMPLE FROM LIST: ${jsonTemple}`)
      };
    };
  };

  console.log(`JsonTemple Number: ${jsonTemple}`)
  return jsonTemple;
};


function displayspotlight(temple) {
  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let p = document.createElement('p');

  h2.innerHTML = `Temple Highlight<br><em>${temple.city}, ${temple.country}</em>`

  img.setAttribute('src', temple.image);
  img.setAttribute('alt', `Icon image for ${temple.name}`);
  img.setAttribute('loading', 'lazy');

  p.textContent = temple.about;

  document.querySelector('.spotlight-temple').appendChild(h2);
  
  document.querySelector('.spotlight-temple').appendChild(img);
  document.querySelector('.spotlight-temple').appendChild(p);
  
  let weatherH2 = document.createElement('h2')
  
  weatherH2.innerHTML = `Weather in ${temple.city}`;

  document.querySelector('.spotlight-weather').appendChild(weatherH2);
}

function displayweather(temple, day, box, forecastday) { 

  const APIurl = `https://api.weatherapi.com/v1/forecast.json?key=087fe58ffb314648b00140139221907&q=${temple.weatherId}&days=3&aqi=no&alerts=yes`;
  
  fetch(APIurl, temple)
  .then((response) => response.json())
  .then((weatherinfo) => {
  
    console.log(weatherinfo);

    let card = document.createElement('div');
    let img = document.createElement('img');
    let temp = document.createElement('p');
    let caption = document.createElement('p');      
    let humidity = document.createElement('p');
    let date = document.createElement('p');   
    
    card.setAttribute('class', `weather-section ${box}`);


    let minTemp = weatherinfo.forecast.forecastday[forecastday].day.mintemp_f.toFixed(0);
    let maxTemp = weatherinfo.forecast.forecastday[forecastday].day.maxtemp_f.toFixed(0);
    temp.innerHTML = `<strong>${maxTemp} /<br>${minTemp}&#176;F</strong>`;
    
    const iconsrc = weatherinfo.forecast.forecastday[forecastday].day.condition.icon;
    const desc = weatherinfo.forecast.forecastday[forecastday].day.condition.text;

    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);

    caption.textContent = desc;

    let humid = weatherinfo.forecast.forecastday[forecastday].day.avghumidity;
    humidity.innerHTML = `Humidity: ${humid}% `;

    date.innerHTML = day;

    card.appendChild(img);
    card.appendChild(temp);
    card.appendChild(caption);
    card.appendChild(humidity);
    card.appendChild(date);

    document.querySelector('.spotlight-weather').appendChild(card);

  });
};

// function alert(temple, day, forecastday) {

//   const APIurl = `https://api.weatherapi.com/v1/forecast.json?key=087fe58ffb314648b00140139221907&q=${temple.weatherId}&days=3&aqi=no&alerts=yes`;
  
//   fetch(APIurl, temple)
//   .then((response) => response.json())
//   .then((weatherinfo) => {
    
//     let alertsCount = Object.keys(weatherinfo.alerts.alert).length;

//     console.log(`Alerts Count: ${alertsCount}`)
    



//     let msgType = weatherinfo.alerts.alert.msgtype

//     if (msgType === "Alert") {
//     console.log()
//     };
//   });
// };
