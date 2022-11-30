// collision levels
// 0: no collision <= z+ robot components {group: -1}
// 1: collides only with level 2 <= robot components {category= 0b0001}
// 2: collides with level 1 and 2 <= game items

class Body {
    x 
    y
    xVel = 0
    yVel = 0

    constructor(x,y){
        this.x = x
        this.y = y
    }

    drawMe(pen) {
        pen.rotate((Date.now()/1000)%Math.PI)
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
    
}

class Rect extends Body {
    w
    h

    constructor(x,y,w,h) {
        super(x,y)
        this.w = w;
        this.h = h;
    }

    drawMe(pen) {
        pen.strokeStyle = 'black'
        pen.lineWidth = 3
        pen.beginPath()
        pen.moveTo(0,0)
        pen.lineTo(0,this.h)
        pen.lineTo(this.w,this.h)
        pen.lineTo(this.w,0)
        pen.lineTo(0,0)
        pen.closePath()
        pen.stroke()

        // pen.strokeRect(0,0,this.w,this.h)
    }
}

class Circle extends Body {
    r;

    constructor(x,y,r) {
        super(x,y)
        this.r = r;
    }

    drawMe(pen) {
        pen.strokeStyle = 'black'
        pen.lineWidth = 3
        pen.ellipse(0,0,r,r,0,0,Math.PI*2)
    }
}