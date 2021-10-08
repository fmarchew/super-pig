import './scss/App.scss';
import React from "react";
import Menu from "./components/Menu";
import Background from "./components/Background";
import Leaderboard from "./components/Leaderboard";
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
