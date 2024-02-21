import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

interface MovingLetters {
	timelines?: any;
	overlay?: any;
	isShowingSource?: any;
	compositions?: any;
	showComposition?: (comp: any, e: any, options?: any) => void;
	showSourceForComposition?: (c: any, e: any, options?: any) => void;
	spawnPositionForEventAndComp?: (e: any, c: any) => any;
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

	ml.showComposition = function (comp, e, options) {
		ml.showSourceForComposition(comp, e, options);
	};

	ml.showSourceForComposition = function(c, e, options) {
		ml.isShowingSource = true;

		document.querySelector("html").classList.add("is-showing-source");
		c.classList.add("composition-active");
		ml.pauseAllCompositions();
		ml.updateHashForComposition(c);
	  
		// Play chosen composition from beginning
		ml.restartComposition(c);
		ml.pauseComposition(c);
		app.menu.hideMenuIcon();
		var spawnPosition = ml.spawnPositionForEventAndComp(e, c);
		app.overlay.show({
		  position: spawnPosition,
		  fill: "#" + c.dataset.color
		});
	  
		// Prepare to animate in overlay elements
		(document.querySelector(".composition-back-button") as HTMLElement).style.opacity = "0";
		(document.querySelector(".composition-back-button") as HTMLElement).style.display = "block";
		(document.querySelector(".composition-source-text") as HTMLElement).style.opacity = "0";
		(document.querySelector(".composition-source") as HTMLElement).style.display = "block";
		(document.querySelector(".composition-source-container") as HTMLElement).style.transform = "scaleX(0)";
		(document.querySelector(".composition-source-container") as HTMLElement).style.display = "block";

	  
		// Animate in overlay elements
		anime.timeline()
		.add({
		  targets: ".composition-source-container",
		  scaleX: [0, 1],
		  duration: 900,
		  delay: 500,
		  easing: "easeOutExpo",
		  complete: () => ml.playComposition(c)
		}).add({
		  targets: ".composition-source-text",
		  opacity: [0,1],
		  translateY: [-50, 0],
		  delay: (el, i) => 50 * i,
		  easing: "easeOutExpo",
		  offset: "-=150"
		});
	  
		anime({
		  targets: ".composition-back-button",
		  opacity: [0,1],
		  easing: "easeOutExpo",
		  scale: [0.8, 1],
		  delay: 300,
		  translateX: [-40, 0]
		});
	  }
	  
    
	const handleCompositionWrapperClick = (e) => {
        ml.showComposition(e.currentTarget, e);
    }

	return { ml, animateHeaderTitle, handleCompositionWrapperClick };
};

export default AnimationsController;
