import { useState } from 'react';
import './App.css';

function App() {

const [city,setcity] = useState('');

const[weatherInfo,setweatherInfo] = useState(null);

function getweather() {

  const apiKey = '8c21c6d3ffb0d2fc5cb428690c577fe2';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  fetch(url)
   .then((response) => response.json())      
   .then((data) => {
    // console.log(data);
    let MT = Math.round(data.main.temp);
    let FL = Math.round(data.main.feels_like);
     
    const weather = {
      location: `weather in ${data.name}`,
      temperature: `temperature: ${MT} C`,
      feels_like: `feels like : ${FL} C`,
      humidity: `humidity : ${data.main.humidity}%`,
      wind: `wind : ${data.wind.speed} km/h`,
      condition:`condition : ${data.weather[0].description}`,
    };

    setweatherInfo(weather);


   });





}

  return (
    <div className="App">
     <input 
     type = 'text'
     placeholder='Enter the city'
     value={city}
     className='searchbox'
     onChange={(e)=>setcity(e.target.value)}
     />
     <button onClick={getweather} className='btn'>Get Weather</button>
     {weatherInfo && (<div className='weather-info'>
      <h3>{weatherInfo.location}</h3>
      <p>{weatherInfo.temperature}</p>
      <p>{weatherInfo.feels_like}</p>
      <p>{weatherInfo.humidity}</p>
      <p>{weatherInfo.wind}</p>
      <p>{weatherInfo.condition}</p>
     </div>)}


    </div>
  );
}

export default App;
