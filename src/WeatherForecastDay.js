import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function getMaxTemperature(){
        let temp = props.WeatherForecast.temp.max;
        return Math.round(temp)+"°";
    }
    function getMinTemperature(){
        let temp = props.WeatherForecast.temp.min;
        return Math.round(temp)+"°";
    }
    function getDay(){
        let date = new Date(props.WeatherForecast.dt*1000);
        let day = date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }
    return(
        <div className = "WeatherForecastDay">
            <div className="WeatherForecast-day">{getDay()}</div>
            <WeatherIcon icon={props.WeatherForecast.weather[0].icon} size={30} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{getMaxTemperature()}</span>
                <span className="WeatherForecast-temperature-min"> {getMinTemperature()}</span>
            </div>
        </div>
    )
}