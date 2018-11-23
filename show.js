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
		var parrentInformationBlock = document.querySelector('#information');
		var informationBlock;
		var i = 0;
		detailedInformationAboutTheWeather(weatherFullInfo);

		function detailedInformationAboutTheWeather(weatherFullInfo) {
			var key;
			for (key in weatherFullInfo) {
				if (typeof(weatherFullInfo[key]) == "object") {
					detailedInformationAboutTheWeather(weatherFullInfo[key]);
				} else {
					informationBlock = document.createElement('p');
					informationBlock.textContent = key + ' = ' + weatherFullInfo[key];
					parrentInformationBlock.appendChild(informationBlock);
				}
			}
			return;
		}
	}

};