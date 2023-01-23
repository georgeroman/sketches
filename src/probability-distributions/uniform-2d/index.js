function setup() {
  const [width, height] = [600, 100];
  createCanvas(width, height);

  background(255);

  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      if (random([0, 1]) === 1) {
        point(x, y);
      }
    }
  }
}

function draw() {}
