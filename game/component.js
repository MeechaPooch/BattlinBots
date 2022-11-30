// if they get hit hard enough, parts can fall off

class Component {
    static NO_COLLIDE = {group:-1, category: 0b000,mask:0b000}
    static BOT_COMPONENT = {group:-2, category: 0b010,mask:0b100}
    static GAME_COMPONENT = {group:1, category: 0b100,mask:0b110}

    body; constraint; 
    composite;

    parent;
    parentAnchorX;
    parentAnchorY;
    parentAnchorRotation;
    offsetX = 0; offsetY = 0;

    children = [];

    constructor(body) {
        this.body = body;
        // default filter:
        this.body.collisionFilter = Component.BOT_COMPONENT  
    }

    attach(component, anchorX, anchorY, offsetX, offsetY, rot) {
        component.parent = this;
        component.parentAnchorX = anchorX;
        component.parentAnchorY = anchorY;
        component.offsetX = offsetX;
        component.offsetY = offsetY;

        component.constraint = Matter.Constraint.create({
            bodyA: this.body,
            bodyB: component.body,
            // damping: .1,
            stiffness:1,
            length: 0,
            pointA:{x:anchorX, y:anchorY}
        })
        // Matter.Body.setVelocity(component.body, {x:10,y:1})

        // composite
        component.composite = this.composite
        // component.robot = this.robot
        // add to robot (world)

        // add to children list
        this.children.push(component)
    }

    drawMe(pen) {
        // pen.rotate((Date.now()/1000)%Math.PI)
        pen.strokeStyle = 'red'
        pen.lineWidth = 2
        pen.beginPath()
        pen.moveTo(0,-10)
        pen.lineTo(0,10)
        pen.moveTo(-10,0)
        pen.lineTo(10,0)
        pen.closePath()
        pen.stroke()

        pen.ellipse(0,0,5,5,0,2*Math.PI,0)
        pen.stroke()    
    }
   
    drawMeAndChildren(pen) {
        let oldTransform = pen.getTransform() // save old transform
        pen.translate(-this.body.position.x,-this.body.position.y)
        pen.rotate(this.body.angle)
        this.drawMe(pen)
        pen.setTransform(oldTransform) // revert to normal transform
        this.children.forEach(child=>{
            child.drawMeAndChildren(pen)
        })
    }

}

class RobotComponent extends Component {
    robot;
    attach(...args) {
        super.attach(...args)
        let component = args[0]
        if(this.robot) {
            this.robot.addComponent(component);
        } else {
            console.warn('Warning! Parent has no robot.')
        }
    }
}

class Wheel extends RobotComponent {
    radius;

    // place a default motor if you put wheel on point that does not have motor
    // when placing wheel, snap to nearby free motors
    // holding control disables snapping
    // allow post editing of constraint pointB?
    constructor(radius) {
        // constructor(parent, radius, offsetX, offsetY, rot) {
        super(
            Matter.Bodies.circle(0,0,radius), // TODO: set x and y to mouse positions
            // Matter.Bodies.circle(parent.body.x+offsetX, parent.body.y+offsetY, radius),
            // parent, offsetX, offsetY, rot
        )
        this.radius = radius;
        this.body.filter = Component.BOT_COMPONENT
    }
    
    drawMe(pen) {
        pen.fillStyle = 'yellow'
        pen.strokeStyle = 'black'
        pen.lineWidth = 3
        pen.beginPath()
        pen.arc(0,0,this.radius, 0, 2 * Math.PI)
        pen.fill()
        pen.stroke()
        super.drawMe(pen)

    }
}

class Rect extends RobotComponent {
    width;height;

    constructor(width, height) {
        super(Matter.Bodies.rectangle(0,0, width, height))  
        this.width = width;
        this.height = height;
        this.body.filter = Component.BOT_COMPONENT
    }

    drawMe(pen) {
        pen.fillStyle = 'grey'
        pen.strokeStyle = 'black'
        pen.lineWidth = 3
        pen.fillRect(-this.width/2,-this.height/2,this.width,this.height)
        pen.strokeRect(-this.width/2,-this.height/2,this.width,this.height)
        super.drawMe(pen)
    }
}