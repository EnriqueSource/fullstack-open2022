import React from "react";
import CountryName from "./CountryName";
import CountryDetails from "./CountryDetails";

const CountriesDisplay = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <p>connecting to the server, please wait</p>
    )
    } else if (countries.length > 230) {
      return (
        <p>enter the name of a country</p>
      )
    } else if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length < 10 && countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <CountryName key={country.name} country={country} />
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map((country) => (
          <CountryDetails key={country.name} country={country}/>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        No match found
      </div>
    )
  }
}

export default CountriesDisplay;
