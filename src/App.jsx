import './App.css';
import axios from 'axios';

import WorldMap from './assets/world_map.png'
import {useState} from "react";
import CountryBlock from "./components/CountryBlock.jsx";
import SearchResult from "./components/SearchResult.jsx";

function App() {
    const [visibleButton, toggleVisibleButton] = useState(false);
    const [allResults, setAllResults] = useState([]);
    const [error, toggleError] = useState(false);

async function fetchCountries() {
    try {
        toggleVisibleButton(true)
        toggleError(false);
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,continents');

        console.log(response.data)

        response.data.sort(function(a, b){
            return a.population - b.population
        });

        setAllResults(response.data)

    } catch(e) {
        console.error(e);
        toggleError(true);

    } finally {
        console.log("temporary")
    }
}


    const [searchHit, setSearchHit] = useState('');
    const [search, setSearch] = useState('');
    const [errorCountry, setErrorCountry] = useState('');

    async function searchCountries() {
        try {
            toggleError(false);
            const hit = await axios.get('https://restcountries.com/v3.1/name/' + search);

            console.log(hit.data)
            setSearchHit(hit.data)

        } catch(e) {
            setErrorCountry(search)
            console.error(e);
            toggleError(true);

        } finally {
            setSearch('')
        }
    }



    return (
        <>
            <div className='mainSite'>
                <div><input type="text" value={search} placeholder="Search a country..." onChange={(e) => setSearch(e.target.value)}/> <button type="button" onClick={searchCountries}>Search countries</button>
                    {error && <p className="error-message"> {errorCountry} bestaat niet. Probeer het opnieuw</p>}
                </div>
                {searchHit ?
                    <SearchResult
                    countryFlag= {searchHit.flags.png}
                    countryAlt = {searchHit.flags.alt}
                    countryName= {searchHit.name.official}
                    countryNameCommon= {searchHit.name.common}
                    countrySub= {searchHit.subregion}
                    countryCapital = {searchHit.capital}
                    countryInhabitants = {searchHit.population}
                    // countryNeighbors = {searchHit.borders}
                    countryDomain = {searchHit.tld}
                />
                    :
                    <p>Research any country with the field above.</p>
                }

                <div className='imgClass'><img src={WorldMap} alt="wereldkaart van de applicatie"/></div>
                    <h1>World Regions</h1>
                    <div>{visibleButton === false ? <button type="button" onClick={fetchCountries}> Show countries </button> : <p>Alles gefetched</p>}
                        {error && <p className="error-message">Er is iets misgegaan bij het ophalen van de data. Probeer het nog eens.</p>}
                    </div>
                    <main>

                    <div className="allCountryBox">
                        <ul>
                        {allResults.map((country) => (
                            <li key={country.name.official}>
                                <div>
                                    <CountryBlock
                                        countryName={country.name.common}
                                        countryFlag={country.flags.svg}
                                        countryAlt={country.flags.alt}
                                        countryPopulation={country.population}
                                        countryContinent={country.continents[0]}
                                    />
                                </div>
                            </li>))
                        }
                        </ul>
                    </div>
                    </main>
                </div>
                </>

        );
}

export default App