import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Matches from "../pages/Matches";
import UserShow from "../pages/Show";
import Settings from "../pages/Settings"
import Profile from "../pages/Profile"
// import LoginForm from "../pages/Login2"
// import GeneralMessages from "../pages/GeneralMessages";
// import Messages from "../pages/Messages";

export default (
    <Switch>
        <Route path="/app/Home" component={Home} />
        <Route path="/app/Register" component={Register} />
        <Route path="/app/Search" component={Search} />
        <Route path="/app/Matches" component={Matches} />
        <Route path="/app/Show/:id" component={UserShow} />
        <Route path="/app/Settings" component={Settings} />
        <Route path="/app/Profile" component={Profile} />
        {/* <Route path="/app/login" component={LoginForm} /> */}
        {/* <Route path="/GeneralMessages" component={GeneralMessages} />
        <Route path="/Messages" component={Messages} /> */}
    </Switch>
)