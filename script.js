
document.addEventListener("DOMContentLoaded", () => {
    let apiKey = '16cff20243a12b637d0b42fed5333440';
    // let city = 'London';
    let searcher = document.getElementById('searcher');

    document.getElementById('sumbiti').addEventListener('click', () => {
        let city = searcher.value.trim();

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let weatherInfo = document.querySelector('.weather-info');
                let temperatura = data.main.temp;
                let description = data.weather[0].description;
                let icon = data.weather[0].icon;
                let wind = data.wind.speed;
                weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
                <p>${description}</p>
                <p>Temperature: ${temperatura}°C</p>
                <p>Wind speed: ${wind}</p>
            `;
            
            }).catch(error => {
                console.error('Error fetching weather data:', error);
                const weatherInfo = document.querySelector('.weather-info');
                weatherInfo.innerHTML = '<p>Ate qe po kerkoni nuk gjendet</p>';
            });
    });
});