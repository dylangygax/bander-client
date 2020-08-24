import React, { Component } from 'react';

class button extends Component {
    render() {
        let buttonContent =
            <button className="btn btn-primary button">{this.props.buttonText}</button>
            ;

        let openInNewTab =
            <a href={this.props.url} target="_blank">
                {buttonContent}
            </a>
            ;

        let openSameTab =
            <a href={this.props.url}>
                {buttonContent}
            </a>
            ;

        if (this.props.openInNewTab) return openInNewTab;
        else return openSameTab;
    }
}

export default button;
