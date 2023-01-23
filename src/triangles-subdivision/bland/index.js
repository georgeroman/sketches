function divideTriangle(ax, ay, bx, by, cx, cy, depth) {
  const mx = (bx + cx) / 2;
  const my = (by + cy) / 2;

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
