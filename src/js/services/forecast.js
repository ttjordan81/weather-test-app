angular.module('WeatherApp.services.Forecast', []).factory('getWeather', function ($http) {
    return function (lat, lng, done) {
        $http({ method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=b6907d289e10d714a6e88b30761fae22' })
            .success(function (data, status, headers, config) {
                done(data.name, data.weather[0].description);
            })
            .error(function (data, status, headers, config) {
                throw new Error('Unable to get weather');
            });
    };
});

