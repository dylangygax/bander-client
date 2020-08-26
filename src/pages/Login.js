import React, {Component} from 'react'
import UserModel from '../models/user'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        UserModel.login(this.state)
            .then(data => {
                console.log(data)
                if (!data.user) {
                    return false
                }
                this.props.storeUser(data.user) ///THIS LINE IS ERRING. MORE TO SET UP
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login Login Login</h1>
                <p>email</p>
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                />
                <p>password</p>
                <input
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LoginForm