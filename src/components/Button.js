import React, { Component } from 'react';

class button extends Component {
    render() {
        let buttonContent;

        let openInNewTab =
            <a className="btn btn-primary button" href={this.props.url} target="_blank">
                {this.props.buttonText}
            </a>
            ;

        let openSameTab =
            <a className="btn btn-primary button" href={this.props.url}>
                {this.props.buttonText}
            </a>
            ;

        if (this.props.openInNewTab) {
            return openInNewTab;
        }
        else {
            return openSameTab;
        }
    }
}

export default button;
