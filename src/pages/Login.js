
import React, { Component, useContext, useState } from 'react'
import UserModel from '../models/user'
import { UserContext } from '../UserContext'

const LoginForm = (props) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorDisplayText, setErrorDisplayText] = useState('error text displays here')

    const [loggedInUser, setUser] = useContext(UserContext)

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setInputPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userToLog = {
            email: inputEmail,
            password: inputPassword,
        }

        setInputEmail('')
        setInputPassword('')
        UserModel.login(userToLog)
            .then(data => {
                if (!data._id) {
                    setErrorDisplayText('Invalid Login/Password')
                    return false
                }
                console.log(data)
                setUser(data)
                console.log(localStorage.getItem('uid'))
                for (let property in data) {
                    localStorage.setItem(`${property}`, `${data[property]}`);
                }
                console.log(localStorage.getItem('uid'))
            })
            .catch(err => {
                setErrorDisplayText('Invalid Login/Password')
                console.log(err)
            })
    }

    // render () {
    return (
        <div>
            <h1>Hello {loggedInUser.instrument}</h1>
            <h3>{errorDisplayText}</h3>
            <form onSubmit={handleSubmit}>
                <h1>Login Login Login</h1>
                <p>email</p>
                <input
                    onChange={handleEmailChange}
                    type="text"
                    id="email"
                    name="email"
                    value={inputEmail}
                />
                <p>password</p>
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    id="password"
                    name="password"
                    value={inputPassword}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm