import React from 'react';
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";

const Landing = () => {

    return (
        <div>
            <h1 className="col-12">Bander </h1>
            <div className="col-12">
                <img id="logo" src={process.env.PUBLIC_URL + "/images/Clef-Note.png"} />
            </div>
            <div id="login-button-container" className="justify-content-center flex-column col-12">
                <Button buttonText="Login" url={"http://localhost:3000/login"} />
                <Button buttonText="Register" url={"http://localhost:3000/register"} />
            </div>
            <div id="login-button-container" className="justify-content-center flex-column col-12">
                <SecondaryButton buttonText="Continue Without Logging In" url={"http://localhost:3000/app/home"} />
            </div>
        </div>
    );
}

export default Landing;