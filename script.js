function handlerBtnOnClick() {
  const text = document.querySelector(".block__text");
  const block = document.querySelector(".block");
  let countOfClick = Number(text.textContent) + 1;
  text.textContent = countOfClick;
  block.classList.toggle("invert");
  if (countOfClick % 5 == 0) {
    block.style.backgroundColor = getRndColor();
  } else {
    block.style.backgroundColor = "";
  }
  if (countOfClick == 10) {
    document.querySelector("main").appendChild(document.createElement("p")).textContent =
      "Поздравляем! Вы достигли 10 кликов!";
  }
}

const getRnd256 = () => Math.floor(Math.random() * 256);
const getRndColor = () => `rgb(${getRnd256()},${getRnd256()},${getRnd256()})`;