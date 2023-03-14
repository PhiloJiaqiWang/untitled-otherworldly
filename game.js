let tileMap = new Tileset("./assets/tilemap_packed.png", 16, 12, 11, 10)

function preload() {
  tileMap.preload()
}

function setup() {
  createCanvas(500, 500)
  noSmooth()
}

function draw() {
  tileMap.drawMap([
    [0,1,0,0,1,0],
    [0,2,1,0,1,0],
    [0,0,0,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,1,2,0],
    [0,1,0,1,1,0],
    [0,2,1,0,0,0]
  ])
}