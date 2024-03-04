import anime from "animejs/lib/anime.es.js";
import { useEffect, useLayoutEffect } from "react";

interface Menu {
	icon?: any;
	visible?: boolean;
	reveal?: (e: any) => void;
	hide?: (e?: any) => void;
	toggleStates?: () => void;
	hideMenuIcon?: () => void;
	showMenuIcon?: () => void;
}

interface Search {
	visible?: boolean;
	storageKey?: string;
	searchIcon?: any;
	data?: any;
	loadData?: () => void;
	updateForQuery?: (query: any) => void;
	renderResults?: (results: any, query: any) => void;
	moveSelectionInDirection?: (options: any) => void;
	moveSelectionUp?: () => void;
	moveSelectionDown?: () => void;
	focusItem?: (item: any) => void;
	goToSelectedItem?: () => void;
	hide?: (e?: any) => void;
	reveal?: (e: any) => void;
	toggleStates?: () => void;
	showIcon?: () => void;
	hideIcon?: () => void;
}

interface Overlay {
	ctx?: CanvasRenderingContext2D;
	cW?: number;
	cH?: number;
	circle?: {
		x?: number;
		y?: number;
		r?: number;
		fill?: string;
		draw?: (options: { startRadius: number; targetRadius: number }) => void;
	};
	bgColor?: string;
	show?: (options: {
		position: { x: number; y: number };
		fill: string;
	}) => void;
	calcPageFillRadius?: (x: number, y: number) => number;
	c?: HTMLCanvasElement;
	resizeCanvas?: () => void;
	lastStartingPoint?: { x: number; y: number };
	hide?: (options: any) => void;
	startRadius?: number;
	targetRadius?: number;
	animate?: (options: any) => void;
}

interface Keys {
	handleESC?: () => void;
	arrowUp?: number;
	arrowDown?: number;
	enter?: number;
	handleArrowUp?: (e: any) => void;
	handleArrowDown?: (e: any) => void;
	handleEnter?: (e: any) => void;
	ESC?: number;
}

interface Animations {
	track?: (animeTimeline: any, el: any) => void;
}

interface App {
	ready?: (callback: any) => void;
	menu?: Menu;
	search?: Search;
	keys?: Keys;
	overlay?: Overlay;
	animations?: Animations;
	clickPosition?: (e: any) => { x: number; y: number };
}

interface Overlay {
	lastStartingPoint?: { x: number; y: number };
	bgColor?: string;
}

interface MovingLetters {
	timelines?: any;
	overlay?: Overlay;
	isShowingSource?: any;
	compositionsContent?: any;
	compositionsContentShowClass?: string;
	compositions?: any;
	prepareCompositions?: any;
	showComposition?: (comp: any, e: any, options?: any) => void;
	showSourceForComposition?: (c: any, e: any, options?: any) => void;
	spawnPositionForEventAndComp?: (e: any, c: any) => any;
	hideSource?: () => void;
	onlyPlayVisible?: () => void;
	loadCompositionFromCurrentHash?: () => void;
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

// interface AnimationsControllerProps {
// 	ml: MovingLetters;
// 	onClickHeaderTitle: () => void;
// 	onClickCompositionWrapper: (e: any) => void;
// 	onClickCompositionBackButton: (e: any) => void;
// 	onClickMenuButton: (e: any) => void;
// }

const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const Director = () => {
	let isAnimatingHeaderTitle = false;

	const onClickHeaderTitle = () => {
		if (!isAnimatingHeaderTitle) {
			isAnimatingHeaderTitle = true;
			anime({
				targets: ".header-title .letter",
				rotateY: [-360, 0],
				duration: 1300,
				easing: "easeOutExpo",
				delay: (el, i) => 45 * i,
				complete: () => (isAnimatingHeaderTitle = false),
			});
		}
	};

	const app: App = {
		menu: {},
		search: {},
		keys: {},
		overlay: {},
		animations: {},
	};

	app.menu.visible = false;

	app.menu.toggleStates = () => {
		select("body").classList.toggle("no-scroll");
		app.menu.icon.classList.toggle("menu-active");
		select(".js-nav").classList.toggle("site-nav-active");
	};

	app.menu.reveal = (e) => {
		app.menu.visible = true;
		app.menu.toggleStates();

		app.overlay.show({
			position: app.clickPosition(e),
			fill: "#1f4954",
		});

		anime.remove(".js-nav, .js-nav-header-line, .js-nav-animate");

		let containerDelay = 200;

		anime({
			targets: ".js-nav",
			opacity: [0, 1],
			delay: containerDelay,
			duration: 200,
			easing: "easeInOutExpo",
		});

		let menuItemDelay = 90;
		containerDelay += 75;
		select(".js-nav-header").style.opacity = 0;
		anime({
			targets: ".js-nav-header",
			opacity: [0, 1],
			delay: containerDelay,
			duration: 200,
			easing: "easeInOutExpo",
		});

		select(".js-nav-header-line").style.transform.replace(
			/scale\([0-9|\.]*\)/,
			"scale(0.28)"
		);
		anime({
			targets: ".js-nav-header-line",
			scale: [0.28, 1],
			delay: containerDelay,
			duration: 600,
			easing: "easeInOutExpo",
		});

		const animatedElements = Array.from(selectAll(".js-nav-animate"));

		for (let animated of animatedElements) {
			animated.style.opacity = 0;
			animated.style.transform.replace(/scale\([0-9|\.]*\)/, "scale(0.9)");
		}

		anime
			.timeline({
				targets: ".js-nav-animate",
				easing: "easeOutExpo",
				complete: () => pauseAllCompositions,
			})
			.add({
				opacity: 0,
				scale: 0.9,
				translateY: "-7px",
				delay: (el, i) => menuItemDelay * (i + 1),
				duration: 550,
			})
			.add({
				opacity: 1,
				scale: 1,
				translateY: 0,
				duration: 550,
			});
	};

	app.menu.hide = (e) => {
		app.menu.visible = false;
		app.menu.toggleStates();
		onlyPlayVisible();

		app.overlay.hide({
			position: app.overlay.lastStartingPoint,
			fill: "#1f4954",
			complete: () => onlyPlayVisible,
		});

		anime({
			targets: ".js-nav",
			opacity: [1, 0],
			duration: 200,
			easing: "easeInOutExpo",
		});

		anime({
			targets: ".js-nav-header-line",
			scale: [1, 0.5],
			duration: 300,
			easing: "easeInExpo",
		});

		anime({
			targets: ".js-nav-animate",
			translateY: ["0px", "10px"],
			opacity: [1, 0],
			scale: [1, 0.9],
			duration: 200,
			easing: "easeInExpo",
		});
	};

	app.menu.hideMenuIcon = () => app.menu.icon.classList.add("menu-hidden");

	app.menu.showMenuIcon = () => {
		app.menu.icon.classList.remove("menu-hidden");
		anime({
			targets: ".menu",
			opacity: [0, 1],
			duration: 500,
			easing: "easeOutQuart",
		});
	};

	app.animations.track = (animeTimeline, el) => {
		const animationObserver = new IntersectionObserver(
			(entries, observer) => {
				entries[0].isIntersecting
					? animeTimeline.play()
					: animeTimeline.pause();
			},
			{ rootMargin: "-5px 0px" }
		);
		animationObserver.observe(el);
	};

	app.overlay.resizeCanvas = function () {
		app.overlay.cW = window.innerWidth;
		app.overlay.cH = window.innerHeight;
		app.overlay.c.width = app.overlay.cW * window.devicePixelRatio;
		app.overlay.c.height = app.overlay.cH * window.devicePixelRatio;
		app.overlay.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		app.overlay.ctx.fillStyle = app.overlay.bgColor;
		app.overlay.ctx.fillRect(0, 0, app.overlay.cW, app.overlay.cH);
	};

	app.overlay.show = (options: {
		easing: string;
		fill: string;
		position: { x: number; y: number };
		startRadius: number;
		targetRadius: number;
	}) => {
		app.overlay.c.style.display = "block";
		app.overlay.lastStartingPoint = options.position;

		options.targetRadius = app.overlay.calcPageFillRadius(
			options.position.x,
			options.position.y
		);
		options.startRadius = 0;
		options.easing = "easeOutQuart";
		// debugger
		app.overlay.animate(options);
	};

	// Hide the overlay. Args:
	// fill: color to animate with
	// position: position to target as the circle shrinks
	// complete: completion callback
	app.overlay.hide = (options) => {
		options.targetRadius = 0;
		options.easing = "easeInOutQuart";

		const callback = options.complete;
		options.complete = () => {
			app.overlay.c.style.display = "none";
			app.overlay.bgColor = "transparent";
			if (callback) callback();
		};

		options.startRadius = app.overlay.calcPageFillRadius(
			options.position.x,
			options.position.y
		);
		app.overlay.animate(options);
	};

	// Animate from one size to another. Args:
	// position: {x, y}
	// fill: "color"
	// startRadius: number
	// targetRadius: number
	// complete: callback method
	app.overlay.animate = (options) => {
		const minCoverDuration = 750;
		app.overlay.bgColor = options.fill;

		app.overlay.circle.x = options.position.x;
		app.overlay.circle.y = options.position.y;
		app.overlay.circle.r = options.startRadius;
		app.overlay.circle.fill = options.fill;

		anime.remove(app.overlay.circle);

		anime({
			targets: app.overlay.circle,
			r: options.targetRadius,
			duration: Math.max(options.targetRadius / 2, minCoverDuration),
			easing: options.easing,
			complete: options.complete ? options.complete : null,
			update: () =>
				app.overlay.circle.draw({
					startRadius: options.startRadius,
					targetRadius: options.targetRadius,
				}),
		});
	};

	app.overlay.calcPageFillRadius = function (x, y) {
		let l = Math.max(x - 0, app.overlay.cW - x);
		let h = Math.max(y - 0, app.overlay.cH - y);
		return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
	};

	app.clickPosition = (e) => {
		if (e.touches) e = e.touches[0];

		if (e.clientX && e.clientY)
			return {
				x: e.clientX,
				y: e.clientY,
			};

		// If there was no clientX and Y set, use the center position of
		// the target as a backup
		let rect = (e.target as Element).getBoundingClientRect();
		return {
			x: rect.top + (rect.bottom - rect.top) / 2,
			y: rect.left + (rect.right - rect.left) / 2,
		};
	};

	app.overlay.circle = {};

	app.overlay.circle.draw = function (options) {
		if (options.targetRadius < options.startRadius) {
			app.overlay.ctx.clearRect(0, 0, app.overlay.cW, app.overlay.cH);
		}

		app.overlay.ctx.beginPath();
		app.overlay.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		app.overlay.ctx.fillStyle = this.fill;
		app.overlay.ctx.fill();
		app.overlay.ctx.closePath();
	};

	const onClickMenuButton = (e) =>
		!app.menu.visible ? app.menu.reveal(e) : app.menu.hide(e);

	const ml: MovingLetters = {};

	ml.prepareCompositions = [];
	ml.prepareCompositions["ml1"] = function () {
		let textWrapper = document.querySelector(".ml1 .letters");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			(match) =>
				`<span class='letter'>${match === " " ? "&nbsp;" : match}</span>`
		);
	};
	ml.prepareCompositions["ml2"] = function () {
		let textWrapper = document.querySelector(".ml2 .letters");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			(match) =>
				`<span class='letter'>${match === " " ? "&nbsp;" : match}</span>`
		);
	};
	ml.prepareCompositions["ml3"] = function () {
		let textWrapper = document.querySelector(".ml3 .letters");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			(match) =>
				`<span class='letter'>${match === " " ? "&nbsp;" : match}</span>`
		);
	};
	ml.prepareCompositions["ml4"] = function () {
		var textWrapper = document.querySelector(".ml4");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			(match) =>
				`<span class='letter'>${match === " " ? "&nbsp;" : match}</span>`
		);
	};

	ml.timelines = [];
	ml.compositions = [];

	ml.overlay = {};
	ml.isShowingSource = false;
	ml.compositionsContentShowClass = "composition-source-show";
	ml.compositionsContent = [];

	const onClickCompositionWrapper = (e) => {
		showComposition(e.currentTarget, e);
	};

	const onClickCompositionBackButton = (e) => {
		e.preventDefault();
		hideSource();
	};

	const onlyPlayVisible = () => {
		// Don't play if any overlays are playing
		if (ml.isShowingSource || app.menu.visible) return;

		if (ml.compositions.length === 0)
			ml.compositions = document.querySelectorAll(".composition");
		ml.compositions.forEach(function (element, i) {
			compShouldPlay(element)
				? playComposition(element)
				: pauseComposition(element);
		});
	};

	// TODO onPressESC("pressed:ESC", hideSource);

	const compShouldPlay = (comp) => {
		let winHeight = window.innerHeight;
		let bounds = comp.getBoundingClientRect();
		let offset = 180; // Greater offset -> comps will play less often

		// Check if bottom of comp is above view or if top of comp is below view
		if (bounds.bottom < 0 + offset || bounds.top > winHeight - offset)
			return false;
		// Default to true
		return true;
	};

	const playComposition = (comp) => {
		let compID = comp.querySelector("h1").className;
		ml.timelines[compID].play();
	};

	const restartComposition = (comp) => {
		let compID = comp.querySelector("h1").className;
		ml.timelines[compID].restart();
	};

	const pauseComposition = (comp) => {
		let compID = comp.querySelector("h1").className;
		ml.timelines[compID].pause();
	};

	const pauseAllCompositions = () => {
		// console.log("Pausing all compositiong ml.compositions", ml.compositions);
		ml.compositions.forEach(function (element, i) {
			pauseComposition(element);
		});
	};

	// Displaying compositions
	const showComposition = (comp, e) => {
		if (comp.classList.contains("composition-active")) return;
		showSourceForComposition(comp, e);
	};

	const showSourceForComposition = (c: HTMLElement, e: Event) => {
		ml.isShowingSource = true;

		console.log("showSourceForComposition", c, e);

		document.querySelector("html").classList.add("is-showing-source");
		c.classList.add("composition-active");
		pauseAllCompositions();
		updateHashForComposition(c);

		// Play chosen composition from beginning
		restartComposition(c);
		pauseComposition(c);
		app.menu.hideMenuIcon();
		let spawnPosition = spawnPositionForEventAndComp(e, c);
		app.overlay.show({
			position: spawnPosition,
			fill: c.dataset.color,
		});

		// Prepare to animate in overlay elements
		(
			document.querySelector(".composition-back-button") as HTMLElement
		).style.opacity = "0";
		(
			document.querySelector(".composition-back-button") as HTMLElement
		).style.display = "block";
		(
			document.querySelector(".composition-source-text") as HTMLElement
		).style.opacity = "0";
		(
			document.querySelector(".composition-source") as HTMLElement
		).style.display = "block";
		(
			document.querySelector(".composition-source-container") as HTMLElement
		).style.transform = "scaleX(0)";
		// (
		// 	document.querySelector(".composition-source-container") as HTMLElement
		// ).style.display = "block";

		// Animate in overlay elements
		anime
			.timeline()
			.add({
				targets: ".composition-source-container", 
				scaleX: [0, 1],
				duration: 900,
				delay: 500,
				easing: "easeOutExpo",
				complete: () => playComposition(c),
			})
			.add({
				targets: [".composition-source-subheader-container", ".composition-source-text"],
				opacity: [0, 1],
				translateY: [-50, 0],
				delay: (el, i) => 10 * i,
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

	const hideSource = () => {
		if (!ml.isShowingSource) return;
		ml.isShowingSource = false;
		resetHash();

		document.querySelector("html").classList.remove("is-showing-source");
		document
			.querySelector(".composition-active")
			.classList.remove("composition-active");

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
				let comp = document.querySelector(".composition-source") as HTMLElement;
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
				(
					document.querySelector(".composition-back-button") as HTMLElement
				).style.display = "none";
				app.menu.showMenuIcon();
				onlyPlayVisible();
			},
		});
	};

	const updateHashForComposition = (c) => {
		window.location.hash = (getElementIndex(c.parentElement) + 1).toString();
		// document querySelector all for all elements with class composition-source-header
		// write me the code mister

		document.querySelectorAll(".composition-source-header").forEach((el, i) => {
			i === getElementIndex(c.parentElement)
				? el.classList.add("composition-source-header-active")
				: el.classList.remove("composition-source-header-active");
		});
	};

	const getElementIndex = (node) => {
		let index = 0;
		while ((node = node.previousElementSibling)) {
			index++;
		}
		return index;
	};

	const resetHash = () => {
		window.history.pushState(
			"",
			document.title,
			window.location.pathname + window.location.search
		);
	};

	const loadCompositionFromCurrentHash = () => {
		let hash = window.location.hash;
		if (hash === "") return;

		loadCompositionForHash(hash);
	};

	const loadCompositionForHash = (hash) => {
		let ID = parseInt(hash.substr(1, 2));
		let comp = document.querySelectorAll(".composition")[ID - 1];
		let rect = comp.getBoundingClientRect();
		document.documentElement.scrollTop = rect.top;
		showComposition(comp.querySelector(".composition-wrapper"), {});
	};

	const spawnPositionForEventAndComp = (e, comp) => {
		if (e.touches) e = e.touches[0];

		return {
			x: e.clientX ? e.clientX : horizontalCenterForElement(comp.parentElement),
			y: e.clientY ? e.clientY : verticalCenterForElement(comp.parentElement),
		};
	};

	const horizontalCenterForElement = (element) => {
		let rect = element.getBoundingClientRect();
		return rect.left + rect.width / 2;
	};

	const verticalCenterForElement = (element) => {
		let rect = element.getBoundingClientRect();

		return rect.top + rect.height / 2 + 50;
	};

	useLayoutEffect(() => {
		window.addEventListener("resize", app.overlay.resizeCanvas);
		window.addEventListener("scroll", onlyPlayVisible);
		window.addEventListener("resize", onlyPlayVisible);

		return () => {
			window.removeEventListener("resize", app.overlay.resizeCanvas);
			window.removeEventListener("scroll", onlyPlayVisible);
			window.removeEventListener("resize", onlyPlayVisible);
		};
	}, [app.overlay.resizeCanvas, onlyPlayVisible]);

	useEffect(() => {
		app.overlay.c = select(".site-nav-canvas");
		app.overlay.ctx = app.overlay.c.getContext("2d");
		app.overlay.cH = 0;
		app.overlay.cW = 0;
		app.overlay.bgColor = "transparent";
		app.overlay.resizeCanvas();
		app.overlay.lastStartingPoint = { x: 0, y: 0 };

		app.menu.icon = select(".js-menu");

		ml.compositions = document.querySelectorAll(".composition");
		ml.prepareCompositions["ml1"]();
		ml.prepareCompositions["ml2"]();
		ml.prepareCompositions["ml3"]();
		ml.prepareCompositions["ml4"]();

		const header = document.querySelector(".header-title");
		header.innerHTML = header.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);

		ml.timelines["ml1"] = anime
			.timeline({ loop: true })
			.add({
				targets: ".ml1 .letter",
				translateX: ["1em", 0],
				rotateY: [-90, 0],
				duration: 1300,
				delay: (el, i) => 45 * i,
			})
			.add({
				targets: ".ml1",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
		ml.timelines["ml2"] = anime
			.timeline({ loop: true })
			.add({
				targets: ".ml2 .letter",
				scale: [0, 1],
				duration: 1500,
				elasticity: 600,
				delay: (el, i) => 45 * (i + 1),
			})
			.add({
				targets: ".ml2",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});

		ml.timelines["ml3"] = anime
			.timeline({ loop: true })
			.add({
				targets: ".ml3 .letter",
				translateY: ["2em", 0],
				translateZ: 0,
				duration: 750,
				delay: (el, i) => 50 * i,
			})
			.add({
				targets: ".ml3",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});

		ml.timelines["ml4"] = anime
			.timeline({ loop: true })
			.add({
				targets: ".ml4 .letter",
				translateY: [-160, 0],
				easing: "easeOutExpo",
				duration: 1400,
				delay: (el, i) => 30 * i,
			})
			.add({
				targets: ".ml4",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});

		onlyPlayVisible();
		loadCompositionFromCurrentHash();
	}, [
		app.menu,
		app.overlay,
		loadCompositionFromCurrentHash,
		ml,
		onlyPlayVisible,
	]);

	const animateButton = (el, scale, duration, elasticity) => {
		anime.remove(el);
		anime({
		  targets: el,
		  scale: scale,
		  duration: duration,
		  elasticity: elasticity
		});
	  }

	return {
		onClickHeaderTitle,
		onClickCompositionWrapper,
		onClickCompositionBackButton,
		onClickMenuButton,
		animateButton,
	};
};

export default Director;
