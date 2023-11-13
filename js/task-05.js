function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//  ВИРІШЕННЯ
const taskFive = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
  changeColor: () => {
    const randomColor = getRandomHexColor();
    taskFive.body.style.backgroundColor = `${randomColor}`;
    taskFive.span.textContent = `${randomColor}`;
  },
};
taskFive.btn.addEventListener("click", taskFive.changeColor);
