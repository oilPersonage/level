import { ru } from "../lang/ru.ts";
import { en } from "../lang/en.ts";

// data-i18="h1" - аттрибут смены языка со свойством имени параметра ru[h1]
// data-lang-name="ru" - аттрибут меняемого языка

const languages = {
  ru,
  en,
};

const buttons = [...document.querySelectorAll("[data-lang-name]")];
const textList = document.querySelectorAll("[data-i18]");

type TChangeLang = "ru" | "en";

// функция смены языка

function changeLanguage(lang: TChangeLang) {
  if (textList) {
    for (let i = 0; i < textList.length; i++) {
      const paramName = textList[i].getAttribute("data-i18") || "";
      textList[i].innerHTML = languages[lang][paramName];
    }
  }
}

// установка первоначального языка
changeLanguage("ru");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang-name") as TChangeLang;

    buttons.forEach((el) => el.classList.remove("active"));

    button.classList.add("active");

    changeLanguage(lang || "ru");
  })
);
