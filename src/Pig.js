import data from "./data";
import spriteSheet from "./pigSprite.png"

export default class Pig {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = data.pig.color;
        this.radius = data.pig.radius;
    }

    draw(ctx) {
        const {frameX, frameY, gameFrame} = data.frames;

        const pig = new Image();
        pig.src = spriteSheet;
        // //
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.drawImage(pig, frameX * 350, frameY * 350, 350, 350, this.x -75, this.y - 75, 150, 150)
        if(gameFrame % 5 === 0) {
            if (frameX < 4) data.frames.frameX++;
            else data.frames.frameX = 0;
        }
        data.frames.gameFrame++
        // ctx.fill();

    }
}
