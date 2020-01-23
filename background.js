class Background {
  constructor() {
    this.images = [
      {
        src: loadImage('assets/background/Binary-Code-Wallpaper.png'),
        y: 0,
        speed: 2
      }
    ];
  }

  move(img) {
    image(img.src, 0, img.y);
    image(img.src, 0, img.y - height);
    img.y += img.speed;
    if (img.y >= height) {
      img.y = -height;
    }
  }

  draw() {
    const c = color(174, 222, 203);
    background(c);

    for (let i = 0; i < this.images.length; i++) {
      this.move(this.images[i]);
    }
  }
}
