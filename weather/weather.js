const request = require('request');

var APIs = "a9d6081318feee12e97d4a67e315472d";

var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/${APIs}/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback("Unable to connect to server");
    } else if (response.statusCode === 400) {
        callback("Unable to fatch weather");
    } else if (response.statusCode === 200) {
        callback(undefined,{
        "temperature : " : body.currently.temperature,
        "apparentTemperature : " : body.currently.apparentTemperature
    });
    }
});
};

module.exports.getWeather = getWeather;
