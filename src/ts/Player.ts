import * as PIXI from "pixi.js"
import { Level1 } from "./level1"
import Matter from 'matter-js'

export class Player extends PIXI.AnimatedSprite {
    public rigidBody: Matter.Body
    xspeed = 0
    yspeed = 0
    speed: number = 0
    jumpSound:HTMLAudioElement
    game: Level1
    

    constructor(textures:PIXI.Texture[], game: Level1) {
        super(textures)
        this.game = game
        this.anchor.set(0.5)
        this.x = game.pixi.screen.width/2
        this.y = game.pixi.screen.height/2
        this.animationSpeed = 0.1;
        this.scale.set(0.5)

        this.game.pixi.stage.addChild(this);

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


        this.rigidBody = Matter.Bodies.rectangle(600, 230, 55, 100, playerOptions)
        Matter.Composite.add(game.engine.world, this.rigidBody)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        this.jumpSound = game.pixi.loader.resources["jumpsound"].data!
    }



    public update(delta:number):void {
        super.update(delta)
        let mapwidth = 5000
        let mapheight = 500
        let centerx = 100
        let centery = 400

        this.x = this.clamp(this.x + this.xspeed, 0, mapwidth)
        this.y = this.clamp(this.y + this.yspeed, 0, mapheight)

        let mapx = this.clamp(this.x, centerx, mapwidth - centerx)
        let mapy = this.clamp(this.y, centery, mapheight - centery)
        this.game.pixi.stage.pivot.set(mapx, mapy)  
       

        if (this.speed != 0) {
            Matter.Body.setVelocity(this.rigidBody, { x: this.speed, y: this.rigidBody.velocity.y })
    
        }
       

        this.x = this.rigidBody.position.x
        this.y = this.rigidBody.position.y
        this.rotation = this.rigidBody.angle // todo make sure rigidbody angle cannot change
        if (this.rigidBody.position.y > 600) this.resetPosition()

        
    }
    private clamp(num: number, min: number, max: number) {
        return Math.min(Math.max(num, min), max)
    }
   
    

   private  onKeyDown(e: KeyboardEvent) {
        if (e.key === " " || e.key === "ArrowUp") {
            if (this.rigidBody.velocity.y > -0.4 && this.rigidBody.velocity.y < 0.4) {
                Matter.Body.applyForce(this.rigidBody, { x: this.rigidBody.position.x, y: this.rigidBody.position.y }, { x: 0, y: -0.36 })
                this.jumpSound.play()
            }
        }
        switch (e.key) {
            case "ArrowLeft":
                this.speed = -3,80
                this.play()
                this.scale.x = -0.5


                break
            case "ArrowRight":
                this.speed = 3,80
                this.scale.x = 0.5

                this.play()

                break
        }
    }

    onKeyUp(e: KeyboardEvent) {
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                // this.game.createWalkingAnimation()
                this.speed = 0
                break
        }
    }

    resetPosition() {
        Matter.Body.setPosition(this.rigidBody, { x: 600, y: 230 })
        Matter.Body.setVelocity(this.rigidBody, { x: 0, y: 0 })
        Matter.Body.setAngularVelocity(this.rigidBody, 0)
    }

    beforeUnload() {

    }
}
