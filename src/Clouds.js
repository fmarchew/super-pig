import data from "./data";
const cloudsArray = [];

export default function Clouds(ctx, canvas) {

    class Clouds {
        constructor() {
            this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 75 + 50;
            this.speedX = -5;
            this.color = "white"
        }

        update() {
            this.x += this.speedX;
        }

        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

        }
    }

    function initClouds() {
        for (let i = 0; i < Math.floor(Math.random() * (4 - 1)) + 1; i++) {
            cloudsArray.push(new Clouds(canvas, ctx));
        }
    }

    initClouds()

    function handleClouds() {
        for (let i = 0; i < cloudsArray.length; i++) {
            cloudsArray[i].update();
            cloudsArray[i].draw();
            console.log(cloudsArray)
        }
    }

    handleClouds()
}

