const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let bdate = document.createElement('p');
    let bplace = document.createElement('p');
   
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bdate.textContent = `Date of Birth: ${prophet.bdate}`;
    bdate.textContent = `Place of Birth: ${prophet.bplace}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `Portait of  ${prophet.name} ${prophet.lastname} - ${prophet.order}th  Latter-day President`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);    
    card.appendChild(bdate);  
    card.appendChild(bplace);
    card.appendChild(image);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }