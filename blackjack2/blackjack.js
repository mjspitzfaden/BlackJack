$(function domReady() {
var player = new Person();
var dealer = new Person();
var card = new Card();
var deck = new Deck();





  $('#deal-button').click(function getCardImageUrl() {
    startGame();
    setDealerFirstImage();
    dealer.hand.addCard(deck.getCard());

    $('#dealer-points').text(dealer.getDealerScore());
    card = deck.getCard();
    dealer.hand.addCard(card)
    card.setDealerImage();

    $('#dealer-points').text(dealer.getDealerScore());
    card = deck.getCard();
    player.hand.addCard(card);
    card.setPlayerImage();

    $('#player-points').text(player.getPersonScore());
    card = deck.getCard();
    player.hand.addCard(card);
    card.setPlayerImage();


    $('#player-points').text(player.getPersonScore());
        $('#deal-button').hide();
  });

  $('#hit-button').click(function getCardImageUrl() {

     card = deck.getCard();
     player.hand.addCard(card);
     card.setPlayerImage();
     $('#player-points').text(player.getPersonScore());

    if (player.ifBusted()){
      $('#messages').text('*****COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE**********');
      //$('#messages').foggy();

      GameOver();
    }


  });


  $('#stand-button').click(function getCardImageUrl() {
    //$('#dealer-hand').find('img').first().remove();
      //dealer.hand.hand[0].setDealerImage();
      console.log("the first card value");
      console.log(dealer.hand.hand[0].point);

    $('#hit-button').hide();
    $('#stand-button').hide();



    while (dealer.getPersonScore() < 17){

     card = deck.getCard();
     dealer.hand.addCard(card)
     card.setDealerImage();
      $('#dealer-points').text(dealer.getPersonScore());
    if (dealer.ifBusted()){
      $('#messages').text("**************** PLAYER WINS-DEALER BUSTS ***********************");
      $('#messages').text("******* DONT WORRY I WILL GET YOU MONEY NEXT TIME HA HA! ********");

      GameOver();}
    }

    if(dealer.getPersonScore()< player.getPersonScore()){
      $('#messages').text("******* PLAYER WINS: DONT WORRY I WILL GET YOU MONEY NEXT TIME HA HA! ********");
       GameOver();
    }
    else if (dealer.getPersonScore() > player.getPersonScore() && dealer.ifBusted() === 0){
      $('#messages').text('COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE');
      GameOver();
    }
    else if (dealer.getPersonScore() === player.getPersonScore()){
      $('#messages').text('PUSH COMPUTER STILL TAKES ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE');
      GameOver();
    }

    $('#player-points').text(player.getPersonScore());

  });

  $('#play-again').click(function() {
    $('#deal-button').show();
    $('#hit-button').show();
    $('#stand-button').show();
    $('#player-hand').html('');
    $('#dealer-hand').html('');
    $('#messages').text('');
    $('#player-points').text('');
    $('#dealer-points').text('');
    dealer.setHandZero();
    player.setHandZero();
    startGame();

    //console.log(dealer.hand);

  });




function GameOver(){
$('#hit-button').hide();
$('#dealer-hand').find('img').first().remove();
  //dealer.hand.hand[0].setDealerImage();
  image = dealer.hand.hand[0].image;
  console.log(image);
$('#dealer-hand').prepend('<img src="' + image + '">' );
$('#dealer-points').text(dealer.getPersonScore());
 $('#stand-button').hide();
}

function setDealerFirstImage(){
  $('#dealer-hand').append(
    '<img src="' + 'images/H.png'+ '">'
  )
}

function startGame(){
  deck.shuffle();
}



});  // end of Dom
