function showOtherWeatherInformation() {
	var OtherWeatherData = document.querySelectorAll('.FullWeatherData');
	OtherWeatherData[1].addEventListener('click', function() {
		showFullInformation(weather);
	});
	OtherWeatherData[2].addEventListener('click', function() {
		showFullInformation(weather);
	});
	OtherWeatherData[0].addEventListener('click', function() {
		showFullInformation(weather);
	});

	function showFullInformation(weatherFullInfo) {
		var FullInformationParrent = document.querySelector('#information');
		var FullInformation;
		var i = 0;
		detailedInformationAboutTheWeather(weatherFullInfo);

		function detailedInformationAboutTheWeather(weatherFullInfo) {
			var key;
			for (key in weatherFullInfo) {
				if (typeof(weatherFullInfo[key]) == "object") {
					detailedInformationAboutTheWeather(weatherFullInfo[key]);
				} else {
					FullInformation = document.createElement('p');
					FullInformation.textContent = key + ' = ' + weatherFullInfo[key];
					FullInformationParrent.appendChild(FullInformation);
				}
			}
			return;
		}
	}

};