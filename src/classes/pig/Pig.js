import data from "../../data/data";
import spriteSheet from "../../sprites/pigSprite.png"




export default class Pig {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = data.pig.color;
        this.radius = data.size.canvasSize/28;
        this.eating = false;
        this.frameX = 0;

    }

    draw(ctx) {
        const {frameX, frameY, gameFrame} = data.frames;

        const {canvasSize} = data.size

        const pig = new Image();
        pig.src = spriteSheet;
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.drawImage(pig, frameX * 350, frameY * 350, 350, 350, this.x - canvasSize/14, this.y - canvasSize/13.7 , canvasSize/7, canvasSize/7)
        // ctx.fill()
        if (gameFrame % 5 === 0) {
            if (frameX < data.frames.lastFrame) data.frames.frameX++;
            else data.frames.frameX = 0;
        }
        data.frames.gameFrame++




    }

}
