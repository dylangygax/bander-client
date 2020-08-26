import React, { Component } from 'react';

class MatchCard extends Component {
    render() {
        return (
            <div>
                <div className="card match-card m-2 flex-column col-12">
                    {/* <div className="card-body">
                        <img className="profile-image flex-column col-12" src={this.props.img} />
                        <h2 className="card-title">{this.prop.name}</h2>
                        <h3 className="card-subtitle">{this.prop.instrument}</h3>
                        <p className="card-text">{this.prop.about}</p>
                        <a href={this.prop.spotify} className="card-link">Playlist</a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default MatchCard;
