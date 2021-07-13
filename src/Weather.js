import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
export default function Weather(props){
    const [weatherData,setWeatherData] = useState({ready:false});
    let [city,setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        
        setWeatherData({
            ready : true,
            city : response.data.name,
            temperature : response.data.main.temp,
            date : new Date(response.data.dt * 1000),
            description : response.data.weather[0].description,
            imgUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            humidity : response.data.main.humidity,
            wind : response.data.wind.speed
    });
            
    }

   function search(){
        const apiKey = "c911bf11699711a19a083229ee0112ca";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
   }

   function handleSubmit(event){
       event.preventDefault();
       search();
   }
   function handleCityChange(event){
       setCity(event.target.value);
       
   }
    if(weatherData.ready){
        
    return(
        <div className="Weather">
            <form className="form-style" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input 
                          type="search" 
                          placeholder="Type a city.." 
                          autoFocus="on" 
                          className="form-control shadow-sm"
                          onChange={handleCityChange}
                          />
                    </div>
                    <div className="col-3">
                         <input type="submit" value="Search" className="btn btn-primary shadow-sm w-100"/>
                    </div>
                </div>
            </form>
            < WeatherInfo data = {weatherData}/>
        </div>
        
        )
       
    } else{
        search();
        
        
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
