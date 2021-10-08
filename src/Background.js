import React, {useEffect, useRef, useState} from 'react';
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
import {Link} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "./firebase";



function Background() {
    const canvasRef = useRef(null);
    const [dead, setDead] = useState(false);
    const [name, setName] = useState('');

    // FIREBASE CONTROL

    const handleOnChange = (e) => {
        setName(e.target.value);
    };
    const saveScore = async () => {
        await addDoc(collection(db, "scores"), {
            name: name,
            points: data.player.points,
        });

    };

    //

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
                // data.player.dead = true;
                setDead(true)
                ctx.font = "bold 100px Comic Sans MS";
                ctx.fillStyle = "red";
                ctx.fillText(`GAME OVER`, canvas.width / 2 - 300, canvas.height / 2 - 200)
                const deadPig = new Image();
                deadPig.src = spriteSheet;
                ctx.drawImage(deadPig, 0, 2 * 350, 350, 350, canvas.width / 2 - 150, canvas.height / 2 - 200, 350, 350)
            } else {
                // console.log(window.window);
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
        {dead &&
        <div className="menu addScore">
            <input type="text" placeholder={"type your name..."} onChange={handleOnChange} value={name}/>
            <Link to="/leaderboard" onClick={saveScore}>Add Score</Link>
            <Link to="/game" onClick={()=>window.location.reload()}>Play again</Link>
        </div>
        }
        <canvas
            id="canvas"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            // onMouseMove={event => {
            //     pigCoordinates.x = event.clientX;
            //     pigCoordinates.y = event.clientY;
            // }}
        >

        </canvas>
    </>)
}

export default Background;
