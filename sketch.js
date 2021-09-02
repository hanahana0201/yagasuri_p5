const w = 720
const s = 80
const d = w / s

function setup() {
  createCanvas(w, w);
}

function draw() {
  strokeWeight(1)
  for(let y = 0; y < w + s; y += s) {
    for(let x = 0; x < w; x ++) {
      stroke(
        (
          ( x + 20 ) / 40 % 2 + y / 80 % 2 + (( x + 20 )  % 40 === 20
            ? 0
            : 1
          )
        ) % 2 === 0
        ? "#e83929"
        : "#f6bfbc"
      )
      line( x, y - abs( 40 - x % 80 ), x, y + 80 - abs( 40 - x % 80 ) );
    }
  }
  // save("mySVG.svg");
  // print("saved svg");
  // noLoop();
}