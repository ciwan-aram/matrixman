class Phone {
  constructor() {
    this.img = loadImage('assets/obstacles/phone.gif');
    this.x = Math.floor(Math.random() * 900);
    this.y = -1000;
  }

  // ----------------------move------------------------
  movePhone() {
    if (this.y > height) {
      this.y = -2000;
      this.x = Math.floor(Math.random() * 900);
    }
    this.y += 1.5;
  }

  //--------------------------draw--------------------------

  drawPhone() {
    // console.log(this.x, this.y);
    image(this.img, this.x, this.y, this.img.width / 5, this.img.height / 5);
    this.movePhone();
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
