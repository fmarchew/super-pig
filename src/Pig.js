import data from "./data";
import spriteSheet from "./scss/sprites/pigSprite.png"

export default class Pig {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = data.pig.color;
        this.radius = data.pig.radius;
        this.eating = false;
        this.frameX = 0;

    }

    draw(ctx) {
        const {frameX, frameY, gameFrame} = data.frames;


        const pig = new Image();
        pig.src = spriteSheet;
        // ctx.fillStyle = "pink"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.drawImage(pig, frameX * 350, frameY * 350, 350, 350, this.x - 75, this.y - 75, 150, 150)
        if (gameFrame % 5 === 0) {
            if (frameX < data.frames.lastFrame) data.frames.frameX++;
            else data.frames.frameX = 0;
        }
        data.frames.gameFrame++
        // ctx.fill();


    }

}
