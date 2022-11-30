// todo rewrite
GAME.con = {
    mouse:{
        x:0,
        y:0,
    },
    keys:{
        pressed:{}
    }
}

// Object.prototype.con = con

document.addEventListener('mousemove',(e)=>{
    GAME.con.mouse.x = e.clientX;
    GAME.con.mouse.y = e.clientY;
})
document.addEventListener('keydown',(e)=>{
    GAME.con.keys.pressed[e.key] = true
})
document.addEventListener('keyup',(e)=>{
    GAME.con.keys.pressed[e.key] = false
})