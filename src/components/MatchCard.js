import React, { Component } from 'react';

class MatchCard extends Component {
    render() {
        return (
            <div className="m-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">NAME</h2>
                        <h3 className="card-subtitle">INSTRUMENT(S) AND BANDS</h3>
                        <img className="profile-image" src="https://thispersondoesnotexist.com/image" />
                        <p className="card-text">ABOUT</p>
                        <a href="http://neopets.com" className="card-link">spotify link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MatchCard;
