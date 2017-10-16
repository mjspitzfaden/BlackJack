var playerHand = [];
var dealHand = [];
var deck = deckOfCards();

// Deals a card for either the dealer or the player
function dealACard (playerType){
  var card = deck.pop()
  var points = 0;
if (playerType === '#dealer-hand'){
   dealHand.push(card);
   points = calculatePoints(dealHand);
}
else if (playerType === '#player-hand'){
     playerHand.push(card);
     points = calculatePoints(playerHand);
}
if (dealHand.length == 1){
 card.image = 'images/H.png';
}
  $(playerType).append(
    '<img src="' + card.image + '">'
  )
return points
}






// Returns points of the persons array
function calculatePoints(array) {
  var points = 0;
  for (var i = 0; i < array.length; i++) {

    if ((array[i].point === 1) && (points < 11)){
        array[i].point = 11;}


    points += array[i].point;
    console.log(array[i]);
  }
  return points;
};


// Shuffles the array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function startGame(){
  deck = shuffleArray(deck);
  console.log(deck);
  return deck;
}



function ifBusted(points){
if (points > 21){
  return 1;
}
else {
  return 0;
}


}


// Generates a number from 1 to 52
function deckOfCards(){
// 4 A's
var aceOfDiamonds = { point: 1,  suit: 'diamonds', image:  'images/ace_of_diamonds.png' };
var aceOfSpades = { point: 1,  suit: 'spades' , image:  'images/ace_of_spades.png'};
var aceOfHearts= { point: 1,  suit: 'hearts' , image:  'images/ace_of_hearts.png'};
var aceOfClubs = { point: 1,  suit: 'clubs' , image:  'images/ace_of_clubs.png'};
// 4 K's
var kingOfDiamonds =  { point: 10, suit: 'diamonds', image:  'images/king_of_diamonds.png'};
var kingOfSpades =  { point: 10, suit: 'spades', image:  'images/king_of_spades.png'};
var kingOfHearts =  { point: 10, suit: 'hearts', image:  'images/king_of_hearts.png'};
var kingOfClubs =  { point: 10, suit: 'clubs', image:  'images/king_of_clubs.png'};
// 4 Q's
var queenOfDiamonds =  { point: 10, suit: 'diamonds', image:  'images/queen_of_diamonds.png'};
var queenOfSpades =  { point: 10, suit: 'spades', image:  'images/queen_of_spades.png'};
var queenOfHearts =  { point: 10, suit: 'hearts', image:  'images/queen_of_hearts.png'};
var queenOfClubs =  { point: 10, suit: 'clubs', image:  'images/queen_of_clubs.png'};
// 4 J's
var jackOfDiamonds =  { point: 10, suit: 'diamonds', image:  'images/jack_of_diamonds.png'};
var jackOfSpades =  { point: 10, suit: 'spades', image:  'images/jack_of_spades.png'};
var jackOfHearts =  { point: 10, suit: 'hearts', image:  'images/jack_of_hearts.png'};
var jackOfClubs =  { point: 10, suit: 'clubs', image:  'images/jack_of_clubs.png'};
// 4 10's
var tenOfDiamonds =  { point: 10, suit: 'diamonds', image:  'images/10_of_diamonds.png'};
var tenOfSpades =  { point: 10, suit: 'spades', image:  'images/10_of_spades.png'};
var tenOfHearts =  { point: 10, suit: 'hearts', image:  'images/10_of_hearts.png'};
var tenOfClubs =  { point: 10, suit: 'clubs', image:  'images/10_of_clubs.png'};
// 4 9's
var nineOfDiamonds =  { point: 9, suit: 'diamonds', image:  'images/9_of_diamonds.png'};
var nineOfSpades =  { point: 9, suit: 'spades', image:  'images/9_of_diamonds.png'};
var nineOfHearts =  { point: 9, suit: 'hearts', image:  'images/9_of_diamonds.png'};
var nineOfClubs =  { point: 9, suit: 'clubs', image:  'images/9_of_clubs.png'};
//4 8's
var eightOfDiamonds =  { point: 8, suit: 'diamonds', image:  'images/8_of_diamonds.png'};
var eightOfSpades =  { point: 8, suit: 'spades', image:  'images/8_of_spades.png'};
var eightOfHearts =  { point: 8, suit: 'hearts', image:  'images/8_of_hearts.png'};
var eightOfClubs =  { point: 8, suit: 'clubs', image:  'images/8_of_clubs.png'};
//4 7's
var sevenOfDiamonds =  { point: 7, suit: 'diamonds', image:  'images/7_of_diamonds.png'};
var sevenOfSpades =  { point: 7, suit: 'spades', image:  'images/7_of_spades.png'};
var sevenOfHearts =  { point: 7, suit: 'hearts', image:  'images/7_of_hearts.png'};
var sevenOfClubs =  { point: 7, suit: 'clubs', image:  'images/7_of_clubs.png'};
//4 6's
var sixOfDiamonds =  { point: 6, suit: 'diamonds', image:  'images/6_of_diamonds.png'};
var sixOfSpades =  { point: 6, suit: 'spades', image:  'images/6_of_spades.png'};
var sixOfHearts =  { point: 6, suit: 'hearts', image:  'images/6_of_hearts.png'};
var sixOfClubs =  { point: 6, suit: 'clubs', image:  'images/6_of_clubs.png'};
//4 5's
var fiveOfDiamonds =  { point: 5, suit: 'diamonds', image:  'images/5_of_diamonds.png'};
var fiveOfSpades =  { point: 5, suit: 'spades', image:  'images/5_of_spades.png'};
var fiveOfHearts =  { point: 5, suit: 'hearts', image:  'images/5_of_hearts.png'};
var fiveOfClubs =  { point: 5, suit: 'clubs', image:  'images/5_of_clubs.png'};
//4 4's
var fourOfDiamonds =  { point: 4, suit: 'diamonds', image:  'images/4_of_diamonds.png' };
var fourOfSpades =  { point: 4, suit: 'spades', image:  'images/4_of_spades.png'};
var fourOfHearts =  { point: 4, suit: 'hearts', image:  'images/4_of_hearts.png'};
var fourOfClubs =  { point: 4, suit: 'clubs', image:  'images/4_of_clubs.png'};
//4 3's
var threeOfDiamonds =  { point: 3, suit:'diamonds', image:  'images/3_of_diamonds.png'};
var threeOfSpades =  { point: 3, suit:  'spades', image: 'images/3_of_spades.png'};
var threeOfHearts =  { point: 3, suit: 'hearts', image: 'images/3_of_hearts.png'};
var threeOfClubs =  { point: 3, suit: 'clubs', image: 'images/3_of_clubs.png'};
// 2's
var twoOfDiamonds =  { point: 2, suit: 'diamonds', image: 'images/2_of_diamonds.png' };
var twoOfSpades =  { point: 2, suit: 'spades', image: 'images/2_of_spades.png'};
var twoOfHearts =  { point: 2, suit: 'hearts', image: 'images/2_of_hearts.png'};
var twoOfClubs =  { point: 2, suit: 'clubs', image: 'images/2_of_clubs.png'};

var deck = [aceOfDiamonds, aceOfSpades, aceOfHearts, aceOfClubs,
           kingOfDiamonds, kingOfSpades, kingOfHearts, kingOfClubs,
           queenOfDiamonds, queenOfSpades, queenOfHearts, queenOfClubs,
           jackOfDiamonds, jackOfSpades, jackOfHearts, jackOfClubs,
           tenOfDiamonds, tenOfSpades, tenOfHearts, tenOfClubs,
           nineOfDiamonds, nineOfSpades, nineOfHearts, nineOfClubs,
           eightOfDiamonds, eightOfSpades, eightOfHearts, eightOfClubs,
           sevenOfDiamonds, sevenOfSpades, sevenOfHearts, sevenOfClubs,
           sixOfDiamonds, sixOfSpades, sixOfHearts, sixOfClubs,
           fiveOfDiamonds, fiveOfSpades, fiveOfHearts, fiveOfClubs,
           fourOfDiamonds, fourOfSpades, fourOfHearts, fourOfClubs,
           threeOfDiamonds, threeOfSpades, threeOfHearts, threeOfClubs,
           twoOfDiamonds, twoOfSpades, twoOfHearts, twoOfClubs];

return deck;
}
