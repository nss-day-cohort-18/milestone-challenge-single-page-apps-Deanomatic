'use strict';
var CarLot = (function(originalCarLot) {
  originalCarLot.activateEvents = function(event) {
    var numOfCards = document.getElementsByClassName('padding');
    for (var i = 0; i < numOfCards.length; i++) {
      numOfCards[i].addEventListener("click", CarLot.borderAndBackground);
    }
  };
  
  return originalCarLot;

})(CarLot || {});