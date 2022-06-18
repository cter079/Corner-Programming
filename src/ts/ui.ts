import * as PIXI from "pixi.js"
import { Level1 } from "./Level1"
import { Player } from "./Player"


export class UI extends PIXI.Container {
    public rigidBody: Matter.Body
    timeLeft:PIXI.Text
    score:string = ""
    xspeed = 0
    yspeed = 0
    speed: number = 0
    game: Level1
    pixi:PIXI.Application
    player: Player
    time:number

    constructor(game: Level1) {
        super()
        this.game = game
        this.x = game.pixi.screen.width/2
        this.y = game.pixi.screen.height/2
        
        const style = new PIXI.TextStyle({
            fontFamily: 'ArcadeFont',
            fontSize: 40,
            fontWeight: 'bold',
            fill: ['#FFFFFF']
        })
       


        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        this.timeLeft = new PIXI.Text(`tijd over: ${this.time}`, style)
        this.addChild(this.timeLeft)
       
        this.time = 100
    }

    update(){
        let mapwidth = 5000
        let mapheight = 500
        this.x = this.clamp(this.x + this.xspeed, 0, mapwidth)
        this.y = this.clamp(this.y + this.yspeed, 0, mapheight)

        this.time -= 0.016
       this.timeLeft.text = `tijd over: ${this.time}`
        }

    

       

    private clamp(num: number, min: number, max: number) {
        return Math.min(Math.max(num, min), max)
    }
   
    

   private  onKeyDown(e: KeyboardEvent) {
        if (e.key === " " || e.key === "ArrowUp") {
            
        }
        switch (e.key) {
            case "ArrowLeft":
                this.x -= 5
                break
            case "ArrowRight":
                this.x += 5
                break
        }
    }

   




}





   
