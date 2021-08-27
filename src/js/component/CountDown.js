import React, { useState, useEffect, useRef } from "react";

export const CountDown = () => {
	const [counter, setCounter] = useState(0);
	const [status, setStatus] = useState(null);
	const [modes, setModes] = useState(["seconds", "minutes", "hours", "days"]);
	const [mode, setMode] = useState(null);

	const timer = useRef(null);

	useEffect(() => {
		if (counter > 0 && status === "init") {
			const timerId = setInterval(() => setCounter(counter - 1), 1000);
			timer.current = timerId;
		}
		if (counter === 0 && status === "init") {
			setStatus("reached");
		}

		return () => {
			clearInterval(timer.current);
		};
	});

	const start = () => {
		setStatus("init");
	};

	const handleSelect = event => {
		console.log(event.target.value);
		setMode(event.target.value);
	};

	const handleInput = event => {
		if (mode === "seconds" || !mode) {
			setCounter(event.target.value);
		}
		if (mode === "minutes") {
			setCounter(event.target.value * 60);
		}
		if (mode === "hours") {
			setCounter(event.target.value * 60 * 60);
		}
		if (mode === "days") {
			setCounter(event.target.value * 60 * 60 * 24);
		}
	};

	const arrayCounter = () => {
		return `${counter}`.split("");
	};

	const emptyDigits = () => {
		return 6 - arrayCounter().length;
	};

	const pause = () => {
		setStatus("paused");
		setCounter(counter);
	};
	const resume = () => {
		setStatus("init");
		setCounter(counter);
	};
	const reset = () => {
		setStatus(null);
		setCounter(0);
	};

	return (
		<div className="container">
			<h2>Countdown Timer</h2>
			<p>Count from N to 0</p>

			<div className="row gx-5 px-3">
				<div className="col col-2 d-flex bg-dark justify-content-center align-items-center">
					<i className="fas fa-clock text-white fa-lg"></i>
				</div>
				<div className="col col-10">
					<div className="row gx-5">
						{arrayCounter().length < 6 &&
							Array.apply(null, { length: emptyDigits() }).map(
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
				<div className="col-12 mt-4 d-flex justify-content-center">
					<div className="input-group mb-3 w-50">
						<div className="input-group-prepend">
							<label
								className="input-group-text"
								htmlFor="inputGroupSelect01">
								Options
							</label>
						</div>
						<select
							className="custom-select"
							id="inputGroupSelect01"
							defaultValue="intro"
							onChange={handleSelect}>
							<option value="intro">Select one...</option>
							{modes.map((mode, index) => {
								return (
									<option value={mode} key={index}>
										{mode}
									</option>
								);
							})}
						</select>
					</div>
					<div
						className="input-group mb-3"
						style={{ width: "30%", marginLeft: "10px" }}>
						<div
							className="input-group-prepend"
							style={{ width: "40%" }}>
							<label
								className="input-group-text w-100"
								htmlFor="inputGroupSelect01">
								{mode !== "intro" && mode}
							</label>
						</div>
						<input
							className="form-control"
							style={{ width: "60%" }}
							onChange={handleInput}
							type="number"
							value={counter}></input>
					</div>
				</div>
			</div>
			{status === "reached" && (
				<div className="w-100 mt-3">
					<div className="alert alert-danger" role="alert">
						Time out!
					</div>
				</div>
			)}
			<div className="w-100 d-flex justify-content-center mt-4">
				<button
					type="button"
					className="btn btn-primary mr-2"
					onClick={reset}>
					Reset
				</button>
				{status === "init" && (
					<button
						type="button"
						onClick={pause}
						className="btn btn-primary">
						Pause
					</button>
				)}
				{status === null && (
					<button
						type="button"
						onClick={start}
						className="btn btn-primary"
						disabled={counter === 0}>
						Start
					</button>
				)}
				{status === "paused" && (
					<button
						type="button"
						onClick={resume}
						className="btn btn-primary">
						Resume
					</button>
				)}
			</div>
		</div>
	);
};
