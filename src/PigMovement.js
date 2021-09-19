import data from "./data";
import Pig from "./Pig";


function PigMovement(ctx) {

    let pig = new Pig(data.pigCoordinates.x, data.pigCoordinates.y)
    pig.draw(ctx)
    pig.x = data.pigCoordinates.x;
    pig.y = data.pigCoordinates.y;

}

export default PigMovement;



