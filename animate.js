/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.backward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x -= SPACE_SHIP.speed * sin;
    SPACE_SHIP.y -=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 4;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 4;
  }
/*
  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = 600;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = 300;
  }
  */




}

function RenderNewObject(context) {
    context.fillRect(NEW_OBJECT.x, NEW_OBJECT.y, 50, 50);
}

var randomx = Math.random()*600 + 1;
var randomy = Math.random()*300 + 1;

function HandleNewObjectMovement() {
  NEW_OBJECT.x = randomx;
  NEW_OBJECT.y = randomy;
}

function EatFish() {
  if (NEW_OBJECT.x < SPACE_SHIP.x + SPACE_SHIP.width &&
   NEW_OBJECT.x + NEW_OBJECT.width > SPACE_SHIP.x &&
   NEW_OBJECT.y < SPACE_SHIP.y + SPACE_SHIP.height &&
   NEW_OBJECT.y + NEW_OBJECT.height > SPACE_SHIP.y) {
    // collision detected!
    NEW_OBJECT.x = Math.random()*600 + 1;
    NEW_OBJECT.y = Math.random()*300 + 1;
    //point++;
  }
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
