import React, { useState, useContext, useEffect } from 'react';
import Footer from "../components/Footer";
import MatchCard from "../components/MatchCard"
import UserModel from '../models/user';
import { UserContext, UserContextProvider } from '../UserContext';

const Matches = () => {
    const [loggedInUser, setUser] = useContext(UserContext)
    const [loggedInUserObject, setLoggedInUserObject] = useState({})
    const [matchesArray, setMatchesArray] = useState([])
    const [matchIncrementer, setMatchIncrementer] = useState('0')

    useEffect(() => {
        UserModel.show(loggedInUser._id)
            .then(data => {
                console.log(loggedInUser._id)
                console.log(data.user)
                setLoggedInUserObject(data.user)
                console.log(loggedInUserObject)
                data.user.matches.forEach((match, i) => {
                    UserModel.show(match)
                        .then(data => {
                            console.log(data.user)
                            const matchObject = data.user
                            //matchesArray.push(<MatchCard {...matchObject}/>)
                            setMatchesArray(matchesArray => [...matchesArray, <MatchCard {...matchObject} />])
                        })
                });
            })
    }, [loggedInUser._id])



    return (
        <div>
            {/* <h1>we all straight vibing fam</h1> */}
            {matchesArray}
            {/* <Footer /> */}
        </div>
    );
}

export default Matches;
