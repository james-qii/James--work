class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.r = r;
        this.friction = 0.985
        this.maxAge = random(100, 300);
        this.age = 0
    }

    applyForce(force) {
        this.acc.add(force);
    }

    bounce() {
        if (this.pos.y > height) {
            this.pos.y = height;
            this.vel.y *= -1;
        } else if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -1;
        }

        if (this.pos.x > width) {
            this.pos.x = width;
            this.vel.x *= -1;
        } else if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1;
        }


    }

    update() {
        this.age++;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.mult(this.friction);
        this.bounce();


    }
    display() {
        circle(this.pos.x, this.pos.y, this.r * 2);
    }
    isDead() {
        return this.age > this.maxAge
    }
}