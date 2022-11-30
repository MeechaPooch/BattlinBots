currentMouse = null

document.addEventListener('mousemove',(e)=>{
})
document.addEventListener('mousedown',(e)=>{
    currentMouse = currentMouse?.toNext(e)
})