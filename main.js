function keyPressed() {
  console.log(keyCode);
  if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 37) {
    game.player.moveLeft();
  } else if (keyCode === 38) {
    game.player.moveUp();
  } else if (keyCode === 40) {
    game.player.moveDown();
  }
}

const game = new Game();

function preload() {
  console.log('PRELOAD');

  game.init();
  // song = loadSound('/assets/);
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.position(350, 150);
  button = createButton('Restart Game');
  button.position(width / 2 + 300, height + 200);
  button.hide();
  button.mousePressed(reloadPage);
  startButton = createButton('Start');
  startButton.position(width / 2, height + 200);
  startButton.mousePressed(startGame);
  noLoop();
}

function draw() {
  background(255, 120, 15);
  game.draw();
  game.player.draw();

  textFont('sans-serif', 30); // size
  fill(255, 255, 255); //color ${}
  text(`Strength: ${game.player.strength}`, width - width / 4.1, 30);
}

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';

function reloadPage() {
  document.location.reload();
}
function startGame() {
  loop();
  startButton.hide();
}
