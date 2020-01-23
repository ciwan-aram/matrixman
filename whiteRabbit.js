class WhiteRabbit {
  constructor() {
    this.img = loadImage('/assets/obstacles/animated-rabbit-image-0034.gif');
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
  }
  moveWhiteRabbit() {
    if (this.y > height) {
      this.y = 0;
      this.x = Math.floor(Math.random() * 500);
    }
    this.y += 2;
  }

  drawWhiteRabbit() {
    // console.log(this.x, this.y);
    image(this.img, this.x, this.y, this.img.width / 3, this.img.height / 3);
    this.moveWhiteRabbit();
  }
  collides(player) {
    if (
      this.x < player.x + player.imgWidth &&
      this.x + this.img.width / 20 > player.x &&
      this.y < player.y + player.imgHeight &&
      this.y + this.img.height / 20 > player.y
    ) {
      // collision detected!
      return true;
    }

    return false;

  }
}
