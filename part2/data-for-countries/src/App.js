import { useState, useEffect } from "react";
import CountriesDisplay from "./components/CountriesDisplay";
import SearchInput from "./components/SearchInput";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  // promises api restcountries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all")
    .then((response) => {
      setCountries(response.data);
    });
  }, []);

  //event handler
  const handleSearchCountries = (event) => {
    setSearchCountry(event.target.value);

    const filter = new RegExp(searchCountry, "i");
    const filteredCountry = () =>
      countries.filter((country) => country.name.match(filter));
    setCountries(filteredCountry);
  };

  return (
    <>
      <SearchInput value={searchCountry} onChange={handleSearchCountries} />
      <CountriesDisplay countries={countries} />
    </>
  );
};

export default App;
