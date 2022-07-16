import React from "react";
import Languages from "./Languages";

const CountryDetails = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <p>Region: {country.region}</p>
      <Languages languages={country.languages}/>
      <img src={country.flag} alt="Country flag" width="350" height="250" />
    </div>
  )
}

export default CountryDetails;