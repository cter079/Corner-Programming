import * as PIXI from "pixi.js"
import fishImage from "./images/moon.png"
import bgImage from "./images/background.jpg"
import {Moon} from "./moon"

export class Game {

    pixi: PIXI.Application
    background: PIXI.Sprite
    sprites : PIXI.Sprite[] = []



    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)

        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {

        this.background = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)

        let player = new Moon()
        this.pixi.stage.addChild(player)

        
        
            
        
           
        
     

       



        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta : number) {
      
    }
}

new Game()