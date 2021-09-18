import React, {useEffect, useRef} from 'react';

function Background() {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particlesArray = [];

        const mouse = {
            x: undefined,
            y: undefined,
        }
        function drawCircle(){

            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
            ctx.fill();

        }
        drawCircle()

        // CLOUDS CLASS

        class Clouds {
            constructor(){
                // this.x = mouse.x;
                // this.y = mouse.y;
                this.x = Math.floor(Math.random() * ((canvas.width + 300) - (canvas.width + 10))) + (canvas.width + 10);
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 75 + 50;
                this.speedX = -5;
                this.speedY = 0;
            }
            update(){
                this.x += this.speedX;
                this.y += this.speedY;
            }
            draw(){
                ctx.fillStyle = "white";
                ctx.beginPath();
                for(let i = 0; i < Math.floor(Math.random() * (6 - 3)) + 3 ; i++){
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }

            }
        }

        function init(){
            setInterval(()=>{
                for (let i = 0; i < Math.floor(Math.random() * (4- 1)) + 1 ; i++){
                    particlesArray.push(new Clouds());
                }
            },4000)

        }
        init();

        function handleClouds(){
            for(let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
            }
        }

        // END OF CLOUDS CLASS


        canvas.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            // drawCircle()

        })
        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle()
            handleClouds()
            requestAnimationFrame(animate);
        }
        animate();

    },[]);

    return <canvas id="canvas" ref={canvasRef}/>
}

export default Background;
