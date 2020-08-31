import React, { useState, useEffect, useContext } from 'react';
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import UserModel from '../models/user';
import { QueueContext, QueueContextProvider } from "../QueueContext"

const Home = (props) => {
    const [match, setMatch] = useState(null)
    const [queue, setQueue] = useContext(QueueContext)
    console.log(queue)
    useEffect(() => {
        console.log(queue)
        if (queue.length) {
            UserModel.show(queue[0][0])
                .then(data => {
                    console.log(queue[0])
                    console.log(data.user)
                    setMatch(data.user)
                })
        }
    }, [queue])

    return (
        <div className="body">
            {queue.length && match
                ? <>
                    <MatchCard {...match} />
                    <Footer matchId={match._id} />
                </>
                : <h1>no one else found... :^(</h1>
            }
        </div>
    );
}

export default Home;
