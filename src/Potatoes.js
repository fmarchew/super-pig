import data from "./data";

export default class Potatoes {

    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 5 + 3;
        this.speedY = Math.random() * 5 - 2.5;
        this.radius = 10;
    }
        update(canvas){
            if(this.y < 0 || this.y > canvas.height - this.radius){
                this.speedY = this.speedY * -1;
            }
            this.x -= this.speedX;
            this.y += this.speedY;
            if(this.x < 0)this.outOfScreen = true;

            // COLLISION SYSTEM





        }
        draw(ctx){

            ctx.fillStyle = "brown";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

        }
}


