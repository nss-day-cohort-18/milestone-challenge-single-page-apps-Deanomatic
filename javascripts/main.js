"use strict";  
//Global variable that is grabbing the id of output div
let cardOutput = document.getElementById("output-cards");
//
function makeCards(cars) {
	let counter = 1; 
	let carCard = document.createElement("div");
	let fill;
	  for (fill in cars) {
	    console.log("cars", cars);
	    let fillCard = '';
	    let carItem = cars[fill];
	    fillCard += 
	    `<div>
	    	<div class="col-md-4">
		        <div class="padding">
		             <h4 class="text-center">${carItem.make} ${carItem.model}</h4>
		             <h5>${carItem.year}</h5>
		             <h5>Only $${carItem.price}</h5>
		             <p title="click to edit description">${carItem.description}</p>
		        </div>
	    	</div>
	    </div>`;
	    carCard.innerHTML += fillCard;
	    cardOutput.append(carCard);
	    var count = counter % 3;
	    if (count === 0) {
	      carCard = document.createElement('div');  
	      carCard.classList.add(`container`);
	      carCard.classList.add(`row`);
	    }
	    counter++;
	  }

  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();


