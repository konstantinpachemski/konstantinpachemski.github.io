import anime from "animejs";

const loadCompositionHTML = (n: number) => {
	switch (n) {
		case 1:
			return (
				<h1 className="ml1">
					<span className="text-wrapper">
						<span className="line line1"></span>
						<span className="letters">THURSDAY</span>
						<span className="line line2"></span>
					</span>
				</h1>
			);
		case 2:
			return <h1 className="ml2">Sunny mornings</h1>;
		case 3:
			return <h1 className="ml3">Great Thinkers</h1>;
		case 4:
			return (
				<h1 className="ml4">
					<span className="letters letters-1">Ready</span>
					<span className="letters letters-2">Set</span>
					<span className="letters letters-3">Go!</span>
				</h1>
			);
		default:
			return <p>No data provided</p>;
	}
};

const loadBackground = (n: number) => {
	switch (n) {
		case 1:
			return "#9ba5b5";
		case 2:
			return "#e8c3b9";
		case 3:
			return "#224a54";
		case 4:
			return "#1a1a1a";
		default:
			return "#fff";
	}
};

export { loadCompositionHTML, loadBackground };
