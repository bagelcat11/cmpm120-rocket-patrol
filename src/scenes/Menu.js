class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); // we will refer to this scene with this key
    }

    preload() {
        this.load.image("rocket", "./assets/rocket.png");
        this.load.image("ship", "./assets/ship.png");
        this.load.image("starfield", "./assets/starfield.png");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        //skip to Play
        this.scene.start("playScene");
    }
}