$(function domReady() {

  startGame();
  var PlayerPoints = 0;
  var DealerPoints = 0;
  $('#deal-button').click(function getCardImageUrl() {



    DealerPoints = dealACard('#dealer-hand');
    console.log(DealerPoints);
    $('#dealer-points').text(DealerPoints);
    DealerPoints = dealACard('#dealer-hand');
    $('#dealer-points').text(DealerPoints);


    PlayerPoints = dealACard('#player-hand');
    $('#player-points').text(PlayerPoints);
    PlayerPoints = dealACard('#player-hand');
    $('#player-points').text(PlayerPoints);


        $('#deal-button').hide();
  });

  $('#hit-button').click(function getCardImageUrl() {


    PlayerPoints = dealACard('#player-hand');
    if (ifBusted(PlayerPoints)){
      $('#messages').text('*****COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE**********');
      GameOver();
    }
    $('#player-points').text(PlayerPoints);

  });

  $('#stand-button').click(function getCardImageUrl() {
    $('#dealer-hand').find('img').first().remove();
     addImg();
    $('#hit-button').hide();
    $('#stand-button').hide();



    while (DealerPoints < 17){

     DealerPoints = dealACard('#dealer-hand');
      $('#dealer-points').text(DealerPoints);
    if (ifBusted(DealerPoints)){
      $('#messages').text("**************** PLAYER WINS-DEALER BUSTS ***********************");
      $('#messages').text("******* DONT WORRY I WILL GET YOU MONEY NEXT TIME HA HA! ********");

      GameOver();}
    }

    if(DealerPoints < PlayerPoints){
      $('#messages').text("******* PLAYER WINS: DONT WORRY I WILL GET YOU MONEY NEXT TIME HA HA! ********");
       GameOver();
    }
    else if (DealerPoints > PlayerPoints && ifBusted(DealerPoints)){
      $('#messages').text('COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE');
      GameOver();
    }
    else if (DealerPoints === PlayerPoints){
      $('#messages').text('PUSH COMPUTER STILL TAKES ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE');
      GameOver();
    }

    $('#player-points').text(PlayerPoints);

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
    startGame();
  });




function GameOver(){
$('#hit-button').hide();
$('#dealer-hand').find('img').first().remove();
 addImg();
 $('#stand-button').hide();
}

});  // end of Dom
