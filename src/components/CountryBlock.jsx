import './CountryBlock.css';

function CountryBlock ({countryName, countryFlag, countryPopulation, countryAlt, countryContinent, }) {

    let countryStyling = '';

    switch (countryContinent) {
        case "Africa":
            countryStyling = "africaStyling";
            break;
        case "Asia":
            countryStyling = "asiaStyling";
                break;
        case "Europe":
            countryStyling = "europeStyling";
                break;
        case "Oceania":
            countryStyling = "oceaniaStyling";
                break;
        case "North America":
            countryStyling = "americasStyling";
                break;
        case "South America":
            countryStyling = "americasStyling";
                break;
        default:
            countryStyling = "defaultStyling";
    }

return (
  <>
      {/*className={countryStyling}*/}
      <div className="articleBox">
    <article className="articleStyle">
        <div className="nameFlagBox">
            <img src={countryFlag} alt={countryAlt} className="flagStyling"/>
        <h3 className={countryStyling}>{countryName}</h3>
        </div>
        <p>Has a population of {countryPopulation} people</p>
    </article>
  </div>
  </>

);
}
export default CountryBlock;
