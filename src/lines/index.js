function setup() {
  angleMode(DEGREES);

  const canvasSize = 600;
  createCanvas(canvasSize, canvasSize);

  background(255);

  // Starting coordinates
  const sx = 30;
  const sy = 30;

  const lineSize = 10;
  for (let y = sy; y <= canvasSize - sx; y += lineSize) {
    for (let x = sx; x <= canvasSize - sy; x += lineSize) {
      push();

      // Move to the line center
      translate(x, y);

      // Perform a random rotation
      rotate(random(360));

      // Move back to the initial origin
      translate(-x, -y);

      triangle(x - lineSize / 2, y, x + lineSize / 2, y);

      pop();
    }
  }
}

function draw() {}
