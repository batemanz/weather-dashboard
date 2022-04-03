var APIkey = "99ca7d01c20c5e2c240491c1543dd7ca";
var cityInputEl = document.querySelector("#cityInput");
var city = document.querySelector("#city");
var date = document.querySelector("#date");
var dateCard1 = document.querySelector("#dateCard1");
var dateCard2 = document.querySelector("#dateCard2");
var dateCard3 = document.querySelector("#dateCard3");
var dateCard4 = document.querySelector("#dateCard4");
var dateCard5 = document.querySelector("#dateCard5");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var UVindexEl = document.querySelector("#UVindex");
var tempCardEl = document.querySelector("#tempCard");
var windCardEl = document.querySelector("#windCard");
var humidity1El = document.querySelector("#humidity1");
var tempCardEl2 = document.querySelector("#tempCard2");
var windCardEl2 = document.querySelector("#windCard2");
var humidity1El2 = document.querySelector("#humidity2");
var tempCardEl3 = document.querySelector("#tempCard3");
var windCardEl3 = document.querySelector("#windCard3");
var humidity1El3 = document.querySelector("#humidity3");
var tempCardEl4 = document.querySelector("#tempCard4");
var windCardEl4 = document.querySelector("#windCard4");
var humidity1El4 = document.querySelector("#humidity4");
var tempCardEl5 = document.querySelector("#tempCard5");
var windCardEl5 = document.querySelector("#windCard5");
var humidity1El5 = document.querySelector("#humidity5");
var mainWeather = document.querySelector("#weatherMain");
var favEl = document.querySelector("#fav");
var searchHistory = document.querySelector(".searchHistory");
var cardEl = document.querySelector(".card");
var currentDay = moment().format("L");
var searchBtn = document.querySelector(".search");



function getWeatherAPI(apiLat, apiLon) {
// api key stored in variable
  var oneCallAPI =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" + apiLat + "&lon=" + apiLon + "&exclude=minutely,hourly,alerts&appid=" + APIkey + "&units=imperial";

 //fetch request 
 fetch(oneCallAPI)
 .then(function (response1) {
   return response1.json();
 })
 .then(function (data1) {
    console.log("One Call Result", data1);
   // sets the current weather
    var iconCode = data1.current.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $('#fav').attr('src', iconUrl);

    var dateEl = data1.current.dt;
    temp.textContent = data1.current.temp + "\xB0"; 
    humidity.textContent = data1.current.humidity + "%"; 
    wind.textContent = data1.current.wind_speed + " Mph";
    var uviEl = data1.current.uvi;
    mainWeather.textContent = data1.current.weather[0].main;
    
    // shows the current day and time from the epoch currrent.dt
    UVindexEl.textContent = uviEl + " uvi";
    const milliseconds = dateEl * 1000;// 1575909015000
    const dateObject = new Date(milliseconds);
    date.textContent = dateObject.toLocaleString("en-US", {timeZoneName: "short"});

    // sets the background of uv index
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

    // staticly sets the parameters of the forecast cards
    // gets and sets icon
    var iconCode1 = data1.daily[1].weather[0].icon;
    var iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
    $('#fav1').attr('src', iconUrl1);
    // gets and sets current day
    var dateCardEl1 = data1.daily[1].dt
    const milli = dateCardEl1 * 1000;// 1575909015000
    const dateObj = new Date(milli);
    dateCard1.textContent = dateObj.toLocaleString("en-US", {weekday: "long"});
    // sets current day weather descriptions
    tempCardEl.textContent = data1.daily[1].temp.max + "\xB0 High " + data1.daily[1].temp.min + "\xB0 Low";
    windCardEl.textContent = data1.daily[1].wind_speed + " Mph";
    humidity1El.textContent = data1.daily[1].humidity + "%";

    var iconCode2 = data1.daily[2].weather[0].icon;
    var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
    $('#fav2').attr('src', iconUrl2);

    var dateCardEl2 = data1.daily[2].dt
    const milli2 = dateCardEl2 * 1000;// 1575909015000
    const dateObj2 = new Date(milli2);
    dateCard2.textContent = dateObj2.toLocaleString("en-US", {weekday: "long"});

    tempCardEl2.textContent = data1.daily[2].temp.max + "\xB0 High " + data1.daily[2].temp.min + "\xB0 Low";
    windCardEl2.textContent = data1.daily[2].wind_speed + " Mph";
    humidity1El2.textContent = data1.daily[2].humidity + "%";

    var iconCode3 = data1.daily[3].weather[0].icon;
    var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
    $('#fav3').attr('src', iconUrl3);

    var dateCardEl3 = data1.daily[3].dt
    const milli3 = dateCardEl3 * 1000;// 1575909015000
    const dateObj3 = new Date(milli3);
    dateCard3.textContent = dateObj3.toLocaleString("en-US", {weekday: "long"});

    tempCardEl3.textContent = data1.daily[3].temp.max + "\xB0 High " + data1.daily[3].temp.min + "\xB0 Low";
    windCardEl3.textContent = data1.daily[3].wind_speed + " Mph";
    humidity1El3.textContent = data1.daily[3].humidity + "%";

    var iconCode4 = data1.daily[4].weather[0].icon;
    var iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
    $('#fav4').attr('src', iconUrl4);

    var dateCardEl4 = data1.daily[4].dt
    const milli4 = dateCardEl4 * 1000;// 1575909015000
    const dateObj4 = new Date(milli4);
    dateCard4.textContent = dateObj4.toLocaleString("en-US", {weekday: "long"});

    tempCardEl4.textContent = data1.daily[4].temp.max + "\xB0 High " + data1.daily[4].temp.min + "\xB0 Low";
    windCardEl4.textContent = data1.daily[4].wind_speed + " Mph";
    humidity1El4.textContent = data1.daily[4].humidity + "%";

    var iconCode5 = data1.daily[5].weather[0].icon;
    var iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png";
    $('#fav5').attr('src', iconUrl5);

    var dateCardEl5 = data1.daily[5].dt
    const milli5 = dateCardEl5 * 1000;// 1575909015000
    const dateObj5 = new Date(milli5);
    dateCard5.textContent = dateObj5.toLocaleString("en-US", {weekday: "long"});

    tempCardEl5.textContent = data1.daily[5].temp.max + "\xB0 High " + data1.daily[5].temp.min + "\xB0 Low";
    windCardEl5.textContent = data1.daily[5].wind_speed + " Mph";
    humidity1El5.textContent = data1.daily[5].humidity + "%";


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

$(".search").on("click", function () {
    var citySearched = $(this).siblings("#cityInput").val();

    // this should be an array of cities, not just a single city
    var storedCities = localStorage.getItem("selectedCity");

    // if stored cities doesn't exist yet in localStorage, initialize it to an empty array
    if (storedCities === null) {
      localStorage.setItem("selectedCity", JSON.stringify([]));
    } else {

      // since localstorage only saves strings, we need to parse it into an array:
      var storedCitiesArray = JSON.parse(storedCities)

      // now that we have an array, we can push our searched city into that array
      storedCitiesArray.push(citySearched);

      // set the new storedCities array in localStorage:
      localStorage.setItem("selectedCity", JSON.stringify(storedCitiesArray));
      removeButtonsFromDOM();
      addButtonsToDOM(storedCitiesArray);
    }

    function removeButtonsFromDOM() {
      var searchHistoryWrapper = document.getElementById("searchHistory");
      while (searchHistoryWrapper.lastChild) {
          searchHistoryWrapper.removeChild(searchHistoryWrapper.lastChild);
      }
    }

    function addButtonsToDOM (cities) {
      for (let i = 0; i < cities.length; i++) {
        var newButton = document.createElement("button");
        newButton.innerHTML = cities[i];
      
        var searchHistoryWrapper = document.getElementById("searchHistory");
        searchHistoryWrapper.appendChild(newButton);
      }
    }
  });

