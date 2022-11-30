class Robot {
    composite;
    parts = []

    constructor() {
        this.composite = Matter.Composite.create([])
    }

    drawChildren(pen){
        this.parts.forEach(part=>part.drawMeAndChildren(pen))
    }

    // to use publicly
    add(component, parent) {
        parent = parent ?? this.getComponentAt(component)
   
        // component.
        return this;
    }

    // internally called
    addComponent(component) {
        // add to composite, which adds to world.
        let toAdd = [component.body]
        if(component.constraint) {toAdd.push(component.constraint)}
        Matter.Composite.add(this.composite,toAdd)
        this.parts.push(component);
        component.robot = this;
    }

    // highlight 
    getComponentAt() {

    }

    BaseTypes = {
        FRC:()=>new Rect(100,30),
   }
    createBaseComponent(func) {
        let component = func()
        this.addComponent(component)
        return component
    }
}