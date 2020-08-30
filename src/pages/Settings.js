import React, { Component, useContext, useState } from 'react';
import UserModel from '../models/user';
import { UserContext, UserContextProvider } from '../UserContext';
import { Accordion, Dropdown } from 'semantic-ui-react';

const genreList = [
    { key: 'Gospel', text: 'Gospel', value: 'Gospel' },
    { key: 'avantGarde', text: 'Avante Garde', value: 'avantGarde' },
    { key: 'experimental', text: 'Experimental', value: 'experimental' },
    { key: 'noise', text: 'Noise', value: 'noise' },
    { key: 'harshNoiseWall', text: 'Harsh Noise Wall', value: 'harshNoiseWall' }
]

const instruments = [
    { key: 'guitar', text: 'Guitar', value: 'guitar' },
]

const Settings = (props) => {

    const [loggedInUser, setUser] = useContext(UserContext)
    const userId = useState(loggedInUser._id)
    const [info, setInfo] = useState({ boys: "back in town" })


    console.log(loggedInUser)
    console.log(userId)

    const handleName = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["name"] = event.target.value;
        setInfo(obj);
    }

    const handleBio = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["bio"] = event.target.value;
        setInfo(obj);
    }

    const handleContact = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["contact"] = event.target.value;
        setInfo(obj);
    }

    const handleSpotify = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["spotify"] = event.target.value;
        setInfo(obj);
    }

    const handleGenres = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["genres"] = event.target.value;
        setInfo(obj);
    }

    const handleInstruments = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["instruments"] = event.target.value;
        setInfo(obj);
    }

    const handleBandNSolo = (event) => {
        let obj = JSON.parse(JSON.stringify(info));
        obj["bandandsolo"] = event.target.value;
        setInfo(obj);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submist')
        const userID = loggedInUser._id
        UserModel.update(userID, this.state)
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }

    const handleLogout = (event) => {
        event.preventDefault()
        console.log('in handle logout')
        UserModel.logout()
            .then(response => {
                console.log(response)
                localStorage.clear()
                //REDIRECT
                props.history.push('/')
                setUser(null)
                //REDIRECT
            })
    }

    const handleDelete = (event) => {
        event.preventDefault()
        console.log('in handle delete')
        UserModel.delete(loggedInUser._id)
            .then(response => {
                console.log(response)
            })
        //REDIRECT
        props.history.push('/')
    }

    const AboutMeContent = (
        <div class="row d-flex justify-content-left w-100 p-3">
            <div className="form-group col-md-6 settings-holder">
                <label>
                    <h5 className="text-left">Name:</h5>
                    <label className="reg-text form-row"
                        htmlFor="InputEmail"></label>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        aria-describedby="nameHelp"
                        placeholder="Enter name here"
                        onChange={handleName}
                        type="text"
                        id="email InputEmail"
                        name="name"
                        value={info.name}
                    />
                    <br />
                </label>
                <label>
                    <h5 className="text-left">Bio:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        aria-describedby="bioHelp"
                        placeholder="Enter bio here"
                        onChange={handleBio}
                        type="text"
                        id="email InputEmail"
                        name="bio"
                        value={info.bio}
                    />
                    <br />
                </label>
                <label>
                    <h5 className="text-left">Contact:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        id="contactSetting"
                        rows="3"
                        aria-describedby="contactHelp"
                        placeholder="Enter contact here"
                        onChange={handleContact}
                        type="text"
                        id="email InputEmail"
                        name="contact"
                        value={info.contact}
                    />
                    <br />
                </label>
                <label>
                    <h5 className="text-left">Spotify Link:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        aria-describedby="spotifyHelp"
                        placeholder="Enter spotify link please :)"
                        onChange={handleSpotify}
                        type="text"
                        id="email InputEmail"
                        name="spotify"
                        value={info.spotify}
                    />
                    <br />
                </label>
                <input type="file" />
            </div>
        </div>
    );

    const MyMusicContent = (
        <div className="form-group">
            <label>
                <div>
                    <div className="bg-white p-5 search-container">
                        <h4 className="m-4">Music Genres</h4>

                        <Dropdown
                            placeholder='Genres...'
                            fluid
                            multiple
                            search
                            selection
                            data-name="genres"
                            onChange={handleGenres}
                            options={genreList}
                        />

                        <div className="ui divider" />
                        <div className="justify-content-center flex-column col-12">
                            <h4 className="m-4">Instruments</h4>
                            <Dropdown
                                className="m-2"
                                placeholder='Instruments...' fluid multiple selection options={instruments}
                                onChange={handleInstruments}
                                name="instrument"
                            />

                            <div>
                                <h4>Band or Musician Check</h4>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios1"
                                            onClick={handleBandNSolo}
                                            value="band"
                                        />
                                        Band
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios2"
                                            onClick={handleBandNSolo}
                                            value="solo"
                                        />
                                        Solo
                                    </label>
                                </div>
                            </div>
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </label>

        </div>
    );

    const profilePanels = [
        { key: 'panel-1a', title: 'About Me', content: { content: AboutMeContent } },
        { key: 'panel-ba', title: 'My Music', content: { content: MyMusicContent } },
    ];

    const ProfileContent = (
        <div className="form-group">
            <Accordion.Accordion panels={profilePanels} />

        </div>
    );

    const level2Panels = [
        { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
        { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
    ];

    const GeneralContent = (
        <div>
            <label>
                Location Range:
                <input id="rangeSetting" type="number" className="form-control" />
            </label>
            <div>
                <button onClick={handleLogout}>logout</button>
            </div>
            <div>
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    );

    const rootPanels = [
        { key: 'panel-1', title: 'Profile', content: { content: ProfileContent } },
        { key: 'panel-2', title: 'General', content: { content: GeneralContent } },
    ];

    return (
        <div>
            <div className="bg-white p-5 search-container">
                <h4>Hello {loggedInUser.username}</h4>
                <form className="form-group " onSubmit={handleSubmit}>
                    <h3 className="m-5">Settings</h3>
                    {/* <div className="row d-flex justify-content-center m-3 text-center">
                        <div className="col-12 flex m-3">
                            <label className="reg-text form-row"
                                htmlFor="InputEmail">Name</label>
                        </div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3 content-container"
                            aria-describedby="nameHelp"
                            placeholder="Enter name here"
                            onChange={handleName}
                            type="text"
                            id="email InputEmail"
                            name="name"
                            value={info.name}
                        />
                        <br />
                        <label className="reg-text form-row"
                            htmlFor="InputEmail">Bio</label>
                    </div>
                    <div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="bioHelp"
                            placeholder="Enter bio here"
                            onChange={handleBio}
                            type="text"
                            id="email InputEmail"
                            name="bio"
                            value={info.bio}
                        />
                    </div>
                    <br />
                    <label className="reg-text form-row"
                        htmlFor="InputEmail">Bio</label>
                    <div>
                        <input
                            className="form-text form-control col-5 text-xl-left m-3"
                            aria-describedby="contactHelp"
                            placeholder="Enter contact here"
                            onChange={handleContact}
                            type="text"
                            id="email InputEmail"
                            name="contact"
                            value={info.contact}
                        />
                    </div>
                    <br /> */}
                    {/* <div>
                        <button onClick={handleLogout}>logout</button>
                    </div>
                    <div>
                        <button onClick={handleDelete}>delete</button>
                    </div> */}
                    <br />

                    <Accordion className="w-100 p-3" defaultActiveIndex={0} panels={rootPanels} styled />
                    <button className="btn btn-primary" type="submit">Update</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default Settings;