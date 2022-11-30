let Shape = {}
Shape = class {
}

Shape.Circle = class extends Shape {
    radius;
    constructor(radius) {
        this.radius = radius
    }
}
Shape.Rect = class extends Shape {
    w;h;
    constructor(w,h) {
        this.w = w;
        this.h = h;
    }
}

let thing = new Shape.Circle()