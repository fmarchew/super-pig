import data from "./data";
import spriteSheet from "./pigSprite.png"

export default class Pig {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = data.pig.color;
        this.radius = data.pig.radius;
        this.eating = false;
    }

    draw(ctx) {
        const {frameX, frameY, gameFrame} = data.frames;


        const pig = new Image();
        pig.src = spriteSheet;

        // data.potatoesArray.forEach(el=>{
        //     let dx = this.x - el.x;
        //     let dy = this.y - el.y;
        //     let distance = Math.sqrt(dx * dx + dy * dy);
        //     let sumOfRadius = data.pig.radius + this.radius;
        //
        //     if (distance < sumOfRadius) {
        //         data.frames.frameX = 0;
        //         data.frames.frameY = 1
        //         setTimeout(()=>{
        //             data.frames.frameY = 0
        //        },300)
        //
        //
        //     } else if (distance === sumOfRadius) {
        //         data.frames.frameX = 0;
        //         data.frames.frameY = 1
        //         setTimeout(()=>{
        //             data.frames.frameY = 0
        //         },300)
        //     }
        //
        // })

        //
        // ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.drawImage(pig, frameX * 350, frameY * 350, 350, 350, this.x - 75, this.y - 75, 150, 150)
        if (gameFrame % 5 === 0) {
            if (frameX < 4) data.frames.frameX++;
            else data.frames.frameX = 0;
        }
        data.frames.gameFrame++
        // ctx.fill();


    }

}
