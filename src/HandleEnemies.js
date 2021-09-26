import data from "./data";

export default function HandleEnemies(ctx, canvas){
    data.enemiesArray.forEach(el=>{
        el.update(canvas)
        el.draw(ctx)
    })
}