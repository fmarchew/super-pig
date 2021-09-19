import React, {useEffect, useRef} from 'react';
import data from "./data";
import Pig from "./Pig";
import initClouds from "./InitClouds";
import handleClouds from "./HandleClouds";


const {pigProps} = data

function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        console.log("===============")
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();

        initClouds(canvas)

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Pig(ctx, canvas, pigProps);
            handleClouds(ctx)
            requestAnimationFrame(animate);
        }
        animate()

    }, []);


    return (<>
        <canvas
            id="canvas"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseMove={event => {
                pigProps.x = event.clientX;
                pigProps.y = event.clientY;
            }}
        />
    </>)
}

export default Background;
