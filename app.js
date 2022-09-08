// for changing the mode:
const form = document.getElementById('form-id');
const element = document.body;
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.icon');
const search = document.getElementById('search');

const morningMode = () => {
  element.classList.toggle('morning-mode');
};

const eveningMode = () => {
  element.classList.toggle('evening-mode');
};

let weather = {
  apiKey: 'a3e53ac8a5551a245c83d0c5da7dddf6',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayWeather(data);
      });
  },

  displayWeather: function (data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    city.innerText = `Weather in ${name}`;
    // icon.src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    temperature.innerText = `${temp} °C`;
    descriptionElement.innerText = description;
    console.log(description)
    humidity.innerText = `humidity: ${humidity}`;
    wind.innerText = `Wind speed: ${speed}`;
  },
};

// let searchCity;
// search.addEventListener('click', (event) => {
//   searchCity = event.target.value;
// });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target);
  weather.fetchWeather(search.value);
});
weather.fetchWeather('Denver');
