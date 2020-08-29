import React, { Component, useContext, useState } from 'react';
import UserModel from '../models/user'
import { UserContext, UserContextProvider } from '../UserContext'

const Settings = (props) => {

    const [loggedInUser, setUser] = useContext(UserContext)
    console.log(loggedInUser)
    const userId = useState(loggedInUser._id)
    console.log(userId)
    const [info, setInfo] = useState({})

    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
            <h1>Hello {loggedInUser.username}</h1>
            {/* <div className="bg-white p-5 search-container">
                    <form className="form-group " onSubmit={handleSubmit}>
                        <h2 className="m-5">Settings</h2>
                        <div className="row d-flex justify-content-center m-3 text-center">
                            <div className="col-12">
                                <label className="reg-text form-row"
                                    htmlFor="InputEmail">B i 0</label>
                            </div>
                            <input
                                className="form-text form-control col-5 text-xl-left m-3"
                                aria-describedby="emailHelp"
                                placeholder="Enter bio here"
                                onChange={handleChange}
                                type="text"
                                id="email InputEmail"
                                name="bio"
                                value={info.bio}
                            />
                            <br />
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                    </form>
                </div> */}
            <div>
                <button onClick={handleLogout}>logout</button>
            </div>
            <div>
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    );
}

export default Settings;