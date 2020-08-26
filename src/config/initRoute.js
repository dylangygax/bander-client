import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBody from "../pages/AppBody";

import Landing from "../pages/Landing";
import Login from "../pages/Login";

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/app" component={AppBody} />
    </Switch>
)

