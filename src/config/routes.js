import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Matches from "../pages/Matches";
import Show from "../pages/Show";
// import GeneralMessages from "../pages/GeneralMessages";
// import Messages from "../pages/Messages";

export default (
    <Switch>
        <Route path="/app/Home" component={Home} />
        <Route path="/app/Register" component={Register} />
        <Route path="/app/Search" component={Search} />
        <Route path="/app/Matches" component={Matches} />
        <Route path="/app/Show" component={Show} />
        {/* <Route path="/GeneralMessages" component={GeneralMessages} />
        <Route path="/Messages" component={Messages} /> */}
    </Switch>
)