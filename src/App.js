import React, {useState} from "react";
const api = {
  key: "302b5e3e4445d132318f04e068ddacc3",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if (evt.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];     //Get the date from the arrays created.
    let date = d.getDate();
    let month = months[d.getMonth()] ;      //Go through the month array and return the current month 
    let year = d.getFullYear(); 

    return `${day} ${date} ${month} ${year}`    //return the full date and display it
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query} 
        onKeyPress={search}
        />
        </div>

        {(typeof weather.main != "undefined") ? (
            <div>
                <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                    <div className="weather-box">
                        <div className="temp">
                            15°C
                        </div>
                        <div className="weather">Sunny</div>
                    </div>
                </div>
            </div>
        ) : (' ')}
      </main>
    </div>
  );
}

export default App;