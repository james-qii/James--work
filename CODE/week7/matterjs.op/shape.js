class Shape {
    constructor(world, pos, size, options) {
        this.world = world;
        this.pos = pos.copy();
        this.size = size;
        this.options = options;
        this.body = this.createBody();
        Matter.Composite.add(this.world, this.body);
    }

    createBody() {
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        this.displayShape();
        pop();
    }

    displayShape() {

    }
}