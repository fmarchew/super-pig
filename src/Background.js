import React, {useEffect, useRef} from 'react';
import data from "./data";
import initClouds from "./InitClouds";
import handleClouds from "./HandleClouds";
import PigMovement from "./PigMovement";
import initPotatoes from "./InitPotatoes";
import handlePotatoes from "./HandlePotatoes";
import Interface from "./Interface";


const {pigCoordinates} = data



function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();

        initClouds(canvas)
        initPotatoes(canvas)

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleClouds(ctx);
            handlePotatoes(ctx, canvas);
            PigMovement(ctx);
            Interface(ctx);
            // console.log(data.cloudsArray)
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
            onMouseMove={event => {
                pigCoordinates.x = event.clientX;
                pigCoordinates.y = event.clientY;
            }}
        />
    </>)
}

export default Background;
