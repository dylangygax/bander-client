import React, { Component } from 'react';
import UserModel from '../models/user'
import cors from 'cors'

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
        this.props.history.push('/app/search')
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Register Below</h1>
                <p>email</p>
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                />
                <p>username</p>
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                />
                <p>password</p>
                <input
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                />
                <p>confirm password</p>
                <input
                    onChange={this.handleChange}
                    type="password"
                    id="password2"
                    name="password2"
                    value={this.state.password2}
                />
                <br />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Register;
