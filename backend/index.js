const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(cors());
app.listen(8000, console.log("the Server is Running on port 8000"));
const utils = require("./utils");

let city;

app.post("/", jsonParser, async function (req1, res1) {
	res1.send("works");
	city = req1.body.city;
});
app.get("/", async (req, res) => {
	let data = await utils.getShapedData(
		`http://api.weatherapi.com/v1/forecast.json?key=d8829b86ef7d4623b7d201617222202&q=${city}&days=1&aqi=no&alerts=no`
	);
	res.json(data);
});
