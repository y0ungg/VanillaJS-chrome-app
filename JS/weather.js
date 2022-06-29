const myAPI = "892a5ca79c47c000e04b88b76fca9904"

const successed = (position) => {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPI}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(json => {
        const weather = document.querySelector("#weather span:first-child");
        const weather_des = document.querySelector("#weather span:nth-of-type(2)");
        const city = document.querySelector("#weather span:last-child");

        city.textContent = json.name;
        weather.textContent = json.weather[0].main;
        weather_des.textContent = json.main.temp;
    });
};

const err = () => {
    alert("Can't find you!");
};

navigator.geolocation.getCurrentPosition(successed, err);