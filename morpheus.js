class Morpheus {
  constructor() {
    this.img = loadImage('assets/obstacles/matrix-morpheus-512.png');
    this.x = Math.floor(Math.random() * 800);
    this.y = -1000;
  }

  moveMorpheus() {
    if (this.y > height) {
      this.y = -2000;
      this.x = Math.floor(Math.random() * 500);
    }
    this.y += 1.5;
  }

  drawMorpheus() {
    image(this.img, this.x, this.y, this.img.width / 5, this.img.height / 5);
    this.moveMorpheus();
  }

  collides(player) {
    if (
      this.x < player.x + player.imgWidth &&
      this.x + this.img.width / 5 > player.x &&
      this.y < player.y + player.imgHeight &&
      this.y + this.img.height / 5 > player.y
    ) {
      return true;
    }

    return false;
  }
}
