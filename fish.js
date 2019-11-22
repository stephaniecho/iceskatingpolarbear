var fishSpr = new Image();
fishSpr.src="Images/spr_fish_temp.png";

function Fish() {

  var x,y;
  do {
    x = Math.floor(Math.random()*(GAME.canvas.width-100)) + 50;
  } while(Math.abs(x-PB1.x)<100||Math.abs(x-PB2.x)<100);
  do {
    y = Math.floor(Math.random()*(GAME.canvas.height-100)) + 50;
  } while(Math.abs(y-PB1.y)<100||Math.abs(y-PB2.y)<100);
  this.x=x;
  this.y=y;

  //this.x= Math.floor(Math.random()*GAME.canvas.width-100) + 50;
  //this.y= Math.floor(Math.random()*GAME.canvas.height-100) + 50;
}

function addFish() {
  GAME.fish.push(new Fish());
}

function drawFish() {
  for(var i = 0; i < GAME.fish.length; i++) {
    ctx.drawImage(fishSpr, GAME.fish[i].x-50,GAME.fish[i].y-30, 90, 60);
  }
}
