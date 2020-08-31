import React, { Component } from 'react';
import Footer from "../components/Footer";

const MatchCard = (props) => {

    var instrumentsString;
    var genresString;
    var bandString;
    var contactString;

    if (props.instruments.length > 0) instrumentsString = props.instruments.join(" , ");
    else instrumentsString = "N / A";

    if (props.genres.length > 0) genresString = props.genres.join(" , ");
    else genresString = "N / A";

    if (props.isBand) bandString = "We are a Band.";
    else bandString = "I am a solo artist."

    if (props.contact != "" && props.showContact) contactString = "Contact: " + props.contact;

    return (
        <div>
            <div className="bg-white p-5 match-container flex-column col-12 m-auto">
                <div className="card-body">
                    <img className="profile-image flex-column col-12" src="https://thispersondoesnotexist.com/image" />
                    <h2 className="card-title">{props.username}</h2>
                    <h3 className="card-subtitle">Instruments: {instrumentsString}</h3>
                    <h3 className="card-subtitle">Genres: {genresString}</h3>
                    <p className="card-text">{props.bio}</p>
                    <p className="card-text">{bandString}</p>
                    <p className="card-text">{contactString}</p>
                    <a href={props.musicUrl} className="card-link">spotify link</a>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
