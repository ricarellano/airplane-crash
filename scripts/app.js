$(document).ready( function() {
  // Initialize variables
  var colLength = 10;
  var rowLength = 13;
  var matrix = [];
  var row;
  var col;
  var gameStarted = false;

  // Functions
  function createMatrix() {
    for (var i = 0; i < rowLength; i++) {

      var array = [];
      for (var j = 0; j < colLength; j++) {
         array.push(null);
      }
      matrix.push(array);
    }
  }

  function createBirds() {
    var i = 0;
    var birds = [];
    while (i < 5){
      var random = Math.random()*129;
      var birdRandom = Math.floor(random);
      if( birdRandom > 43 || birdRandom < 40){
        addBirdInMatrix(birdRandom);
        if(birdRandom < 10){
          birdRandom = "0" + birdRandom;
        }
        var position = '#' + birdRandom;
        $(position).append('<img src="bird.jpg" alt="bird" id="bird">');
        i++;
      }
    }
  }

  function initialize() {
    createMatrix();
    $(".container img").remove();
    createBirds();
    $('#40').append('<img src="airplane.jpg" alt="airplane" id="airplane">');
    row = 4;
    col = 1;
  }

  function addBirdInMatrix (birdRandom){
    var birdRandomString = birdRandom.toString()
    if(birdRandomString.length === 1){
      matrix[0][Number(birdRandomString)] = 1;
    }
    else if (birdRandomString.length === 3){
      var rowBird = birdRandomString[0] + birdRandomString[1];
      var colBird = birdRandomString[2];
      matrix[rowBird][colBird] = 1;
    }
    else {
      var rowBird = birdRandomString[0];
      var colBird = birdRandomString[1];
      matrix[rowBird][colBird] = 1;
    }
  }

  // Events
  $('.start').click(function () {
    if (gameStarted == true) {
      return;
    }

    initialize();
    gameStarted = true;
    async.eachSeries(matrix[row], function(element, callback) {
      setTimeout(function() {
        var position = "#" + row + col;
        if(matrix[row][col] === 1){
          $("#airplane").remove();
          var string = position + " img";
          $(string).remove();
          $(position).append('<img src="explosion.png" alt="explosion" id="explosion">');
          return callback({message: "Crash"});
        }

        if (col != 0) {
          matrix[row][col-1] = null;
          $("#airplane").remove();
        }
        matrix[row][col] = true;

        $(position).append('<img src="airplane.jpg" alt="airplane" id="airplane">');


        if(col === 9){
          $("#airplane").remove();
          var string = position + " img";
          $(string).remove();
          $(position).append('<img src="finish.gif" alt="finish" id="finish">');
          return callback({message: "Win"});
        }
        col++;
        callback();
      }, 700);
    }, function(result) {
      setTimeout(function() {
        alert(result.message)
      }, 1000);

      gameStarted = false;
      console.log("Terminó");
    });
  });

  $(window).keydown(function(event){
    console.log(event.keyCode);

    if(row > 0 && row <= 12){
      if ( event.keyCode === 38){
        row--;
        $("#airplane").remove();
        var position = "#" + row + col;
        $(position).append('<img src="airplane.jpg" alt="airplane" id="airplane">');
      }else if (event.keyCode === 40){
        row++;
        $("#airplane").remove();
        var position = "#" + row + col;
        $(position).append('<img src="airplane.jpg" alt="airplane" id="airplane">');
      }
    }
  });

});
