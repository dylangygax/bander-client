import React, { useState } from "react";
import initRoute from "./config/initRoute";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";
import "./app/main.css";
import "./app/style.css";


function App(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

    const storeUser = (userId) => {
        setCurrentUser({ currentUser: userId })
        localStorage.setItem('uid', userId)
    }

    return (
        <div>
            {initRoute}
        </div>
    );
}

export default App;

