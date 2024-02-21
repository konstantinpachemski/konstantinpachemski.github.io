import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

interface Overlay {
  lastStartingPoint: any;
  bgColor: any;
}

interface MovingLetters {
	timelines?: any;
	overlay?: Overlay;
	isShowingSource?: any;
	compositions?: any;
	showComposition?: (comp: any, e: any, options?: any) => void;
	showSourceForComposition?: (c: any, e: any, options?: any) => void;
	spawnPositionForEventAndComp?: (e: any, c: any) => any;
  hideSource?: () => void;
  onlyPlayVisible?: () => void;
  loadCompositionFromCurrentHash?: () => void;
  animateHeader?: () => void;
  compShouldPlay?: (comp: any) => boolean;
  playComposition?: (comp: any) => void;
  restartComposition?: (comp: any) => void;
  pauseComposition?: (comp: any) => void;
  pauseAllCompositions?: () => void;
  updateHashForComposition?: (c: any) => void;
  getElementIndex?: (node: any) => number;
  resetHash?: () => void;
  loadCompositionForHash?: (hash: string) => void;
  horizontalCenterForElement?: (element: any) => number;
  verticalCenterForElement?: (element: any) => number;


}

interface AnimationsControllerProps {
	ml: MovingLetters;
	animateHeaderTitle?: () => void;
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

	var ml: MovingLetters = {};
	ml.timelines = {};
	ml.overlay = {};
	ml.isShowingSource = false;

	app.ready(() => {
		onClickCompositionWrapper(".composition-wrapper", "click", (e) => {
			ml.showComposition(e.currentTarget, e, { refreshAd: true });
		});

		onClickCompositionBackButton(".composition-back-button", "click", (e) => {
			e.preventDefault();
			ml.hideSource();
		});

		onClickHeaderTitle(".header-title", "click", ml.animateHeader);
		listen(window, "scroll", ml.onlyPlayVisible);
		listen(window, "resize", ml.onlyPlayVisible);
		listen(window, "resize", ml.overlay.resizeCanvas);
		onMenuDidReveal("app:menuDidReveal", ml.pauseAllCompositions);
		onMenuWillHide("app:menuWillHide", ml.onlyPlayVisible);
		onMenuDidHide( "app:menuDidHide", ml.onlyPlayVisible);
		onPressESC("pressed:ESC", ml.hideSource);

		ml.compositions = document.querySelectorAll(".composition");
		const header = document.querySelector(".header-title");
		header.innerHTML = header.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);

		ml.onlyPlayVisible();
		ml.loadCompositionFromCurrentHash();
	});

	ml.animateHeader = function () {
		anime({
			targets: ".header-title .letter",
			rotateY: [-360, 0],
			duration: 1300,
			easing: "easeOutExpo",
			delay: (el, i) => 45 * i,
		});
	};

	ml.onlyPlayVisible = function () {
		// Don't play if any overlays are playing
		if (ml.isShowingSource || app.menu.visible) return;
		ml.compositions.forEach(function (element, i) {
			ml.compShouldPlay(element)
				? ml.playComposition(element)
				: ml.pauseComposition(element);
		});
	};

	ml.compShouldPlay = function (comp) {
		var winHeight = window.innerHeight;
		var bounds = comp.getBoundingClientRect();
		var offset = 180; // Greater offset -> comps will play less often

		// Check if bottom of comp is above view or if top of comp is below view
		if (bounds.bottom < 0 + offset || bounds.top > winHeight - offset)
			return false;
		// Default to true
		return true;
	};

	ml.playComposition = function (comp) {
		var compID = comp.querySelector("h1").className;
		ml.timelines[compID].play();
	};

	ml.restartComposition = function (comp) {
		var compID = comp.querySelector("h1").className;
		ml.timelines[compID].restart();
	};

	ml.pauseComposition = function (comp) {
		var compID = comp.querySelector("h1").className;
		ml.timelines[compID].pause();
	};

	ml.pauseAllCompositions = function () {
		ml.compositions.forEach(function (element, i) {
			ml.pauseComposition(element);
		});
	};

	// Displaying compositions
	ml.showComposition = function (comp, e, options) {
		if (comp.classList.contains("composition-active")) return;
		ml.showSourceForComposition(comp, e, options);
	};

	ml.showSourceForComposition = function (c, e, options) {
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
			fill: "#" + c.dataset.color,
		});

		// Prepare to animate in overlay elements
		(document.querySelector(".composition-back-button") as HTMLElement).style.opacity = "0";
		(document.querySelector(".composition-back-button") as HTMLElement).style.display = "block";
		(document.querySelector(".composition-source-text") as HTMLElement).style.opacity = "0";
		(document.querySelector(".composition-source") as HTMLElement).style.display = "block";
		(document.querySelector(".composition-source-container") as HTMLElement).style.transform = "scaleX(0)";
		(document.querySelector(".composition-source-container") as HTMLElement).style.display = "block";

		// Animate in overlay elements
		anime
			.timeline()
			.add({
				targets: ".composition-source-container",
				scaleX: [0, 1],
				duration: 900,
				delay: 500,
				easing: "easeOutExpo",
				complete: () => ml.playComposition(c),
			})
			.add({
				targets: ".composition-source-text",
				opacity: [0, 1],
				translateY: [-50, 0],
				delay: (el, i) => 50 * i,
				easing: "easeOutExpo",
				offset: "-=150",
			});

		anime({
			targets: ".composition-back-button",
			opacity: [0, 1],
			easing: "easeOutExpo",
			scale: [0.8, 1],
			delay: 300,
			translateX: [-40, 0],
		});
	};

	ml.hideSource = function () {
		if (!ml.isShowingSource) return;
		ml.isShowingSource = false;
		ml.resetHash();

		document.querySelector("html").classList.remove("is-showing-source");
		ml.onlyPlayVisible();
		document.querySelector(".composition-active").classList.remove("composition-active");

		app.overlay.hide({
			position: app.overlay.lastStartingPoint,
			fill: app.overlay.bgColor,
		});

		anime({
			targets: ".composition-source-text",
			opacity: 0,
			duration: 400,
			easing: "easeInQuad",
		});

		anime({
			targets: ".composition-source-container",
			translateX: "100%",
			duration: 500,
			easing: "easeInQuad",
			complete: function () {
				// Reset scroll position (could have changed if you opened before and scrolled)
				var comp = document.querySelector(".composition-source") as HTMLElement;
				comp.scrollTop = 0;
				comp.style.display = "none";
			},
		});

		anime({
			targets: ".composition-back-button",
			opacity: [1, 0],
			easing: "easeInQuad",
			translateX: [0, -40],
			scale: [1, 0.8],
			duration: 300,
			complete: function () {
				(document.querySelector(".composition-back-button") as HTMLElement).style.display = "none";
				app.menu.showMenuIcon();
			},
		});
	};

	ml.updateHashForComposition = function (c) {
		window.location.hash = ml.getElementIndex(c.parentElement) + 1;
	};

	ml.getElementIndex = function (node) {
		var index = 0;
		while ((node = node.previousElementSibling)) {
			index++;
		}
		return index;
	};

	ml.resetHash = function () {
		history.pushState(
			"",
			document.title,
			window.location.pathname + window.location.search
		);
	};

	ml.loadCompositionFromCurrentHash = function () {
		var hash = window.location.hash;
		if (hash == "") return;

		ml.loadCompositionForHash(hash);
	};

	ml.loadCompositionForHash = function (hash) {
		var ID = parseInt(hash.substr(1, 2));
		var comp = document.querySelectorAll(".composition")[ID - 1];
		var rect = comp.getBoundingClientRect();
		document.scrollTop = rect.top;
		ml.showComposition(
			comp.querySelector(".composition-wrapper"),
			{},
			{ refreshAd: false }
		);
	};

	ml.spawnPositionForEventAndComp = (e, comp) => {
		if (e.touches) e = e.touches[0];

		return {
			x: e.clientX
				? e.clientX
				: ml.horizontalCenterForElement(comp.parentElement),
			y: e.clientY
				? e.clientY
				: ml.verticalCenterForElement(comp.parentElement),
		};
	};

	ml.horizontalCenterForElement = function (element) {
		var rect = element.getBoundingClientRect();
		return rect.left + rect.width / 2;
	};

	ml.verticalCenterForElement = function (element) {
		var rect = element.getBoundingClientRect();

		return rect.top + rect.height / 2 + 50;
	};

	return { ml, animateHeaderTitle };
};

export default AnimationsController;
