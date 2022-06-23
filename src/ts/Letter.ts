import * as PIXI from "pixi.js"
import Matter from 'matter-js'
import { Level1 } from "./Level1"

// Alles hieronder door Camryn
export class Letter extends PIXI.Sprite {

    public rigidBody: Matter.Body
    private coinSound: HTMLAudioElement
    public game: Level1

    constructor(xpos: number, ypos: number, texture: PIXI.Texture, game: Level1, sound: HTMLAudioElement) {
        super(texture)
        this.game = game

        this.anchor.set(0.5)

        this.rigidBody = Matter.Bodies.circle(xpos, ypos, 10, { friction: 0.00001, restitution: 0, density: 0.001, label: "Coin" }) //x,y,radius
        Matter.Composite.add(game.engine.world, this.rigidBody)
        this.rigidBody.isStatic = true

        this.coinSound = sound
    }

    public update() {
        this.position.set(this.rigidBody.position.x, this.rigidBody.position.y)
        this.rotation = this.rigidBody.angle

    }

    public resetPosition() {
        Matter.Body.setPosition(this.rigidBody, { x: 120, y: 30 })
        Matter.Body.setVelocity(this.rigidBody, { x: 0, y: 0 })
        Matter.Body.setAngularVelocity(this.rigidBody, 0)
    }

    public beforeUnload() {
        this.coinSound.play()
    }
}
