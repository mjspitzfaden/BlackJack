class Person{
constructor(person) {
  this.hand = new Hand();

}

// takes in a person and returns his points.
getPersonScore(){
var score = this.hand.getPoints();
return score;
}

ifBusted(){
if (this.getPersonScore() > 21){
  return 1;
}
else {
  return 0;
}
}
setHand(hand){
  this.hand = hand;
}



} // end of person class


class Card {
  constructor(point, suit, image) {
    this.point = point;
    this.suit = suit;
    this.image = image;
  }


  setPlayerImage(){

  $('#player-hand').append(
    '<img src="' + this.image + '">'
  )
  }

  setDealerImage(){

  $('#dealer-hand').append(
    '<img src="' + this.image + '">'
  )
  }




}  //end of card class





class Hand {
//creates an object of a hand
  constructor(hand) {
  this.hand = [];
}
// add a card to the deck
  addCard(card){
    this.hand.push(card);

  }
// gets returns the score.
  getPoints(){
    var points = 0;

    //length = length + 1;
    for (var i = 0; i < this.hand.length; i++) {

      if ((this.hand[i].point === 1) && (points < 11)){
          this.hand[i].point = 11;}


        points += this.hand[i].point;
        }
    return points;
}




} // end of hand class


class Deck {
  constructor(card) {
  this.deck = [];
}

setDeck(card){
  this.deck.push(card);
}



// deal a card;

getCard(){
let thecard = new Card();
thecard = this.deck.pop();
return thecard;
}


shuffle(){
    //aceOfDiamonds = new Card(1,'Diamonds', 'images/ace_of_diamonds.png');
    //console.log(aceOfDiamonds);
this.setCards();

  for (var i = this.deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
  }
  return this.deck;

}

setCards(){

  let aceOfDiamonds = new Card(1,'Diamonds', 'images/ace_of_diamonds.png');
  let aceOfSpades = new Card(1,'Spades', 'images/ace_of_diamonds.png' );
  let aceOfHearts = new Card(1,'Hearts', 'images/ace_of_diamonds.png' );
  let aceOfClubs = new Card(1,'Clubs', 'images/ace_of_diamonds.png' );
  let kingOfDiamonds = new Card(10,'Diamonds', 'images/ace_of_diamonds.png');
  let kingOfSpades = new Card(10,'Spades', 'images/ace_of_diamonds.png');
  let kingOfHearts = new Card(10, 'Hearts', 'images/ace_of_diamonds.png');
  let kingOfClubs = new Card(10, 'Clubs', 'images/ace_of_diamonds.png');
  let queenOfDiamonds = new Card(10, 'Diamonds', 'images/ace_of_diamonds.png');
  let queenOfSpades = new Card(10, 'Spades', 'images/ace_of_diamonds.png');
  let queenOfHearts = new Card(10, 'Hearts', 'images/ace_of_diamonds.png');
  let queenOfClubs =  new Card(10, 'Clubs', 'images/ace_of_diamonds.png');
  let jackOfDiamonds = new Card(10, 'Diamonds', 'images/ace_of_diamonds.png');
  let jackOfSpades = new Card(10, 'Spades', 'images/ace_of_diamonds.png');
  let jackOfHearts = new Card(10, 'Hearts', 'images/ace_of_diamonds.png' );
  let jackOfClubs = new Card(10, 'Clubs', 'images/ace_of_diamonds.png');
  let tenOfDiamonds = new Card(10, 'Diamonds', 'images/ace_of_diamonds.png');
  let tenOfSpades = new Card(10, 'Spades', 'images/ace_of_diamonds.png');
  let tenOfHearts = new Card(10, 'Hearts', 'images/ace_of_diamonds.png');
  let tenOfClubs = new Card(10, 'Clubs', 'images/ace_of_diamonds.png');
  let nineOfDiamonds = new Card(9, 'Diamonds', 'images/ace_of_diamonds.png');
  let nineOfSpades = new Card(9, 'Spades', 'images/ace_of_diamonds.png');
  let nineOfHearts = new Card(9, 'Hearts', 'images/ace_of_diamonds.png');
  let nineOfClubs = new Card(9, 'Clubs', 'images/ace_of_diamonds.png');
  let eightOfDiamonds = new Card(8, 'Diamonds', 'images/ace_of_diamonds.png');
  let eightOfHearts = new Card(8, 'Hearts', 'images/ace_of_diamonds.png');
  let eightOfSpades = new Card(8, 'Spades', 'images/ace_of_diamonds.png');
  let eightOfClubs= new Card(8, 'Clubs', 'images/ace_of_diamonds.png');
  let sevenOfDiamonds = new Card(7, 'Diamonds', 'images/ace_of_diamonds.png');
  let sevenOfSpades= new Card(7, 'Spades', 'images/ace_of_diamonds.png');
  let sevenOfHearts = new Card(7, 'Hearts', 'images/ace_of_diamonds.png');
  let sevenOfClubs = new Card(7, 'Clubs', 'images/ace_of_diamonds.png');
  let sixOfDiamonds = new Card(6, 'Diamonds', 'images/ace_of_diamonds.png');
  let sixOfSpades = new Card(6, 'Spades', 'images/ace_of_diamonds.png');
  let sixOfHearts = new Card(6, 'Hearts', 'images/ace_of_diamonds.png');
  let sixOfClubs = new Card(6, 'Clubs', 'images/ace_of_diamonds.png');
  let fiveOfDiamonds = new Card(5, 'Diamonds', 'images/ace_of_diamonds.png');
  let fiveOfSpades = new Card(5, 'Spades', 'images/ace_of_diamonds.png');
  let fiveOfHearts = new Card(5, 'Hearts', 'images/ace_of_diamonds.png');
  let fiveOfClubs = new Card(5, 'Clubs', 'images/ace_of_diamonds.png');
  let fourOfDiamonds = new Card(4, 'Diamonds', 'images/ace_of_diamonds.png');
  let fourOfSpades = new Card(4, 'Spades', 'images/ace_of_diamonds.png');
  let fourOfHearts = new Card(4, 'Hearts', 'images/ace_of_diamonds.png');
  let fourOfClubs = new Card(4, 'Clubs','images/ace_of_diamonds.png');
  let threeOfDiamonds = new Card(3, 'Diamonds', 'images/ace_of_diamonds.png');
  let threeOfSpades = new Card(3, 'Spades', 'images/ace_of_diamonds.png');
  let threeOfHearts = new Card(3, 'Hearts', 'images/ace_of_diamonds.png');
  let threeOfClubs = new Card(3, 'Clubs', 'images/ace_of_diamonds.png');
  let twoOfDiamonds = new Card(2, 'Diamonds', 'images/ace_of_diamonds.png');
  let twoOfSpades = new Card(2, 'Spades', 'images/ace_of_diamonds.png');
  let twoOfHearts = new Card(2, 'Hearts', 'images/ace_of_diamonds.png');
  let twoOfClubs = new Card(2, 'Clubs', 'images/ace_of_diamonds.png');

  this.setDeck(aceOfDiamonds);
  this.setDeck(aceOfSpades);
  this.setDeck(aceOfHearts);
  this.setDeck(aceOfClubs);
  this.setDeck(kingOfDiamonds);
  this.setDeck(kingOfSpades);
  this.setDeck(kingOfHearts);
  this.setDeck(kingOfClubs);
  this.setDeck(queenOfDiamonds);
  this.setDeck(queenOfSpades);
  this.setDeck(queenOfHearts);
  this.setDeck(queenOfClubs);
  this.setDeck(jackOfDiamonds);
  this.setDeck(jackOfSpades);
  this.setDeck(jackOfHearts);
  this.setDeck(jackOfClubs);
  this.setDeck(tenOfDiamonds);
  this.setDeck(tenOfSpades);
  this.setDeck(tenOfHearts);
  this.setDeck(tenOfClubs);
  this.setDeck(nineOfDiamonds);
  this.setDeck(nineOfSpades);
  this.setDeck(nineOfHearts);
  this.setDeck(nineOfClubs);
  this.setDeck(eightOfDiamonds);
  this.setDeck(eightOfSpades);
  this.setDeck(eightOfClubs);
  this.setDeck(eightOfHearts);
  this.setDeck(sevenOfClubs);
  this.setDeck(sevenOfSpades);
  this.setDeck(sevenOfHearts);
  this.setDeck(sevenOfDiamonds);
  this.setDeck(sixOfClubs);
  this.setDeck(sixOfSpades);
  this.setDeck(sixOfHearts);
  this.setDeck(sixOfDiamonds);
  this.setDeck(fiveOfClubs);
  this.setDeck(fiveOfSpades);
  this.setDeck(fiveOfHearts);
  this.setDeck(fiveOfDiamonds);
  this.setDeck(fourOfClubs);
  this.setDeck(fourOfSpades);
  this.setDeck(fourOfHearts);
  this.setDeck(fourOfDiamonds);
  this.setDeck(threeOfClubs);
  this.setDeck(threeOfSpades);
  this.setDeck(threeOfHearts);
  this.setDeck(threeOfDiamonds);
  this.setDeck(twoOfClubs);
  this.setDeck(twoOfSpades);
  this.setDeck(twoOfHearts);
  this.setDeck(twoOfDiamonds);
}



} // End of the deck

//var Player1 = new Player();
//var playerhand =  new hand();


//dealerHand.hand.push(theCard5)
//playerHand.push(theCard6)
