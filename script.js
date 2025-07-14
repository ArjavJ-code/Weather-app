async function checkWeather()
{
    
    const apiKey = 'e75e52b86ca62adc9655278fab87db8b';
    const city = document.querySelector('.searchbar').value.trim();
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

try{
    const response = await fetch(url);
    let data = await response.json();
    if (!response.ok) {
    document.querySelector('.whole').innerHTML = `<div class="weather-header">
    <input class="searchbar" type="text" placeholder="Search City">
    <button class="search-button">
      <img class="search-icon" src="images/search.png">
    </button>
  </div>
    <p class="invalid">Please enter a valid city name</p>`;
    document.querySelector('.search-button').onclick = checkWeather;
    return;
}

    const temperature = (data.main.temp);
    const humidity = (data.main.humidity);
    const wind_speed = data.wind.speed;
    const weatherCondition = data.weather[0].main;

let iconPath = 'images/mist.png'; 
  if (weatherCondition === 'Clouds') iconPath = 'images/clouds.png';
  else if (weatherCondition === 'Clear') iconPath = 'images/clear.png';
  else if (weatherCondition === 'Rain') iconPath = 'images/rain.png';
  else if (weatherCondition === 'Snow') iconPath = 'images/snow.png';
  else if (weatherCondition === 'Thunderstorm') iconPath = 'images/thunderstorm.png';


let weatherHTML = `
               
    <div class="weather-header">
        <input class="searchbar" type="text" value="${city}" placeholder="Search City">
        <button class="search-button">
            <img class="search-icon" src="images/search.png">
        </button>
    </div>

    <div class="weather">
        <img src="${iconPath}" class="weather-icon">
        <h1 class="temp">${temperature.toFixed(0)}°C</h1>
        <h2 class="weather-type">${weatherCondition}</h2>
        <h2 class="city">${city}</h2>
        <div class="details">
            <div class="co1">
                <img src="images/humidity.png">
                <div>
                    <p class="humidity">${humidity}%</p>
                    <p class="humidity2">Humidity</p>
                </div>
            </div>
            <div class="co2">
                <img src="images/wind.png">
                <div>
                    <p class="wind-speed">${wind_speed}km/hr</p>
                    <p class="wind-speed2">Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
`;


document.querySelector('.whole').innerHTML = weatherHTML;

document.querySelector('.search-button').onclick = checkWeather;
document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    if (event.key === 'Enter' && activeElement.classList.contains('searchbar')) {
        checkWeather();
    }
})
document.querySelector('.whole').innerHTML = weatherHTML;

document.querySelector('.search-button').onclick = checkWeather;
document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    if (event.key === 'Enter' && activeElement.classList.contains('searchbar')) {
        checkWeather();
    }
});


document.querySelector('.searchbar').value = '';

    }catch(error){
        alert("Unexpected Error.Please try later.");
    }
} 

document.querySelector('.search-button').onclick = checkWeather;
document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    if (event.key === 'Enter' && activeElement.classList.contains('searchbar')) {
        checkWeather();
    }
});








// fetch(url).then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// });


