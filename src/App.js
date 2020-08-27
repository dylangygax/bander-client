import React, {useState} from "react";
import initRoute from "./config/initRoute";
import {UserContext, UserContextProvider} from "./UserContext"
import "./App.css"


function App(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))
    
    const storeUser = (userId) => {
        setCurrentUser({currentUser: userId})
        localStorage.setItem('uid', userId)
    }
    
    return (
        <div>
            <UserContextProvider>
                {initRoute}
            </UserContextProvider>
        </div>
    );
}

export default App;

