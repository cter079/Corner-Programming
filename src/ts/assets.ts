import * as PIXI from 'pixi.js'
import { Level1 } from './level1'

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    private assets: AssetFile[] = []

    constructor(game: Level1) {
        super()

        this.assets = [
            { name: "spritesheetJson", url: "moon-spritesheet.json" },
            { name: "spritesheetJson2", url: "maanwalk-sprite.json" },
        ]

        this.assets.forEach(asset => {
            this.add(asset.name, asset.url)
        })

        this.onProgress.add((loader) => this.showProgress(loader))
        this.load(() => game.doneLoading())

    }

    private showProgress(loader) {
    }
}