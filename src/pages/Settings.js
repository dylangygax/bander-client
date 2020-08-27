import React, { Component } from 'react';
import UserModel from '../models/user'

class Settings extends Component {
    state = {
        bio: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('in handle submist')
        event.preventDefault()
        const userID = '5f41b09dc120779230299a18' //TEMPORARY hardcoded until log in is totally working
        UserModel.update(userID, this.state)
            .then(data => {
                console.log(data)
                this.setState({
                    bio: '',
                })
            })
        //REDIRECT
        //this.props.history.push('/app/settings')
    }

    render() {
        return (
            <div>
                <div className="bg-white p-5 search-container">
                    <form className="form-group " onSubmit={this.handleSubmit}>
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
                                onChange={this.handleChange}
                                type="text"
                                id="email InputEmail"
                                name="bio"
                                value={this.state.bio}
                            />
                            <br />
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;
