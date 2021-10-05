import React from 'react';
import {
    Link
} from "react-router-dom";
function Menu() {
    return (
        <>

        <div className="menu">
            <h1>Super Pig</h1>
            <Link to="game">Start Game</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/credits">credits</Link>
        </div>
        </>
    );
}

export default Menu;