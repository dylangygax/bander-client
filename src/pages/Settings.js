import React, { Component, useContext, useState} from 'react';
import UserModel from '../models/user'
import {UserContext, UserContextProvider} from '../UserContext'

const Settings = (props) => {
    // state = {
    //     bio: '',
    // }
    const [loggedInUser, setUser] = useContext(UserContext)
    console.log(loggedInUser)
    const [info, setInfo] = useState({})

    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        //const userID = '5f41b09dc120779230299a18' //TEMPORARY hardcoded until log in is totally working
        const userID = loggedInUser._id
        UserModel.update(userID, this.state)
            .then(data => {
                console.log(data)
                setUser(data)
                // this.setState({
                //     bio: '',
                // })
            })
        //REDIRECT
        //this.props.history.push('/app/settings')
    }

    const handleLogout = (event) => {
        event.preventDefault()
        console.log('in handle logout')
        UserModel.logout()
            .then(response => {
                console.log(response)
                if (response === 'logout successful') {
                    setUser(null)
                    //REDIRECT
                    props.history.push('/')
                }
            })
    }

    const handleDelete = (event) => {
        event.preventDefault()
        console.log('in handle delete')
        const userIdDelete = '5f41b09dc120779230299a19' //TEMPORARILY HARDCODED
        UserModel.delete(userIdDelete)
            .then(response => {
                console.log(response)
            })
        //REDIRECT
        props.history.push('/')
    }

    // render() {
        return (
            <div>
                <h1>Hello {loggedInUser._id}</h1>
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
    //}
}

export default Settings;
