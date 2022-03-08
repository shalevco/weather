import React, { useState } from "react";
import axios from "axios";
function Weather() {
	let [weather, setWeather] = useState("");
	let weatherData;
	let [input, SetInput] = useState();
	let [display, setDisplay] = useState("none");
	let [times, setTimes] = useState([
		{ time1: "", temp1: "" },
		{ time2: "", temp2: "" },
		{ time3: "", temp3: "" },
		{ time4: "", temp4: "" },
	]);

	async function clickHandler() {
		axios.post("http://localhost:8000/", { city: input }).then((response) => {
			console.log(response);
		});
		setdata();
		setTimeout(() => {
			setDisplay("inline");
		}, 400);

		axios
			.get(
				`http://api.weatherapi.com/v1/forecast.json?key=d8829b86ef7d4623b7d201617222202&q=${input}&days=1&aqi=no&alerts=no`
			)
			.catch(function (error) {
				if (error.response) {
					alert("not a city name, try again!");
				}
			});
	}
	async function setdata() {
		weatherData = await axios.get("http://localhost:8000/");
		weatherData = weatherData.data;
		console.log(weatherData);
		setWeather(weatherData);
		setTimes([
			{
				time1: weatherData.hours[0].time.split(" ")[1],
				temp1: weatherData.hours[0].temp_c,
			},
			{
				time2: weatherData.hours[6].time.split(" ")[1],
				temp2: weatherData.hours[6].temp_c,
			},
			{
				time3: weatherData.hours[12].time.split(" ")[1],
				temp3: weatherData.hours[12].temp_c,
			},
			{
				time4: weatherData.hours[18].time.split(" ")[1],
				temp4: weatherData.hours[18].temp_c,
			},
		]);
	}

	return (
		<div
			className="showWeather"
			style={{
				width: "50%",
				backgroundColor: "rgb(38,115,125)",
				position: "absolute",
				top: "7%",
				right: "25%",
				height: "85%",
				borderRadius: "25px",
				textAlign: "center",
			}}
		>
			<input
				id="input"
				type={"text"}
				onChange={(e) => {
					SetInput(e.target.value);
				}}
			/>
			<button id="button" onClick={clickHandler}>
				Check
			</button>
			<span id="city">{weather.city}</span> <br />
			<span id="country">{weather.country}</span> <br />
			<span id="dateAndTime" style={{ display: display }}>
				{weather.date} at {weather.time}
			</span>
			<br />
			<span id="temperature" style={{ display: display }}>
				{weather.temperature}°
			</span>{" "}
			<br />
			<span id="condition">{weather.condition}</span> <br />
			<span id="precipitation" style={{ display: display }}>
				precipitation <br />
				<b>{weather.precipitation} mm </b>
			</span>
			<br />
			<span id="humidity" style={{ display: display }}>
				humidity <br />
				<b>{weather.humidity}%</b>
			</span>
			<br />
			<span id="wind" style={{ display: display }}>
				wind <br />
				<b>{weather.wind} km/h</b>
			</span>
			<br />
			<span id="time1" style={{ display: display }}>
				{times[0].time1}
				<br />
				<b>{times[0].temp1}°</b>
			</span>
			<br />
			<span id="time2" style={{ display: display }}>
				{times[1].time2}
				<br />
				<b>{times[1].temp2}°</b>
			</span>
			<br />
			<span id="time3" style={{ display: display }}>
				{times[2].time3}
				<br />
				<b>{times[2].temp3}°</b>
			</span>
			<br />
			<span id="time4" style={{ display: display }}>
				{times[3].time4}
				<br />
				<b>{times[3].temp4}°</b>
			</span>
		</div>
	);
}
export default Weather;
