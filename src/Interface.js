import data from "./data";

export default function Interface(ctx) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.fillText(`Points: ${data.player.points}`, 40, 40)
    ctx.fillText(`Lives: ${data.player.lives}`, 200, 40)
}

