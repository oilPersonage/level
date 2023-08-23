import anime from "animejs";

const infoItems = [
  ...document.querySelectorAll(".carousel__infoItem"),
] as HTMLDivElement[];
const items = [
  ...document.querySelectorAll(".carousel__item"),
] as HTMLDivElement[];

const prevNav = document.querySelector(
  ".carousel__arrow_left"
) as HTMLDivElement;
const nextNav = document.querySelector(
  ".carousel__arrow_right"
) as HTMLDivElement;
const bgLine = document.querySelector(".carousel__cardLine") as HTMLDivElement;

const cardItems = [
  ...document.querySelectorAll(".carousel__card"),
] as HTMLDivElement[];

let prevActiveIndex = 0;

// animate
function carouselScroll(index: number) {
  items.forEach((el) => (el.style.zIndex = "1"));
  items[index].style.zIndex = "2";
  bgLine.style.transform = `translateX(${bgLine.clientWidth * index}px)`;
}

// initial carousel state
infoItems[prevActiveIndex].style.opacity = "1";
infoItems[prevActiveIndex].style.transform = "translateX(0)";
items[0].style.zIndex = "2";

function animate(index: number) {
  if (cardItems[index]) {
    cardItems[index].classList.add("active");
    cardItems[prevActiveIndex].classList.remove("active");

    anime({
      targets: infoItems[prevActiveIndex],
      translateX: [0, "-100%"],
      opacity: [1, 0],
      easing: "easeOutCubic",
      duration: 400,
    });

    anime({
      targets: infoItems[index],
      translateX: ["100%", 0],
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: 400,
    });

    carouselScroll(index);

    prevActiveIndex = index;
  }
}

cardItems.forEach((card, index) =>
  card.addEventListener("click", () => animate(index))
);

function arrowOnClick(nextIndex: number) {
  animate(nextIndex);
}

prevNav.onclick = () => arrowOnClick(prevActiveIndex - 1);
nextNav.onclick = () => arrowOnClick(prevActiveIndex + 1);
