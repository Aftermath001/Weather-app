const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='f241acb488edf18a6ceeeeed68b4ba80';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}
// function showWeatherData(data){
//     let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

//     // timezone.innerHTML = data.timezone;
//     // countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

//     currentWeatherItemsEl.innerHTML = 
//     `<div class="weather-item">
//         <div>Humidity</div>
//         <div>${humidity}%</div>
//     </div>
//     <div class="weather-item">
//         <div>Pressure</div>
//         <div>122</div>
//     </div>
//     <div class="weather-item">
//         <div>Wind Speed</div>
//         <div>222</div>
//     </div> 
//     <div class="weather-item">
//         <div>Sunrise</div>
//         <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
//     </div>
//     <div class="weather-item">
//         <div>Sunset</div>
//         <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
//     </div>


// `;

    
// }