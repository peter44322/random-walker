function RandomWalker() {
  this.x = width / 2;
  this.y = height / 2;
}

RandomWalker.prototype.display = function() {
  stroke(0);
  //strokeWeight(60);
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
