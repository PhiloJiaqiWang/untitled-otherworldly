class Entity {
  constructor(tileSet, size) {
    this.tileSet = tileSet
    this.position = createVector(0, 0)
    this.spriteAnimations = new Map()
    this.currentAnimation = ''
    this.currentAnimationIdx
    this.size = size
    this.timeSinceLastFrame = 0
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
    return corner.x > topLeft.x && corner.y > topLeft.y && corner.x < bottomRight.x && corner.y < bottomRight.y
  }

  collidesWith(entity) {
    const corners = [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight]
    for (let corner of corners) {
      if entity.pointIsIn(corner)
        return true
    }
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