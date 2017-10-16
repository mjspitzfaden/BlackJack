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
      $('#messages').text('*****HOUDINI CHEATS LIKE YOU ACTUALLY SAW ME DEAL!  BUST! GO HOME AND DO REAL WORK!!');
      $('#messages').text('*****COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE**********');
      GameOver();
    }
    $('#player-points').text(PlayerPoints);

  });

  $('#stand-button').click(function getCardImageUrl() {
    $('#hit-button').hide();



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

    }
    else if (DealerPoints > PlayerPoints){
      $('#messages').text('*****COMPUTER WINS ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE**********');
    }
    else if (DealerPoints === PlayerPoints){
      $('#messages').text('*****PUSH COMPUTER STILL TAKES ALL YOU MONEY! GO BACK TO WORK SO I CAN TAKE SOME MORE**********');
    }

    $('#player-points').text(PlayerPoints);

  });





function GameOver(){
$('#hit-button').hide();

}

});  // end of Dom
