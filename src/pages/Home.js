import React, { useState, useEffect } from 'react';
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import UserModel from '../models/user';

const Home = (props) => {
    const [id, setId] = useState('5f41b09dc120779230299a1a')
    console.log(id)
    const [match, setMatch] = useState(null)
    useEffect(() => {
        UserModel.show(id)
            .then(data => {
                console.log(id)
                console.log(data.user)
                setMatch(data.user)
            })
    }, [id])

    return (
        <div className="body">
            {match
            ? <>
                <MatchCard {...match}/>
                <Footer matchId={match._id}/>
            </>
            : <h6>loading...</h6>
            }
        </div>
    );
}

export default Home;
