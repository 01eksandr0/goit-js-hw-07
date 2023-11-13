const taskThree = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
  createName: (event) => {
    if (event.currentTarget.value.trim() === "") {
      taskThree.text.textContent = "Anonymous";
    } else taskThree.text.textContent = event.currentTarget.value.trim();
  },
};
taskThree.input.addEventListener("input", taskThree.createName);
