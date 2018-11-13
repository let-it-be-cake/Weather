const ENTER_KEY_CODE = 13;
var weather;
var RoundingPrecision = 10000;
var region = 'ru';
var cityName = document.querySelector("#city-name");
var xhr = new XMLHttpRequest();
var OtherWeatherData = document.querySelector('#Other');
// var xhrComplate = false;



function query(theUrl) {
  xhr.open('GET', theUrl);
  xhr.send();
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState != xhr.DONE) {
      return;
    }
    if (xhr.status != 200) {
      console.log('Error? Error!');
    } else {
      var serverAnswer = JSON.parse(xhr.responseText);
      console.log(serverAnswer);
      OtherWeatherData.style.display = 'block';
      requestAccepted(serverAnswer);
      return serverAnswer;
    }
  })
}


function requestAccepted(response){
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
  document.querySelector('#name').textContent = 'City = ' + weatherStatus.name;
  document.querySelector('#country').textContent = 'Region = ' + weatherStatus.country;
  document.querySelector('#Temperature').textContent = 'Temperature = ' + (Math.round((weatherStatus.temp - 273) * RoundingPrecision)) / RoundingPrecision;
  document.querySelector('#MinTemperature').innerHTML = '<img src="Min.png" alt=""> = ' + (Math.round((weatherStatus.minTemp - 273) * RoundingPrecision)) / RoundingPrecision;
  document.querySelector('#MaxTemperature').innerHTML = '<img src="Max.png" alt=""> = ' + (Math.round((weatherStatus.maxTemp - 273) * RoundingPrecision)) / RoundingPrecision;
  document.querySelector('#Clouds').textContent = 'Clouds = ' + weatherStatus.clouds;
  document.querySelector('#Humidity').textContent = 'Humidity = ' + weatherStatus.humidity;
  document.querySelector('#Pressure').textContent = 'Pressure = ' + weatherStatus.pressure;
}

/*function OtherWeather(renameThisStatusRenameRename){
  var renameThisStatusRenameRename = {};
  function copyObj(renameThisStatusRenameRename) {
  var a = {};
  var i = 0;
  for (var key in renameThisStatusRenameRename) {
    if (typeof(renameThisStatusRenameRename[key]) == "object") {
      a[key] = copyObj(renameThisStatusRenameRename[key]);
    } else {
      document.querySelectorAll(".WeatherStats")[i].textContent = key + ' = ' + renameThisStatusRenameRename[key];
      a[key] = renameThisStatusRenameRename[key];
      i++;
    }
  }
  return a;
}
}
*/
function creatingUrl(name) {
  var FunctionUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + name.value + '&appid=96df07f28842d4e02eaa7cb3535fd5f2';
  return FunctionUrl;
}
cityName.addEventListener('keypress', function(e) {
  if (e.keyCode == ENTER_KEY_CODE) {
    var url = creatingUrl(cityName);
    query(url);
  }
});

OtherWeatherData.addEventListener('Click', function() {

});