import data from "./data";
import Enemy from "./Enemy";

export default function InitEnemies(canvas) {
    let min = 1;
    let max = 4;
    let counter = 5;
    setInterval(()=>{
        if(data.player.points === counter && counter <= 25){
            min++
            max++
            data.enemy.speedMin++
            data.enemy.speedMax++
            data.pig.speed++
            counter += 5;
            console.log(min)
        }
    },50)

    setInterval(() => {
        if(document.hasFocus()) {
            data.enemiesArray = data.enemiesArray.filter((potato) => !potato.outOfScreen)
            for (let i = 0; i < Math.floor(Math.random() * (max - min)) + min; i++) {
                data.enemiesArray.push(new Enemy(canvas));
            }
        }
    }, 3000)
}