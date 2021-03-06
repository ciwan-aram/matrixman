class Code {
  constructor() {
    this.img = loadImage('assets/obstacles/broken-code.jpg');
    this.x = Math.floor(Math.random() * 500);
    this.y = -200;
  }

  moveCode() {
    if (this.y > height) {
      this.y = 0;
      this.x = Math.floor(Math.random() * 500);
    }
    this.y += 3;
  }

  drawCode() {
    image(this.img, this.x, this.y, this.img.width / 10, this.img.height / 10);
    this.moveCode();
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
