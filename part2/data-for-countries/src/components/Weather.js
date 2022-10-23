import {useState, useEffect} from "react";
import axios from "axios";

const Weather = ( {country}) => {

  const [weather, setWeather] = useState({});
  
  // promises api openweathermap.org
  useEffect(() => {
    // fetch data only if country exists
    if (country) {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then((response) => {
        setWeather(response.data);
      });
    }
  }, [country]);

  // We create a conditional rendering so that the app
  // does not break if the weather prediction api data
  // has not yet been downloaded.
  if (weather.main === undefined) {
    return (
      <p>waiting for weather data</p>
    )
  }

 return (
    <>
      <h3>Weather</h3>
      <p>Forecast in <strong>{country.capital}</strong> ({country.name})</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather icon"/>
      <p><strong>{weather.weather[0].description}</strong></p>
      <p>temperature: {weather.main.temp} ⁰C (min: {weather.main.temp_min} ⁰C, max: {weather.main.temp_max} ⁰C)</p>
      <p>humidity: {weather.main.humidity} %</p>
      <p>wind: {weather.wind.speed} m/s, {weather.wind.deg} ⁰</p>
    </>
  )
}

export default Weather;