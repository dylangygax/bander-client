import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBody from "../pages/AppBody";

import Login from "../pages/Login";
import Login2 from "../pages/Login2";

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login2} />
        <Route path="/app" component={AppBody} />
    </Switch>
)

