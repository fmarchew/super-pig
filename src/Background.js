import React, {useEffect, useRef} from 'react';
import initClouds from "./InitClouds";
import handleClouds from "./HandleClouds";
import PigMovement from "./PigMovement";
import initPotatoes from "./InitPotatoes";
import handlePotatoes from "./HandlePotatoes";
import Interface from "./Interface";
import data from "./data";
import HandleEnemies from "./HandleEnemies";
import InitEnemies from "./InitEnemies";
import spriteSheet from "./pigSprite.png";


function Background() {
    const canvasRef = useRef(null);


    useEffect(() => {
        // let pig = document.getElementById("pig")
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");


        ctx.beginPath();

        initClouds(canvas)
        initPotatoes(canvas)
        InitEnemies(canvas)

        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (data.player.lives <= 0) {
                ctx.font = "bold 100px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText(`GAME OVER`, canvas.width / 2 - 350, canvas.height / 2 - 100)
                const deadPig = new Image();
                deadPig.src = spriteSheet;
                ctx.drawImage(deadPig, 0, 2 * 350, 350, 350, canvas.width / 2 - 200, canvas.height / 2 - 100, 350, 350)
            } else if(window) {
                handleClouds(ctx);
                handlePotatoes(ctx, canvas);
                Interface(ctx);
                HandleEnemies(ctx, canvas)
                PigMovement(ctx);
                // console.log(data.cloudsArray);
                // console.log(data.potatoesArray);
                // console.log(data.player.dead);
                requestAnimationFrame(animate);
                console.log(canvas.height);
            }
        }

        animate()

    }, []);


    return (<>
        <canvas
            id="canvas"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            // onMouseMove={event => {
            //     pigCoordinates.x = event.clientX;
            //     pigCoordinates.y = event.clientY;
            // }}
        />
    </>)
}

export default Background;
