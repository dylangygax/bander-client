import React, { useState, createContext } from 'react'

const UserContext = createContext([{user: 'KORN'}, () => {}])

const UserContextProvider = (props) => {
    const [loggedInUser, setUser] = useState({
        loggedInUser: "NIN"
    });
    return (
        <UserContext.Provider value={[loggedInUser, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}