import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

interface MovingLetters {
	timelines?: any;
	overlay?: any;
	isShowingSource?: any;
	compositions?: any;
	showComposition?: (comp: any, e: any, options?: any) => void;
}

interface AnimationsControllerProps {
	ml: MovingLetters;
	animateHeaderTitle?: () => void;
    handleCompositionWrapperClick?: (e: any) => void;
}

const AnimationsController = (): AnimationsControllerProps => {

    useEffect(() => {
		console.log("I am here");
		const header = document.querySelector(".header-title");
		header.innerHTML = header.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);
	}, []);

    const animateHeaderTitle = () => {
		anime({
			targets: ".header-title .letter",
			rotateY: [-360, 0],
			duration: 1300,
			easing: "easeOutExpo",
			delay: (el, i) => 45 * i,
		});
	};

	const ml: MovingLetters = {};
	ml.timelines = {};
	ml.overlay = {};
	ml.isShowingSource = false;

	// ml.showComposition = function (comp, e, options) {
	// 	if (comp.classList.contains("composition-active")) return;
	// 	ml.prepareSourceForComposition(comp.parentElement);
	// 	ml.showSourceForComposition(comp, e, options);
	// };
    
	const handleCompositionWrapperClick = (e) => {
        //".composition-wrapper"
        ml.showComposition(e.currentTarget, e);
    }

	return { ml, animateHeaderTitle, handleCompositionWrapperClick };
};

export default AnimationsController;
