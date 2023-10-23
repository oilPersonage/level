const scrollWrapper = document.querySelector(
	"[data-scroll-container]"
) as HTMLDivElement;
const scrolledWrapper = document.querySelector(".scrolled") as HTMLDivElement;

const SCROLL_SPEED = 600;
const DEFAULT_SPEED = 1;
const DEFAULT_START = 0;
const DEFAULT_END = 100;
const INERTIA = 0.1;

export enum TDirection {
	HORIZONTAL = "horizontal",
	VERTICAL = "vertical",
}

export type TScrollItemData = {
	elem: HTMLDivElement;
	start: number;
	speed: number;
	end: number;
	top: number;
	bottom: number;
	height: number;
	opacity: boolean;
	isInertia: boolean;
	helper: boolean;
	endToEnd: boolean;
	alternative: boolean;
	progress: number;
	position: number;
	nextProgress: number;
	nextPosition: number;
	direction: TDirection;
};

const scrollItems = [...document.querySelectorAll("[data-scroll-item]")];

// animation state

const animateItems: TScrollItemData[] = [];

function createHelper(position: number, color: string): HTMLDivElement {
	const topDiv = document.createElement("div");
	topDiv.style.position = "absolute";
	topDiv.style.width = "100px";
	topDiv.style.top = `${position}px`;
	topDiv.style.height = "2px";
	topDiv.style.zIndex = "3";
	topDiv.style.background = color;
	return topDiv;
}

function makeScrollItem() {
	scrollItems.forEach((el) => {
		const elem = el as HTMLDivElement;
		const speed = el.getAttribute("data-speed");
		const direction = el.getAttribute("data-direction") as TDirection;
		const inertial = el.getAttribute("data-inertia") !== "false";
		const start = el.getAttribute("data-start");
		const end = el.getAttribute("data-end");
		const animateOpacity = el.getAttribute("data-opacity") === "";
		const helper = el.getAttribute("data-helper") === "";
		const alternativeScroll = el.getAttribute("data-alternative") === "";
		const endToEnd = el.getAttribute("data-end-to-end") === "";

		const parentWrapper = el.closest("[data-scroll-section]") as HTMLDivElement;
		if (parentWrapper) {
			const {top, bottom, height} = parentWrapper.getBoundingClientRect();

			const finalStart = Number(start) || DEFAULT_START;
			const finalEnd = Number(end) || DEFAULT_END;

			if (helper) {
				const topBorder = top + height * (finalStart / 100);
				const bottomBorder = bottom + (height * finalEnd) / 100;
				const topHelper = createHelper(topBorder, "red");
				const bottomHelper = createHelper(bottomBorder, "green");
				scrolledWrapper.appendChild(topHelper);
				scrolledWrapper.appendChild(bottomHelper);
			}

			const animateData: TScrollItemData = {
				elem,
				start: finalStart,
				speed: Number(speed) || DEFAULT_SPEED,
				end: finalEnd,
				top: top,
				bottom: bottom,
				height: height,
				opacity: animateOpacity,
				helper: helper,
				alternative: alternativeScroll,
				isInertia: inertial,
				direction: direction || "vertical",
				endToEnd: endToEnd,
				progress: 0,
				nextProgress: 0,
				position: 0,
				nextPosition: 0,
			};
			animateItems.push(animateData);
		}
	});
}

makeScrollItem();


scrollWrapper.addEventListener("scroll", (_e) => {
	const scrollTop = scrollWrapper.scrollTop;

	animateItems.forEach(
		(item) => {
			const {
				top,
				bottom,
				height,
				end,
				start
			} = item
			const topBorder = top + height * (start / 100);
			const bottomBorder = bottom + (height * end) / 100;

			if (topBorder - scrollTop <= 0 && bottomBorder - scrollTop > 0) {
				item.nextProgress = (scrollTop - topBorder) / (bottomBorder - topBorder);
			} else if (topBorder - scrollTop > 0) {
				item.nextProgress = 0;
			} else if (bottomBorder - scrollTop) {
				item.nextProgress = 1;
			}
		}
	);
});

function clamp(val, min = 0, max = 3) {
	return Math.min(Math.max(val, min), max)
}

function animate() {

	animateItems.forEach((item) => {
		const {direction, elem, opacity, endToEnd, speed, isInertia} = item;
		if (isInertia) {
			const nProgress = (item.nextProgress - item.progress) * INERTIA
			item.progress += clamp(nProgress, -1, 1);
		} else {
			item.progress = item.nextProgress;
		}

		if (opacity) {
			elem.style.opacity = String(item.progress * 10 * 1.9);
		}

		item.position = endToEnd
			? (1 - item.progress) * (SCROLL_SPEED * speed)
			: item.progress * (SCROLL_SPEED * speed);

		if (direction === TDirection.HORIZONTAL) {
			elem.style.transform = `matrix(1, 0, 0, 1, ${item.position}, 0)`;
		} else {
			elem.style.transform = `matrix(1, 0, 0, 1, 0, ${item.position})`;
		}
	})
	requestAnimationFrame(animate)
}

animate();
