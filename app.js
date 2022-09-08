// for changing the mode:
const element = document.body;
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
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
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    city.innerText = `Weather in ${name}`;
    // icon.src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    temperature.innerText = `${temp} °C`;
    description.innerText = description;
    // humidity.innerText = `humidity: ${humidity}`;
    wind.innerText = `Wind speed: ${speed}`;
  },
};

search.addEventListener('click', (event) => {
  console.log(event.target.value);
  weather.fetchWeather(event.target.value);
});

weather.fetchWeather("Denver");