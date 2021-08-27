import React from "react";

export const CountDown = () => {
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
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
						<div className="col-2 digit-render">
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
