const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    getWeather(city);
});


cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});


async function getWeather(city) {

    loading.textContent = "Loading...";
    error.textContent = "";
    weatherCard.style.display = "none";

    try {

        // Step 1: Find the city
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);

        if (!geoResponse.ok) {
            throw new Error("Unable to find the city.");
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found. Please enter a valid city name.");
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;


        // Step 2: Get weather information
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Unable to get weather information.");
        }

        const weatherData = await weatherResponse.json();


        // Step 3: Display the weather
        cityName.textContent =
            `${location.name}, ${location.country}`;

        temperature.textContent =
            `${weatherData.current.temperature_2m} °C`;

        humidity.textContent =
            `${weatherData.current.relative_humidity_2m}%`;

        wind.textContent =
            `${weatherData.current.wind_speed_10m} km/h`;


        const weatherInfo =
            getWeatherDescription(weatherData.current.weather_code);

        condition.textContent = weatherInfo.description;

        weatherIcon.textContent = weatherInfo.icon;


        loading.textContent = "";
        weatherCard.style.display = "block";

    } catch (err) {

        loading.textContent = "";
        showError(err.message);

    }
}


function getWeatherDescription(code) {

    if (code === 0) {
        return {
            description: "Clear Sky",
            icon: "☀️"
        };
    }

    if (code === 1 || code === 2) {
        return {
            description: "Partly Cloudy",
            icon: "⛅"
        };
    }

    if (code === 3) {
        return {
            description: "Cloudy",
            icon: "☁️"
        };
    }

    if (code === 45 || code === 48) {
        return {
            description: "Foggy",
            icon: "🌫️"
        };
    }

    if (code >= 51 && code <= 67) {
        return {
            description: "Rain",
            icon: "🌧️"
        };
    }

    if (code >= 71 && code <= 77) {
        return {
            description: "Snow",
            icon: "❄️"
        };
    }

    if (code >= 80 && code <= 82) {
        return {
            description: "Rain Showers",
            icon: "🌦️"
        };
    }

    if (code >= 95) {
        return {
            description: "Thunderstorm",
            icon: "⛈️"
        };
    }

    return {
        description: "Unknown Weather",
        icon: "🌤️"
    };
}


function showError(message) {
    error.textContent = message;
}