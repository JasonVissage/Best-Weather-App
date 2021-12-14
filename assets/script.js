var searchBtnEl = document.querySelector("#searchBtn");
var searchFieldEl = document.querySelector("#searchField");
var displayEl = document.querySelector("#display");
var cityNameEl = document.querySelector("#cityName");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humid");
var uvEl = document.querySelector("#uv");
var citySearchEl = document.querySelector("#citySearch")

// api add in's
var cityName = "Dallas"
var lat = "32.7767"
var long = "-96.7970"

// api Key for OneCall
var apiKey = "09fdfda92faacaa82f0791b49a497abf"
var apiOneUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + apiKey
var apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey


fetch(apiOneUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(data) {
                console.log(data)
            })
        }
    })

fetch(apiCurrentUrl)
.then(res => {
    if (res.ok) {
        res.json()
        .then(function(data) {
            console.log(data)
        })
    }
})