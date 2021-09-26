
const data ={
    player: {
        points: 0,
        dead: false
    },
    pigCoordinates: {
        x: 500,
        y: 500,
    },
    pig:{
        color: "pink",
        radius: 70,
        speed: 3,
    },
    cloudsArray: [],
    potatoesArray: [],
    enemiesArray: [],
    potatoes: {
        radius: 10,
        color: "brown",
    },
    frames:{
        frameX: 0,
        frameY: 0,
        gameFrame: 0,
    },
    sprite: {
      spriteWidth: 350,
      spriteHeight: 350,
    },
    moving: {
        left: false,
        right: false,
        down: false,
        up: false,
    }

}

export default data


