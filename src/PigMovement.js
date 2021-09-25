import data from "./data";
import Pig from "./Pig";



function PigMovement(ctx) {
    let pig = new Pig(data.pigCoordinates.x, data.pigCoordinates.y)
    pig.draw(ctx)

    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") data.moving.left = true
        if (event.key === "ArrowRight") data.moving.right = true
        if (event.key === "ArrowDown") data.moving.down = true
        if (event.key === "ArrowUp") data.moving.up = true
    });
    window.addEventListener("keyup", (event) => {
        if (event.key === "ArrowLeft") data.moving.left = false
        if (event.key === "ArrowRight") data.moving.right = false
        if (event.key === "ArrowDown") data.moving.down = false
        if (event.key === "ArrowUp") data.moving.up = false
    })

    if (data.moving.left) data.pigCoordinates.x -= data.pig.speed
    if (data.moving.right) data.pigCoordinates.x += data.pig.speed
    if (data.moving.down) data.pigCoordinates.y += data.pig.speed
    if (data.moving.up) data.pigCoordinates.y -= data.pig.speed


    // pig.x = data.pigCoordinates.x;
    // pig.y = data.pigCoordinates.y;
    console.log(data.pigCoordinates);

}

export default PigMovement;



