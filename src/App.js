import React from "react";
const api = {
  key: "302b5e3e4445d132318f04e068ddacc3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
        placeholder="Search..."/>
        </div>

        <div className="location-box">
          <div className="location">University of Ghana, Accra</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            15°C
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
