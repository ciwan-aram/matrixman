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
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.position(350, 150);
  button = createButton('Restart Game');
  button.position(width / 2 + 300, height + 200);
  button.style('font-size', '30px');
  button.style('font-family', 'courier');
  button.style('backgroundColor', '2F4F4F');
  button.hide();
  button.mousePressed(reloadPage);
  startButton = createButton('Start');
  startButton.position(width / 2, height + 200);
  startButton.style('font-family', 'courier');
  startButton.style('font-size', '40px');
  startButton.mousePressed(startGame);
  startButton.style('backgroundColor', '2F4F4F');

  noLoop();
}

function draw() {
  background(255, 120, 15);
  game.draw();
  game.player.draw();

  textFont('curier', 35);
  fill('2F4F4F');
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
