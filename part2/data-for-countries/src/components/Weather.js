import {useState, useEffect} from "react";
import axios from "axios";

const Weather = ( {weathers, country}) => {

  const [weather, setWeather] = useState({});

  // promises api weatherstack
  useEffect(() => {

    // mit params the URI can be shorter
    let params = {
      // api key in an environment variable
      access_key: process.env.REACT_APP_API_KEY,
      // location
      query: 'Berlin'
    }
    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${params.query}&APPID=${params.access_key}&units=metric`)
    .then((response) => {
      setWeather(response.data);
    });
  }, []);

  //console.log(country.capital);
  console.log(weather.main);

  return (
    <>
      <h3>Weather</h3>
      <p>The capital from {country.name} is {country.capital}</p>
    </>
  )

}

export default Weather;