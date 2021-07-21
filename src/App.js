import React from "react";

import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      < Weather defaultCity = "Port Mann"/>
       <p className="link">
         This Project was coded by Sandeep Kaur and is 
         <a href="https://github.com/sandeeeep/weather-react"> open-sourced on Github</a> and
         <a href="https://github.com/sandeeeep/weather-react"> hosted on Netlify</a>
       </p>
    </div>
   
  );
}

export default App;
