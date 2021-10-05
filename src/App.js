import './scss/App.scss';
import React from "react";
import Menu from "./Menu";
import Background from "./Background";
import Leaderboard from "./Leaderboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";




function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/game" component={Background} />
            {/*    <Route path="/credits" component={} />*/}
                <Route path="/leaderboard" component={Leaderboard} />
            </Switch>
        </Router>
    )
}

export default App;
