function setup() {
  const [width, height] = [600, 100];
  createCanvas(width, height);

  background(255);

  for (let x = 0; x <= width; x++) {
    if (random([0, 1]) === 1) {
      line(x, 0, x, height);
    }
  }
}

function draw() {}
