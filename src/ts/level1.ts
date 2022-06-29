import Matter from 'matter-js'
import * as PIXI from "pixi.js"
import playerImage from "../images/moon.png"
import jumpSoundFile from "url:../sound/jump.mp3"
import mSoundFile from "url:../sound/m.mp3"
import aSoundFile from "url:../sound/a.mp3"
import nSoundFile from "url:../sound/n.mp3"
import backgGroundImage from "../images/background.png"
import platformImage from "../images/platform.png"
import platformImage2 from "../images/platform2.png"
import mImage from "../images/m.png"
import aImage from "../images/a.png"
import nImage from "../images/n.png"
import { Ground } from './Ground'
import { Letter } from "./Letter"
import { Assets } from './assets'
import { Player } from "./Player"
import moon from "url:../sound/moon.mp3";

import { UI } from "./ui"
import { Background } from "./background"

//Imports door Camryn 

export class Level1 {
    public pixi: PIXI.Application
    public engine: Matter.Engine
     elements: (Letter | Player)[] = []
    private bg: PIXI.TilingSprite
    private player: Player;
    private interface:UI

// Gemaakt door Camryn
    constructor() {
            // Container aanmaken waar de game in komt te zitten
            const container = document.getElementById("container")!
            this.pixi = new PIXI.Application({ width: 900, height: 500 })
            container.appendChild(this.pixi.view)
            new Assets(this)

            // Physics engine Matter opstarten en aanmaken
            this.engine = Matter.Engine.create()
            Matter.Events.on(this.engine, 'collisionStart', (event) => this.onCollision(event))
            // Alle assets inladen in pixi
            this.pixi.loader
                .add("player", playerImage)
                .add("jumpsound", jumpSoundFile)
                .add("msound", mSoundFile)
                .add("asound", aSoundFile)
                .add("nsound", nSoundFile)
                .add("background", backgGroundImage)
                .add("m", mImage)
                .add("a", aImage)
                .add("n", nImage)
                .add("platform", platformImage)
                .add("platform2", platformImage2)



            this.pixi.loader.load(() => this.doneLoading())
       
    }
    // tot hier

    public doneLoading() {
        // background door Corné
            this.bg = new Background(this.pixi.loader.resources["background"].texture!, 5000, 900)
            this.pixi.stage.addChild(this.bg)

// Pixi animatedsprite door rowan
            let frames = this.createWalkingAnimation()
            this.elements.push(this.player)
            this.pixi.stage.x = this.pixi.screen.width / 2;


            // Tilemap door Milan (Collision gedeelte gemaakt door Camryn)
            let ground = new Ground(this.pixi.loader.resources["platform"].texture!, this, 500, 580, 200, 20,)
            this.pixi.stage.addChild(ground)
            let ground2 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 300, 580, 200, 1000,)
            this.pixi.stage.addChild(ground2)
            let ground3 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 100, 580, 200, 1000,)
            this.pixi.stage.addChild(ground3)
            let ground4 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 724, 580, 200, 20,)
            this.pixi.stage.addChild(ground4)
            let ground5 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1000, 440, 200, 20,)
            this.pixi.stage.addChild(ground5)
            let ground6 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1448, 440, 200, 20,)
            this.pixi.stage.addChild(ground6)
            let ground7 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1700, 580, 200, 20,)
            this.pixi.stage.addChild(ground7)
            let ground8 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1500, 580, 200, 20,)
            this.pixi.stage.addChild(ground8)
            let ground9 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1924, 580, 200, 20,)
            this.pixi.stage.addChild(ground9)
            let ground9up = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1924, 530, 220, 20,)
            this.pixi.stage.addChild(ground9up)
            let ground10 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2148, 580, 220, 20,)
            this.pixi.stage.addChild(ground10)
            let ground10up = new Ground(this.pixi.loader.resources["platform"].texture!, this, 1980, 490, 220, 20,)
            this.pixi.stage.addChild(ground10up)
            let ground11 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2372, 580, 200, 20,)
            this.pixi.stage.addChild(ground11)
            let ground11up = new Ground(this.pixi.loader.resources["platform"].texture!, this, 2140, 440, 220, 20,)
            this.pixi.stage.addChild(ground11up)
           
            let ground13 = new Ground(this.pixi.loader.resources["platform2"].texture!, this, 2720, 580, 80, 20,)
            this.pixi.stage.addChild(ground13)
            let ground14 = new Ground(this.pixi.loader.resources["platform2"].texture!, this, 3044, 580, 80, 20,)
            this.pixi.stage.addChild(ground14)
            
            let ground16 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3440, 580, 200, 20,)
            this.pixi.stage.addChild(ground16)
            let ground16up = new Ground(this.pixi.loader.resources["platform2"].texture!, this, 3750, 530, 80, 20,)
            this.pixi.stage.addChild(ground16up)
            let ground17up = new Ground(this.pixi.loader.resources["platform2"].texture!, this, 3950, 430, 80, 20,)
            this.pixi.stage.addChild(ground17up)
            let ground17 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 3716, 580, 200, 20,)
            this.pixi.stage.addChild(ground17)
           
            let ground19 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4164, 580, 224, 20,)
            this.pixi.stage.addChild(ground19)
            let ground20 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4388, 580, 224, 20,)
            this.pixi.stage.addChild(ground20)
            let ground21 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4612, 580, 224, 20,)
            this.pixi.stage.addChild(ground21)
            let ground22 = new Ground(this.pixi.loader.resources["platform"].texture!, this, 4836, 580, 224, 1000,)
            this.pixi.stage.addChild(ground22)
          

            // Interface door Corné
        this.interface = new UI(this)
        this.pixi.stage.addChild(this.interface)

        
          // Letters toevoegen aan de game door Camryn en textures door Rowan
            let letter = new Letter(1530, 527, this.pixi.loader.resources["m"].texture!, this, this.pixi.loader.resources["msound"].data!)
            this.elements.push(letter)
            this.pixi.stage.addChild(letter)
            let letter2 = new Letter(2130, 527, this.pixi.loader.resources["a"].texture!, this, this.pixi.loader.resources["asound"].data!)
            this.elements.push(letter2)
            this.pixi.stage.addChild(letter2)
            let letter3 = new Letter(3450, 527, this.pixi.loader.resources["a"].texture!, this, this.pixi.loader.resources["asound"].data!)
            this.elements.push(letter3)
            this.pixi.stage.addChild(letter3)
            let letter4 = new Letter(3950, 375, this.pixi.loader.resources["n"].texture!, this, this.pixi.loader.resources["nsound"].data!)
            this.elements.push(letter4)
            this.pixi.stage.addChild(letter4)


            this.pixi.ticker.add((delta:number) => this.update(delta))
    }


    // CreateWalkingAnimation door Rowan
    public createWalkingAnimation() {
        let frames: PIXI.Texture[] = [];

        for (let i = 1; i <= 4; i++) {
            frames.push(PIXI.Texture.from(`maan-animation-export${i}.png`));
        }
    
        this.player = new Player(frames, this)
        this.pixi.stage.x = this.pixi.screen.width / 2;


    }

//gameFinish en gameOver door Milan
    public gameFinish(){
        window.close()
        window.open("victory.html")
    }

    public gameOver(){
        window.close()
        window.open("gameover.html")
    }

    // Alles hieronder tot DOM door Camryn
    private update(delta:number) {
        //Physics engine updaten
        this.interface.update()
        Matter.Engine.update(this.engine, 1000 / 60)
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
        Matter.Composite.remove(this.engine.world, element.rigidBody)                           
        this.pixi.stage.removeChild(element)                                                    
        this.elements = this.elements.filter((el: Letter | Player) => el != element)   
    }
}
    new Level1()



    // DOM/UI door Corné
    let body = document.body;
    let moonSong = new Audio(moon);
    moonSong.play()
    moonSong.volume = 0.5
    moonSong.loop = true

    let exitButton = new Image;
    exitButton.src = "https://www.pngall.com/wp-content/uploads/4/Cancel-Button-PNG-Free-Download.png";
    exitButton.classList.add("active");
    body.appendChild(exitButton);
    
    let audioMute = document.createElement('div');
   audioMute.classList.add("audio");
   let audioclick = 0
   body.appendChild(audioMute);

   audioMute.addEventListener('click', function () {
    if (audioclick >= 1) {
        moonSong.play();
        moonSong.loop= true;

        audioclick--
        audioMute.classList.remove("audiomute");

    } else {
        moonSong.pause();
        audioclick++
        audioMute.classList.add("audiomute");
    }
})


    exitButton.addEventListener('click', function () {
        window.close()
        window.open("index.html")


    })

