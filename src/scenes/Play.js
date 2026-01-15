class Play extends Phaser.Scene {
    constructor() {
        super("playScene"); // we will refer to this scene with this key
    }

    create() {
        let w = game.config.width, h = game.config.height;
        let GREEN = 0x00FF00, WHITE = 0xFFFFFF;

        // add UI BG and borders
        // using 'this' means it can be accessed anywhere in the scene
        this.add.rectangle(0, borderUISize + borderPadding, w, borderUISize * 2,
            GREEN).setOrigin(0, 0);
        
        this.add.rectangle(0, 0, w, borderUISize, WHITE).setOrigin(0, 0);
        this.add.rectangle(0, h - borderUISize, w, borderUISize, WHITE).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, h, WHITE).setOrigin(0, 0);
        this.add.rectangle(w - borderUISize, 0, borderUISize, h, WHITE).setOrigin(0, 0);

        // add scrolling BG
        this.starfield = this.add.tileSprite(0, 0, 640, 480, "starfield").setOrigin(0, 0);
    }

    update() {
        this.starfield.tilePositionX -= 2;
    }
}