class Controller {
    listenerMap = {}
    keysDown = {}


    register(key,func) {
        if(!(key in this.listenerMap)) {
            this.listenerMap[key] = []
        }
        this.listenerMap[key].push(func)
    }

    keyDownListener() {

    }

    keyUpListener() {
        
    }
}