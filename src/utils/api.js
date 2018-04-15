import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5";
const ApiKey = "184ba7e1b69ceb04c0426fd2870abd70";

export const getCurrentWeather = city => {
  return axios
    .get(`${baseUrl}/weather?q=${city}&type=accurate&APPID=${ApiKey}`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getForcast = city => {
  return axios
    .get(
      `${baseUrl}/forecast/daily?q=${city}&type=accurate&APPID=${ApiKey}&cnt=5`
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
};
