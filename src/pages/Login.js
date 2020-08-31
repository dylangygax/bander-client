
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

    return (
        <div>
            {/* <h1>Hello {loggedInUser.instrument}</h1> */}
            {/* <h3>{errorDisplayText}</h3> */}
            <div className="bg-white p-5 search-container">
                <div className="row d-flex justify-content-left w-100 p-3">
                    <form className="form-group col-md-6 settings-holder" onSubmit={handleSubmit}>
                        <h2 className="m-3">Login Below</h2>
                        <br />
                        <h3 className="text-left">email</h3>
                        <input
                            className="form-text form-control col-6 text-xl-left m-3"
                            onChange={handleEmailChange}
                            type="text"
                            id="email"
                            name="email"
                            value={inputEmail}
                        />
                        <h3 className="text-left">password</h3>
                        <input
                            className="form-text form-control col-6 text-xl-left m-3"
                            onChange={handlePasswordChange}
                            type="password"
                            id="password"
                            name="password"
                            value={inputPassword}
                        />
                        <br />
                        <button className="btn btn-danger" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default LoginForm