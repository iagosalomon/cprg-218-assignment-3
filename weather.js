const apiKey = 'b1a746ecf3da390ff5d64685fe3fca0c';
const city = 'Cancun';
const weatherElement = document.querySelector('.weather');

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].main;

    weatherElement.textContent = `${city} Weather: ${temp}°C, ${condition}`;
  } catch (error) {
    console.error('Weather fetch error:', error);
    weatherElement.textContent = `${city} Weather: Currently unavailable`;
  }
}

fetchWeather();