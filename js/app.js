const API_KEY = `1081a9e2e21dbf6637eb935f23f8a74f`;
const loadWeather = () => {
    const cityName = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayData = (data) => {
    setInnerText('city-name', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
    
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}