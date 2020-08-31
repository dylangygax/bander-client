import React, { useState, useContext, useEffect } from 'react';
import MatchListing from "../components/MatchListing"
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
                const reversedMatches = data.user.matches.reverse()
                reversedMatches.forEach((match, i) => {
                    setMatchIncrementer(i)
                    UserModel.show(match)
                        .then(data => {
                            console.log(data.user)
                            const matchObject = data.user
                            //matchesArray.push(<MatchCard {...matchObject}/>)
                            setMatchesArray(matchesArray => [...matchesArray, <MatchListing {...matchObject} key={i} showContact={true} />])
                        })
                });
            })
    }, [loggedInUser._id])



    return (
        <div>
            <div className="bg-white p-5 match-container flex-column col-12 m-auto">
                <div className="card-body">
                    {matchesArray}
                </div>
            </div>
        </div>
    );
}

export default Matches;
