import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MatchCard extends Component {
    render() {
        return (
            <Card className="m-3">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">{Name}</div>
                        <div className="card-subtitle">INSTRUMENT(S) AND BANDS</div>
                        <div className="card-text">ABOUT</div>
                        <a href="http://neopets.com" className="card-link">spotify link</a>
                    </div>
                </div>
            </Card>
        );
    }
}

export default MatchCard;
