function divideTriangle(ax, ay, bx, by, cx, cy, depth) {
  let r = randomGaussian(0.5, 0.2);
  while (r < 0 || r > 1) {
    r = randomGaussian(0.5, 0.2);
  }

  const mx = bx + r * (cx - bx);
  // Make sure to cover the case where the line is vertical
  const my =
    cx === bx ? by + r * (cy - by) : ((cy - by) / (cx - bx)) * (mx - bx) + by;

  line(ax, ay, mx, my);

  if (depth > 0) {
    divideTriangle(mx, my, ax, ay, bx, by, depth - 1);
    divideTriangle(mx, my, ax, ay, cx, cy, depth - 1);
  }
}

function setup() {
  angleMode(DEGREES);

  createCanvas(540, 540);
  background(255);

  const depth = 8;

  const t1 = [20, 20, 520, 20, 20, 520];
  triangle(...t1);
  divideTriangle(...t1, depth);

  const t2 = [520, 520, 20, 520, 520, 20];
  triangle(...t2);
  divideTriangle(...t2, depth);
}

function draw() {}
