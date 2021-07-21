import React,{useState,useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
export default function WeatherForecast(props){

    let [ForecastReady,setForecastReady] = useState(false);
    let [WeatherForecast,setWeatherForecast] = useState(null);

    useEffect(()=>{
        setForecastReady(false);
    },[props.coordinates])
    
    function handleResponse(response){
        setWeatherForecast(response.data.daily);
        setForecastReady(true);

    }
    function load(){
        const apiKey = "c911bf11699711a19a083229ee0112ca";
        let units = "metric";
        let lattitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    if(ForecastReady){
    return(
        <div className="WeatherForecastData">
            <div className ="row">
              
                {WeatherForecast.map(function(dailyForecast,index){
                        if(index<6){ 
                            return(
                                <div className="col" key={index}>
                                     <WeatherForecastDay WeatherForecast = {dailyForecast} />
                                 </div>
                            )
                        }else{
                            return null;
                        }
                     
                })}     
            
            </div>
        </div>
    )
    } else{
        load();
        return null;
    }
}