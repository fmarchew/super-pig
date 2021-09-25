import React, {useEffect, useRef} from 'react';
import initClouds from "./InitClouds";
import handleClouds from "./HandleClouds";
import PigMovement from "./PigMovement";
import initPotatoes from "./InitPotatoes";
import handlePotatoes from "./HandlePotatoes";
import Interface from "./Interface";





function Background() {
    const canvasRef = useRef(null);


    useEffect(() => {
        // let pig = document.getElementById("pig")
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");




        ctx.beginPath();

        initClouds(canvas)
        initPotatoes(canvas)


        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            handleClouds(ctx);
            handlePotatoes(ctx, canvas);
            Interface(ctx);
            PigMovement(ctx);

            requestAnimationFrame(animate);
        }

        animate();

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
