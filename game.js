class Game {
  constructor() {
    console.log('GAME CONSTRUCTOR');
    this.phone;
    this.agent = [];
    this.whiteRabbit;
    this.code;
    this.phone;
    // this.obstaclesCombines = [];
    this.score = 0;
  }
  init() {
    this.background = new Background();
    this.player = new Player();
    this.agent = new Agent();
    this.whiteRabbit = new WhiteRabbit();
    this.code = new Code();
    this.phone = new Phone();
    this.whipeSound = loadSound('assets/Sounds/swipe_003.mp3');
    // this.score.push(this.point);
    // this.fairytaleSong = loadSound(
    // );
    // this.obstaclesCombines.push(this.phone)
  }
  draw() {
    this.background.draw();
    this.agent.drawAgent();
    this.whiteRabbit.drawWhiteRabbit();
    this.code.drawCode();
    this.phone.drawPhone();

    if (this.agent.collides(this.player)) {
      console.log('collided with agent');
      if (this.player.strength > 200) {
        this.player.strength -= 100;
        this.agent.y = -200;
      } else if (this.player.strength < 200) {
        textFont('pixel', 30); // size
        fill(255, 255, 255); //color ${}
        text(`Over Game`, width / 2 - 100, 300);
        noLoop();
        // const resetButton = createButton("reset");
        // resetButton.mousePressed("");
      }
    } // game.coinSound.play();

    if (this.whiteRabbit.collides(this.player)) {
      console.log('collided with rabbit');
      this.player.strength += 50;
      this.whiteRabbit.y = -300;
      this.whiteRabbit.x = Math.floor(Math.random() * 400);

      // game.sound.play();
    }

    if (this.code.collides(this.player)) {
      console.log('collided with code');
      this.player.strength += 20;
      this.code.y = -1000;
      this.code.x = Math.floor(Math.random() * 400);

      // game.sound.play();
    }

    if (this.phone.collides(this.player)) {
      console.log('collided with phone');
      this.player.strength += 300;
      this.phone.y = -10000;
      this.phone.x = Math.floor(Math.random() * 400);

      // game.sound.play();
    }
  }
  setup() {
    this.player.setup();
  }
}

