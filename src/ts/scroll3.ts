const scrollWrapper = document.querySelector(
  "[data-scroll-container]"
) as HTMLDivElement;
const scrolledWrapper = document.querySelector(".scrolled") as HTMLDivElement;

const SCROLL_SPEED = 600;
const DEFAULT_SPEED = 1;
const DEFAULT_START = 0;
const DEFAULT_END = 100;

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
  helper: boolean;
  endToEnd: boolean;
  alternative: boolean;
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
    const start = el.getAttribute("data-start");
    const end = el.getAttribute("data-end");
    const animateOpacity = el.getAttribute("data-opacity") === "";
    const helper = el.getAttribute("data-helper") === "";
    const alternativeScroll = el.getAttribute("data-alternative") === "";
    const endToEnd = el.getAttribute("data-end-to-end") === "";

    const parentWrapper = el.closest("[data-scroll-section]") as HTMLDivElement;
    if (parentWrapper) {
      const { top, bottom, height } = parentWrapper.getBoundingClientRect();

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
        direction: direction || "vertical",
        endToEnd: endToEnd,
      };
      animateItems.push(animateData);
    }
  });
}

makeScrollItem();

function setStyle(
  elem: HTMLDivElement,
  progress: number,
  speed: number,
  endToEnd: boolean,
  opacity: boolean,
  direction: TDirection,
  alternative: boolean
) {
  let position = endToEnd
    ? (1 - progress) * (SCROLL_SPEED * speed)
    : progress * (SCROLL_SPEED * speed);

  if (alternative) {
    position *= -1;
  }

  if (direction === TDirection.HORIZONTAL) {
    elem.style.transform = `matrix(1, 0, 0, 1, ${position}, 0)`;
  } else {
    elem.style.transform = `matrix(1, 0, 0, 1, 0, ${position})`;
  }

  if (opacity) {
    elem.style.opacity = String(Math.round(progress * 10) / 10);
  }
}

scrollWrapper.addEventListener("scroll", (e) => {
  const scrollTop = scrollWrapper.scrollTop;

  animateItems.forEach(
    ({
      direction,
      top,
      bottom,
      height,
      speed,
      end,
      start,
      elem,
      opacity,
      alternative,
      helper,
      endToEnd,
    }) => {
      const topBorder = top + height * (start / 100);
      const bottomBorder = bottom + (height * end) / 100;

      if (topBorder - scrollTop <= 0 && bottomBorder - scrollTop > 0) {
        let progress = (scrollTop - topBorder) / (bottomBorder - topBorder);

        if (progress > 0.98) {
          progress = 1;
        }
        if (progress < 0.02) {
          progress = 0;
        }

        setStyle(
          elem,
          progress,
          speed,
          endToEnd,
          opacity,
          direction,
          alternative
        );
      } else if (topBorder - scrollTop > 0) {
        const progress = 0;
        setStyle(
          elem,
          progress,
          speed,
          endToEnd,
          opacity,
          direction,
          alternative
        );
      } else if (bottomBorder - scrollTop) {
        const progress = 1;
        setStyle(
          elem,
          progress,
          speed,
          endToEnd,
          opacity,
          direction,
          alternative
        );
      }
    }
  );
});
