import React, { Component } from 'react';
import UserModel from '../models/user'
import MatchCard from '../components/MatchCard'

class UserShow extends Component {
    state = {
        user: {},
        id: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        UserModel.show(this.state.id).then(data => {
            console.log(data)
            this.setState({ user: data.user })
        })
    }

    render() {
        return (
            <div>
                <MatchCard {...this.state.user} />
            </div>
        );
    }
}

export default UserShow;