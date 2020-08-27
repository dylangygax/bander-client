import React from 'react';
import { Dropdown, Divider } from 'semantic-ui-react';
import Button from "../components/Button"

const avanteGarde = [
    { key: 'avantGarde', text: 'Avante Garde', value: 'avantGarde' },
    { key: 'experimental', text: 'Experimental', value: 'experimental' },
    { key: 'noise', text: 'Noise', value: 'noise' },
    { key: 'harshNoiseWall', text: 'Harsh Noise Wall', value: 'harshNoiseWall' },
    { key: 'outsider', text: 'Outsider', value: 'outsider' },
    { key: 'lofi', text: 'Lo-fi', value: 'lofi' },
    { key: 'musiqueConcrete', text: 'Musique Concrete', value: 'musiqueConcrete' },
    { key: 'electroacoustic', text: 'Electroacoustic', value: 'electroacoustic' },
]

const blues = [
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
]

const caribbean = [
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

const Search = () => (
    <div>
        <div className="bg-white p-5 search-container">
            <h2 className="m-3 b">Search</h2>
            <h4 className="m-4">Music Genres</h4>
            <h5 className="text-left">Avante Garde</h5>
            <Dropdown className="m-2" placeholder='Avante Garde' fluid multiple selection options={avanteGarde} />
            <h5 className="text-left">Blues</h5>
            <Dropdown className="m-2" placeholder='Blues' fluid multiple selection options={blues} />
            <h5 className="text-left">Carribean</h5>
            <Dropdown className="m-2" placeholder='Caribbean' fluid multiple selection options={caribbean} />
            <h5 className="text-left">Carribean</h5>
            <Dropdown className="m-2" placeholder='Caribbean' fluid multiple selection options={caribbean} />
            <div className="justify-content-center flex-column col-12">
                <div class="ui divider" />
                <h4 className="m-4">Instruments</h4>
                <h5 className="text-left">Avante Garde</h5>
                <Dropdown className="m-2" placeholder='Avante Garde' fluid multiple selection options={avanteGarde} />
                <Button buttonText="Submit" url={"http://localhost:3000/app/Home"} />
            </div>
        </div>
    </div>

)

export default Search;
