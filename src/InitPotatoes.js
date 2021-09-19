import data from "./data";
import Potatoes from "./Potatoes";

export default function InitPotatoes(canvas) {
    setInterval(() => {
        data.potatoesArray = data.potatoesArray.filter((potato)=>!potato.outOfScreen)
        for (let i = 0; i < Math.floor(Math.random() * (4 - 1)) + 1; i++) {
            data.potatoesArray.push(new Potatoes(canvas));
        }
    }, 4000)
}
