class Tool {
    onmove;
    onclick;
}

Tool.Drop = class {
    part = null

    update() {
        this.part.x = con.mouse.getWorldX()
        this.part.y = con.mouse.getWorldY()
    }

    finish() {
        
    }

    draw() {

    }
}
Tool.Drop.prototype = Tool.prototype