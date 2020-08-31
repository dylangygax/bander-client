import React, { Component, useState, useContext, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react';
import SettingsComponent from "../components/SettingsComponent";
import Button from "../components/Button";
import UserModel from '../models/user';
import { UserContext, UserContextProvider } from '../UserContext'
import {QueueContext, QueueContextProvider} from "../QueueContext"

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
]

const instrumentsList = [
    { key: 'guitar', text: 'Guitar', value: 'guitar' },
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
            Math.sin(difLatRad/2) * Math.sin(difLatRad/2) +
            Math.cos(toRad(locationOne.lattitude)) * Math.cos(toRad(locationTwo.lattitude)) * 
            Math.sin(difLongRad/2) * Math.sin(difLongRad/2)
            ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
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
        UserModel.results({genres, instruments, isBand})
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
                            </div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    //}
}

export default Search;
