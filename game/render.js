class Renderer {
    world
    canvas
    pen
    constructor(world, canvas) {
        this.world = world
        this.canvas = canvas
        this.pen = canvas.getContext('2d')
    }
    redraw() {
        // reset pen transoform and clear canvas
        this.pen.resetTransform()
        // this.pen.fillStyle = 'rgb(240,240,255)'
        this.pen.fillStyle = 'white'
        this.pen.fillRect(0,0,canvas.width,canvas.height)
        this.pen.translate(300,300)

        // this.world.bodies.forEach(body=>{
        //     this.pen.translate(body.x,-body.y)
        //     body.drawMe(this.pen)
        //     this.pen.translate(-body.x,body.y)
        // })
        this.world.robots.forEach(robot=>{
            robot.drawChildren(this.pen)
        })
    }
}