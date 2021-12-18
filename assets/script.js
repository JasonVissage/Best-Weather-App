var searchBtnEl = document.querySelector("#searchBtn");
var searchFieldEl = document.querySelector("#searchField");
var displayEl = document.querySelector("#display");
var cityEl = document.querySelector("#cityEl");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humid");
var uvEl = document.querySelector("#uv");
var citySearchFormEl = document.querySelector("#citySearchForm");
var currentDate = new Date()
var iconEl = document.createElement("img")

// api add in's



// api info
var apiKey = "09fdfda92faacaa82f0791b49a497abf"

// search city
var searchedCity = function(event) {
    event.preventDefault();
    var city = searchFieldEl.value.trim();
    getCity(city)
}
searchBtnEl.addEventListener('click', searchedCity);

// gets city
var getCity = function(cityName) {
    var apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
    fetch(apiCurrentUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(data) {
                city.innerHTML = cityName
                getWeather(data.coord.lat, data.coord.lon)
            
            })
        }
    })
}

// gets city




// pulls weather in
var getWeather = function(lat, lon) {
    var apiOneUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch(apiOneUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(data) {
                console.log(data)
                tempEl.textContent = "Temp: " + data.current.temp + "°F"
                windEl.textContent = "Wind: " + data.current.wind_speed + " mph"
                humidEl.textContent = "Humidity: " + data.current.humidity + "%"
                uvEl.textContent = "UV Index: " + data.current.uvi
                
                // put city, lat and lon in parameters in function. 
                // plug in getWeather into getCity
                // plug in getCity into click event
                
                }
            )
        }
    })
};
// getWeather()

// pulls city

