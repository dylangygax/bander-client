import React, { Component } from 'react';
import UserModel from '../models/user'
import cors from 'cors'
import Button from "../components/Button"

class Register extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        password2: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        UserModel.create(this.state)
            .then(data => {
                console.log(data)
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                    password2: ''
                })
            })
        //NEED TO LOG THE USER IN SOMEHOW

        //REDIRECT?
        //this.props.history.push('/app/settings')
    }

    render() {
        return (
            <div className="bg-white p-5 search-container">
                <form className="form-group " onSubmit={this.handleSubmit}>
                    <h2 className="m-5">Register Below</h2>
                    <div>
                        <div>
                            <label className="form-row"
                                htmlFor="InputEmail">Email Address</label>
                        </div>
                        {/* <p className="form-control">email</p> */}
                        <input
                            type="email"
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.handleChange}
                            type="text"
                            id="email InputEmail"
                            name="email"
                            value={this.state.email}
                        />
                        <label className="form-row"
                            htmlFor="InputUsername">Username</label>
                        <input
                            type="username"
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="usernameHelp"
                            placeholder="Enter username"
                            onChange={this.handleChange}
                            type="text"
                            id="username InputUsername"
                            name="username"
                            value={this.state.username}
                        />
                        <label className="form-row"
                            htmlFor="InputPassword">Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="passwordHelp"
                            placeholder="Enter password"
                            id="password InpuPassword"
                            name="password"
                            value={this.state.password}
                        />
                        <label className="form-row"
                            htmlFor="InputPassword">Confirm Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="passwordHelp"
                            placeholder="Enter password"
                            id="password2 InpuPassword"
                            name="password2"
                            value={this.state.password2}
                        />
                        <br />
                        <div className="justify-content-center flex-column col-12">
                            {/* <Button buttonText="Register" type="submit" /> */}
                        </div>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
