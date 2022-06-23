import * as PIXI from "pixi.js"
import { Level1 } from "./level1"
import Matter from 'matter-js'
import { Sprite } from "pixi.js"
// Alles door Camryn
export class Ground extends PIXI.Sprite {

    private rigidBody: Matter.Body
    
    constructor(texture: PIXI.Texture, game: Level1, x: number, y:number, xwidth:number, ywidth:number ) {
        super(texture)
        this.anchor.set(0.5)
                this.rigidBody = Matter.Bodies.rectangle(x,y,xwidth,ywidth, { isStatic: true, label:"Ground" }) //x,y,w,h

        Matter.Composite.add(game.engine.world, this.rigidBody)

        this.update()
    }

    private update() {
        this.x = this.rigidBody.position.x
        this.y = this.rigidBody.position.y
    }
    
}
