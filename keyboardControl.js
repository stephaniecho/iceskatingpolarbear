/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  pb1 : {
    up : false,
    down : false,
    left : false,
    right : false
  },
  pb2 : {
    up : false,
    down : false,
    left : false,
    right : false
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.pb1.up = true;
      break;
    case "s":
      CONTROLS.pb1.down = true;
      break;
    case "a":
      CONTROLS.pb1.left = true;
      break;
    case "d":
      CONTROLS.pb1.right = true;
      break;
    case "ArrowUp":
      CONTROLS.pb2.up = true;
      break;
    case "ArrowDown":
      CONTROLS.pb2.down = true;
      break;
    case "ArrowLeft":
      CONTROLS.pb2.left = true;
      break;
    case "ArrowRight":
      CONTROLS.pb2.right = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.pb1.up = false;
      break;
    case "s":
      CONTROLS.pb1.down = false;
      break;
    case "a":
      CONTROLS.pb1.left = false;
      break;
    case "d":
      CONTROLS.pb1.right = false;
      break;
    case "ArrowUp":
      CONTROLS.pb2.up = false;
      break;
    case "ArrowDown":
      CONTROLS.pb2.down = false;
      break;
    case "ArrowLeft":
      CONTROLS.pb2.left = false;
      break;
    case "ArrowRight":
      CONTROLS.pb2.right = false;
      break;
    default:
      break;
  }
});
