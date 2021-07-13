import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import './Weather.css';
import FormatDate from "./FormatDate";
export default function Weather(props){
    const [weatherData,setWeatherData] = useState({ready:false});
    function handleResponse(response){
        setWeatherData({
            ready : true,
            city : response.data.name,
            temperature : response.data.main.temp,
            date : new Date(response.data.dt*1000),
            description : response.data.weather[0].description,
            imgUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            humidity : response.data.main.humidity,
            wind : response.data.wind.speed
    });
    }

   

    if(weatherData.ready){
    return(
         <div className="Weather">
    <form className="form-style">
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Type a city.." autofocus="on" className="form-control shadow-sm"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary shadow-sm w-100"/>
                </div>
               
            </div>
     </form>
       
        
        <div className="row">

            <div className="col-5">
                        <img className = "weather-icon" src = {weatherData.imgUrl} alt={weatherData.description}  />        
                        <span className="temperature" >{Math.round(weatherData.temperature)} </span>
                        <span className="units">
                             <a href="/" className="active" >°C</a> | 
                             <a href ="/" >°F</a>
                        </span> 
            </div>

             <div className="col-3">
                <ul className="weather-info">
                    <li>
                        Precipitation: 1%
                    </li>
                    <li>
                        Humidity: {weatherData.humidity}%
                    </li>
                    <li>   
                        Wind: {weatherData.wind}km/h
                    </li>
                </ul>
             </div>

            <div className="col-4 ">
               
                    <h1> {weatherData.city}</h1>
                    <ul className="weatherData">
                    <li><FormatDate date={weatherData.date}/></li>
                    <li className = "text-capitalize">{weatherData.description}</li>
                </ul>
            </div>

        </div>

        <form className="forecast" >
            <button className="forecast-types-button active">
                Temperature
            </button> |
            <button className="forecast-types-button">
                Precipitation
            </button> |
            <button className="forecast-types-button">
                Wind
            </button>
        </form>
        
    </div> )
    } else{
         const apiKey = "c911bf11699711a19a083229ee0112ca";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
        
        return (
            <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
        )
        
    }
}
