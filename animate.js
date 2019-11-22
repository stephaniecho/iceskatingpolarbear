var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var background = new Image();
background.src="Images/frozen.jpg";



var l1Timer=180;
function draw() {

    animatePB1();
    animatePB2();

    checkBearCollision();
    checkFishCollision();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    drawPB1();
    drawPB2();
    drawPB1FishCount();
    drawPB2FishCount();
    drawFish();



    if(l1Timer>0) {
      l1Timer--;
      ctx.font = "40px Arial";
      ctx.fillStyle='black';
      ctx.fillText("Objective: Catch 5 Fish", 400, 210);
    }
    else {

    }

}



setInterval(draw, 20);
