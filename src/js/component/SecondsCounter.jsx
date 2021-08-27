import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
	const [counter, setCounter] = useState(0);
	const [status, setStatus] = useState("init");
	const timer = useRef(null);

	useEffect(() => {
		if (counter < seconds && status === "init") {
			timer.current = setInterval(() => setCounter(counter + 1), 1000);
		}
		return () => {
			clearInterval(timer.current);
		};
	});

	const clearTimer = () => {
		setCounter(0);
		setStatus("init");
	};
	const pauseTimer = () => {
		setCounter(counter);
		clearInterval(timer.current);
		timer.current = null;
		setStatus("paused");
	};

	const resumeTimer = () => {
		setStatus("init");
	};

	const arrayCounter = () => {
		return `${counter}`.split("");
	};
	const emptyDigits = () => {
		return 6 - arrayCounter().length;
	};
	return (
		<div className="container pt-3">
			<h2>Seconds counter</h2>
			<p>Counter timer from 0 to N</p>
			<div className="row gx-5 px-3">
				<div className="col col-2 d-flex bg-dark justify-content-center align-items-center">
					<i className="fas fa-clock text-white fa-lg"></i>
				</div>
				<div className="col col-10">
					<div className="row gx-5">
						{Array.apply(null, { length: emptyDigits() }).map(
							(emptyD, index) => {
								return (
									<div
										className="col col-2 digit-render"
										key={index}>
										<span>0</span>
									</div>
								);
							}
						)}
						{arrayCounter().map((digit, index) => {
							return (
								<div
									className="col col-2 digit-render"
									key={index}>
									<span>{digit}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-100 d-flex justify-content-center mt-4">
				<button
					type="button"
					onClick={clearTimer}
					className="btn btn-primary mr-2">
					Reset
				</button>
				{status === "init" ? (
					<button
						type="button"
						onClick={pauseTimer}
						className="btn btn-primary">
						Pause
					</button>
				) : (
					<button
						type="button"
						onClick={resumeTimer}
						className="btn btn-primary">
						Resume
					</button>
				)}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
