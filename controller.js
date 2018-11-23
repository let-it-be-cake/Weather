(function controller() {
    const constants = gettingConstants();
    var weather = {};
    var domElements = accessingTheDom();
    queryToServerAndShowWeather(domElements, constants);
    showOtherWeatherInformation();
})()