function showOtherWeatherInformation() {
var OtherWeatherData  = document.querySelectorAll('.FullWeatherData');

	OtherWeatherData[1].addEventListener('click', function() {
		OtherWeather(weather);
	});
	OtherWeatherData[2].addEventListener('click', function() {
		OtherWeather(weather);
	});
	OtherWeatherData[0].addEventListener('click', function() {
		OtherWeather(weather);
	});

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

};