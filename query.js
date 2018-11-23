function queryWeatherDat(theUrl, domElements) {
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
      showMainWeatherInformation(weather, domElements);
    }
  });
}

function showMainWeatherInformation(response, domElements) {
  var RoundingPrecision = 10000;
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
  domElements.name.textContent = 'City         = ' + weatherStatus.name;
  domElements.country.textContent = 'Region       = ' + weatherStatus.country;
  domElements.temperature.textContent = 'Temperature  = ' + (Math.round((weatherStatus.temp - 273) * RoundingPrecision)) / RoundingPrecision;
  domElements.clouds.textContent = 'Clouds       = ' + weatherStatus.clouds;
  domElements.humidity.textContent = 'Humidity     = ' + weatherStatus.humidity;
  domElements.pressure.textContent = 'Pressure     = ' + weatherStatus.pressure;
  domElements.minTemperature.textContent = 'Min t = ' + (Math.round((weatherStatus.minTemp - 273) * RoundingPrecision)) / RoundingPrecision;
  domElements.maxTemperature.textContent = 'Max t = ' + (Math.round((weatherStatus.maxTemp - 273) * RoundingPrecision)) / RoundingPrecision;
}

function queryToServerAndShowWeather(domElements, constants) {
  domElements.cityName.addEventListener('keypress', function(event) {
    if (event.keyCode == constants.ENTER_KEY_CODE) {
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + domElements.cityName.value + '&appid=96df07f28842d4e02eaa7cb3535fd5f2';
      queryWeatherDat(url, domElements);
    }
  });
}