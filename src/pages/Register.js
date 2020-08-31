import React, { Component, useState, useEffect } from 'react';
import UserModel from '../models/user'
// import cors from 'cors'
// import Button from "../components/Button"

const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [location, setLocation] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handlePassword2 = (event) => {
        setPassword2(event.target.value)
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (pos) => {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        return pos
    }

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({ lattitude: position.coords.latitude, longitude: position.coords.longitude })
            console.log({ email, password, username })
        })

        //REDIRECT?
        this.props.history.push('/app/settings')
    }

    useEffect(() => {
        if (location) {
            UserModel.create({ email, password, username, location })
                .then(data => {
                    console.log(data)
                })
        }
    }, [location])
    return (
        <div className="bg-white p-5 search-container">
            <form className="form-group " onSubmit={handleSubmit}>
                <h2 className="m-5">Register Below</h2>
                <div>
                    <div>
                        <label className="form-row"
                            htmlFor="InputEmail">Email Address</label>
                    </div>
                    <input
                        type="email"
                        className="form-text form-control col-6 text-xl-left m-3"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleEmail}
                        type="text"
                        id="email InputEmail"
                        name="email"
                        value={email}
                    />
                    <label className="form-row"
                        htmlFor="InputUsername">Username</label>
                    <input
                        type="username"
                        className="form-text form-control col-6 text-xl-left m-3"
                        aria-describedby="usernameHelp"
                        placeholder="Enter username"
                        onChange={handleUsername}
                        type="text"
                        id="username InputUsername"
                        name="username"
                        value={username}
                    />
                    <label className="form-row"
                        htmlFor="InputPassword">Password</label>
                    <input
                        onChange={handlePassword}
                        type="password"
                        className="form-text form-control col-6 text-xl-left m-3"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                        id="password InpuPassword"
                        name="password"
                        value={password}
                    />
                    <label className="form-row"
                        htmlFor="InputPassword">Confirm Password</label>
                    <input
                        onChange={handlePassword2}
                        type="password"
                        className="form-text form-control col-6 text-xl-left m-3"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                        id="password2 InpuPassword"
                        name="password2"
                        value={password2}
                    />
                    <br />
                    <div className="justify-content-center flex-column col-6">
                    </div>
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
