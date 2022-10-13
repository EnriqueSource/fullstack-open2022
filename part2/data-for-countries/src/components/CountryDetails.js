import React from "react";
import Languages from "./Languages";
import Weather from "./Weather";

const CountryDetails = ({country, weather}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <p>Region: {country.region}</p>
      <Languages languages={country.languages}/>
      <img src={country.flag} alt="Country flag" width="350" height="250" />
      <Weather country={country} />
    </div>
  )
}

export default CountryDetails;