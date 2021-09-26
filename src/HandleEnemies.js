import data from "./data";

export default function HandleEnemies(ctx, canvas){
    data.enemiesArray.forEach((el)=>{
        el.update(canvas)
        // if(el.marked){
        //     data.player.lives--
        // }
        el.draw(ctx)
    })
}