function setup() {
  const [width, height] = [600, 100];
  createCanvas(width, height);

  background(255);

  for (let i = 0; i <= (width * 2) / 3; i++) {
    const x = randomGaussian(width / 2, width / 7);
    if (x >= 0 && x <= width) {
      line(x, 0, x, height);
    }
  }
}

function draw() {}
