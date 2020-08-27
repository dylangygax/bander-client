
import React, {Component, useContext, useState} from 'react'
import UserModel from '../models/user'
import {UserContext} from '../UserContext'

const LoginForm = () => {    
    // state = {
    //     email: '',
    //     password: '',
    // }

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorDisplayText, setErrorDisplayText] = useState('pizza')

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
        console.log(userToLog)
        // this will update context value
        setUser(userToLog)
          
        setInputEmail('')
        setInputPassword('')
        UserModel.login(userToLog)
            .then(data => {
                console.log(data)
                if (!data._id) {
                    setErrorDisplayText('Invalid Login/Password')
                    return false
                }
                //props.storeUser(data.user) ///LINE IS ERRING. MORE TO SET UP
                //console.log(props.loggedInUser)
                console.log(data)
                //console.log(data.user)
                setUser(data)
                //console.log(props.loggedInUser)
                //props.history.push('/profile')
                //TO DO: REDIRECT ?????<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            })
            .catch(err => {
                setErrorDisplayText('Invalid Login/Password')
                console.log(err)
            })
        //props.history.push('/profile')
    }
    
    // render () {
        return (
            <div>
                <h1>Hello {loggedInUser._id}</h1>
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
    // }
}

export default LoginForm