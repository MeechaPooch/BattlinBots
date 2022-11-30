let con = {
    mouse:{
        x:0,
        y:0,
        getWorldX(){
            return this.x
        },
        getWorldY(){
            return this.y
        }
    },
    keys:{
        pressed:{}
    }
}
Object.prototype.con = con

document.addEventListener('mousemove',(e)=>{
    con.mouse.x = e.clientX;
    con.mouse.y = e.clientY;
})
document.addEventListener('keydown',(e)=>{
    con.keys.pressed[e.key] = true
})
document.addEventListener('keyup',(e)=>{
    con.keys.pressed[e.key] = false
})