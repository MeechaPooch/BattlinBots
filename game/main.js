
// setup canvas (TODO: move this somewhere)
let canvas = document.getElementById('gamecanvas')
function setDims() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
setDims()
window.addEventListener('resize',setDims)

var engine = Matter.Engine.create();

world = new World()
world.setup()
renderer = new Renderer(world,canvas)

// add back the next two lines

// setInterval(()=>console.log(world.physicsHandler.timeSince),500)

let robot = new Robot()
let base = robot.createBaseComponent(robot.BaseTypes.FRC)
let leftWheel = new Wheel(15)
base.attach(leftWheel,25,-15,0,0,0)
let rightWheel = new Wheel(15)
base.attach(rightWheel,-25,-15,0,0,0)

world.addRobot(robot)



// var boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
// Matter.Composite.add(world.engine.world, [boxB]);


// START SIM
setInterval(()=>world.tick(),16)
setInterval(()=>renderer.redraw(),1)