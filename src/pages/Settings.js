import React, { Component, useContext, useState } from 'react';
import UserModel from '../models/user';
import { UserContext, UserContextProvider } from '../UserContext';
import { Accordion, Dropdown } from 'semantic-ui-react';

const genreList = [
    { key: 'Gospel', text: 'Gospel', value: 'Gospel' },
    { key: 'avantGarde', text: 'Avante Garde', value: 'avantGarde' },
    { key: 'experimental', text: 'Experimental', value: 'experimental' },
    { key: 'noise', text: 'Noise', value: 'noise' },
    { key: 'harshNoiseWall', text: 'Harsh Noise Wall', value: 'harshNoiseWall' },
    { key: 'outsider', text: 'Outsider', value: 'outsider' },
    { key: 'lofi', text: 'Lo-fi', value: 'lofi' },
    { key: 'musiqueConcrete', text: 'Musique Concrete', value: 'musiqueConcrete' },
    { key: 'electroacoustic', text: 'Electroacoustic', value: 'electroacoustic' },
    { key: 'blues', text: 'Blues', value: 'blues' },
    { key: 'africanBlues', text: 'African Blues', value: 'africanBlues' },
    { key: 'bluesRock', text: 'Blues Rock', value: 'bluesRock' },
    { key: 'chicagoBlues', text: 'Chicago Blues', value: 'chicagoBlues' },
    { key: 'classicalFemaleBlues', text: 'Classical Female Blues', value: 'classicalFemaleBlues' },
    { key: 'contemporaryRB', text: 'Contemporary R&B', value: 'contemporaryRB' },
    { key: 'countryBlues', text: 'Country Blues', value: 'countryBlues' },
    { key: 'deltaBlues', text: 'Delta Blues', value: 'deltaBlues' },
    { key: 'detroitBlues', text: 'Detroit Blues', value: 'detroitBlues' },
    { key: 'electricBlues', text: 'Electric Blues', value: 'electricBlues' },
    { key: 'gospelBlues', text: 'Gospel Blues', value: 'gospelBlues' },
    { key: 'HillCountryBlues', text: 'Hill Country Blues', value: 'HillCountryBlues' },
    { key: 'jumpBlues', text: 'Jump Blues', value: 'jumpBlues' },
    { key: 'kansasCityBlues', text: 'Kansas City Blues', value: 'kansasCityBlues' },
    { key: 'louisianaBlues', text: 'Louisiana Blues', value: 'louisianaBlues' },
    { key: 'memphisBlues', text: 'Memphis Blues', value: 'memphisBlues' },
    { key: 'newOrleanBlues', text: 'New Orleans Blues', value: 'newOrleanBlues' },
    { key: 'piedmontBlues', text: 'Piedmont Blues', value: 'piedmontBlues' },
    { key: 'punkBlues', text: 'Punk Blues', value: 'punkBlues' },
    { key: 'rhythmAndBlues', text: 'Rhythm and Blues', value: 'rhythmAndBlues' },
    { key: 'soulBlues', text: 'Soul Blues', value: 'soulBlues' },
    { key: 'stLewisBlues', text: 'St. Lewis Blues', value: 'stLewisBlues' },
    { key: 'swampBlues', text: 'Swamp Blues', value: 'swampBlues' },
    { key: 'texasBlues', text: 'Texas Blues', value: 'texasBlues' },
    { key: 'westCoastBlues', text: 'West Coast Blues', value: 'westCoastBlues' },
    { key: 'caribbean', text: 'Caribbean', value: 'caribbean' },
    { key: 'danceHall', text: 'Dancehall', value: 'danceHall' },
    { key: 'bouyan', text: 'Bouyan', value: 'bouyan' },
    { key: 'cadenceLypso', text: 'Cadence-lypso', value: 'cadenceLypso' },
    { key: 'calypso', text: 'Calypso', value: 'calypso' },
    { key: 'chaChacha', text: 'Cha-cha-cha', value: 'chaChacha' },
    { key: 'chutney', text: 'Chutney', value: 'chutney' },
    { key: 'chutneySoca', text: 'Chutney Soca', value: 'chutneySoca' },
    { key: 'chutneyParang', text: 'Chutney Parang', value: 'chutneyParang' },
    { key: 'compas', text: 'Compas', value: 'caribbean' },
    { key: 'mambo', text: 'Mambo', value: 'mambo' },
    { key: 'merengue', text: 'Merengue', value: 'merengue' },
    { key: 'mozambique', text: 'Mozambique', value: 'mozambique' },
    { key: 'pichakaree', text: 'Pichakaree', value: 'pichakaree' },
    { key: 'punta', text: 'Punta', value: 'punta' },
    { key: 'puntaRock', text: 'Punta Rock', value: 'puntaRock' },
    { key: 'rasin', text: 'Rasin', value: 'rasin' },
    { key: 'reggae', text: 'Reggae', value: 'reggae' },
    { key: 'reggaeDub', text: 'Reggae Dub', value: 'reggaeDub' },
    { key: 'reggaeLoveRock', text: 'Reggae Love Rock', value: 'reggaeLoveRock' },
    { key: 'reggaeRagga', text: 'Reggae Ragga', value: 'reggaeRagga' },
    { key: 'reggaeRaggaJungle', text: 'Reggae Ragga Jungle', value: 'reggaeRaggaJungle' },
    { key: 'reggaeFusion', text: 'Reggae Fusion', value: 'reggaeFusion' },
    { key: 'reggaeReggaeton', text: 'Reggae Reggaeton', value: 'reggaeReggaeton' },
    { key: 'rocksteasy', text: 'Rocksteady', value: 'rocksteasy' },
    { key: 'rumba', text: 'Rumba', value: 'rumba' },
    { key: 'ska', text: 'Ska', value: 'ska' },
    { key: 'skaTwoTone', text: 'Ska Two-Tone', value: 'skaTwoTone' },
    { key: 'skaPunk', text: 'Ska Punk', value: 'skaPunk' },
    { key: 'salsa', text: 'Salsa', value: 'salsa' },
    { key: 'sonCubano', text: 'Son Cubano', value: 'sonCubano' },
    { key: 'songo', text: 'Songo', value: 'songo' },
    { key: 'soca', text: 'Soca', value: 'soca' },
    { key: 'powerSoca', text: 'Power Soca', value: 'powerSoca' },
    { key: 'timba', text: 'Timba', value: 'timba' },
    { key: 'twobadou', text: 'Twoubadou', value: 'twobadou' },
    { key: 'zouk', text: 'Zouk', value: 'zouk' },
    { key: 'comedy', text: 'Comedy', value: 'comedy' },
    { key: 'comedyRock', text: 'Comedy Rock', value: 'comedyRock' },
    { key: 'country', text: 'Country', value: 'country' },
    { key: 'countryRock', text: 'country Rock', value: 'countryRock' },
    { key: 'countryPop', text: 'Country Pop', value: 'countryPop' },
    { key: 'elevator', text: 'Elevator', value: 'elevator' },
    { key: 'electronic', text: 'Electronic', value: 'electronic' },
    { key: 'edm', text: 'EDM', value: 'edm' },
    { key: 'disco', text: 'Disco', value: 'disco' },
    { key: 'electronica', text: 'Electronica', value: 'electronica' },
    { key: 'dub', text: 'Dub', value: 'dub' },
    { key: 'electronicRock', text: 'electronicRock', value: 'electronicRock' },
    { key: 'hardcore', text: 'Hardcore', value: 'hardcore' },
    { key: 'hipHop', text: 'Hip Hop', value: 'hipHop' },
    { key: 'industrial', text: 'Industrial', value: 'industrial' },
    { key: 'house', text: 'House', value: 'house' },
    { key: 'flamenco', text: 'Flamenco', value: 'flamenco' },
    { key: 'tango', text: 'Tango', value: 'tango' },
    { key: 'folk', text: 'Folk', value: 'folk' },
    { key: 'electro', text: 'Electro', value: 'electro' },
    { key: 'jazz', text: 'Jazz', value: 'jazz' },
    { key: 'jazzPop', text: 'Jazz Pop', value: 'jazzPop' },
    { key: 'latin', text: 'Latin', value: 'latin' },
    { key: 'reggaeton', text: 'Reggaeton', value: 'reggaeton' },
    { key: 'europop', text: 'Europop', value: 'europop' },
    { key: 'countryPop', text: 'Country Pop', value: 'countryPop' },
    { key: 'kpop', text: 'K-pop', value: 'kpop' },
    { key: 'jpop', text: 'J-pop', value: 'jpop' },
    { key: 'operaticPop', text: 'Operatic Pop', value: 'operaticPop' },
    { key: 'rnb', text: 'R&B', value: 'rnb' },
    { key: 'rock', text: 'Rock', value: 'rock' },
    { key: 'alternativeRock', text: 'Alternative Rock', value: 'alternativeRock' },
    { key: 'grunge', text: 'Grunge', value: 'grunge' },
    { key: 'indieRock', text: 'Indie Rock', value: 'indieRock' },
    { key: 'experimentalRock', text: 'Experimental Rock', value: 'experimentalRock' },
    { key: 'folkRock', text: 'Folk Rock', value: 'folkRock' },
    { key: 'progressiveRock', text: 'Progressive Rock', value: 'progressiveRock' },
    { key: 'visualKei', text: 'Visual Kei', value: 'visualKei' },
    { key: 'punkRock', text: 'Punk Rock', value: 'punkRock' },
    { key: 'rockNRoll', text: 'Rock and Roll', value: 'rockNRoll' },
    { key: 'surfRock', text: 'Surf Rock', value: 'surfRock' },
    { key: 'heavyMetal', text: 'Heavy Metal', value: 'heavyMetal' },
    { key: 'metal', text: 'Metal', value: 'metal' },
    { key: 'deathMetal', text: 'Death Metal', value: 'deathMetal' },
    { key: 'grindcore', text: 'Grindcore', value: 'grindcore' },
    { key: 'emo', text: 'Emo', value: 'emo' },
]

const instrumentsList = [
    { key: 'guitar', text: 'Guitar', value: 'guitar' },
    { key: 'percussion', text: 'Percussion (general)', value: 'percussion' },
    { key: 'drumSet', text: 'Drum Set', value: 'drumSet' },
    { key: 'cowbell', text: 'Cowbell', value: 'cowbell' },
    { key: 'triangle', text: 'Triangle', value: 'triangle' },
    { key: 'glockenspiel', text: 'Glockenspiel', value: 'glockenspiel' },
    { key: 'gong', text: 'Gong', value: 'gong' },
    { key: 'hang', text: 'Hang', value: 'hang' },
    { key: 'maracas', text: 'Maracas', value: 'maracas' },
    { key: 'marimba', text: 'Marimba', value: 'marimba' },
    { key: 'spoon', text: 'Spoon', value: 'spoon' },
    { key: 'tambourine', text: 'Tambourine', value: 'tambourine' },
    { key: 'vibraphone', text: 'Vibraphone', value: 'vibraphone' },
    { key: 'xylophone', text: 'Xylophone', value: 'xylophone' },
    { key: 'percussionUl', text: 'Percussion Unlisted (in bio)', value: 'percussionUl' },
    { key: 'windInstruments', text: 'Wind Instruments (general)', value: 'windInstruments' },
    { key: 'clarinet', text: 'Clarinet', value: 'clarinet' },
    { key: 'airHorn', text: 'Air Horn', value: 'airHorn' },
    { key: 'bagpipes', text: 'Bagpipes', value: 'bagpipes' },
    { key: 'bariotoneHorn', text: 'Bariotone Horn', value: 'bariotoneHorn' },
    { key: 'bassoon', text: 'Bassoon', value: 'bassoon' },
    { key: 'contraBassoon', text: 'Contra Bassoon', value: 'contraBassoon' },
    { key: 'doubleBassoon', text: 'Double Bassoon', value: 'doubleBassoon' },
    { key: 'bawu', text: 'Bawu', value: 'bawu' },
    { key: 'beatboxing', text: 'Beatboxing', value: 'beatboxing' },
    { key: 'bugle', text: 'Bugle', value: 'bugle' },
    { key: 'conch', text: 'conch', value: 'conch' },
    { key: 'euphonium', text: 'Euphonium', value: 'euphonium' },
    { key: 'flute', text: 'Flute', value: 'flute' },
    { key: 'frenchHorn', text: 'French Horn', value: 'frenchHorn' },
    { key: 'harmonica', text: 'Harmonica', value: 'harmonica' },
    { key: 'jugs', text: 'Jugs', value: 'jugs' },
    { key: 'mellophone', text: 'Mellophone', value: 'mellophone' },
    { key: 'oboe', text: 'Oboe', value: 'oboe' },
    { key: 'ocarina', text: 'Ocarina', value: 'ocarina' },
    { key: 'pipeOrgan', text: 'Pipe Organ', value: 'pipeOrgan' },
    { key: 'piccolo', text: 'Piccolo', value: 'piccolo' },
    { key: 'rapping', text: 'Rapping', value: 'rapping' },
    { key: 'recorder', text: 'Recorder', value: 'recorder' },
    { key: 'tuba', text: 'Tuba', value: 'tuba' },
    { key: 'saxophone', text: 'Saxophone', value: 'saxophone' },
    { key: 'slideWhistle', text: 'Slide Whistle', value: 'slideWhistle' },
    { key: 'soprano', text: 'Soprano', value: 'soprano' },
    { key: 'tenor', text: 'Tenor', value: 'tenor' },
    { key: 'trombone', text: 'Trombone', value: 'trombone' },
    { key: 'trumpet', text: 'Trumpet', value: 'trumpet' },
    { key: 'tuba', text: 'Tuba', value: 'tuba' },
    { key: 'vuvuzela', text: 'Vuvuzela', value: 'vuvuzela' },
    { key: 'bawu', text: 'Bawu', value: 'bawu' },
    { key: 'woodWindUl', text: 'Wood Wind (unlisted)', value: 'woodWindUl' },
    { key: 'stringsGen', text: 'Strings (general)', value: 'stringsGen' },
    { key: 'stringsUl', text: 'Strings (unlisted)', value: 'stringsUl' },
    { key: 'harp', text: 'Harp', value: 'harp' },
    { key: 'banjo', text: 'Banjo', value: 'banjo' },
    { key: 'cello', text: 'Cello', value: 'cello' },
    { key: 'doubleBass', text: 'Double Bass', value: 'doubleBass' },
    { key: 'fiddle', text: 'Fiddle', value: 'fiddle' },
    { key: 'gaohu', text: 'Gaohu', value: 'gaohu' },
    { key: 'guitarAcc', text: 'Guitar Acoustic', value: 'guitarAcc' },
    { key: 'guitar', text: 'Guitar', value: 'guitar' },
    { key: 'guitarBass', text: 'Bass Guitar', value: 'guitarBass' },
    { key: 'guitarElec', text: 'Electric Guitar', value: 'guitarElec' },
    { key: 'harpsichord', text: 'Harpsichord', value: 'harpsichord' },
    { key: 'lute', text: 'Lute', value: 'lute' },
    { key: 'lyre', text: 'Lyre', value: 'lyre' },
    { key: 'mandolin', text: 'Mandolin', value: 'mandolin' },
    { key: 'piano', text: 'piano', value: 'piano' },
    { key: 'ukulele', text: 'Ukulele', value: 'ukulele' },
    { key: 'viola', text: 'Viola', value: 'viola' },
    { key: 'violin', text: 'Violin', value: 'violin' },
]

const Settings = (props) => {

    const [loggedInUser, setUser] = useContext(UserContext);
    const _id = useState(loggedInUser._id);
    const [username, setUserName] = useState("");
    const [bio, setBio] = useState("");
    const [contact, setContact] = useState("");
    const [musicUrl, setMusicUrl] = useState("");
    const [instruments, setInstruments] = useState([]);
    const [photo, setPhoto] = useState("");
    const [genres, setGenres] = useState([]);
    const [bandNSolo, setBandNSolo] = useState("");

    console.log(loggedInUser)
    console.log(_id)

    const handleName = (event) => { setUserName(event.target.value); }
    const handleBio = (event) => { setBio(event.target.value); }
    const handleContact = (event) => { setContact(event.target.value); }
    const handleMusicUrl = (event) => { setMusicUrl(event.target.value); }
    const handleGenres = (event, { value }) => { setGenres(value); }
    const handleInstruments = (event, { value }) => { setInstruments(value); }
    const handlePhoto = (event) => { setPhoto(event.target.value); }
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
            photo,
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
                props.history.push('/')
                setUser(null)
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
                    <h5 className="text-left">Music URL:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        id="musicUrlSetting"
                        rows="3"
                        aria-describedby="musicUrlHelp"
                        placeholder="Enter Music URL here"
                        onChange={handleMusicUrl}
                        type="text"
                        id="email InputEmail"
                        name="musicUrl"
                        value={musicUrl}
                    />
                    <br />
                </label>
                <label>
                    <h5 className="text-left">Photo URL:</h5>
                    <input
                        className="form-text form-control col-5 text-xl-left m-3 setting-container"
                        id="photoSetting"
                        rows="3"
                        aria-describedby="photoHelp"
                        placeholder="Enter Photo URL here"
                        onChange={handlePhoto}
                        type="text"
                        id="email InputEmail"
                        name="photo"
                        value={photo}
                    />
                    <br />
                </label>
                {/* <input type="file" /> */}
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
            <div>
                <button type="button" className="btn btn-outline-warning" onClick={handleLogout}>logout</button>
            </div>
            <div>
                <img src="http://www.pngall.com/wp-content/uploads/2016/09/Clef-Note.png" />
            </div>
            <div>
                <br />
                <button type="button" className="btn-sm btn-outline-warning" onClick={handleDelete}>delete</button>
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
                    <br />
                    <button className="btn btn-warning" type="submit">Update</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default Settings;