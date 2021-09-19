import data from "./data";

export default class Pig{
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.color = data.pig.color;
            this.radius = data.pig.radius;
    }
    draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
}
