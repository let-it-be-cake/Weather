function urlCreating(name) {
  var FunctionUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + name.value + '&appid=96df07f28842d4e02eaa7cb3535fd5f2';
  return FunctionUrl;
}

function query(theUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', theUrl);
  xhr.send();
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState != xhr.DONE) {
      return;
    }
    if (xhr.status != 200) {
      console.log('Error? Error!');
    } else {
      weather = JSON.parse(xhr.responseText);
      Other.style.display = 'block';
      showMainWeatherInformation(weather);
    }
  });
}

function showMainWeatherInformation(response) {
  var RoundingPrecision = 10000;
  var name = document.querySelector('#name');
  var country = document.querySelector('#country');
  var temperature = document.querySelector('#Temperature');
  var minTemperature = document.querySelector('#MinTemperature');
  var maxTemperature = document.querySelector('#MaxTemperature');
  var clouds = document.querySelector('#Clouds');
  var humidity = document.querySelector('#Humidity');
  var pressure = document.querySelector('#Pressure');
  var weatherStatus = {};
  weatherStatus.name = response.name;
  weatherStatus.country = response.sys.country.toLowerCase();
  weatherStatus.temp = response.main.temp;
  weatherStatus.minTemp = response.main.temp_min;
  weatherStatus.maxTemp = response.main.temp_max;
  weatherStatus.clouds = response.clouds.all;
  weatherStatus.humidity = response.main.humidity;
  weatherStatus.pressure = response.main.pressure;
  console.log(weatherStatus);
  name.textContent = 'City         = ' + weatherStatus.name;
  country.textContent = 'Region       = ' + weatherStatus.country;
  temperature.textContent = 'Temperature  = ' + (Math.round((weatherStatus.temp - 273) * RoundingPrecision)) / RoundingPrecision;
  clouds.textContent = 'Clouds       = ' + weatherStatus.clouds;
  humidity.textContent = 'Humidity     = ' + weatherStatus.humidity;
  pressure.textContent = 'Pressure     = ' + weatherStatus.pressure;
  minTemperature.textContent = 'Min t = ' + (Math.round((weatherStatus.minTemp - 273) * RoundingPrecision)) / RoundingPrecision;
  maxTemperature.textContent = 'Max t = ' + (Math.round((weatherStatus.maxTemp - 273) * RoundingPrecision)) / RoundingPrecision;
}

function queryToServerAndShowWeather() {
  const ENTER_KEY_CODE = 13;
  var cityName = document.querySelector("#city-name");;
  cityName.addEventListener('keypress', function(event) {
    if (event.keyCode == ENTER_KEY_CODE) {
      query(urlCreating(cityName));
    }
  });
}