function currentDnT() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let timeNow = document.querySelector(".day-time");
  timeNow.innerHTML = `${day} ${hours}:${minutes}`;
}

currentDnT();

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#enter-city-here");
  let cityHeading = document.querySelector(".city");
  cityHeading.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

let anyCity = document.querySelector("form");
anyCity.addEventListener("submit", changeCity);

function searchCity(city) {
  let apiKey = "6f3448c5bececa337o296fb422t09c35";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayCityWeather);
}

function displayCityWeather(response) {
  console.log(response);
  console.log(response.data);
  let city = response.data.city;
  let respondCity = document.querySelector(".city");
  respondCity.innerHTML = city;

  let temperature = document.querySelector(".temp");
  let respondTemp = Math.round(response.data.temperature.current);
  temperature.innerHTML = respondTemp;
}
