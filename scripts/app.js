$(document).ready( function() {


  var colLength = 10;
  var rowLength = 13;


// create matrix
  var matrix = [];
  for (var i = 0; i < rowLength; i++) {

    var array = [];
    for (var j = 0; j < colLength; j++) {
       array.push(null);
    }
    matrix.push(array);
  }
  //move airplane

  // matrix[4][0] = true;
  $('#40').append('<img src="airplane.jpg" alt="airplane" id="airplane">');
  // $('#47').append('<img src="bird.jpg" alt="bird" id="bird">');
  // var birdImg = ('<img src="bird.jpg" alt="bird" id="bird">');

  var row = 4;
  var col = 1;

$('.start').click(function (){
  createBirds();
  async.eachSeries(matrix[row], function(element, callback) {
    setTimeout(function() {
      if(matrix[row][col] === 1){
        alert("crash");
      }
      if (col != 0) {
        matrix[row][col-1] = null;
        $("#airplane").remove();
      }
      matrix[row][col] = true;
      var position = "#" + row + col;
      $(position).append('<img src="airplane.jpg" alt="airplane" id="airplane">');
      if(col === 9){
        alert("you win!")
      }
      col++;
      callback();
    }, 700);
  }, function(err) {

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






var birds = [
    matrix[6][6] = false
];


  function createBirds (){
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
  console.log(matrix);

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



});
