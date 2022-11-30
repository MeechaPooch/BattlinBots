// screen width for fullscreen = screen.width

let canvas = document.getElementById('gamecanvas')
function setDims() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
setDims()
window.addEventListener('resize',setDims)


let pen = canvas.getContext('2d')


function tick() {
    pen.resetTransform()
    pen.fillStyle = 'rgba(255,255,255,0.01)'
    pen.clearRect(0,0,canvas.width,canvas.height)
    // pen.fillRect(0,0,canvas.width,canvas.height)


    pen.fillStyle = 'blue'
    pen.lineWidth = 10
    let x = canvas.width /2
    let y = canvas.height /2
    pen.translate(x,y)
    pen.beginPath()

    let width = Math.sqrt(Math.pow(con.mouse.x - x,2) + Math.pow(con.mouse.y - y,2))
    width = Math.min(Math.max(width,40),200)
    pen.ellipse(0,0,width,width,0,2*Math.PI,0)
    pen.stroke()
}
setInterval(tick,0)

