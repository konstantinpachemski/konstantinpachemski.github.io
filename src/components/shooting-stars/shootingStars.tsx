import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const ShootingStars = () => {
	const state = {
		num: 60,
		vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		vh: Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		),
	};
	const starryNight = () => {
		anime({
			targets: ["#sky .star"],
			opacity: [
				{
					duration: 700,
					value: "0",
				},
				{
					duration: 700,
					value: "1",
				},
			],
			easing: "linear",
			loop: true,
			delay: (el, i) => 50 * i,
		});
	};
	const shootingStars = () => {
		anime({
			targets: ["#shootingstars .wish"],
			easing: "linear",
			loop: true,
			delay: (el, i) => 1000 * i,
			opacity: [
				{
					duration: 700,
					value: "1",
				},
			],
			width: [
				{
					value: "150px",
				},
				{
					value: "0px",
				},
			],
			translateX: 350,
		});
	};
	const randomRadius = () => {
		return Math.random() * 0.7 + 0.6;
	};
	const getRandomX = () => {
		return Math.floor(Math.random() * Math.floor(state.vw)).toString();
	};
	const getRandomY = () => {
		return Math.floor(Math.random() * Math.floor(state.vh)).toString();
	};

	useEffect(() => {
		starryNight();
		shootingStars();
	}, []);

	const { num } = state;

	return (
		<div className="w-full h-full top-0 left-0 fixed -z-50 bg-gradient-to-r from-rose-400 to-orange-300">
			<svg id="sky" className="w-screen h-screen fixed overflow-hidden">
				{[...Array(num)].map((x, y) => (
					<circle
						cx={getRandomX()}
						cy={getRandomY()}
						r={randomRadius()}
						stroke="none"
						strokeWidth="0"
						fill="white"
						key={y}
						className="star"
					/>
				))}
			</svg>
			<div
				id="shootingstars"
				style={{
					margin: 0,
					padding: 0,
					width: "150vh",
					height: "100vw",
					position: "fixed",
					overflow: "hidden",
					transform: `translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))`,
					rotate: "120deg",
				}}
			>
				{[...Array(60)].map((x, y) => (
					<div
						key={y}
						className="wish"
						style={{
							left: `${getRandomY()}px`,
							top: `${getRandomX()}px`,
							height: "2px",
							width: "100px",
							margin: "0",
							opacity: "0",
							padding: "0",
							backgroundColor: "white",
							position: "absolute",
							background: "linear-gradient(-45deg, white, rgba(0, 0, 255, 0))",
							filter: "drop-shadow(0 0 6px white)",
							overflow: "hidden",
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default ShootingStars;
