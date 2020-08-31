import React, { Component, useState, useContext, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
//import SettingsComponent from "../components/SettingsComponent";
//import Button from "../components/Button";
import UserModel from '../models/user';
import { UserContext, UserContextProvider } from '../UserContext'
import { QueueContext, QueueContextProvider } from "../QueueContext"

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
    { key: 'bawu', text: 'Bawu', value: 'bawu' },
]

const RADIUS = 3958.8 //radius of the earth in miles

const Search = (props) => {
    const [genres, setGenres] = useState([])
    const [instruments, setInstruments] = useState([])
    const [isBand, setIsBand] = useState("")

    const [loggedInUser, setUser] = useContext(UserContext)
    const [loggedInUserObject, setLoggedInUserObject] = useState({})

    const [queue, setQueue] = useContext(QueueContext)

    useEffect(() => {
        UserModel.show(loggedInUser._id)
            .then(data => {
                console.log(loggedInUser._id)
                console.log(data.user)
                setLoggedInUserObject(data.user)
                console.log(loggedInUserObject)
            })
    }, [loggedInUser._id])

    //converts degrees to radians. neccesary for distance calculation
    const toRad = (number) => {
        return number * Math.PI / 180
    }

    //takes location objects with keys "lattitude" and "longitude"
    const findDistance = (locationOne, locationTwo) => {
        const difLat = locationOne.lattitude - locationTwo.lattitude
        const difLong = locationOne.longitude - locationTwo.longitude

        console.log(difLat, difLong)

        const difLatRad = toRad(difLat)
        const difLongRad = toRad(difLong)

        console.log(difLatRad, difLongRad)

        //Haversine Formula
        //refactored from http://www.codecodex.com/wiki/Calculate_Distance_Between_Two_Points_on_a_Globe#JavaScript
        const a =
            Math.sin(difLatRad / 2) * Math.sin(difLatRad / 2) +
            Math.cos(toRad(locationOne.lattitude)) * Math.cos(toRad(locationTwo.lattitude)) *
            Math.sin(difLongRad / 2) * Math.sin(difLongRad / 2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = RADIUS * c
        return distance
    }

    const genresChange = (e, { value }) => {
        e.persist();
        console.log(e);
        console.log(value);
        console.log(e.currentTarget.getAttribute("data-name"));
        setGenres(value)
    }

    const instrumentsChange = (e, { value }) => {
        e.persist();
        setInstruments(value)
    }

    const isBandChange = (e) => {
        setIsBand(e.target.value)
    }

    //handleSubmit = (event) => {
    //event.preventDefault()
    //console.log('in handle submist', this.state)
    //UserModel.results(this.state)

    const handleSubmit = (event) => {
        event.preventDefault()
        UserModel.results({ genres, instruments, isBand })
            .then(data => {
                console.log(data.users)
                console.log(loggedInUserObject)
                //const result = data.users
                const results = data.users.map(user =>
                    [user._id, findDistance(user.location, loggedInUserObject.location)]
                )
                console.log(results)
                const sortedResults = results.sort((a, b) => a[1] - b[1])
                console.log(sortedResults)
                setQueue(sortedResults)
                // setset{
                //     genres: [],
                //     instrument: []
                // })
            })

        props.history.push('/app/home');

    }

    // render() {
    return (
        <div>
            <div className="bg-white p-5 search-container">
                <form className="form-group " onSubmit={handleSubmit}>
                    <h2 className="m-3 b">Search</h2>
                    <h4 className="m-4">Music Genres</h4>

                    <Dropdown
                        placeholder='Genres...'
                        fluid
                        multiple
                        search
                        selection
                        data-name="genres"
                        onChange={genresChange}
                        options={genreList}
                    />

                    <div className="ui divider" />
                    <div className="justify-content-center flex-column col-12">
                        <h4 className="m-4">Instruments</h4>
                        <Dropdown
                            className="m-2"
                            placeholder='Instruments...' fluid multiple selection options={instrumentsList}
                            onChange={instrumentsChange}
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
                                        onClick={isBandChange}
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
                                        onClick={isBandChange}
                                        value="solo"
                                    />
                                        Solo
                                    </label>
                            </div>
                            <br />
                        </div>
                        <button className="btn btn-lg btn-warning" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
    //}
}

export default Search;
