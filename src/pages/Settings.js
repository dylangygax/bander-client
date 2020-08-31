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

const instrumentsList = [
    { key: 'guitar', text: 'Guitar', value: 'guitar' },
    { key: 'percussion', text: 'Percussion (general)', value: 'percussion' },
    { key: 'drumSet', text: 'Drum Set', value: 'drumSet' },
    { key: 'cowbell', text: 'Cowbell', value: 'cowbell' },
    { key: 'triangle', text: 'Triangle', value: 'triangle' },
]

const Settings = (props) => {

    const [loggedInUser, setUser] = useContext(UserContext);
    const _id = useState(loggedInUser._id);
    const [username, setUserName] = useState("");
    const [bio, setBio] = useState("");
    const [contact, setContact] = useState(""); //
    const [musicUrl, setMusicUrl] = useState(""); //
    const [instruments, setInstruments] = useState([]);
    const [genres, setGenres] = useState([]);
    const [bandNSolo, setBandNSolo] = useState(""); //

    console.log(loggedInUser)
    console.log(_id)

    const handleName = (event) => { setUserName(event.target.value); }
    const handleBio = (event) => { setBio(event.target.value); }
    const handleContact = (event) => { setContact(event.target.value); }
    const handlemusicUrl = (event) => { setMusicUrl(event.target.value); }
    const handleGenres = (event, { value }) => { setGenres(value); }
    const handleInstruments = (event, { value }) => { setInstruments(value); }
    const handleBandNSolo = (event) => { setBandNSolo(event.target.value); }



    const handleSubmit = (event) => {
        event.preventDefault()
        let isBand = false;
        if (bandNSolo == "band") isBand = true;

        const info = {
            username,
            bio,
            contact,
            musicUrl,
            instruments,
            genres,
            isBand
        };

        const userID = loggedInUser._id;
        console.log('in handle submit. userID:' + userID);
        UserModel.update(userID, info)
            .then(data => {
                console.log(data)
                setUser(data.user)
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
        <div className="row d-flex justify-content-left w-100 p-3">
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
                        value={username}
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
                        value={bio}
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
                        value={contact}
                    />
                    <br />
                </label>
                <label>
                    <h5 className="text-left">Music Url Link:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        aria-describedby="musicUrlHelp"
                        placeholder="Enter Music Url link please :)"
                        onChange={handlemusicUrl}
                        type="text"
                        id="email InputEmail"
                        name="musicUrl"
                        value={musicUrl}
                    />
                    <br />
                </label>
                <input type="file" />
            </div>
        </div>
    );

    const MyMusicContent = (
        <div className="form-group">
            <div>
                <div className="p-2">
                    <h4 className="m-4">Music Genres</h4>

                    <Dropdown
                        placeholder='Genres...'
                        fluid
                        multiple
                        search
                        selection
                        onChange={handleGenres}
                        options={genreList}
                        value={genres}
                    />

                    <div className="ui divider" />

                    <h4 className="m-4">Instruments</h4>
                    <Dropdown
                        placeholder='Instruments...'
                        fluid
                        multiple
                        search
                        selection
                        onChange={handleInstruments}
                        options={instrumentsList}
                        value={instruments}
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
                </div>
            </div>
        </div>
    );

    const profilePanels = [
        { key: 'panel-1a', title: 'About Me', content: { content: AboutMeContent } },
        { key: 'panel-2a', title: 'My Music', content: { content: MyMusicContent } },
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
                    <Accordion className="w-100 p-3" defaultActiveIndex={0} panels={rootPanels} styled />
                    <button className="btn btn-primary" type="submit">Update</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default Settings;