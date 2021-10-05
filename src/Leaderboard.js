import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import {collection, getDocs} from "firebase/firestore"



function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);


    useEffect(() => {

        const loadLeaderboard = async () => {
            let tab = []
            const querySnapshot = await getDocs(collection(db, "scores"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                // setLeaderboard(...prev=>[...prev, doc])
                let row = doc.data();
                tab.push(row)
            });

            setLeaderboard(tab.sort((a, b) => b.points - a.points));
        }
        loadLeaderboard()
        // console.log(leaderboard);
    }, [])

    console.log(leaderboard);

    return (
        <div className="menu">
            <h1>Leaderboard</h1>
            <table id="leaderboard">
                <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                </tr>

                {leaderboard.map((e, idx) => {
                    return (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.points}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );


}

export default Leaderboard;