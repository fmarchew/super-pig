export default class Clouds {
    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 75 + 50;
        this.speedX = -5;
        this.color = "white"
        this.outOfScreen = false;
    }

    update() {
        this.x += this.speedX;
        if(this.x < 0)this.outOfScreen = true;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }
}
