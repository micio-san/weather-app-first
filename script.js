let weather = {
APIKey:'key',
featchWeather:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    +"&units=metric&appid=" 
    + this.APIKey)
    .then((response)=>response.json())
    .then((data)=>this.displayWeather(data))
},
displayWeather: function (data) {
const {name} = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
document.querySelector('.temperature').innerText = temp.toFixed(1) + '°C';
document.querySelector('.humidity-disp').innerText = humidity + '%';
document.querySelector('.city-display').innerText = name;
document.querySelector('.wind-display').innerText = speed + 'km/h';
document.querySelector('.overview').innerText = description;
document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+icon + '.png';
document.body.style.backgroundImage =   "url('https://source.unsplash.com/1600x900/?" + name + "')";
},
search: function() {
  this.featchWeather(document.querySelector('.search-bar').value);
}
};

document.querySelector('.btn').addEventListener('click',()=>{
weather.search();
})

