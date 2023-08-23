import anime from "animejs";

const scrollWrapper = document.querySelector("[data-scroll-container]");

const logotypeLoader = document.querySelector("#logotypeLoader");
const headerLogo = document.querySelector(".header__logo");

const overlayTop = document.querySelector(".overlay_top");
const overlayBottom = document.querySelector(".overlay_bottom");
const overlayLine = document.querySelector(".overlay_line");

let isMobile = window.matchMedia("(max-width:768px)").matches;

export default function () {
  setTimeout(() => {
    anime({
      targets: overlayLine,
      width: ["0%", "100%"],
      easing: "easeOutCubic",
      duration: 600,
      complete() {
        setTimeout(() => {
          overlayLine.style.display = "none";
        }, 100);

        anime({
          targets: overlayTop,
          translateY: "-100%",
          easing: "easeInCubic",
        });

        anime({
          targets: overlayBottom,
          translateY: "100%",
          easing: "easeInCubic",
          complete() {
            anime({
              targets: ".logo__wrapper",
              translateY: ["-50%", isMobile ? -106 : -72],
              translateX: ["-50%", "-50%"],
              easing: "easeOutCubic",
              complete() {
                logotypeLoader.classList.add("stop");
                headerLogo.classList.add("show");
                logotypeLoader.style.display = "none";

                scrollWrapper.classList.add("allowScroll");
              },
            });
            anime({
              targets: ".header__heading",
              translateY: [-10, 0],
              opacity: 1,
              delay: 500,
              easing: "easeOutCubic",
            });
            anime({
              targets: ".header__videoDecorations",
              opacity: 1,
              easing: "easeOutCubic",
            });
            anime({
              targets: ".sidebarAnimate",
              translateY: [-10, 0],
              opacity: 1,
              easing: "easeOutCubic",
              delay: anime.stagger(100, { start: 500 }),
            });
          },
        });
      },
    });
  }, 1000);
}
