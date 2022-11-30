Shape = {}

Shape.Circle = class {
    static MAX_WIDTH = 200;
    static MIN_WIDTH = 40;
    radius = 1;

    update(mouse) {
        let width = Math.sqrt(Math.pow(con.mouse.x - x,2) + Math.pow(con.mouse.y - y,2))
        width = Math.min(Math.max(width,Shape.Circle.MIN_WIDTH),Shape.Circle.MAX_WIDTH)    
    }
    draw() {

    }
}