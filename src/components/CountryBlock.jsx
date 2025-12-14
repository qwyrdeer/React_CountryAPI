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
      <span className="articleBox">
    <span className="articleStyle">
        <span className="nameFlagBox">
            <img src={countryFlag} alt={countryAlt} className="flagStyling"/>
        <span className="nameBox"><h4 className={countryStyling}>{countryName}</h4></span>
        </span>
        <p>Has a population of {countryPopulation} people</p>
    </span>
  </span>
  </>

);
}
export default CountryBlock;
