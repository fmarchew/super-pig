import data from "./data";

export default function Interface(ctx) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText(`Points: ${data.player.points}`, 40, 40)
}
