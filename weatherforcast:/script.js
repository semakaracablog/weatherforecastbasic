//API key from OpenWeatherMap
const apiKey = 'eb3860cbfc7492f75d59029d99f49fcf';

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weatherInfo').innerHTML = `<p>City not found.</p>`;
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}
