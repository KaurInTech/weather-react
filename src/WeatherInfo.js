import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return (
        <div className = "WeatherInfo">

            <div className="row">

            <div className="col-5" >
                        <WeatherIcon icon={props.data.imgUrl} alt={props.data.description}  />  
                        <WeatherTemperature celsius = {props.data.temperature} /> 
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

        
    </div> 

       
    )
}
