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
                    name: '',
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
            <form className="form-group" onSubmit={this.handleSubmit}>
                <h1 className="m-5">Register Below</h1>
                <label className="reg-text" for="InputEmail">Email address</label>
                {/* <p className="form-control">email</p> */}
                <input
                    type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                />
                <label className="reg-text text-left" for="InputUsername">Username</label>
                <input
                    type="username" className="form-control" id="InputUsername" aria-describedby="usernameHelp" placeholder="Enter username"
                    onChange={this.handleChange}
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                />
                <label className="reg-text" for="InputPassword">Password</label>
                <input
                    onChange={this.handleChange}
                    type="password" className="form-control" id="InpuPassword" aria-describedby="passwordHelp" placeholder="Enter password"
                    id="password"
                    name="password"
                    value={this.state.password}
                />
                <label className="reg-text" for="InputPassword">Confirm Password</label>
                <input
                    onChange={this.handleChange}
                    type="password" className="form-control" id="InpuPassword" aria-describedby="passwordHelp" placeholder="Enter password"
                    id="password2"
                    name="password2"
                    value={this.state.password2}
                />
                <br />
                <Button className="" type="submit">Register</Button>
            </form>
        );
    }
}

export default Register;
