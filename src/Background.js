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

        class Particle {
            constructor(){
                // this.x = mouse.x;
                // this.y = mouse.y;
                this.x = Math.floor(Math.random() * (2500 - 1900)) + 1900;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
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
                ctx.arc(this.x, this.y, 100, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init(){
            setInterval(()=>{
                for (let i = 0; i < 5 ; i++){
                    particlesArray.push(new Particle());
                }
            },4000)

        }
        init();

        function handleParticles(){
            for(let i = 0; i < particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
            }
        }





        canvas.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            // drawCircle()

        })
        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle()
            handleParticles()
            requestAnimationFrame(animate);
        }
        animate();

    },[]);

    return <canvas id="canvas" ref={canvasRef}/>
}

export default Background;
