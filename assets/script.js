var searchBtnEl = document.querySelector("#searchBtn");
var searchFieldEl = document.querySelector("#searchField");
var displayEl = document.querySelector("#display");
var cityEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humid");
var uvEl = document.querySelector("#uv");
var citySearchFormEl = document.querySelector("#citySearchForm");
var iconEl = document.querySelector("#weatherIcon");
var fiveDayId = document.querySelector("#fiveDay")

// api add in's

// api info
var apiKey = "09fdfda92faacaa82f0791b49a497abf"

// search city
var searchedCity = function(event) {
    event.preventDefault();
    var cityName = searchFieldEl.value.trim();
    getCity(cityName)
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
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                getWeather(cityName,lat,lon)
            
            })
        }
    })
};




// pulls weather in
var getWeather = function(cityName, lat, lon) {
    var apiOneUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch(apiOneUrl)
    .then(res => {
        if (res.ok) {
            res.json()
            .then(function(data) {
                console.log(data)
                var currentDate = new Date(data.current.dt *1000).toLocaleDateString()
                document.getElementById("currentDate").innerHTML = cityName + " ( " + currentDate + " )";
                tempEl.textContent = "Current Temp: " + data.current.temp + "°F"
                var weatherIcon = data.current.weather[0].icon;
                iconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherIcon + ".png");
                windEl.textContent = "Wind: " + data.current.wind_speed + " mph"
                humidEl.textContent = "Humidity: " + data.current.humidity + "%"
                uvEl.textContent = "UV Index: " + data.current.uvi

                // start 5 day forecast loop

                for (var i = 0; i < 5; i++) {
                    var fiveDayDate = new Date(data.daily[i].dt *1000).toLocaleDateString()
                    var fiveDayIcon = data.daily[i].weather[0].icon
                    var fiveDayTemp = data.daily[i].temp.day
                    var fiveDayWind = data.daily[i].wind_speed
                    var fiveDayHumid = data.daily[i].humidity

                    var containerEl = document.createElement("div")
                    var fiveDateEl = document.createElement("h3")
                    var fiveIconEl = document.createElement("img")
                    var fiveTempEl = document.createElement("p")
                    var fiveWindEl = document.createElement("p")
                    var fiveHumidEl = document.createElement("p")

                    fiveDateEl.innerHTML = fiveDayDate
                    fiveIconEl.innerHTML = fiveDayIcon
                    fiveTempEl.innerHTML = "Current Temp: " + fiveDayTemp + "°F"
                    fiveWindEl.innerHTML = "Wind: " + fiveDayWind + " mph"
                    fiveHumidEl.innerHTML = "Humidty: " + fiveDayHumid + "%"


                    // append all elements onto page below. Use Append, not append Child. 
                    containerEl.append(fiveDateEl)
                    containerEl.append(fiveIconEl)
                    containerEl.append(fiveTempEl)
                    containerEl.append(fiveWindEl)
                    containerEl.append(fiveHumidEl)


                    fiveDayId.append(containerEl)
                    // keep doing this
                }
                
                
                }
            )
        }
    })
};
// getWeather()
