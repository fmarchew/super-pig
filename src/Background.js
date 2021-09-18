import React, {useEffect, useRef} from 'react';
import data from "./data";
import Pig from "./Pig";
import Clouds from "./Clouds";


const {pigProps} = data

function Background() {
    const canvasRef = useRef(null);


    // const [canvas, setCanvas] = useState();
    // const [ctx, setCtx] = useState();
    // const [cloudsArray, setCloudsArray] = useState([]);


    // useEffect(() => {
    //
    //     const canvas = canvasRef.current;
    //     // setCanvas(canvas);
    //     const ctx = canvas.getContext("2d");
    //     // setCtx(ctx);
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     const cloudsArray = [];
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     const mouse = {
    //         x: undefined,
    //         y: undefined,
    //     }
    //
    //     function drawCircle() {
    //
    //         ctx.fillStyle = "pink";
    //         ctx.beginPath();
    //         ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    //         ctx.fill();
    //
    //     }
    //
    //     drawCircle()
    //
    //     // GenerateClouds(canvas, ctx, particlesArray);
    //
    //     // CLOUDS CLASS
    //
    //     class Clouds {
    //         constructor() {
    //             // this.x = mouse.x;
    //             // this.y = mouse.y;
    //             this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
    //             this.y = Math.random() * canvas.height;
    //             this.size = Math.random() * 75 + 50;
    //             this.speedX = -5;
    //             this.speedY = 0;
    //         }

            // update() {
            //     this.x += this.speedX;
            //     this.y += this.speedY;
            // }
            //
            // draw() {
            //     ctx.fillStyle = "white";
            //     ctx.beginPath();
            //     for (let i = 0; i < Math.floor(Math.random() * (6 - 3)) + 3; i++) {
            //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            //         ctx.fill();
            //     }

    //         }
    //     }
    //
    //     function init() {
    //         setInterval(() => {
    //             for (let i = 0; i < Math.floor(Math.random() * (4 - 1)) + 1; i++) {
    //                 cloudsArray.push(new Clouds());
    //             }
    //         }, 4000)
    //
    //     }
    //
    //     init();
    //
    //     function handleClouds() {
    //         for (let i = 0; i < cloudsArray.length; i++) {
    //             cloudsArray[i].update();
    //             cloudsArray[i].draw();
    //         }
    //     }
    //
    //     // // END OF CLOUDS CLASS
    //
    //
    //     canvas.addEventListener('mousemove', function (event) {
    //         mouse.x = event.x;
    //         mouse.y = event.y;
    //         // drawCircle()
    //
    //     })
    //
    //     function animate() {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         drawCircle()
    //         handleClouds()
    //         // GenerateClouds(canvas, ctx);
    //         requestAnimationFrame(animate);
    //
    //     }
    //
    //
    //     animate();
    //
    //     // render();
    // }, []);

    useEffect(() => {

        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.beginPath();

            Pig(ctx, canvas, pigProps);
            Clouds(ctx, canvas);


            requestAnimationFrame(render);
        };
        render();

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
