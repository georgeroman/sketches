function setup() {
  angleMode(DEGREES);

  createCanvas(550, 550);
  background(255);

  // Starting coordinates
  const sx = 50;
  const sy = 50;

  // Horizontal and vertical distance between each triangle
  const pad = 50;

  // Adjust the y coordinate so that the canvas is simmetric
  const yAdj = -9.549150281252;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      push();

      // Determine triangle coordinates
      const ax = sx + 0 + pad * j;
      const ay = sy - 25 + pad * i + yAdj;

      const bx = sx - 25 + pad * j;
      const by = sy + 25 + pad * i + yAdj;

      const cx = sx + 25 + pad * j;
      const cy = sy + 25 + pad * i + yAdj;

      // Determine length of triangle sides
      const a = sqrt(pow(bx - cx, 2) + pow(by - cy, 2));
      const b = sqrt(pow(ax - cx, 2) + pow(ay - cy, 2));
      const c = sqrt(pow(ax - bx, 2) + pow(ay - by, 2));

      // Determine triangle incenter
      const ix = (a * ax + b * bx + c * cx) / (a + b + c);
      const iy = (a * ay + b * by + c * cy) / (a + b + c);

      // Move to the triangle incenter point
      translate(ix, iy);

      // Perform a random rotation
      rotate(random(360));

      // Perform a random scaling
      scale(random(0.1, 0.5));

      // Move back to the initial origin
      translate(-ix, -iy);

      fill(0);
      triangle(ax, ay, bx, by, cx, cy);

      pop();
    }
  }
}

function draw() {}
