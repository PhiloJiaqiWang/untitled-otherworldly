class Entity {
  constructor(tileSet, size) {
    this.tileSet = tileSet
    this.position = {}
    this.spriteAnimations = new Map()
    this.currentAnimation = ''
    this.currentAnimationIdx = 0
    this.size = size
    this.timeSinceLastFrame = 0
  }

  preload() {
    this.tileSet.preload()
    this.position = createVector(0, 0)
  }

  setPosition(point) {
    this.position.x = point.x
    this.position.y = point.y
  }

  setSize(size) {
    this.size = size
  }
  
  addAnimation(name, cycle, time) {
    this.spriteAnimations.set(name, {cycle, time})
  }

  setCurrentAnimation(name) {
    this.currentAnimation = name
  }

  get topLeft() {
    return {x: this.position.x - this.size, y: this.position.y - this.size}
  }

  get bottomRight() {
    return {x: this.position.x + this.size, y: this.position.y + this.size}
  }
  
  get bottomLeft() {
    return {x: this.position.x - this.size, y: this.position.y + this.size}
  }

  get topRight() {
    return {x: this.position.x + this.size, y: this.position.y - this.size}
  }

  pointIsIn(point) {
    const topLeft = this.topLeft
    const bottomRight = this.topRight
    return point.x > topLeft.x && point.y > topLeft.y && point.x < bottomRight.x && point.y < bottomRight.y
  }

  collidesWith(entity) {
    const corners = [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight]
    for (let corner of corners)
      if (entity.pointIsIn(corner))
        return true
    return false
  }

  draw() {
    const currentAnimationList = this.spriteAnimations.get(this.currentAnimation).cycle
    const currentSprite = currentAnimationList[this.currentAnimationIdx]
    if (this.timeSinceLastFrame <= 0) {
      this.timeSinceLastFrame = this.spriteAnimations.get(this.currentAnimation).time
      this.currentAnimationIdx = (this.currentAnimationIdx + 1) % currentAnimationList.length
    }
    this.tileSet.drawTile(currentSprite, this.position.x, this.position.y, this.size)
    this.timeSinceLastFrame--
  }
}