import React, { Component, useContext, useState } from 'react';
import UserModel from '../models/user'
import { UserContext, UserContextProvider } from '../UserContext'

const Settings = (props) => {

    const [loggedInUser, setUser] = useContext(UserContext)
    const userId = useState(loggedInUser._id)
    const [info, setInfo] = useState({ boys: "back in town" })


    console.log(loggedInUser)
    console.log(userId)

    const handleName = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["name"] = event.target.value;
        setInfo(obj);
    }

    const handleBio = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["bio"] = event.target.value;
        setInfo(obj);
    }

    const handleContact = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["contact"] = event.target.value;
        setInfo(obj);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        const userID = loggedInUser._id
        UserModel.update(userID, this.state)
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }

    const handleLogout = (event) => {
        event.preventDefault()
        console.log('in handle logout')
        UserModel.logout()
            .then(response => {
                console.log(response)
                localStorage.clear()
                //REDIRECT
                props.history.push('/')
                setUser(null)
                //REDIRECT
            })
    }

    const handleDelete = (event) => {
        event.preventDefault()
        console.log('in handle delete')
        UserModel.delete(loggedInUser._id)
            .then(response => {
                console.log(response)
            })
        //REDIRECT
        props.history.push('/')
    }

    return (
        <div>
            <div className="bg-white p-5 search-container">
                <h4>Hello {loggedInUser.username}</h4>
                <form className="form-group " onSubmit={handleSubmit}>
                    <h2 className="m-5">Settings</h2>
                    <div className="row d-flex justify-content-center m-3 text-center">
                        <div className="col-12">
                            <label className="reg-text form-row"
                                htmlFor="InputEmail">Name</label>
                        </div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="nameHelp"
                            placeholder="Enter name here"
                            onChange={handleName}
                            type="text"
                            id="email InputEmail"
                            name="name"
                            value={info.name}
                        />
                        <br />
                        <label className="reg-text form-row"
                            htmlFor="InputEmail">Bio</label>
                    </div>
                    <div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="bioHelp"
                            placeholder="Enter bio here"
                            onChange={handleBio}
                            type="text"
                            id="email InputEmail"
                            name="bio"
                            value={info.bio}
                        />
                    </div>
                    <br />
                    <label className="reg-text form-row"
                        htmlFor="InputEmail">Bio</label>
                    <div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="contactHelp"
                            placeholder="Enter contact here"
                            onChange={handleContact}
                            type="text"
                            id="email InputEmail"
                            name="bio"
                            value={info.contact}
                        />
                    </div>
                    <br />
                    <div>
                        <button onClick={handleLogout}>logout</button>
                    </div>
                    <div>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;