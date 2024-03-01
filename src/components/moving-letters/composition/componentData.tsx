const loadCompositionHTML = (n: number) => {
	switch (n) {
		case 1:
			return (
				<h1 className="ml1">
					<span className="text-wrapper">
						<span className="letters">Who am I?</span>
					</span>
				</h1>
			);
		case 2:
			return (
				<h1 className="ml2">
					<span className="text-wrapper">
						<span className="letters">Professional Experience</span>
					</span>
				</h1>
			);
		case 3:
			return (
				<h1 className="ml3">
					<span className="text-wrapper">
						<span className="letters">Education & Workshops</span>
					</span>
				</h1>
			);
		case 4:
			return (
				<h1 className="ml4">Technologies</h1>
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
			return "#c1605c";
		case 4:
			return "#224a54";
		default:
			return "#fff";
	}
};

export { loadCompositionHTML, loadBackground };
