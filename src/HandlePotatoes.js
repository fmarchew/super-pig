import data from "./data";

export default function HandlePotatoes(ctx, canvas) {

    data.potatoesArray.forEach((el, idx, obj)=>{
        el.update(canvas);
        if(el.marked){
            obj.splice(idx, 1)
            data.player.points++
        }
        el.draw(ctx)

    })
}

