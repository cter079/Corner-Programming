import * as PIXI from "pixi.js"
import { Level1 } from "./Level1"
import { Player } from "./Player"

//Alles hieronder van Corné
export class UI extends PIXI.Container {
    private timeLeft: PIXI.Text
    private finish: PIXI.Text
    private xspeed = 0
    private yspeed = 0
    private speed: number = 0
    public game: Level1
    public pixi: PIXI.Application
    public player: Player
    private time: number
    private time2: string

    constructor(game: Level1) {
        super()
        this.game = game
        this.x = game.pixi.screen.width / 2
        this.y = game.pixi.screen.height / 2

        const style = new PIXI.TextStyle({
            fontFamily: 'ArcadeFont',
            fontSize: 40,
            fontWeight: 'bold',
            fill: ['#FFFFFF']
        })



        this.timeLeft = new PIXI.Text(`tijd over: ${this.time2}`, style)
        this.addChild(this.timeLeft)
        this.finish = new PIXI.Text(`finish!`, style)
        this.addChild(this.finish)
        this.finish.x = 4000
        this.finish.y = 110


        this.time = 100
    }

    public update() {
        let mapwidth = 5000
        let mapheight = 500
        this.x = this.clamp(this.x + this.xspeed, 0, mapwidth)
        this.y = this.clamp(this.y + this.yspeed, 0, mapheight)

        this.time -= 0.0083
        this.time2 = this.time.toFixed(0)
        this.timeLeft.text = `tijd over: ${this.time2}`
        if (this.time <= 0){
this.game.gameOver()
        }
    }


    private clamp(num: number, min: number, max: number) {
        return Math.min(Math.max(num, min), max)
    }

}





