import anime from "animejs";

const openButtons = [
  ...document.querySelectorAll(".openModal"),
] as HTMLDivElement[];
const modalWrapper = document.querySelector(
  ".modal__wrapper"
) as HTMLDivElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const leftLine = document.querySelector(
  ".modal__decorLine_left"
) as HTMLDivElement;
const rightLine = document.querySelector(
  ".modal__decorLine_right"
) as HTMLDivElement;
const overlay = document.querySelector(".modal__overlay") as HTMLDivElement;

const closeButtons = [
  ...document.querySelectorAll(".modal__footer button"),
] as HTMLDivElement[];

let isAnimate = false;

openButtons.forEach((el) =>
  el.addEventListener("click", () => {
    isAnimate = true;
    console.log(1);

    modalWrapper.style.display = "flex";
    overlay.classList.add("show");
    anime({
      targets: leftLine,
      translateX: [0, "30vw"],
      width: [0, "40vw"],
      easing: "easeOutCubic",
      opacity: [1, 1],
      duration: 400,
      complete() {
        anime({
          targets: leftLine,
          translateY: [0, "300px"],
          easing: "easeOutCubic",
          opacity: 0,
        });
      },
    });

    anime({
      targets: rightLine,
      translateX: ["100vw", "-30vw"],
      width: [0, "40vw"],
      easing: "easeOutCubic",
      duration: 400,
      opacity: [1, 1],
      complete() {
        anime({
          targets: modal,
          opacity: 1,
          maxHeight: "100%",
          easing: "easeOutCubic",
        });

        anime({
          targets: rightLine,
          translateY: [0, "-300px"],
          opacity: 0,
          easing: "easeOutCubic",
          complete() {
            isAnimate = false;
          },
        });
      },
    });
  })
);

function onClose() {
  if (isAnimate) return;
  isAnimate = true;
  overlay.classList.remove("show");
  anime({
    targets: modal,
    maxHeight: 0,
    opacity: 0,
    easing: "easeInCubic",
    duration: 400,
  });
  anime({
    targets: leftLine,
    translateY: [300, 0],
    easing: "easeInCubic",
    duration: 400,
    opacity: [1, 0],
    complete() {
      modalWrapper.style.display = "none";
      isAnimate = false;
    },
  });
  anime({
    targets: rightLine,
    translateY: [-300, 0],
    duration: 400,
    easing: "easeInCubic",
    opacity: [1, 0],
  });
}

closeButtons.forEach((el) => (el.onclick = onClose));

modalWrapper.onclick = function (e) {
  if (e.target !== overlay) return;
  onClose();
};
