var l1Theme = new Audio();
l1Theme.src="Sounds/sleigh_ride.mp3";
// Javascript Canvas Intro!

/**
 *  This is called once after the HTML of the page loads
 *
 */
function Start() {
  l1Theme.play();
  addFish();
  draw();
}
