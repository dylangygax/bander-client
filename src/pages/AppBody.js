import React from "react";
import routes from "../config/routes";
import Header from "../components/Header";
import {QueueContext, QueueContextProvider} from "../QueueContext"


function AppBody() {
    return (
        <QueueContextProvider>
            <Header />
            {routes}
        </QueueContextProvider>
    );
}

export default AppBody;