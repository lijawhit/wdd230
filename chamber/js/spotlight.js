const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    choosespotlight(businesses)
  });


  function choosespotlight(businesses){

    const filteredMembership = businesses.filter(function (business) {
        return business.membership == "gold" || business.membership == "silver";
    });

    // shuffle filteredMambership
    const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

    // use first three shuffled members to populate spotlight elements
    displayspotlight(shuffledMembership[0], "#spotlight1");
    displayspotlight(shuffledMembership[1], "#spotlight2");

    //slice off the two we've just used from the list
    const slicedMembership = shuffledMembership.slice(2);

    // make sure the last spotlight is gold
    const filteredGold = slicedMembership.filter(function (business) {
      return business.membership == "gold";
    });

  }


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
    h3.innerHTML = `${business.name} &copy;`;

    // Change the textContent and href property of the a element to contain the business website
    a.textContent = 'Website Link';
    a.setAttribute('href', business.website);

      
    // Change the textContent property of the p1 element to contain the business address
    p.textContent = `${business.phone}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(iconImg);
    card.appendChild(hr);
    card.appendChild(p);
    card.appendChild(a);
  
    // Add/append the existing HTML div with the '.directory-grid' class with the section(card)
    document.querySelector('.spotlights').appendChild(card);
  }

