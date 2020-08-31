import React, { Component } from 'react';

const MatchListing = (props) => {

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

    if (props.contact != "" && props.showContact && props.contact !== undefined) contactString = "Contact: " + props.contact;

    return (
        <div>
            <img className="profile-image flex-column col-12" src="https://thispersondoesnotexist.com/image" />
            <h2 className="card-title">{props.username}</h2>
            <h3 className="card-subtitle">Instruments: {instrumentsString}</h3>
            <h3 className="card-subtitle">Genres: {genresString}</h3>
            <p className="card-text">
                {props.bio}
                <br />
                {bandString}
                <br />
                {contactString}
                <br />
                <a href={props.musicUrl} className="card-link">spotify link</a>
            </p>
            <div className="ui divider" />
        </div>
    );
}

export default MatchListing;
