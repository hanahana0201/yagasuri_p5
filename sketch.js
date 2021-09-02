const w = 5000

const s = 80
const d = w / s
// Color Scheme (light, dark)
const colorSchemes = []
// Blue
colorSchemes[0] = ["#0fb4e1", "#07a0dc"]
// Red
colorSchemes[1] = ["#f54341", "#c81211"]
// Gold
colorSchemes[2] = ["#f0d588", "#e9cb82"]

function setup() {
  createCanvas(w, w)
  noStroke()
  colorScheme = random(colorSchemes)
  // colorScheme = colorSchemes[2]
}

function draw() {
  background(colorScheme[0])
  drawYagasuri()
  // save("yagasuri_03.svg");
  // print("saved svg");
  // noLoop();
}

function drawYagasuri() {
  const dx_1 = 30
  const dx_2 = dx_1 / 4
  const dx = (dx_1 * 2 + dx_2) * 2;
  const dy = 150

  fill(colorScheme[1])

  for (let i = -1; i < width * 2 / dx; i++) {
    for (let j = -1; j < height * 2 / dy; j++) {
      const px = i * dx
      const py = j * dy
      if (j % 2 === 0) {

        beginShape(QUADS)

        vertex(px - dx_1 * 2 - dx_2, py)
        vertex(px - dx_1 * 2 - dx_2, py + dy)
        vertex(px - dx_1 - dx_2, py + dy + dx_1)
        vertex(px - dx_1 - dx_2, py + dx_1)

        vertex(px - dx_1, py + dx_1)
        vertex(px - dx_1, py + dy + dx_1)
        vertex(px, py + dy);
        vertex(px, py);

        vertex(px, py + dy);
        vertex(px, py + dy * 2);
        vertex(px + dx_1, py + dy * 2 - dx_1);
        vertex(px + dx_1, py + dy - dx_1);

        vertex(px + dx_1 + dx_2, py + dy - dx_1);
        vertex(px + dx_1 + dx_2, py + dy * 2 - dx_1);
        vertex(px + dx_1 * 2 + dx_2, py + dy * 2);
        vertex(px + dx_1 * 2 + dx_2, py + dy);

        endShape()
      } else {
        beginShape(QUADS)

        vertex(px - dx_1 - dx_2, py + dx_1)
        vertex(px - dx_1 - dx_2, py + dy + dx_1)
        vertex(px - dx_1, py + dy + dx_1);
        vertex(px - dx_1, py + dx_1);

        vertex(px + dx_1, py + dy * 2 - dx_1)
        vertex(px + dx_1, py + dy - dx_1)
        vertex(px + dx_1 + dx_2, py + dy - dx_1)
        vertex(px + dx_1 + dx_2, py + dy * 2 - dx_1)

        endShape();
      }
    }
  }
}