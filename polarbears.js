var polarBear = new Image();
polarBear.src="Images/spr_polarbear_temp.png";
var polarBear2 = new Image();
polarBear2.src="Images/spr_polarbear_temp2.png";
var purpleBear = new Image();
purpleBear.src="Images/purplebear1.png";
var purpleBear2 = new Image();
purpleBear2.src="Images/purplebear2.png";


function drawPB1() {
    if(PB1.direction==1) {ctx.drawImage(polarBear, PB1.x-60, PB1.y-45, 120, 90);}
    else {ctx.drawImage(polarBear2, PB1.x-60, PB1.y-45, 120, 90);}
}

function drawPB1FishCount() {
  ctx.fillText(PB1.fishCaught, 10, GAME.canvas.height-10);
}

function animatePB1() {
  if(CONTROLS.pb1.up) {
    if(PB1.speedY>-PB1.MAX_SPEED) {PB1.speedY-=.2;}
  }
  else if(CONTROLS.pb1.down) {
    if(PB1.speedY<PB1.MAX_SPEED) {PB1.speedY+=.2;}
  }
  else {
    if(PB1.speedY>0) {PB1.speedY-=0.1;}
    else if(PB1.speedY<0) {PB1.speedY+=0.1;}

    if(Math.abs(PB1.speedY)<0.2) {PB1.speedY=0;}
  }

  if(CONTROLS.pb1.left) {
    PB1.direction=-1;
    if(PB1.speedX>-PB1.MAX_SPEED) {PB1.speedX-=.2;}
  }
  else if(CONTROLS.pb1.right) {
    PB1.direction=1;
    if(PB1.speedX<PB1.MAX_SPEED) {PB1.speedX+=.2;}
  }
  else {
    if(PB1.speedX>0) {PB1.speedX-=0.1;}
    else if(PB1.speedX<0) {PB1.speedX+=0.1;}

    if(Math.abs(PB1.speedX)<0.2) {PB1.speedX=0;}
  }


  PB1.y+=PB1.speedY;
  PB1.x+=PB1.speedX;

  if(PB1.y>canvas.height) {PB1.y=0;} else if(PB1.y<0) {PB1.y=canvas.height;}
  if(PB1.x>canvas.width) {PB1.x=0;} else if(PB1.x<0) {PB1.x=canvas.width;}

}

function drawPB2() {
  if(PB2.direction==1) {ctx.drawImage(purpleBear, PB2.x-60, PB2.y-45, 120, 90);}
  else {ctx.drawImage(purpleBear2, PB2.x-60, PB2.y-45, 120, 90);}
}

function drawPB2FishCount() {
  if(PB2.fishCaught<10) {ctx.fillText(PB2.fishCaught, GAME.canvas.width-30, GAME.canvas.height-10);}
  else {ctx.fillText(PB2.fishCaught, GAME.canvas.width-50, GAME.canvas.height-10);}
}

function animatePB2() {
  if(CONTROLS.pb2.up) {
    if(PB2.speedY>-PB2.MAX_SPEED) {PB2.speedY-=.2;}
  }
  else if(CONTROLS.pb2.down) {
    if(PB2.speedY<PB2.MAX_SPEED) {PB2.speedY+=.2;}
  }
  else {
    if(PB2.speedY>0) {PB2.speedY-=0.1;}
    else if(PB2.speedY<0) {PB2.speedY+=0.1;}

    if(Math.abs(PB2.speedY)<0.2) {PB2.speedY=0;}
  }

  if(CONTROLS.pb2.left) {
    PB2.direction=-1;
    if(PB2.speedX>-PB2.MAX_SPEED) {PB2.speedX-=.2;}
  }
  else if(CONTROLS.pb2.right) {
    PB2.direction=1;
    if(PB2.speedX<PB2.MAX_SPEED) {PB2.speedX+=.2;}
  }
  else {
    if(PB2.speedX>0) {PB2.speedX-=0.1;}
    else if(PB2.speedX<0) {PB2.speedX+=0.1;}

    if(Math.abs(PB2.speedX)<0.2) {PB2.speedX=0;}
  }


  PB2.y+=PB2.speedY;
  PB2.x+=PB2.speedX;

  if(PB2.y>canvas.height) {PB2.y=0;} else if(PB2.y<0) {PB2.y=canvas.height;}
  if(PB2.x>canvas.width) {PB2.x=0;} else if(PB2.x<0) {PB2.x=canvas.width;}
}
var temp;
function checkBearCollision() {
  if(PB1.x+60>PB2.x-60&&PB1.x-60<PB2.x+60&&PB1.y+45>PB2.y-45&&PB1.y-45<PB2.y+45) {
    if(PB1.x+50>PB2.x-50&&PB1.x-50<PB2.x+50&&PB1.y+45>PB2.y-45&&PB1.y-45<PB2.y+45) {
      temp = PB1.speedY;
      PB1.speedY=PB2.speedY;
      PB2.speedY=temp;
    }
    else if (PB1.x+60>PB2.x-60&&PB1.x-60<PB2.x+60&&PB1.y+30>PB2.y-30&&PB1.y-30<PB2.y+30) {
      temp = PB1.speedX
      PB1.speedX=PB2.speedX;
      PB2.speedX=temp;
    }
    else {
      temp = PB1.speedY;
      PB1.speedY=PB2.speedY;
      PB2.speedY=temp;
      temp = PB1.speedX
      PB1.speedX=PB2.speedX;
      PB2.speedX=temp;
    }


  }
}

function checkFishCollision() {
  for(var i = 0; i < GAME.fish.length; i++ ) {
    if(PB1.x+60>GAME.fish[i].x-50&&PB1.x-60<GAME.fish[i].x+50
      &&PB1.y+45>GAME.fish[i].y-30&&PB1.y-45<GAME.fish[i].y+30) {
        PB1.fishCaught++;
        GAME.fish.splice(i,1);
        addFish();
        return;
    }
    else if(PB2.x+60>GAME.fish[i].x-50&&PB2.x-60<GAME.fish[i].x+50
      &&PB2.y+45>GAME.fish[i].y-30&&PB2.y-45<GAME.fish[i].y+30) {
      PB2.fishCaught++;
      GAME.fish.splice(i,1);
      addFish();
      return;
    }
  }
}
