class Game {
  constructor() {
    console.log('GAME CONSTRUCTOR');
    this.phone;
    this.agents = [];
    this.morpheus;
    this.trinity;
    this.whiteRabbit;
    this.code;
    this.phone;
    this.trinityIsThere = false;
  }
  init() {
    this.background = new Background();
    this.player = new Player();
    this.agents.push(new Agent());
    this.morpheus = new Morpheus();
    this.trinity = new Trinity();
    this.whiteRabbit = new WhiteRabbit();
    this.code = new Code();
    this.phone = new Phone();
    this.whipeSound = loadSound('assets/Sounds/swipe_003.mp3');
    this.bodyImpactSound = loadSound('assets/Sounds/body-impact-sound.mp3');
    this.phoneRinging = loadSound('assets/Sounds/telephone-ringing.mp3');
    this.gameOverSound = loadSound('assets/Sounds/game-over-said.mp3');
    this.party = loadSound('assets/Sounds/gettingMeDown.mp3');
  }
  draw() {
    this.background.draw();
    if (frameCount % 200 === 0) {
      this.agents.push(new Agent());
    }
    this.agents.forEach(function(agent) {
      agent.drawAgent();
    });

    this.morpheus.drawMorpheus();
    this.trinity.drawTrinity();
    this.whiteRabbit.drawWhiteRabbit();
    this.code.drawCode();
    this.phone.drawPhone();

    this.agents.forEach(
      function(agent) {
        if (agent.collides(this.player)) {
          console.log('collided with agent');
          if (this.player.strength >= 1000) {
            this.player.strength -= 200;
            agent.y = -100;
            game.bodyImpactSound.play();
          } else if (this.player.strength < 1000) {
            this.player.strength -= 200;
            agent.y = -300;
            game.bodyImpactSound.play();
          }
          if (this.player.strength <= 100) {
            this.player.strength -= 100;
            textFont('courier', 50);
            fill('2F4F4F');
            text(`Game Over`, width / 2 - 100, 300);
            game.gameOverSound.play();
            noLoop();
            button.show();
          }
        }
      }.bind(this)
    );

    if (this.morpheus.y > 0 && this.morpheus.y < height) {
      this.player.strength += 5;
    }

    if (this.trinity.y > 0 && this.trinity.y < height) {
      this.player.strength += 3;
    }
    if (this.trinity.collides(this.player) && !this.trinityIsThere) {
      console.log('collided with Trinity');
      this.player.strength += 1000;
      game.party.play();
      this.trinityIsThere = true;
    }

    if (this.whiteRabbit.collides(this.player)) {
      console.log('collided with rabbit');
      this.player.strength += 80;
      this.whiteRabbit.y = -200;
      this.whiteRabbit.x = Math.floor(Math.random() * 900);

      game.whipeSound.play();
    }

    if (this.code.collides(this.player)) {
      console.log('collided with code');
      this.player.strength += 50;
      this.code.y = 0;
      this.code.x = Math.floor(Math.random() * 900);

      game.whipeSound.play();
    }

    if (this.phone.collides(this.player)) {
      console.log('collided with phone');
      this.player.strength += 500;
      this.phone.y = -4000;
      this.phone.x = Math.floor(Math.random() * 900);
      this.agents = [];
    }
  }
  setup() {
    this.player.setup();
  }
}
