import {useState, useEffect} from "react";
import axios from "axios";


const Weather = ( {country}) => {

  const [weather, setWeather] = useState({});
  
  // promises api weatherstack
  useEffect(() => {
    // fetch data only if country exists
    if (country) {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID={process.env.REACT_APP_API_KEY}&units=metric`)
      .then((response) => {
        setWeather(response.data);
      });
    }
  }, [country]);


  console.log(country.capital);
  console.log(weather.main);

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
      <p>Forecast in {country.capital} ({country.name})</p>
      <div>
        {weather.main.temp} degrees Celsius
      </div>
    </>
  )

}

export default Weather;