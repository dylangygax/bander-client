import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBody from "../pages/AppBody";

import Login from "../pages/Login";

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={AppBody} />
    </Switch>
)

