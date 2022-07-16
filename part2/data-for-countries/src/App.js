import {useState, useEffect} from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import axios from "axios";
const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');

    useEffect(() => {
        axios
        .get('https://restcountries.com/v2/all')
        .then(response => {
            const countries = response.data;
            setCountries(countries);
        })
    }, [])

    //event handler
    const handleSearchCountries = (event) => {
        console.log(event.target.value)
        setSearchCountry(event.target.value);

        const filter = new RegExp(searchCountry, 'i');
        const filteredCountry = () => 
            countries.filter((country) => country.name.match(filter));
        setCountries(filteredCountry);
    }

    return (
        <>
            <Filter value={searchCountry} onChange={handleSearchCountries} />
            <Countries countries={countries} handleSearchCountries={handleSearchCountries} />
        </>
    )
}

export default App;
