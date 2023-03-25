const request = require("request");

const forecast = (latitude, longitudde, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=708c5a5a710116d8d3645937423a2e06&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitudde) +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect service!", undefined);
    } else if (body.error) {
      callback("Oops", undefined);
    } else {
      //console.log(JSON.parse(response));
      callback(undefined, {
        temperature: body.current.temperature,
        humidity: body.current.humidity,
        feelslike: body.current.feelslike,
      });
    }
  });
};
module.exports = forecast;
