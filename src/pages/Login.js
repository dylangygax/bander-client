import React from 'react';
import Button from "../components/Button";

const Login = () => {
    return (
        <div>
            <h1 className="col-12">B A N D E R </h1>
            <div className="col-12">
                <img id="logo" src={process.env.PUBLIC_URL + "/images/Clef-Note.png"} />
            </div>
            <div id="login-button-container" className="justify-content-center flex-column col-12">
                <Button buttonText="Login" url={"http://www.neopets.com"} openInNewTab={true} />
                <Button buttonText="Register" url={"http://localhost:3000/app/register"} />
                <Button buttonText="Continue without Logging in" url={"http://localhost:3000/app/home"} />
            </div>
        </div>
    );
}

export default Login;


