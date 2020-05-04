//piece images
var rKing = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Chess_krt45.svg/68px-Chess_krt45.svg.png";
var rQueen = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chess_qrt45.svg/68px-Chess_qrt45.svg.png";
var rRook = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chess_rrt45.svg/68px-Chess_rrt45.svg.png";
var rBishop = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chess_brt45.svg/68px-Chess_brt45.svg.png";
var rKnight = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chess_nrt45.svg/68px-Chess_nrt45.svg.png";
var rPawn = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Chess_prt45.svg/68px-Chess_prt45.svg.png";
var wKing = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png";
var wQueen = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png";
var wRook = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png";
var wBishop = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png";
var wKnight = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png";
var wPawn = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/68px-Chess_plt45.svg.png";
var nada = "";

//adds image to html element
function addPiece(piece, imageCoordinate, coordinate) {
  var image = document.querySelector(imageCoordinate);
  image.src = piece;
  if (piece == wKing || piece == rKing) {
      document.getElementById(coordinate).classList.add("king", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == wQueen || piece == rQueen) {
      document.getElementById(coordinate).classList.add("queen", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == wBishop || piece == rBishop) {
      document.getElementById(coordinate).classList.add("bishop", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == wRook || piece == rRook) {
      document.getElementById(coordinate).classList.add("rook", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == wKnight || piece == rKnight) {
      document.getElementById(coordinate).classList.add("knight", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == wPawn || piece == rPawn) {
      document.getElementById(coordinate).classList.add("pawn", "piece");
      document.getElementById(coordinate).classList.remove("none");
  } if (piece == rKing) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == rQueen) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == rBishop) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == rRook) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == rKnight) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == rPawn) {
      document.getElementById(coordinate).classList.add("red");
  } if (piece == nada) {
      document.getElementById(coordinate).classList.remove("king", "queen", "knight", "bishop", "rook", "pawn", "red");
      document.getElementById(coordinate).classList.add("none");
  }
}

//Sets all pieces to default positions
function start() {
  addPiece(rRook, '#ia1', 'a1');
  addPiece(rKnight, '#ia2', 'a2');
  addPiece(rBishop, '#ia3', 'a3');
  addPiece(rQueen, '#ia4', 'a4');
  addPiece(rKing, '#ia5', 'a5');
  addPiece(rBishop, '#ia6', 'a6');
  addPiece(rKnight, '#ia7', 'a7');
  addPiece(rRook, '#ia8', 'a8');
  addPiece(wRook, '#ih1', 'h1');
  addPiece(wKnight, '#ih2', 'h2');
  addPiece(wBishop, '#ih3', 'h3');
  addPiece(wKing, '#ih4', 'h4');
  addPiece(wQueen, '#ih5', 'h5');
  addPiece(wBishop, '#ih6', 'h6');
  addPiece(wKnight, '#ih7', 'h7');
  addPiece(wRook, '#ih8', 'h8');
  addPiece(rPawn, '#ib1', 'b1');
  addPiece(rPawn, '#ib2', 'b2');
  addPiece(rPawn, '#ib3', 'b3');
  addPiece(rPawn, '#ib4', 'b4');
  addPiece(rPawn, '#ib5', 'b5');
  addPiece(rPawn, '#ib6', 'b6');
  addPiece(rPawn, '#ib7', 'b7');
  addPiece(rPawn, '#ib8', 'b8');
  addPiece(wPawn, '#ig1', 'g1');
  addPiece(wPawn, '#ig2', 'g2');
  addPiece(wPawn, '#ig3', 'g3');
  addPiece(wPawn, '#ig4', 'g4');
  addPiece(wPawn, '#ig5', 'g5');
  addPiece(wPawn, '#ig6', 'g6');
  addPiece(wPawn, '#ig7', 'g7');
  addPiece(wPawn, '#ig8', 'g8');
  addPiece(nada, '#ic1', 'c1');
  addPiece(nada, '#ic2', 'c2');
  addPiece(nada, '#ic3', 'c3');
  addPiece(nada, '#ic4', 'c4');
  addPiece(nada, '#ic5', 'c5');
  addPiece(nada, '#ic6', 'c6');
  addPiece(nada, '#ic7', 'c7');
  addPiece(nada, '#ic8', 'c8');
  addPiece(nada, '#id1', 'd1');
  addPiece(nada, '#id2', 'd2');
  addPiece(nada, '#id3', 'd3');
  addPiece(nada, '#id4', 'd4');
  addPiece(nada, '#id5', 'd5');
  addPiece(nada, '#id6', 'd6');
  addPiece(nada, '#id7', 'd7');
  addPiece(nada, '#id8', 'd8');
  addPiece(nada, '#ie1', 'e1');
  addPiece(nada, '#ie2', 'e2');
  addPiece(nada, '#ie3', 'e3');
  addPiece(nada, '#ie4', 'e4');
  addPiece(nada, '#ie5', 'e5');
  addPiece(nada, '#ie6', 'e6');
  addPiece(nada, '#ie7', 'e7');
  addPiece(nada, '#ie8', 'e8');
  addPiece(nada, '#if1', 'f1');
  addPiece(nada, '#if2', 'f2');
  addPiece(nada, '#if3', 'f3');
  addPiece(nada, '#if4', 'f4');
  addPiece(nada, '#if5', 'f5');
  addPiece(nada, '#if6', 'f6');
  addPiece(nada, '#if7', 'f7');
  addPiece(nada, '#if8', 'f8');
}
window.onload = function() {
  start();
}

//logic for pieces movements

function pieceMoves(id, pt) {
  //sets new place
  var x = id.substring(0,1);
  var y = id.substring(1,2);
  console.log(x);
  if (x == "a") {
    // add logic here
  } if (x == "b") {
    x = "a"
  } if (x == "c") {
    x = "b"
  } if (x == "d") {
    x = "c"
  } if (x == "e") {
    x = "d"
  } if (x == "f") {
    x = "e"
  } if (x == "g") {
    x = "f"
  }
  var np = x.concat(y);
  var imgId = '#i'.concat(id)
  var imgNp = '#i'.concat(np)
  console.log(pt);
  if (pt == 'black pawn piece' || pt == 'white pawn piece') {
    addPiece(nada, imgId, id);
    addPiece(wPawn, imgNp, np);
  }
}
