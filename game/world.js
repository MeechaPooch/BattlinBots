class World {
    levelComponents = []
    componentMap = {}
    lastTickStart = Date.now()
    robots = []

    // matterjs
    engine

    setup() {
        this.setupPhysics()
        let ground = Matter.Bodies.rectangle(0,-100,1000,100,{isStatic:true})   
        console.log(ground)
        ground.collisionFilter = Component.GAME_COMPONENT
        this.levelComponents.push(ground)
        Matter.Composite.add(this.engine.world,ground)
    }

    setupPhysics() {
        this.engine = Matter.Engine.create()
        this.engine.gravity.y = -1;
        
    }

    // addComponent(component) {
    //     this.components.push(component)
    //     Matter.Composite.add(engine.world, [component])
    // }
    addRobot(robot) {
        this.robots.push(robot)
        Matter.Composite.add(this.engine.world, robot.composite)
    }


    tick() {
        let timeSinceLastTick = Math.min((Date.now() - this.lastTickStart),50) // cap time multiplier at 1000 millis
        this.lastTickStart = Date.now()
        // console.log(timeSinceLastTick)
        Matter.Engine.update(this.engine,timeSinceLastTick)
        // Matter.Engine.update(this.engine,10)
    //    this.bodies.forEach((body)=>this.physicsHandler.tick(body)) // replace with physics library tick!!!
    }
}


/// physics handlers
class PhysicsHandler {
    tick(obj) {}
}
class GravityHandler extends PhysicsHandler {
    timeSince = 0;
    gravity = -3000;
    tick(object) {
        // TODO: Derive time dependant movement estimations from integrals
        let lastYVel = object.yVel;
        let lastXVel = object.xVel;
        object.yVel += this.gravity * this.timeSince;
        object.xVel *= 1-(20 * this.timeSince);
        object.y += object.yVel * this.timeSince;
        object.x += (lastXVel + object.xVel)/2 * this.timeSince;

        if(object.y < -500) {
            object.y = -500;
            object.yVel = 0;
        }

        if(con.keys.pressed.ArrowUp && object.y <= -500) {
            object.yVel = 1000
        }
        if(con.keys.pressed.ArrowLeft) {
            object.xVel += -7000 * this.timeSince
        }
        if(con.keys.pressed.ArrowRight) {
            object.xVel += 7000 * this.timeSince
        }
    }
}