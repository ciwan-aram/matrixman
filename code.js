class Code {
  constructor() {
    this.img = loadImage('/assets/obstacles/broken-code.jpg');
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
  }

  // ----------------------moves------------------------

  moveCode() {
    if (this.y > height) {
      this.y = 0;
      this.x = Math.floor(Math.random() * 500);
    }
    this.y += 3;
  }

  //--------------------------draws--------------------------
  drawCode() {
    image(this.img, this.x, this.y, this.img.width / 10, this.img.height / 10);
    this.moveCode();
  }
  //----------------------------------Collisions------------------------------

  collides(player) {
    if (
      this.x < player.x + player.imgWidth &&
      this.x + this.img.width / 10 > player.x &&
      this.y < player.y + player.imgHeight &&
      this.y + this.img.height / 10 > player.y
    ) {
      // collision detected!
      return true;
    }

    return false;

    // collision detected -> we can play the sound
  }
}
