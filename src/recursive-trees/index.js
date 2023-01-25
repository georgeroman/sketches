function recursiveTree(x, y, length, depth) {
  const numBranches = random([1, 2, 2, 3, 3, 4]);

  const branchRange = [-75, 75];
  for (let i = 0; i < numBranches; i++) {
    push();

    translate(x, y);

    const interval = (branchRange[1] - branchRange[0]) / numBranches;
    rotate(
      random(branchRange[0] + interval * i, branchRange[0] + interval * (i + 1))
    );

    line(0, 0, 0, (-length * 2) / 3);

    if (depth > 0) {
      recursiveTree(0, (-length * 2) / 3, (length * 2) / 3, depth - 1);
    }

    pop();
  }
}

function setup() {
  angleMode(DEGREES);

  const [width, height] = [500, 500];
  createCanvas(width, height);
  background(255);

  line(width / 2, height, width / 2, height - 100);

  const length = 100;
  const depth = 7;
  recursiveTree(width / 2, height - 100, length, depth);
}

function draw() {}
