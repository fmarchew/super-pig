import data from "../../data/data";
import cloudImage from "../../sprites/cloudsSprites.png";

export default class Potatoes {

    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 5 + 3;
        this.speedY = Math.random() * 5 - 2.5;
        this.radius = data.size.canvasSize/33;
        this.outOfScreen = false;
        this.marked = false;
        this.randomNumber = Math.floor(Math.random() * (4 - 0)) + 0;
    }

    update(canvas) {
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY = this.speedY * -1;
        }
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.outOfScreen = true;

        // COLLISION SYSTEM
        let dx = data.pigCoordinates.x - this.x;
        let dy = data.pigCoordinates.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let sumOfRadius = data.pig.radius + this.radius;


        if (distance < sumOfRadius || distance === sumOfRadius) {

            data.frames.frameX = 0;
            data.frames.frameY = 1
            setTimeout(() => {
                data.frames.frameY = 0
            }, 300)
            return this.marked = true;
        }
    }

    draw(ctx) {

        const {canvasSize} = data.size
        const cloud = new Image();
        cloud.src = cloudImage;


        ctx.fillStyle = "brown";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        ctx.drawImage(cloud, this.randomNumber * 350, 350, 350, 350, this.x - canvasSize/24, this.y - canvasSize/24 , canvasSize/12, canvasSize/12)
    }
}


