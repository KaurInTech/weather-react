import React from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`);
    }

    let apiKey = "c911bf11699711a19a083229ee0112ca";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    let weatherData = {
        city : "New York",
        temperature : 19,
        date : "Tuesday 10:00",
        description : "Cloudy",
        imgUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        humidity : 80,
        wind : 10
    };
    return(
         <div className="Weather">
    <form className="form-style">
            <div className="row">
                <div className="col-6">
                    <input type="search" placeholder="Type a city.." autofocus="on" className="form-control shadow-sm"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="form-control btn btn-primary shadow-sm"/>
                </div>
                
                <div className="col-3">
                    <button className="btn btn-success shadow-sm current">Current Location </button>
                </div>
            </div>
     </form>
       
        
        <div className="row data">

            <div className="col-5 ">
                        <img className = "weather-icon" src = {weatherData.imgUrl} alt={weatherData.description}  />        
                        <span className="temperature" >{weatherData.temperature} </span>
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
                    <ul className="data1">
                    <li>{weatherData.date}</li>
                    <li className = "description">{weatherData.description}</li>
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
}
