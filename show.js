function showOtherWeatherInformation(domElements) {
	domElements.otherWeatherData[1].addEventListener('click', function() {
	console.log(domElements);
		showFullInformation(weather);
	});
	domElements.otherWeatherData[2].addEventListener('click', function() {
		showFullInformation(weather);
	});
	domElements.otherWeatherData[0].addEventListener('click', function() {
		showFullInformation(weather);
	});

	function showFullInformation(weatherFullInfo) {
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
					domElements.parrentInformationBlock.appendChild(informationBlock);
				}
			}
			return;
		}
	}

};