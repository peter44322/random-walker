function setup() {
  createCanvas(640, 480);
  background(255);
  walker = new RandomWalker();
}

function draw() {
  walker.step();
  walker.display();
}
