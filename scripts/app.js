$(document).ready( function() {

  var board = [];
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
  console.log(matrix)
  //move airplane

  // matrix[4][0] = true;
  $('#40').append('<img src="airplane.jpg" alt="airplane" id="airplane">');
  var row = 4;
  var col = 0;

  async.eachSeries(matrix[row], function(element, callback) {
    setTimeout(function() {
      if (col != 0) {
        matrix[row][col-1] = null;
        $("#airplane").remove();
      }
      matrix[row][col] = true;
      var position = "#" + row + col;
      $(position).append('<img src="airplane.jpg" alt="airplane" id="airplane">');
      col++;
      callback();
    }, 1000);
  }, function(err) {
    console.log("Terminó");
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






  function createBird (e){
    // var random = Math.random();
    board[4][6] = 1;
    board[9][9] = 1;
    console.log(e);

  }
  createBird();

  


});
