import {useState, useEffect} from "react";
import axios from "axios";

const Weather = (weathers) => {

  const [weather, setWeather] = useState({});

  // promises api weatherstack
  useEffect((country) => {

    // mit params the URI can be shorter
    const params = {
      // api key in an environment variable
      access_key: process.env.REACT_APP_API_KEY,
      // location
      query: 'London,uk'
    }
    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${params.query}&APPID=${params.access_key}`)
    .then((response) => {
      setWeather(response.data);
    });
  }, []);

  console.log(weather);

  return (
    <>
      <h3>Weather</h3>
      <p>hola, soy weather</p>
    </>
  )

}

export default Weather;