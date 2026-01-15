class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); // we will refer to this scene with this key
    }

    preload() {
        this.load.image("rocket", "./assets/rocket.png");
        this.load.image("ship", "./assets/ship.png");
        this.load.image("starfield", "./assets/starfield.png");
        this.load.spritesheet("explosion", "./assets/explosion.png", {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 3
        });
    }

    create() {
        // configure anim
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion", {
                start: 0, end: 3, first: 0
            }),
            frameRate: 15
        });

        this.add.text(20, 20, "Rocket Patrol Menu");
        //skip to Play
        this.scene.start("playScene");
    }
}