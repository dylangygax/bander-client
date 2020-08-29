import React, { useState, createContext } from 'react'

const UserContext = createContext([{loggedInUser: 'KORN'}, () => {}])

const UserContextProvider = (props) => {
    //_id, email, username, isBand, bio, genre, location, instrument,
    //usersLiked, usersWhoLikeYou, matches
    const [loggedInUser, setUser] = useState({
        musicUrl: localStorage.getItem('musicUrl'),
        _id: localStorage.getItem('_id'),
        email: localStorage.getItem('email'), 
        username: localStorage.getItem('username'), 
        isBand: localStorage.getItem('isBand'), 
        bio: localStorage.getItem('bio'), 
        genre: localStorage.getItem('genre'), 
        location: localStorage.getItem('location'), 
        instrument: localStorage.getItem('instrument'),
        usersLiked: localStorage.getItem('usersLiked'), 
        usersWhoLikeYou: localStorage.getItem('usersWhoLikeYou'), 
        matches: localStorage.getItem('matches')
    })
    return (
        <UserContext.Provider value={[loggedInUser, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
//useState(localStorage.getItem('uid'))
export {UserContext, UserContextProvider}