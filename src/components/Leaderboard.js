import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {collection, getDocs} from "firebase/firestore"



function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);


    useEffect(() => {

        const loadLeaderboard = async () => {
            let tab = []
            const querySnapshot = await getDocs(collection(db, "scores"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let row = doc.data();
                tab.push(row)
            });

            setLeaderboard(tab.sort((a, b) => b.points - a.points));
        }
        loadLeaderboard()
    }, [])

    console.log(leaderboard);

    return (
        <div className="leaderboard">
            <table id="table">
                <tbody>
                <tr id="stickyRow">
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                </tr>

                {leaderboard.map((e, idx) => {
                    return (
                        <tr key={idx}>
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