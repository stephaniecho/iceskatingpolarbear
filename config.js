var GAME = {
  canvas : {
    width : 1200,
    height : 600
  },
  started : true,
  level : 1,
  coins : [],
  fishGoal : 5,
  fish : []
};

var PB1 = {
  x : 300,
  y : GAME.canvas.height/2,
  speed : 0,
  fishCaught : 0,
  rotationM : 0,
  speedX : 0,
  speedY : 0,
  MAX_SPEED : 10,
  direction : 1
};

var PB2 = {
  x : 900,
  y : GAME.canvas.height/2,
  speed : 0,
  fishCaught : 0,
  rotationM : 0,
  speedX : 0,
  speedY : 0,
  MAX_SPEED : 10,
  direction : -1
};
