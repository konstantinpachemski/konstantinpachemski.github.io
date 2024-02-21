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

const loadAnimation = (n: number) => {
    switch (n) {
        case 1:
            return animation1();
        default:
            return animation1();
    }
}

const animation1 = () => {
	// Wrap every letter in a span
	var textWrapper = document.querySelector(".ml1 .letters");
	textWrapper.innerHTML = textWrapper.textContent.replace(
		/\S/g,
		"<span class='letter'>$&</span>"
	);

	anime
		.timeline({ loop: true })
		.add({
			targets: ".ml1 .letter",
			scale: [0.3, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 600,
			delay: (el, i) => 70 * (i + 1),
		})
		.add({
			targets: ".ml1 .line",
			scaleX: [0, 1],
			opacity: [0.5, 1],
			easing: "easeOutExpo",
			duration: 700,
			offset: "-=875",
			delay: (el, i, l) => 80 * (l - i),
		})
		.add({
			targets: ".ml1",
			opacity: 0,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 1000,
		});
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
}

export { loadCompositionHTML, loadAnimation, loadBackground };
