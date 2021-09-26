import data from "./data";
import Enemy from "./Enemy";

export default function InitEnemies(canvas) {
    setInterval(() => {
        data.enemiesArray = data.enemiesArray.filter((potato)=>!potato.outOfScreen)
        for (let i = 0; i < Math.floor(Math.random() * (4 - 1)) + 1; i++) {
            data.enemiesArray.push(new Enemy(canvas));
        }
    }, 3000)
}