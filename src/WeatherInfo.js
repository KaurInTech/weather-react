import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props){
    return (
        <div className = "WeatherInfo">

            <div className="row">

            <div className="col-5">
                        <WeatherIcon icon={props.data.imgUrl} alt={props.data.description}  />        
                        <span className="temperature" >{Math.round(props.data.temperature)} </span>
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
                        Humidity: {props.data.humidity}%
                    </li>
                    <li>   
                        Wind: {props.data.wind}km/h
                    </li>
                </ul>
             </div>

            <div className="col-4 ">
               
                    <h1> {props.data.city}</h1>
                    <ul className="weatherData">
                    <li><FormatDate date={props.data.date}/></li>
                    <li className = "text-capitalize">{props.data.description}</li>
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
        
    </div> 

       
    )
}
