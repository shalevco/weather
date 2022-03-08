const axios = require("axios");

const getShapedData = async (from) => {
	let weatherData = await axios.get(from);
	weatherData = weatherData.data;
	let arrDateTime = weatherData.location.localtime.split(" ");
	let date = arrDateTime[0];
	let time = arrDateTime[1];
	let hoursArr = weatherData.forecast.forecastday[0].hour;

	let shapeData = {
		city: weatherData.location.name,
		country: weatherData.location.country,
		date: date,
		time: time,
		temperature: weatherData.current.temp_c,
		condition: weatherData.current.condition.text,
		precipitation: weatherData.current.precip_mm,
		humidity: weatherData.current.humidity,
		wind: weatherData.current.wind_kph,
		hours: hoursArr,
	};
	return shapeData;
};
module.exports = { getShapedData };
