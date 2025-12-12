import './SearchResult.css';

// eslint-disable-next-line react/prop-types
function SearchResult({countryFlag, countryAlt, countryName, countrySub, countryCapital, countryInhabitants, countryNeighbors, countryDomain, countryNameCommon}) {

return (
  <>
      <article>
          <div className="topDiv">
          <span className="imageSpan"><img src={countryFlag} alt={countryAlt}/></span> <h1>{countryName}</h1>
          </div>

          <p>{countryNameCommon} is situated in {countrySub} and the capital is {countryCapital}
              It has a population of {countryInhabitants} million people and it borders with {countryNeighbors} neighboring countries
              Websites can be found on {countryDomain} domains.
          </p>
      </article>
  </>
);
}
export default SearchResult;
