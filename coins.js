

function addCoin (x,y)
{
  GAME.coin.push(new Coin(x,y));
}

function Coin (x,y){
  this.x = x;
  this.y = y;
}

var coinAddTimer=45;

function handleCoinsAnimation (){


  

  if(coinAddTimer==0){
    addcoin(GAME.canvas.width, Math.random()*(GAME.canvas.height -20));
    coinAddTimer=45;
  }
  coinAddTimer--;

  for (var i = 0; i<GAME.coin.length; i++){
    GAME.coin[i].x-=GAME.gameSpeed;
    if(GAME.coin[i].x< (-20)){
      GAME.coin.splice(i,1);
      i--;
    }
  


  
}

}

function RenderBabies(context){
  context.fillStyle='blue';
  for (var i = 0; i<GAME.coin.length;i++)
  {
    context.fillStyle='blue';
    //context.fillRect(GAME.coin[i].x,GAME.coin[i].y,20,20);
    context.drawImage(coinPic,GAME.coin[i].x,GAME.coin[i].y,20,20);
  }
}
