import React, { useState, useEffect, useContext } from 'react';
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import UserModel from '../models/user';
import {QueueContext, QueueContextProvider} from "../QueueContext"

const Home = (props) => {
    //temporary hardcoding
    const [id, setId] = useState('5f4afbcbd976b21a3f29b8d6')
    console.log(id)
    const [match, setMatch] = useState(null)
    //actual queue version
    const [queue, setQueue] = useContext(QueueContext)
    console.log(queue)
    useEffect(() => {
        console.log(queue)
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
