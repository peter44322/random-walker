function setup() {
  createCanvas(640, 480);
  background(255);
  walker = new RandomWalker();
}

function draw() {
  walker.stepLikelyTowardsMouse();
  walker.display();
}
