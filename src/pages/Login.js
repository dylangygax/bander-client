import React from 'react';
import Button from "../components/Button";

const Login = () => {
    return (
        <div className="d-flex flex-column m-5 body" >
            <h1>B A N D E R 1</h1>
            <img id="logo" src={process.env.PUBLIC_URL + "/images/Clef-Note.png"} />
            <div className="d-flex flex-column">
                <Button buttonText="Login" url={"http://www.neopets.com"} openInNewTab={true} />
                <Button buttonText="Register" url={"http://localhost:3000/app/register"} />
                <Button buttonText="Continue without Logging in" url={"http://localhost:3000/app/home"} />
            </div>
        </div >
    );
}

export default Login;


