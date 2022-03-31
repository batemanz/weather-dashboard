var APIkey = "99ca7d01c20c5e2c240491c1543dd7ca";
var cityInputEl = document.querySelector("#cityInput");
var city = document.querySelector("#city");
var date = document.querySelector("#date");
var dateCard = document.querySelector(".date");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var UVindexEl = document.querySelector("#UVindex");
var tempCardEl = document.querySelector("#tempCard");
var windCardEl = document.querySelector("#windCard");
var humidity1El = document.querySelector("#humidity1");
var mainWeather = document.querySelector("#weatherMain")
var weatherFavicon = document.querySelector(".weatherFavicon");
var favEl = document.querySelector("#fav");
var searchHistory = document.querySelector(".searchHistory");

var currentDay = moment().format("L");
var searchHistoryArray = [];
var searchBtn = document.querySelector(".search");

// date.textContent = "3/30/22";

function getWeatherAPI(apiLat, apiLon) {
  //console.log("Inside weather api",  apiLat, apiLon);

  var oneCallAPI =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" + apiLat + "&lon=" + apiLon + "&exclude=minutely,hourly,alerts&appid=" + APIkey + "&units=imperial";

  //console.log(oneCallAPI); 

 //fetch request 
 fetch(oneCallAPI)
 .then(function (response1) {
   return response1.json();
 })
 .then(function (data1) {
    console.log("One Call Result", data1);
   // set the current weather here 
    var dateEl = data1.current.dt;
    temp.textContent = data1.current.temp + "\xB0"; 
    humidity.textContent = data1.current.humidity + "%"; 
    wind.textContent = data1.current.wind_speed + " Mph";
    var uviEl = data1.current.uvi;
    mainWeather.textContent = data1.current.weather[0].main;
    favEl.textContent = data1.current.weather[0].icon;
    // shows the current day and time from the epoch currrent.dt
    UVindexEl.textContent = uviEl + " uvi";
    const milliseconds = dateEl * 1000;// 1575909015000
    const dateObject = new Date(milliseconds);
    date.textContent = dateObject.toLocaleString("en-US", {timeZoneName: "short"});

    if (uviEl >= 0 && uviEl < 3) {
        UVindexEl.style.backgroundColor = "#3EA72D";
    } else if (uviEl >= 3 && uviEl < 6) {
        UVindexEl.style.backgroundColor = "#FFF300";
    } else if (uviEl >= 6 && uviEl < 8) {
        UVindexEl.style.backgroundColor = "#F18B00";
    } else if (uviEl >= 8 && uviEl < 10.01) {
        UVindexEl.style.backgroundColor = "#E53210";
    } else {
        UVindexEl.style.backgroundColor = "#B567A4"; 
    };  
   // set the forecat weathere here 

    tempCardEl.textContent = data1.daily[0].temp.max + "\xB0 High " + data1.daily[0].temp.min + "\xB0 Low";
    windCardEl.textContent = data1.daily[0].wind_speed + " Mph";
    humidity1El.textContent = data1.daily[0].humidity + "%";

    tempCardEl2.textContent = data1.daily[0].temp.max + "\xB0 High " + data1.daily[0].temp.min + "\xB0 Low";
    windCardEl2.textContent = data1.daily[0].wind_speed + " Mph";
    humidity1El2.textContent = data1.daily[0].humidity + "%";

    tempCardEl3.textContent = data1.daily[0].temp.max + "\xB0 High " + data1.daily[0].temp.min + "\xB0 Low";
    windCardEl3.textContent = data1.daily[0].wind_speed + " Mph";
    humidity1El3.textContent = data1.daily[0].humidity + "%";

    tempCardEl4.textContent = data1.daily[0].temp.max + "\xB0 High " + data1.daily[0].temp.min + "\xB0 Low";
    windCardEl4.textContent = data1.daily[0].wind_speed + " Mph";
    humidity1El4.textContent = data1.daily[0].humidity + "%";

    tempCardEl5.textContent = data1.daily[0].temp.max + "\xB0 High " + data1.daily[0].temp.min + "\xB0 Low";
    windCardEl5.textContent = data1.daily[0].wind_speed + " Mph";
    humidity1El5.textContent = data1.daily[0].humidity + "%";


//    // save it to local storage  

 })
 .catch(function (error) {
   console.log("API error", error);
 });
}

function getLatLonForCity() {
  var searchText = cityInputEl.value;
  //console.log(searchText);

  var geocodingAPI =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    searchText +
    "&limit=1&appid=" +
    APIkey;

  // console.log(geocodingAPI);
  fetch(geocodingAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("API Result", data);

      var apiLat = data[0].lat;
      var apiLon = data[0].lon;

      //setting the name and state
      city.textContent = data[0].name + ", " + data[0].state;

      //call you oncecallapi function
      getWeatherAPI(apiLat, apiLon);

    })
    .catch(function (error) {
      console.log("API error", error);
    });
}

//Event listiner
searchBtn.addEventListener("click", function (event) {
  event.preventDefault(); //stps the page from re-loading
  getLatLonForCity();
});
