import React from "react";
import Weather from "./Weather";
function MainApp() {
	return (
		<div
			style={{
				backgroundColor: "rgb(220,228,230)",
				position: "absolute",
				height: "90%",
				width: "50%",
				top: "10%",
				right: "5%",
			}}
		>
			<Weather />
		</div>
	);
}
export default MainApp;
