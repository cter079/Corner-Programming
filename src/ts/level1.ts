import "../css/styles.scss"
import Matter from 'matter-js'
import * as PIXI from "pixi.js"

import coinImage from "../images/coin.png"
import platformImage from "../images/platform.png"
import groundImage from "../images/ground.png"
import playerImage from "../images/moon.png"
import jumpSoundFile from "url:../sound/jump.mp3"  
import coinSoundFile from "url:../sound/coin.mp3" 
import backgGroundImage from "../images/background.png"

import { Coin } from "./Letter"
import { Ground } from "./Ground"
import { Player } from "./Player"

import { Background } from "./background"

export class Level1 {

    pixi: PIXI.Application
    engine: Matter.Engine
    elements: ( Coin | Player)[] = []
    bg: PIXI.TilingSprite
    player: Player;
   



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
            .add("platform", platformImage)
            .add("ground", groundImage)
            .add("player", playerImage)
            .add("jumpsound", jumpSoundFile)
            .add("coinsound", coinSoundFile)
            .add("background", backgGroundImage)

  
        this.pixi.loader.load(() => this.doneLoading())
    }
  

        
    
    
    doneLoading() {
        // Achtergrond aanmaken breedte,hoogte in pixels
        this.bg = new Background(this.pixi.loader.resources["background"].texture!, 5000, 900)
        this.pixi.stage.addChild(this.bg)

        //Hele tilemap aanmaken x,y,breedte,hoogte in pixels
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
        
        
        

        
        
// Player toevoegen aan de game 
        let player = new Player(this.pixi.loader.resources["player"].texture!, this)
        this.elements.push(player)
        this.pixi.stage.addChild(player)
        this.pixi.stage.x = this.pixi.screen.width / 2;
     
        

        setInterval(() => {
            
            // let coin = new Coin(this.pixi.loader.resources["coin"].texture!, this)
            // this.elements.push(coin)
            // this.pixi.stage.addChild(coin)
            
        }, 2000)
       
        
        this.pixi.ticker.add(() => this.update())
    }


    update() {
//Physics engine updaten
        Matter.Engine.update(this.engine, 1000 / 60)

// Alle sprites updaten
        for (let el of this.elements) {
            el.update()
        }
    }



    onCollision(event: Matter.IEventCollision<Matter.Engine>) {
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

    findSpriteWithRigidbody(rb: Matter.Body) {
        return this.elements.find((element) => element.rigidBody === rb)
    }

    removeElement(element:  Coin | Player) {
        element.beforeUnload()
        Matter.Composite.remove(this.engine.world, element.rigidBody)                           // stop physics simulation
        this.pixi.stage.removeChild(element)                                                    // stop drawing on the canvas
        this.elements = this.elements.filter((el:  Coin | Player) => el != element)      // stop updating
    }

    
}

new Level1()



    let body = document.body;



    let exitButton = new Image;

    exitButton.src = "https://www.pngall.com/wp-content/uploads/4/Cancel-Button-PNG-Free-Download.png";

    exitButton.classList.add("active");

    body.appendChild(exitButton);




    exitButton.addEventListener('click', function () {

        window.close()

        window.open("index.html")




    })

