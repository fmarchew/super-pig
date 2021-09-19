import data from "./data";


function Pig(ctx, canvas, pigProps) {
    class Pig {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.color = data.pig.color;
            this.radius = data.pig.radius;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    let pig = new Pig(pigProps.x, pigProps.y)
    pig.draw()
    pig.x = pigProps.x;
    pig.y = pigProps.y;
    console.log(pig)
}


export default Pig;