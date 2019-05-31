function RandomWalker() {
  this.x = width / 2;
  this.y = height / 2;
}

RandomWalker.prototype.display = function() {
  stroke(0);
  point(this.x, this.y);
};

RandomWalker.prototype.step = function() {
  let choice = int(random(4));
  console.log(choice);
  switch (choice) {
    case 0:
      this.x++;
      break;
    case 1:
      this.x--;
      break;
    case 2:
      this.y++;
      break;
    case 3:
      this.y--;
      break;
  }
};

RandomWalker.prototype.stepLikelyTowardsMouse = function() {
  let choice = random(1);

  if (choice < 0.125) {
    this.x++;
  } else if (choice < 0.25) {
    this.x--;
  } else if (choice < 0.375) {
    this.y++;
  } else if (choice < 0.5) {
    this.y--;
  } else {
    this.moveTowardMouse();
  }
};

RandomWalker.prototype.moveTowardMouse = function() {
  this.x > mouseX ? this.x-- : this.x++;
  this.y > mouseY ? this.y-- : this.y++;
};
