class Agent {
  constructor() {
    this.img = loadImage('/assets/obstacles/agent-smith.png');
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
  }

  // ----------------------moves------------------------
  moveAgent() {
    if (this.y > height) {
      this.y = 0;
      this.x = Math.floor(Math.random() * 900);
    }
    this.y += 3;
  }

  drawAgent() {
    // console.log(this.x, this.y);
    image(this.img, this.x, this.y, this.img.width / 8, this.img.height / 8);
    this.moveAgent();
  }

  collides(player) {
    if (
      this.x < player.x + player.imgWidth &&
      this.x + this.img.width / 10 > player.x &&
      this.y < player.y + player.imgHeight &&
      this.y + this.img.height / 10 > player.y
    ) {
      return true;
    }

    return false;
  }
}
