var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var pbearHeight = 30;
var pbearWidth = 30;
var pbearX = 900
var pbearY = canvas.height/2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var aPressed = false;
var dPressed = false;
var wPressed = false;
var sPressed = false;
var pbear2Height = 30;
var pbear2Width = 30;
var pbear2X = 500
var pbear2Y = canvas.height/2;
var myBackground;
var pbear;
var pbear2;
var arrow = (Math.random)*4;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if (e.key == "a"){
        aPressed = true;
    }
    else if (e.key == "d"){
        dPressed = true;
    }
    else if (e.key == "w"){
        wPressed = true;
    }
    else if (e.key == "s"){
        sPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if (e.key == "a"){
        aPressed = false;
    }
    else if (e.key == "d"){
        dPressed = false;
    }
    else if (e.key == "w"){
        wPressed = false;
    }
    else if (e.key == "s"){
        sPressed = false;
    }
}
function drawPbear() {
    ctx.beginPath();
    ctx.rect(pbearX, pbearY, pbearHeight, pbearWidth);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawPbear2() {
    ctx.beginPath();
    ctx.rect(pbear2X, pbear2Y, pbear2Height, pbear2Width);
    // ctx.drawImage('polarbear.jpg', pbear2X, pbear2Y, pbear2Height, pbear2Width);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
// function showArrow(src, width, height, alt){
//   var img = document.createElement("arrowUp.jpg");
//   img.src = src;
//   img.width = 50;
//   img.height = 50;
//   img.alt = ;
//   // This next line will just add it to the <body> tag
//   document.body.appendChild("arrowUp.jpg");
// }

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPbear();
    drawPbear2();
    // showArrow();
    //first polar bear movement according to arrow keyboard
    if(rightPressed) {
        pbearX += 7;
        if (pbearX + pbearWidth > canvas.width){
            pbearX = canvas.width - pbearWidth;
        }
    }
    else if(leftPressed) {
        pbearX -= 7;
        if (pbearX < 0){
            pbearX = 0;
        }
    }
    else if(upPressed) {
        pbearY -= 7;
        if (pbearY < 0){
            pbearY = 0;
        }
    }
    else if(downPressed) {
        pbearY += 7;
        if (pbearY + pbearHeight > canvas.height){
            pbearY = canvas.height - pbearHeight;
        }
    }
    //second polar bear movement according to wasd
    if(dPressed) {
      pbear2X += 7;
      if (pbear2X + pbear2Width > canvas.width){
        pbear2X = canvas.width - pbear2Width;
      }
    }
    else if(aPressed) {
      pbear2X -= 7;
      if (pbear2X < 0){
        pbear2X = 0;
      }
    }
    else if(wPressed) {
      pbear2Y -= 7;
      if (pbear2Y < 0){
        pbear2Y = 0;
      }
    }
    else if(sPressed) {
      pbear2Y += 7;
      if (pbear2Y + pbear2Height > canvas.height){
        pbear2Y = canvas.height - pbear2Height;
      }
    }
    x += dx;
    y += dy;

    handleCoinsAnimation();
    RenderBabies(context);
}



setInterval(draw, 20);
