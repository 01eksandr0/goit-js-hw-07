function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//===========================================
const box = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputNumber = document.querySelector("input");
// функція додавання елементів
const createElement = (n) => {
  const arrayhildren = [...box.children];
  if (arrayhildren.length > 0) arrayhildren.forEach((value) => value.remove());
  let widthH = 30;
  let heightH = 30;
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    const newElement = `<div style="width: ${widthH}px; height: ${heightH}px; background-color:${getRandomHexColor()}"></div>`;
    arr.push(newElement);
    widthH += 10;
    heightH += 10;
  }
  box.insertAdjacentHTML("afterbegin", arr.join(" "));
  inputNumber.value = "";
};
// функція видалення елементів
const destroyElement = () => {
  const arrayhildren = [...box.children];
  arrayhildren.forEach((value) => value.remove());
};
// перевірка і виконання дій
inputNumber.addEventListener("blur", () => {
  let number = 0;
  number = inputNumber.value;
  if (number >= 1 && number <= 100) {
    // спрацьовує кнопка CREATE
    btnCreate.addEventListener("click", createElement(number));
  }
});
// спрацьовує кнопка DESTROY
btnDestroy.addEventListener("click", destroyElement);
