import React, { useState, useEffect, useContext } from 'react';
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";
import UserModel from '../models/user';
import { QueueContext, QueueContextProvider } from "../QueueContext"

const Home = (props) => {
    //temporary hardcoding
    // const [id, setId] = useState('5f4afbcbd976b21a3f29b8d6')
    // console.log(id)
    const [match, setMatch] = useState(null)
    //actual queue version
    const [queue, setQueue] = useContext(QueueContext)
    console.log(queue)
    useEffect(() => {
        console.log(queue)
        if (queue.length) {
            UserModel.show(queue[0][0]) //ID of the first user in queue. queue elements are of form: [id, distance]
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
