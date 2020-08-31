import React, {useContext} from "react";
import routes from "../config/routes";
import Header from "../components/Header";
import {QueueContext, QueueContextProvider} from "../QueueContext"
import { UserContext, UserContextProvider } from '../UserContext';


function AppBody() {
    const [loggedInUser, setUser] = useContext(UserContext)
    console.log(loggedInUser)
    if (loggedInUser._id) {
        return (
            <QueueContextProvider>
                <Header />
                {routes}
            </QueueContextProvider>
        )
    } else {
        return (
            <div>
                <h1>not logged in tho...</h1><br />
                <a href='/'>head on home :^)</a>
            </div>
        )
    }
}

export default AppBody;