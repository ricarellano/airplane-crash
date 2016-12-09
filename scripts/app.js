
$(document).on("ready", function() {
alert("sdfsf");
  var board = [];
  var colLength = 10;
  var rowLength = 13;






  for (var i=0; i < rowLength; i++){
    board[i] = [];
  }

  var i = 0;
  var boolean = false;

  while(i < rowLength && !boolean){
    board[i] = [];
    if(i > 9){
      boolean = true;
    }
    i++;
  }

  for (var i = 0; i < rowLength; i++){
    for(var j = 0; j < colLength; j++){
      board[i][j] = 0;
    }
  }


function creaPaloma (){
  // var random = Math.random();
  board[4][6] = 1;
  board[9][9] = 1;
}
creaPaloma();


console.log(board);









});
