'use strict'; 
//
var CarLot = (function(originalCarLot) {
  originalCarLot.borderAndBackground = function() {
    var theCards = document.getElementsByClassName('padding');
    var clickedOn = event.currentTarget;
            for (var i = 0; i < theCards.length; i++) {
              borderGrey(i, theCards, clickedOn);
            }
            edit(clickedOn);
  };
  function borderGrey(i, card, clickedOn) {
      if (card[i] === clickedOn) {
          card[i].classList.add("grey-border");
      } if (card[i] !== clickedOn && card[i].classList.contains("grey-border")) {
          card[i].classList.remove("grey-border");
      }
  }
  function edit(clicked) {
    let search = document.getElementById("form-control");
      search.focus();
      search.value = "";
      search.addEventListener("keydown", function() {
          if (clicked.classList.contains("grey-border")) {
              clicked.childNodes[7].innerHTML = search.value;
          }
      });
  }

  return originalCarLot;

})(CarLot || {}); 