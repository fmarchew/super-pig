import data from "./data";

export default function HandlePotatoes(ctx, canvas) {

    for (let i = 0; i < data.potatoesArray.length; i++) {
        data.potatoesArray[i].update(canvas);
        data.potatoesArray[i].draw(ctx);
    }

}

