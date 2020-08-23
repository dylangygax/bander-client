import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Matches from "../pages/Matches";
// import GeneralMessages from "../pages/GeneralMessages";
// import Messages from "../pages/Messages";

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Register" component={Register} />
        <Route path="/Search" component={Search} />
        <Route path="/Matches" component={Matches} />
        {/* <Route path="/GeneralMessages" component={GeneralMessages} />
        <Route path="/Messages" component={Messages} /> */}
    </Switch>
)