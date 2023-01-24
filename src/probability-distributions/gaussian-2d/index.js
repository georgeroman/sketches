function setup() {
  const [width, height] = [300, 300];
  createCanvas(width, height);

  background(255);

  for (let i = 0; i <= (width * 2) / 3; i++) {
    for (let j = 0; j <= (height * 2) / 3; j++) {
      const x = randomGaussian(width / 2, width / 7);
      const y = randomGaussian(height / 2, height / 7);
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        point(x, y);
      }
    }
  }
}

function draw() {}
