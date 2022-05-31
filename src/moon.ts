import * as PIXI from "pixi.js"



export class Moon extends PIXI.Sprite {
    xspeed = 0
    yspeed = 0
  pixi: PIXI.Application
  sprite: PIXI.Sprite

    constructor() {
        
        super()
        this.texture = PIXI.Texture.from('./images/moon.png');
        this.sprite = new PIXI.Sprite(this.texture);
        
        this.x = Math.floor(Math.random() * 900);
        this.y = Math.floor(Math.random() * 500);
        this.interactive = true
        this.buttonMode = true
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    
    update() {
        this.x += this.xspeed
        this.y += this.yspeed
    }

    shoot(){
        console.log("shooooot!")
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                this.shoot()
                break;
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7

                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -7
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }

    }
}
