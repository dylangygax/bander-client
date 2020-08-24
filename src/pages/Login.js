import React from 'react';
import Button from "../components/Button";
// import image from ".images/Clef-Note.png";


const Login = () => {
    return (
        <div className="d-flex flex-column">
            <h1>B A N D E R</h1>
            <img src={process.env.PUBLIC_URL + "/images/Clef-Note.png"} />
            <div className="d-flex flex-column">
                <Button buttonText="Login with Facebook" url={"http://www.neopets.com"} openInNewTab={true} />
                <Button buttonText="Login with email" url={"http://localhost:3000/app/register"} />
                <Button buttonText="Continue without Logging in" url={"http://localhost:3000/app/home"} />
            </div>
        </div>
    );
}

export default Login;


