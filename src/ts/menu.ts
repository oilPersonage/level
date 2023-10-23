import anime from "animejs";

const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
const menu = document.querySelector(".menu__wrapper") as HTMLDivElement;
const bg = document.querySelector(".menu__bg") as HTMLDivElement;
const overlayTop = document.querySelector(
	".menu__overlay_top"
) as HTMLDivElement;
const overlayBottom = document.querySelector(
	".menu__overlay_bottom"
) as HTMLDivElement;

const menuList = document.querySelector(".menu") as HTMLDivElement;
const menuItemsAnimate = [
	...document.querySelectorAll(".navAnimate"),
] as HTMLDivElement[];
const menuItems = [
	...document.querySelectorAll(".menu__item"),
] as HTMLDivElement[];
const menuLine = document.querySelector(".menu__line") as HTMLDivElement;

const NAV_HEIGHT = 60;

let isOpen = false;
let isAnimate = false;

function onClose() {
	bg.classList.remove("show");
	menuLine.classList.remove("show");

	isAnimate = true;

	anime({
		targets: menuItems,
		translateY: [0, -10],
		opacity: [1, 0],
		easing: "easeInCubic",
		delay: anime.stagger(100),
		duration: 600,
	});
	anime({
		targets: overlayBottom,
		translateY: ["-100svg", 0],
		easing: "easeInCubic",
		duration: 600,
		delay: 200,
	});
	anime({
		targets: overlayTop,
		duration: 600,
		translateY: ["100svg", 0],
		easing: "easeInCubic",
		delay: 200,
		complete() {
			menu.style.display = "none";
			isOpen = false;
			isAnimate = false;
			hamburger.classList.remove("opened");
		},
	});
}

function onOpen() {
	menu.style.display = "flex";
	bg.classList.add("show");
	isAnimate = true;

	anime({
		targets: overlayBottom,
		translateY: [0, "-100svg"],
		easing: "easeOutCubic",
		duration: 400,
		complete() {
			menuList.style.display = "flex";
			menuLine.classList.add("show");

			anime({
				targets: menuItemsAnimate,
				translateY: [-10, 0],
				opacity: [0, 1],
				easing: "easeOutCubic",
				delay: anime.stagger(100, {start: -300}),
				complete() {
					isOpen = true;
					isAnimate = false;
					hamburger.classList.add("opened");
				},
			});
		},
	});

	anime({
		targets: overlayTop,
		duration: 400,
		translateY: [0, "100svg"],
		easing: "easeOutCubic",
	});
}

hamburger.onclick = function () {
	if (isAnimate) return;
	if (isOpen) {
		onClose();
	} else {
		onOpen();
	}
};

menu.onclick = function ({target}) {
	if (target !== menu || isAnimate) return;

	onClose();
};

menuItems.forEach((link, index) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		menuItems.forEach((el) => el.classList.remove("active"));

		link.classList.add("active");
		onClose();
	});
	link.addEventListener("mouseover", function () {
		menuLine.style.transform = `translateY(${index * NAV_HEIGHT}px)`;
	});
});
