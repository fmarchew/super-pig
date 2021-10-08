import cloudImage from "./scss/sprites/cloudsSprites.png"

export default class Clouds {
    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
        this.y = Math.random() * canvas.height - 200;
        this.size = Math.random() * 350 + 200;
        this.speedX = -5;
        this.color = "white";
        this.randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
        this.outOfScreen = false;

    }

    update() {
        this.x += this.speedX;
        if(this.x < -400)this.outOfScreen = true;
    }

    draw(ctx) {
        // ctx.fillStyle = "white";
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // ctx.fill();

        const cloud = new Image();
        cloud.src = cloudImage;

        ctx.drawImage(cloud, this.randomNumber * 350, 0, 350, 350, this.x, this.y, this.size, this.size)
    }
}
