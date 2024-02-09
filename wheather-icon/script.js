const apikeys = "13132c117fecddda87dcda643f69d259";

const wheatherdateEl = document.getElementById("wheather-date");

const citynameEl = document.getElementById("cityname");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    const cityValue = citynameEl.value;
    getWeatherData(cityValue);

});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikeys}&units=metric`)

        if(!response.ok){
            throw new error("Network response was not ok")
        }

        const data = await response.json()

           console.log(data);

           const temperature = Math.round(data.main.temp)

           const description = data.weather[0].description

           const icon = data.weather[0].icon
           
           const details = [
           `Feels like: ${Math.round(data.main.feels_like)}`,
           `Humidity: ${data.main.humidity}%`,
           `Wind speed: ${data.wind.speed} m/s`,
           ]

           wheatherdateEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" 
           alt="Weather-image">`;

           wheatherdateEl.querySelector(".temperature").textContent = `${temperature}°C`;

           wheatherdateEl.querySelector(".description").textContent = description;

           wheatherdateEl.querySelector(".details").innerHTML = details.map((detail)=>
           `<div>${detail}</div>`).join("");




    }catch(error){

    }
}
