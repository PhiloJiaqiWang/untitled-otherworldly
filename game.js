let tileMap = new Tileset("./assets/tilemap_packed.png", 16, 12, 11, 20)

let playerTileset = new Tileset("./assets/little_boy.png", 16, 3, 4, 20)

let player = new Entity(playerTileset, 50)

function preload() {
  tileMap.preload()
  player.preload()
}

function setup() {
  createCanvas(500, 500)
  noSmooth()
  player.addAnimation('walkLeft', [9,10,11,10], 10)
  player.setCurrentAnimation('walkLeft')
  frameRate(60)
}

function draw() {
  background(0)
  tileMap.drawMap([
    [0,1,0,0,1,0],
    [0,2,1,0,1,0],
    [0,0,0,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,1,2,0],
    [0,1,0,1,1,0],
    [0,2,1,0,0,0]
  ])
  player.setPosition({x: 30, y: 30})
  player.draw()
}