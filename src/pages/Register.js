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
        console.log('in handle submist')
        event.preventDefault()
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
        this.props.history.push('/app/settings')
    }

    render() {
        return (
            <form className="form-group " onSubmit={this.handleSubmit}>
                <h1 className="m-5">Register Below</h1>
                <div className="row d-flex justify-content-center m-3 text-center">
                    <div className="col-12">
                        <label className="reg-text form-row"
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
                    <label className="reg-text form-row"
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
                    <label className="reg-text form-row"
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
                    <label className="reg-text form-row"
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
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        );
    }
}

export default Register;
