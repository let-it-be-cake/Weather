var weather = {
}
var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ 'Moscow' +',' + 'ru' +'&appid=96df07f28842d4e02eaa7cb3535fd5f2';

var xhr = new XMLHttpRequest();

function query(theUrl, theWeather) {
  xhr.open('GET', theUrl);
  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState != xhr.DONE) { 
    	return; 
    }
    if (xhr.status != 200) {
      console.log('Error? Error!');
    } else {
      var answer = JSON.parse(xhr.responseText);
      theWeather.country = answer.name;
      theWeather.temp = answer.main.temp;
      theWeather.clouds = answer.clouds.all;
      console.log(theWeather);

      	//need to finish
		document.querySelectorAll('p')[0].textContent += theWeather.country;
		document.querySelectorAll('p')[1].textContent += (theWeather.temp - 273);
		document.querySelectorAll('p')[2].textContent += theWeather.clouds;


      return theWeather;
    }
  })
  xhr.send();
}

weather = query(url, weather);
