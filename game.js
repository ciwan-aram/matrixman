class Game {
  constructor() {
    console.log('GAME CONSTRUCTOR');
    this.phone;
    this.agents = [];
    this.whiteRabbit;
    this.code;
    this.phone;
    this.score = 0;
  }
  init() {
    this.background = new Background();
    this.player = new Player();
    this.agents.push(new Agent());
    this.whiteRabbit = new WhiteRabbit();
    this.code = new Code();
    this.phone = new Phone();
    this.whipeSound = loadSound('assets/Sounds/swipe_003.mp3');
    this.dangerSound = loadSound('assets/Sounds/body-impact-sound.mp3');
    this.blawan993 = loadSound('assets/Sounds/Blawan - 993 [TESC004].mp3');
  }
  draw() {
    this.background.draw();
    if (frameCount % 200 === 0) {
      this.agents.push(new Agent());
    }
    this.agents.forEach(function(agent) {
      agent.drawAgent();
    });

    this.whiteRabbit.drawWhiteRabbit();
    this.code.drawCode();
    this.phone.drawPhone();

    this.agents.forEach(
      function(agent) {
        if (agent.collides(this.player)) {
          console.log('collided with agent');
          if (this.player.strength > 200) {
            this.player.strength -= 100;
            agent.y = -200;
            game.dangerSound.play();
          } else if (this.player.strength < 200) {
            textFont('pixel', 30); // size
            fill(255, 255, 255); //color ${}
            text(`Over Game`, width / 2 - 100, 300);
            noLoop();
            button.show();
          }
        }
      }.bind(this)
    );

    if (this.whiteRabbit.collides(this.player)) {
      console.log('collided with rabbit');
      this.player.strength += 50;
      this.whiteRabbit.y = -300;
      this.whiteRabbit.x = Math.floor(Math.random() * 400);

      game.whipeSound.play();
    }

    if (this.code.collides(this.player)) {
      console.log('collided with code');
      this.player.strength += 20;
      this.code.y = -1000;
      this.code.x = Math.floor(Math.random() * 400);

      game.whipeSound.play();
    }

    if (this.phone.collides(this.player)) {
      console.log('collided with phone');
      this.player.strength += 300;
      this.phone.y = -500;
      this.phone.x = Math.floor(Math.random() * 400);
      this.agents = [];

      game.whipeSound.play();
    }
  }
  setup() {
    this.player.setup();
  }
}
