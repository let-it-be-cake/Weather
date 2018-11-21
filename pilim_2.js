const ENTER_KEY_CODE  = 13;
var weather = {};
var RoundingPrecision = 10000;
var region            = 'ru';
var xhr               = new XMLHttpRequest();


  var object12 = {};


var OtherWeatherData  = document.querySelectorAll('.FullWeatherData');
var Other             = document.querySelector('#Other');
var cityName          = document.querySelector("#city-name");
var name              = document.querySelector('#name');
var country           = document.querySelector('#country');
var temperature       = document.querySelector('#Temperature');
var minTemperature    = document.querySelector('#MinTemperature');
var maxTemperature    = document.querySelector('#MaxTemperature');
var clouds            = document.querySelector('#Clouds');
var humidity          = document.querySelector('#Humidity');
var pressure          = document.querySelector('#Pressure');
var mainWeather       = document.querySelector('#answer'); 



function requestAccepted(response){
  var weatherStatus = {};
  weatherStatus.name        = response.name;
  weatherStatus.country     = response.sys.country.toLowerCase();
  weatherStatus.temp        = response.main.temp;
  weatherStatus.minTemp     = response.main.temp_min;
  weatherStatus.maxTemp     = response.main.temp_max;
  weatherStatus.clouds      = response.clouds.all;
  weatherStatus.humidity    = response.main.humidity;
  weatherStatus.pressure    = response.main.pressure;
  console.log(weatherStatus);
  name.textContent          = 'City         = ' + weatherStatus.name;
  country.textContent       = 'Region       = ' + weatherStatus.country;
  temperature.textContent   = 'Temperature  = ' + (Math.round((weatherStatus.temp - 273) * RoundingPrecision)) / RoundingPrecision;
  clouds.textContent        = 'Clouds       = ' + weatherStatus.clouds;
  humidity.textContent      = 'Humidity     = ' + weatherStatus.humidity;
  pressure.textContent      = 'Pressure     = ' + weatherStatus.pressure;
  minTemperature.innerHTML  = '<img src="Min.png" alt=""> = ' + (Math.round((weatherStatus.minTemp - 273) * RoundingPrecision)) / RoundingPrecision;
  maxTemperature.innerHTML  = '<img src="Max.png" alt=""> = ' + (Math.round((weatherStatus.maxTemp - 273) * RoundingPrecision)) / RoundingPrecision;
}


// renameThisStatusRenameRename
function OtherWeather(rTSRR) {
  var FullInformationParrent = document.querySelector('#information');
  var FullInformation;
  var i = 0;
  copyObj(rTSRR);

  function copyObj(rTSRR) {
    var key;
    for (key in rTSRR) {
      if (typeof(rTSRR[key]) == "object") {
        copyObj(rTSRR[key]);
      } else {
        FullInformation = document.createElement('p');
        FullInformation.textContent = key + ' = ' + rTSRR[key];
        FullInformationParrent.appendChild(FullInformation);
      }
    }
    return;
  }
}

function creatingUrl(name, hui) {
  var FunctionUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + name.value + '&appid=96df07f28842d4e02eaa7cb3535fd5f2';
  return FunctionUrl;
}
cityName.addEventListener('keypress', function(e) {
  if (e.keyCode == ENTER_KEY_CODE) {
    var url = creatingUrl(cityName);
    // query(url);
    object12 = query(url);
    console.log(object12);
    creatingUrl(cityName);
  }
});

// promise

OtherWeatherData[1].addEventListener('click', function() {
  OtherWeather(weather);
});
OtherWeatherData[2].addEventListener('click', function() {
  OtherWeather(weather);
});
OtherWeatherData[0].addEventListener('click', function() {
  OtherWeather(weather);
});