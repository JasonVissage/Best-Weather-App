var searchBtnEl = document.querySelector("#searchBtn");
var searchFieldEl = document.querySelector("#searchField");
var displayEl = document.querySelector("#display");
var cityEl = document.querySelector("#cityEl");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humid");
var uvEl = document.querySelector("#uv");
var citySearchFormEl = document.querySelector("#citySearchForm");
var currentDay = new Date;

// api add in's
// var cityName = "Dallas"
// var lat = "32.7767"
// var long = "-96.7970"

// api info
var apiKey = "09fdfda92faacaa82f0791b49a497abf"



// pulls weather in
var getWeather = function() {
    var apiOneUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + apiKey
    fetch(apiOneUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(city, lat, long) {
                // put city, lat and lon in parameters in function. 
                // plug in getWeather into getCity
                // plug in getCity into click event
                }
            )
        }
    })
};


// pulls city
var getCity = function() {
    var apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey
    fetch(apiCurrentUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(data) {
            console.log(data.coord.lon)

            
            })
        }
    })
}
getCity()
// gets city
var searchedCity = function(event) {
    event.preventDefault();
    var city = searchFieldEl.value.trim();
    console.log(city)
}

searchBtnEl.addEventListener('click', searchedCity);
