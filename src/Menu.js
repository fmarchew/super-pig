import React, {useState} from 'react';
import Background from "./Background";

function Menu() {
    const [start, setStart] = useState(false);

    const handleGame = (e) => {
        e.preventDefault();
        setStart(true);
    }

    return (
        <>

        <div className="menu">
            <h1>Super Pig</h1>
            <button onClick={(e)=>handleGame(e)}>Start Game</button>
            {start && <Background/>}
            <button>Leaderboard</button>
            <button>credits</button>
        </div>
        </>
    );
}

export default Menu;