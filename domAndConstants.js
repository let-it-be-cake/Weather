function accessingTheDom() {
	return {
		cityName: document.querySelector("#city-name"),
		name: document.querySelector('#name'),
		country: document.querySelector('#country'),
		temperature: document.querySelector('#Temperature'),
		minTemperature: document.querySelector('#MinTemperature'),
		maxTemperature: document.querySelector('#MaxTemperature'),
		clouds: document.querySelector('#Clouds'),
		humidity: document.querySelector('#Humidity'),
		pressure: document.querySelector('#Pressure')
	}
};
function gettingConstants(){
	return {
		ENTER_KEY_CODE: 13
	}
}