class Trinity {
  constructor() {
    this.img = loadImage('assets/obstacles/matrix-trinity-512.png');
    this.x = Math.floor(Math.random() * 900);
    this.y = -500;
  }

  // ----------------------moves------------------------
  moveTrinity() {
    if (this.y > height) {
      this.y = -2000;
      this.x = Math.floor(Math.random() * 500);
    }
    this.y += 2;
  }

  //--------------------------draws--------------------------

  drawTrinity() {
    image(this.img, this.x, this.y, this.img.width / 5, this.img.height / 5);
    this.moveTrinity();
  }

  //----------------------------------Collisions------------------------------

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
