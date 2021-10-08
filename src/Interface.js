import data from "./data/data";

export default function Interface(ctx) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText(`Points: ${data.player.points}`, 40, 40)
    ctx.fillText(`Lives: ${data.player.lives}`, 200, 40)
}

