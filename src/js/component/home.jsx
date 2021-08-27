import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter.jsx";
import { CountDown } from "./CountDown";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<SecondsCounter seconds={20}></SecondsCounter>
			<div className="mt-5">
				<CountDown></CountDown>
			</div>
		</div>
	);
};

export default Home;
