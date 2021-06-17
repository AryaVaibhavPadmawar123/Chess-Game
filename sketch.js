var chessBoard;
var queen;
var king;
var queen1;
var king1;
var bishop;
var knight;
var rook;
var bishop1;
var knight1;
var rook1;
var bishop2;
var knight2;
var rook2;
var bishop3;
var knight3;
var rook3;
var pawn;
var pawn1;
var pawn2;
var pawn3;
var pawn4;
var pawn5;
var pawn6;
var pawn7;
var pawn8;
var pawn9;
var pawn10;
var pawn11;
var pawn12;
var pawn13;
var pawn14;
var pawn15;
var bishopImg1;
var bishopImg2;
var bishopImg3;
var bishopImg4;
var knightImg1;
var knightImg2;
var knightImg3;
var knightImg4;
var rookImg1;
var rookImg2;
var rookImg3;
var rookImg4;
var queenImg1;
var queenImg2;
var kingImg1;
var kingImg2;
var pawnImg1;
var pawnImg2;
var pawnImg3;
var pawnImg4;
var pawnImg5;
var pawnImg6;
var pawnImg7;
var pawnImg8;
var pawnImg9;
var pawnImg10;
var pawnImg11;
var pawnImg12;
var pawnImg13;
var pawnImg14;
var pawnImg15;
var pawnImg16;
var chessBoardImg;


function preload() {

    bishopImg1 = loadImage("images/bishop.jpg");
    bishopImg2 = loadImage("images/bishop.jpg");
    bishopImg3 = loadImage("images/bishop.jpg");
    bishopImg4 = loadImage("images/bishop.jpg");

    rookImg1 = loadImage("images/rook.png");
    rookImg2 = loadImage("images/rook.png");
    rookImg3 = loadImage("images/rook.png");
    rookImg4 = loadImage("images/rook.png");

    knightImg1 = loadImage("images/knight.png");
    knightImg2 = loadImage("images/knight.png");
    knightImg3 = loadImage("images/knight.png");
    knightImg4 = loadImage("images/knight.png");

    queenImg1 = loadImage("images/queen.png");
    queenImg2 = loadImage("images/queen.png");

    kingImg1 = loadImage("images/king.png");
    kingImg2 = loadImage("images/king.png");

    pawnImg1 = loadImage("images/pawn.png");
    pawnImg2 = loadImage("images/pawn.png");
    pawnImg3 = loadImage("images/pawn.png");
    pawnImg4 = loadImage("images/pawn.png");
    pawnImg5 = loadImage("images/pawn.png");
    pawnImg6 = loadImage("images/pawn.png");
    pawnImg7 = loadImage("images/pawn.png");
    pawnImg8 = loadImage("images/pawn.png");
    pawnImg9 = loadImage("images/pawn.png");
    pawnImg10 = loadImage("images/pawn.png");
    pawnImg11 = loadImage("images/pawn.png");
    pawnImg12 = loadImage("images/pawn.png");
    pawnImg13 = loadImage("images/pawn.png");
    pawnImg14 = loadImage("images/pawn.png");
    pawnImg15 = loadImage("images/pawn.png");
    pawnImg16 = loadImage("images/pawn.png");

    chessBoardImg = loadImage("chessBoard.png");

}

function setup() {
    createCanvas(800, 800);
    chessBoard = createSprite(200, 200, 10, 10);
    ground.addImage("chessBoard",chessBoardImg);
    queen = createSprite(100, 100, 10, 10);
    king = createSprite(50, 50, 10, 10);
    queen1 = createSprite(250, 250, 10, 10);
    king1 = createSprite(275, 275, 10, 10);

}

function draw() {

}

