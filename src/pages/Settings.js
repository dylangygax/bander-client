import React, { Component, useContext, useState} from 'react';
import UserModel from '../models/user'
import {UserContext, UserContextProvider} from '../UserContext'

const Settings = (props) => {
    // state = {
    //     bio: '',
    // }
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
        this.props.history.push('/app/settings')
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
        //const userIdDelete = '5f41b09dc120779230299a19' //TEMPORARILY HARDCODED
        UserModel.delete(loggedInUser._id)
            .then(response => {
                console.log(response)
            })
        //REDIRECT
        props.history.push('/')
    }

    // render() {
        return (
            <div>
                <div className="bg-white p-5 search-container">
                    <form className="form-group " onSubmit={this.handleSubmit}>
                        <h2 className="m-3 b">Search</h2>
                        <h4 className="m-4">Music Genres</h4>

                        <Dropdown
                            placeholder='Genres...'
                            fluid
                            multiple
                            search
                            selection
                            data-name="genres"
                            onChange={this.genresChange}
                            options={genreList}
                        />

                        <div className="ui divider" />
                        <div className="justify-content-center flex-column col-12">
                            <h4 className="m-4">Instruments</h4>
                            <Dropdown
                                className="m-2"
                                placeholder='Instruments...' fluid multiple selection options={instruments}
                                onChange={this.instrumentsChange}
                                name="instrument"                
                            <Button buttonText="Submit" type="submit" />
                            <button type="submit">Login</button>
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
