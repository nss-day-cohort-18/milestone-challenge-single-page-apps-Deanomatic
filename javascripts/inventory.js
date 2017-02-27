"use strict";
//this iffe gets the info from the json file AND loads it to the page.
var CarLot = (function () { 
  var inventory;//var for the cars.
 	//returning the parsed cars
   return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', "../inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
        console.log('The eagle has landed!');
        var data = JSON.parse(event.target.responseText);
        console.log('can you hear me?', data);
        inventory = data.cars;
        console.log('yo cars?', inventory);
        makeCards(inventory);
      });
    },
    getInventory: function(callback) {
      return inventory;//returning the whole of what loadInventory did.
    }
  };

})(CarLot || {});