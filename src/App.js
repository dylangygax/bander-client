import React, {useState} from "react";
import initRoute from "./config/initRoute";
import "./App.css"


function App(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))
    
    const storeUser = (userId) => {
        setCurrentUser({currentUser: userId})
        localStorage.setItem('uid', userId)
    }
    
    return (
        <div>
            {initRoute}
        </div>
    );
}

export default App;

