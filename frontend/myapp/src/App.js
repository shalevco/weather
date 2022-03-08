import "./App.css";
import React from "react";
import MainApp from "./MainApp";

function App() {
	return (
		<div
			className="App"
			style={{
				backgroundColor: "rgb(241,241,241)",
				position: "absolute",
				height: "100%",
				width: "100%",
			}}
		>
			<h2 style={{ position: "absolute", top: "10%", left: "5%" }}>
				Shalev's Weather
			</h2>
			<span
				style={{
					position: "absolute",
					top: "30%",
					left: "10%",
					fontSize: "150%",
					fontWeight: "bold",
					color: "gray",
				}}
			>
				Use our weather app
				<br /> to see the weather
				<br /> around the world
			</span>
			<span
				style={{
					position: "absolute",
					top: "65%",
					left: "11%",
					fontSize: "80%",
					fontWeight: "bold",
					color: "gray",
				}}
			>
				City name
			</span>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap"
				rel="stylesheet"
			/>
			<MainApp />
		</div>
	);
}
export default App;
