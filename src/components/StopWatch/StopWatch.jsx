"use client"
import React, { useState } from "react";
import ControlButtons from "./ControlButtons";



function StopWatch() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);

	React.useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<div>

<div className=" bg-secondary w-80 h-96 my-12 rounded mx-auto py-20 gap-12 display mp-20 flex flex-col justify-center items-center">
			<div className="">
            <span className="text-5xl ">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="text-5xl">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="text-5xl ">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>

		<div>
		<ControlButtons
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
			/>
		</div>
			
		</div>

		</div>
	);
}

export default StopWatch;
