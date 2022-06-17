import Matter from 'matter-js'
import * as PIXI from "pixi.js"
import coinImage from "../images/coin.png"
import playerImage from "../images/moon.png"
import jumpSoundFile from "url:../sound/jump.mp3"
import coinSoundFile from "url:../sound/coin.mp3"
import backgGroundImage from "../images/background.png"
import mImage from "../images/m.png"
import { Letter } from "./Letter"
import { Tilemap1 } from "./tilemap"
import { Player } from "./Player"
import { UI } from "./ui"
import { Background } from "./background"

export class Level1 {
    public pixi: PIXI.Application
    public engine: Matter.Engine
    private elements: (Letter | Player)[] = []
    private bg: PIXI.TilingSprite
    private player: Player;
    private interface:UI


    constructor() {
            // Container aanmaken waar de game in komt te zitten
            const container = document.getElementById("container")!
            this.pixi = new PIXI.Application({ width: 900, height: 500 })
            container.appendChild(this.pixi.view)

            // Physics engine Matter opstarten en aanmaken
            this.engine = Matter.Engine.create()
            Matter.Events.on(this.engine, 'collisionStart', (event) => this.onCollision(event))
            // Alle assets inladen in pixi
            this.pixi.loader
                .add("coin", coinImage)
                .add("player", playerImage)
                .add("jumpsound", jumpSoundFile)
                .add("coinsound", coinSoundFile)
                .add("background", backgGroundImage)
                .add("m", mImage)


            this.pixi.loader.load(() => this.doneLoading())
       
    }

    public doneLoading() {

            // Achtergrond aanmaken breedte,hoogte in pixels
            this.bg = new Background(this.pixi.loader.resources["background"].texture!, 5000, 900)
            this.pixi.stage.addChild(this.bg)

            this.player = new Player(this, frames)

            // Player toevoegen aan de game 
            this.elements.push(this.player)
            this.pixi.stage.x = this.pixi.screen.width / 2;

            let tilemap = new  Tilemap1

      
// Letters toevoegen aan de game
            let letter = new Letter(1530, 527, this.pixi.loader.resources["m"].texture!, this)
            this.elements.push(letter)
            this.pixi.stage.addChild(letter)


            this.pixi.ticker.add((delta:number) => this.update(delta))
    }


    public update(delta:number):void {
        //Physics engine updaten
        Matter.Engine.update(this.engine, 1000 / 60)
        this.player.update(delta)

        // Alle sprites updaten
        for (let el of this.elements) {
            el.update(delta)
        }
    }

    private onCollision(event: Matter.IEventCollision<Matter.Engine>) {
        let collision = event.pairs[0]
        let [bodyA, bodyB] = [collision.bodyA, collision.bodyB]
        if (bodyA.label === "Coin" && bodyB.label === "Player") {
            let element = this.findSpriteWithRigidbody(bodyA)
            if (element) this.removeElement(element)
        }
        if (bodyA.label === "Player" && bodyB.label === "Coin") {
            let element = this.findSpriteWithRigidbody(bodyB)
            if (element) this.removeElement(element)
        }

    }

    private findSpriteWithRigidbody(rb: Matter.Body) {
        return this.elements.find((element) => element.rigidBody === rb)
    }

    private removeElement(element: Letter | Player) {
        element.beforeUnload()
        Matter.Composite.remove(this.engine.world, element.rigidBody)                           // stop physics simulation
        this.pixi.stage.removeChild(element)                                                    // stop drawing on the canvas
        this.elements = this.elements.filter((el: Letter | Player) => el != element)      // stop updating
    }
}
    new Level1()



    // DOM
    let body = document.body;

    let exitButton = new Image;
    exitButton.src = "https://www.pngall.com/wp-content/uploads/4/Cancel-Button-PNG-Free-Download.png";
    exitButton.classList.add("active");
    body.appendChild(exitButton);


    exitButton.addEventListener('click', function () {
        window.close()
        window.open("index.html")


    })

