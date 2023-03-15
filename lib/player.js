class Player extends Entity {
  constructor(
    tileSet,
    size,
    controls = { up: "w", down: "s", left: "a", right: "d" },
    speed = 1
  ) {
    super(tileSet, size);
    this.controls = { ...controls };
    this.speed = speed;
  }

  move(direction) {
    if (direction === this.controls.right)
      this.position.add(createVector(this.speed, 0));
    if (direction === this.controls.left)
      this.position.add(createVector(-this.speed, 0));
    if (direction === this.controls.up)
      this.position.add(createVector(0, -this.speed));
    if (direction === this.controls.down)
      this.position.add(createVector(0, this.speed));
  }
}
