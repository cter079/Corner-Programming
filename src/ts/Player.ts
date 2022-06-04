import * as PIXI from "pixi.js"
import { Level1 } from "./level1"
import Matter from 'matter-js'

export class Player extends PIXI.Sprite {
    private rigidBody: Matter.Body
    private xspeed = 0
    yspeed = 0
    speed: number = 0
    jumpSound:HTMLAudioElement
    game: Level1
    background: PIXI.Sprite

    constructor(texture: PIXI.Texture, game: Level1) {
        super(texture)
        this.game = game
        this.anchor.set(0.5)
        this.x = game.pixi.screen.width/2
        this.y = game.pixi.screen.height/2
        


        const playerOptions: Matter.IBodyDefinition = {
            density: 0.001,
            friction: 1,
            frictionStatic: 1,
            frictionAir: 0.05,
            restitution: 0,
            inertia: Infinity,
            inverseInertia: Infinity,
            label: "Player"
        }


        this.rigidBody = Matter.Bodies.rectangle(600, 230, 75, 100, playerOptions)
        Matter.Composite.add(game.engine.world, this.rigidBody)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        this.jumpSound = game.pixi.loader.resources["jumpsound"].data!
    }



    update() {
        let mapwidth = 1800
        let mapheight = 500
        let centerx = 100
        let centery = 400

        // beweeg het karakter over de map maar niet buiten beeld
        this.x = this.clamp(this.x + this.xspeed, 0, mapwidth)
        this.y = this.clamp(this.y + this.yspeed, 0, mapheight)

        // centreer het hele level onder het karakter, gebruik clamp om bij de randen niet te scrollen
        let mapx = this.clamp(this.x, centerx, mapwidth - centerx)
        let mapy = this.clamp(this.y, centery, mapheight - centery)
        this.game.pixi.stage.pivot.set(mapx, mapy)  
       

        if (this.speed != 0) {
            Matter.Body.setVelocity(this.rigidBody, { x: this.speed, y: this.rigidBody.velocity.y })
    
        }

        this.x = this.rigidBody.position.x
        this.y = this.rigidBody.position.y
        this.rotation = this.rigidBody.angle // todo make sure rigidbody angle cannot change
        
    }
    clamp(num: number, min: number, max: number) {
        return Math.min(Math.max(num, min), max)
    }
   
    

    onKeyDown(e: KeyboardEvent) {
        if (e.key === " " || e.key === "ArrowUp") {
            if (this.rigidBody.velocity.y > -0.4 && this.rigidBody.velocity.y < 0.4) {
                Matter.Body.applyForce(this.rigidBody, { x: this.rigidBody.position.x, y: this.rigidBody.position.y }, { x: 0, y: -0.40 })
                this.jumpSound.play()
            }
        }
        switch (e.key) {
            case "ArrowLeft":
                this.speed = -5
                break
            case "ArrowRight":
                this.speed = 5
                break
        }
    }

    onKeyUp(e: KeyboardEvent) {
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                this.speed = 0
                break
        }
    }

    // in case mario goes out of bounds
    resetPosition() {
        Matter.Body.setPosition(this.rigidBody, { x: 120, y: 30 })
        Matter.Body.setVelocity(this.rigidBody, { x: 0, y: 0 })
        Matter.Body.setAngularVelocity(this.rigidBody, 0)
    }

    beforeUnload() {

    }
}
