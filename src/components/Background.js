import React, {useEffect, useRef, useState} from 'react';
import initClouds from "../classes/cloud/InitClouds";
import handleClouds from "../classes/cloud/HandleClouds";
import PigMovement from "../classes/pig/PigMovement";
import initPotatoes from "../classes/potato/InitPotatoes";
import handlePotatoes from "../classes/potato/HandlePotatoes";
import Interface from "../Interface";
import data from "../data/data";
import HandleEnemies from "../classes/enemy/HandleEnemies";
import InitEnemies from "../classes/enemy/InitEnemies";
import spriteSheet from "../sprites/pigSprite.png";
import {Link} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";


function Background() {
    const canvasRef = useRef(null);
    const [dead, setDead] = useState(false);
    const [name, setName] = useState("");

    // FIREBASE CONTROL

    const handleOnChange = (e) => {

        setName(e.target.value);
        console.log(name);
    };
    const saveScore = async () => {
        let currentName = name || "John Doe";
        await addDoc(collection(db, "scores"), {
            name: currentName,
            points: data.player.points,
        });

    };

    //

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");


        ctx.beginPath();


            initClouds(canvas)
            initPotatoes(canvas)
            InitEnemies(canvas)


        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (data.player.lives <= 0) {

                setDead(true)
                ctx.font = "bold 100px Comic Sans MS";
                ctx.fillStyle = "lightpink";
                ctx.fillText(`GAME OVER`, canvas.width / 2 - 300, canvas.height / 2 - 200)
                const deadPig = new Image();
                deadPig.src = spriteSheet;
                ctx.drawImage(deadPig, 0, 2 * 350, 350, 350, canvas.width / 2 - 150, canvas.height / 2 - 200, 350, 350)
            } else {


                handleClouds(ctx);
                handlePotatoes(ctx, canvas);
                Interface(ctx);
                HandleEnemies(ctx, canvas)
                PigMovement(ctx, canvas);
                requestAnimationFrame(animate);
                console.log(canvas.height);
            }
        }

        animate()

    }, []);


    return (<>
        {dead &&
        <>
            <div className="menu addScore">
                <div>
                    <input id="inputName" type="text" placeholder={"type your name..."} onChange={handleOnChange} value={name}/>
                    <Link to="/leaderboard" onClick={saveScore}>Add Score</Link>
                </div>
                <Link to="/game" onClick={() => window.location.reload()}>Play again</Link>
            </div>

        </>
        }
        <canvas
            id="canvas"
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        >

        </canvas>
    </>)
}

export default Background;
