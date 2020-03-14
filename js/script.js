const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";


fetch(url)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    
    data.map(element => {
      const { photo, property_type, name, price } = element;

      div = document.createElement("div");
      div.className = "container";

      card = document.createElement("div");
      card.className = "col-md-4";
      

      image = document.createElement("img");
      image.className = "card-img-top";
      image.src = photo; 


      cardBody = document.createElement("div");
      cardBody.className = "card-body";

      cardText = document.createElement("div");
      cardText.className = "card-text";



      propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;

      propertyName = document.createElement("h3");
      propertyName.className = "property-name";
      propertyName.innerHTML = name;
      
      propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = "Total de R$ " + price;

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);

    });
  });