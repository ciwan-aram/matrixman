class Player {
  constructor() {
    this.img = loadImage('assets/player/neo.GIF');
    this.imgWidth = 80;
    this.imgHeight = 80;
    this.moveDown;
    this.moveUp;
    this.moveRight;
    this.moveLeft;
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 500);
    this.strength = 50;
  }

  setup() {
    this.height = this.imgHeight;
    this.width = this.imgwidth;
  }

  moveDown() {
    if (this.y >= height) {
      this.y = 10;
    } else this.y += 50;
  }
  moveUp() {
    if (this.y <= 0) {
      this.y = height - this.imgHeight / 20;
    } else this.y -= 50;
  }
  moveLeft() {
    if (this.x <= 0) {
      this.x = width;
    } else {
      this.x -= 50;
    }
  }
  moveRight() {
    if (this.x >= width) {
      this.x = 0;
    } else {
      this.x += 50;
    }
  }

  draw() {
    image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
  }
}
