import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faComment } from '@fortawesome/free-solid-svg-icons'
import UserModel from "../models/user";
import {UserContext, UserContextProvider} from '../UserContext'

const Footer = (props) => {
    const [loggedInUser, setUser] = useContext(UserContext)
    console.log(loggedInUser._id)
    console.log(props)

    const handleLike = () => {
        //update takes (usedId, updateObject)
        UserModel.update(`${loggedInUser._id}`, {usersLiked: `${props.matchId}`})
            .then((data) => {
                console.log(data)
            })
        UserModel.update(`${props.matchId}`, {usersWhoLikeYou: `${loggedInUser._id}`})
            .then((data) => {
                console.log(data)
            })
    } 
    
    return (
        <nav className="footer  fixed-bottom p-2">
            <div className="links d-flex justify-content-around p-1">
                <Link className="footer-font " to={"/app/Home"}>
                    <FontAwesomeIcon icon={faTimes} />
                </Link>
                <Link className="footer-font " to={"/app/GeneralMessages"}>
                    <FontAwesomeIcon icon={faComment} />
                </Link>
                <Link className="footer-font  " to={"/app/Home"} onClick={handleLike}>
                    <FontAwesomeIcon icon={faCheck} />
                </Link>
            </div>
        </nav>
    );
}

export default Footer;