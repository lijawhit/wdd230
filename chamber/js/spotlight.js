const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    
  });


  function displayspotlight(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h3 = document.createElement('h3');
    let hr = document.createElement('hr');
    let p = document.createElement('p');
    let a = document.createElement('a');
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    iconImg.setAttribute('src', business.imageurl);
    iconImg.setAttribute('alt', `Icon image for ${business.name}`);
    iconImg.setAttribute('loading', 'lazy');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${business.name} &copy;`;

    // Change the textContent and href property of the a element to contain the business website
    a.textContent = 'Website Link';
    a.setAttribute('href', business.website);

      
    // Change the textContent property of the p1 element to contain the business address
    p.textContent = `${business.phone} | ${a}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(iconImg);
    card.appendChild(hr)
    card.appendChild(p);
  
    // Add/append the existing HTML div with the '.directory-grid' class with the section(card)
    document.querySelector('.spotlights').appendChild(card);
  }

