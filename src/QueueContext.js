import React, { useState, createContext } from 'react'

const QueueContext = createContext([[], () => {}])

const QueueContextProvider = (props) => {
    //_id, email, Queuename, isBand, bio, genre, location, instrument,
    //QueuesLiked, QueuesWhoLikeYou, matches
    const [queue, setQueue] = useState(['QQQQQQQQQQQQQ'])
    return (
        <QueueContext.Provider value={[queue, setQueue]}>
            {props.children}
        </QueueContext.Provider>
    )
}
//useState(localStorage.getItem('uid'))
export {QueueContext, QueueContextProvider}