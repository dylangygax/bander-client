import React, { Component, useState, useContext } from 'react';
import UserModel from '../models/user'
import MatchCard from '../components/MatchCard'
import {UserContext, UserContextProvider} from '../UserContext'

const Profile = (props) => {
    const [loggedInUser, setUser] = useContext(UserContext)

    return (
        <div>
            <MatchCard {...loggedInUser} />
        </div>
    );

}

export default Profile;