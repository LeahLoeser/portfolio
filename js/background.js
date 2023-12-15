let points = []; // store points for creating a flow field
let initialized = false; // track if flow field has been initialized

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  angleMode(DEGREES);
  noiseDetail(1);
  // frameRate(30);
}

// generate points
function initializeFlowField() {
  // clear points array
  points = [];
  // calculate density of points based on  canvas dimensions
  const density = int(map(width * height, 0, 800 * 600, 10, 30));

  // generate grid of points w random offsets
  for (let x = 0; x <= width; x += width / density) {
    for (let y = 0; y <= height; y += height / density) {
      // create vector with random offsets & add it to points array
      const p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
}

function draw() {
  // push();
  // fill(10, 20, 30, 25);
  // rect(0, 0, windowWidth, windowHeight);
  // pop();

  if (!initialized) {
    // initialize the flow field if not already initialized
    initializeFlowField();
    initialized = true; // set the flag to true once initialized
  }

  // check if the frame count is below threshold
  if (frameCount < 200) {
    noStroke();
    const mult = 0.01;

    // loop through each point in array
    for (let i = 0; i < points.length; i++) {
      // map color values to x-coordinate
      const r = map(points[i].x, 0, width, 50, 255);
      const g = 100;
      const b = map(points[i].x, 0, width, 255, 50);

      fill(r, g, b, 10);

      // map perlin noise to an angle, update points position
      const angle = map(
        noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720
      );
      // draw ellipse at updated points position
      points[i].add(createVector(cos(angle), sin(angle)));
      ellipse(points[i].x, points[i].y, 1.5);
    }
  } else {
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeFlowField();
  background(10, 20, 30); // Reset background
  // indicate flow field reinitialization when window resized
  initialized = false;
}
