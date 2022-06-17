import PIXI from "pixi.js"
import { Ground } from "./Ground"
import platformImage from "../images/platform.png"




export class Tilemap1 extends PIXI.Sprite {
    pixi: PIXI.Application
    
constructor(){
    super()
    
    
}
createParkour(){
            let ground = new Ground(this.pixi.loader.resources["platform"].texture!, this, 500, 580, 224, 20,)
            this.pixi.stage.addChild(ground)
            let ground2 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 300, 580, 224, 1000,)
            this.pixi.stage.addChild(ground2)
            let ground3 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 100, 580, 224, 1000,)
            this.pixi.stage.addChild(ground3)
            let ground4 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 724, 580, 224, 20,)
            this.pixi.stage.addChild(ground4)
            let ground5 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1000, 440, 224, 20,)
            this.pixi.stage.addChild(ground5)
            let ground6 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1448, 440, 224, 20,)
            this.pixi.stage.addChild(ground6)
            let ground7 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1700, 580, 224, 20,)
            this.pixi.stage.addChild(ground7)
            let ground8 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1500, 580, 224, 20,)
            this.pixi.stage.addChild(ground8)
            let ground9 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1924, 580, 224, 20,)
            this.pixi.stage.addChild(ground9)
            let ground10 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2148, 580, 224, 20,)
            this.pixi.stage.addChild(ground10)
            let ground11 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2372, 580, 224, 20,)
            this.pixi.stage.addChild(ground11)
            let ground12 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2596, 580, 224, 20,)
            this.pixi.stage.addChild(ground12)
            let ground13 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2820, 580, 224, 20,)
            this.pixi.stage.addChild(ground13)
            let ground14 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3044, 580, 224, 20,)
            this.pixi.stage.addChild(ground14)
            let ground15 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3268, 580, 224, 20,)
            this.pixi.stage.addChild(ground15)
            let ground16 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3492, 580, 224, 20,)
            this.pixi.stage.addChild(ground16)
            let ground17 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3716, 580, 224, 20,)
            this.pixi.stage.addChild(ground17)
            let ground18 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3940, 580, 224, 20,)
            this.pixi.stage.addChild(ground18)
            let ground19 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4164, 580, 224, 20,)
            this.pixi.stage.addChild(ground19)
            let ground20 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4388, 580, 224, 20,)
            this.pixi.stage.addChild(ground20)
            let ground21 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4612, 580, 224, 20,)
            this.pixi.stage.addChild(ground21)
            let ground22 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4836, 580, 224, 20,)
            this.pixi.stage.addChild(ground22)
}
}