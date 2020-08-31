import React, { Component, useState, useEffect, useContext } from 'react';
import UserModel from '../models/user'
import cors from 'cors'
import Button from "../components/Button"
import {UserContext} from '../UserContext'

const Register = (props) => {
    // state = {
    //     email: '',
    //     username: '',
    //     password: '',
    //     password2: '',
    //     location: {}
    // }

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [location, setLocation] = useState('')

    const [loggedInUser, setUser] = useContext(UserContext)

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

    // const handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        // const position = navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
        // this.state.location = {lattitude: position.coords.latitude, longitude: position.coords.longitude}
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({lattitude: position.coords.latitude, longitude: position.coords.longitude})
            console.log({email, password, username})
        })
        //NEED TO LOG THE USER IN SOMEHOW

        //REDIRECT?
        this.props.history.push('/app/settings')
    }

    useEffect(() => {
        if (location) {
            UserModel.create({email, password, username, location})
                .then(data => {
                    console.log(data.user)
                    UserModel.login({email, password})
                    .then(data => {
                        if (!data._id) {
                            console.log('Login error')
                            return false
                        }
                        console.log(data)
                        setUser(data)
                        console.log(localStorage.getItem('uid'))
                        for (let property in data) {
                            //console.log(`${property}: ${data[property]}`)
                            localStorage.setItem(`${property}`, `${data[property]}`);
                        }
                        console.log(localStorage.getItem('uid'))
                        //REDIRECT
                        props.history.push('/app/settings')
                    })
                    .catch(err => {
                        console.log('Login error')
                        console.log(err)
                    })
                })
        }
    }, [location])
    //render() {
        return (
            <div className="bg-white p-5 search-container">
                <form className="form-group " onSubmit={handleSubmit}>
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
                            className="form-text form-control col-5 text-xl-left m-3"
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
                            className="form-text form-control col-5 text-xl-left m-3"
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
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="passwordHelp"
                            placeholder="Enter password"
                            id="password2 InpuPassword"
                            name="password2"
                            value={password2}
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
    //}
}

export default Register;
