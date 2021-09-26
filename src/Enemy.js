// import data from "./data";
import enemyImage from "./enemySprite.png"
import data from "./data";


export default class Enemy{

    constructor(canvas) {
        this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
        this.y =  Math.floor(Math.random() * ((canvas.height - 300) - canvas.height - 300)) + canvas.height - 300;
        this.speedX = Math.random() * 7 + 3;
        this.speedY = Math.random() * 7 - 2.5;
        this.radius = 65;
        this.outOfScreen = false;
        this.marked = false;
        this.gameFrame = 0;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(canvas){

        if (this.y < 0 || this.y > canvas.height - this.radius) {
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


            if (distance < sumOfRadius) {
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
            } else if (distance === sumOfRadius) {
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
        // this.gameFrame ++
    }
    draw(ctx){
        // ctx.fillStyle = "green";
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();

        // const {enemyFrameX, enemyFrameY, EnemyGameFrame} = data.frames;


        const enemy = new Image();
        enemy.src = enemyImage;
        // ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.drawImage(enemy, this.frameX * 350, this.frameY * 350, 350, 350, this.x - 100, this.y - 100, 200, 200)

        if (this.gameFrame % 7 === 0) {
            if (this.frameX < 4) this.frameX++;
            else this.frameX = 0;
        }
        this.gameFrame ++
        // ctx.fill();


    }

}