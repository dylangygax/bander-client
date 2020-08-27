import React, { Component } from 'react';
import Footer from "../components/Footer";

class MatchCard extends Component {
    render() {
        return (
            <div>
                <div className="bg-white p-5 match-container flex-column col-12 m-auto">
                    <div className="card-body">
                        <img className="profile-image flex-column col-12" src="https://thispersondoesnotexist.com/image" />
                        <h2 className="card-title">{this.props.username}</h2>
                        <h3 className="card-subtitle">{this.props.instrument}</h3>
                        <p className="card-text">{this.props.bio}</p>
                        <a href="http://neopets.com" className="card-link">spotify link</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MatchCard;
