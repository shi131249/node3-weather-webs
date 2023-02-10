const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e2c50163413ad8354bc9bda44788552f&query=' + latitude + ',' + longitude + '&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          " It is current " +
          response.body.current.temperature +
          " degree out. There is a " +
          response.body.current.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
