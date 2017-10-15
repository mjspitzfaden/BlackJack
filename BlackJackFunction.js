
// Deals a card for either the dealer or the player
function dealACard (playerType, image){
  $(playerType).append(
    '<img src="' + image + '">'
  )
}

function getValue (card) {
if (card == "images/2_of_clubs.png"){
  return 2;
}
}
// Generates a number from 1 to 52
function GenerateCard (){

  var cardNumber = Math.floor((Math.random() * 52) + 1)

  switch (cardNumber){
        case 1: var card = {image:"", value:50};




  }



return cardNumber
}


console.log(GenerateCard());
