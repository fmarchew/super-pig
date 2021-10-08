// import data from "./data";
import enemyImage from "../../sprites/enemySprite.png"
import data from "../../data/data";




export default class Enemy{

    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width * 2) - (canvas.width * 1.5))) + (canvas.width * 1.5);
        this.y =  Math.random() * canvas.height
        this.speedX = Math.random() * data.enemy.speedMax + data.enemy.speedMin;
        this.speedY = Math.random() * data.enemy.speedMax - data.enemy.speedMin;
        this.radius = data.size.canvasSize/22;
        this.outOfScreen = false;
        this.marked = false;
        this.gameFrame = 0;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(canvas){

        if (this.y < 0 || this.y > canvas.height) {
            this.speedY = this.speedY * -1;
        }
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.outOfScreen = true;

        // COLLISON
        if(!data.player.untouchable) {

            let dx = data.pigCoordinates.x - this.x;
            let dy = data.pigCoordinates.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let sumOfRadius = data.pig.radius + this.radius;


            if (distance < sumOfRadius || distance === sumOfRadius) {
                // data.player.dead = true
                // data.player.untouchable = true
                data.player.untouchable = true
                data.frames.lastFrame = 6
                this.marked = true;
                data.player.lives--
                setTimeout(() => {
                    data.frames.lastFrame = 4
                    data.player.untouchable = false
                }, 3000)

            }
        }

    }
    draw(ctx){
        const {canvasSize} = data.size

        const enemy = new Image();
        enemy.src = enemyImage;
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "green"
        ctx.drawImage(enemy, this.frameX * 350, this.frameY * 350, 350, 350, this.x - canvasSize/9, this.y - canvasSize/9 , canvasSize/4.5, canvasSize/4.5)
        // ctx.fill()
        if (this.gameFrame % 7 === 0) {
            if (this.frameX < 4) this.frameX++;
            else this.frameX = 0;
        }
        this.gameFrame ++



    }

}