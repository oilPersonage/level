const headerLinks = [
  ...document.querySelectorAll(".header__links a"),
] as HTMLDivElement[];
const headerLinksLine = document.querySelector(
  ".header__links__line"
) as HTMLDivElement;

const MARGIN_WIDTH = 32 + 32 + 4;

headerLinks.forEach((link, index) => {
  link.addEventListener("mouseover", function () {
    const findDist = function () {
      let dist = 0;
      for (let i = 0; i < index; i++) {
        dist += headerLinks[i].offsetWidth + MARGIN_WIDTH;
      }
      return dist;
    };
    const distance = index === 0 ? 0 : findDist();
    headerLinksLine.style.transform = `translateX(${distance}px)`;
  });
});
