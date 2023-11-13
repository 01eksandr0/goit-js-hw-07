const taskOne = {
  categories: document.querySelector("#categories"),
  arrayChildren: [...categories.children],
  logConsole: () =>
    taskOne.arrayChildren.forEach((element) => {
      console.log(`Category: ${element.querySelector("h2").textContent}`);
      console.log(`Elements: ${element.querySelector("ul").children.length}`);
    }),
};
console.log(`Number of categories: ${taskOne.arrayChildren.length}`);
taskOne.logConsole();
