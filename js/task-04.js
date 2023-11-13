const taskFour = {
  form: document.querySelector(".login-form"),
  user: {},
  formSubmit: (event) => {
    event.preventDefault();
    const emailForm = taskFour.form.elements.email.value.trim();
    const passwordForm = taskFour.form.elements.password.value.trim();
    if (emailForm === "" || passwordForm === "") {
      alert("All form fields must be filled in");
    } else {
      taskFour.user.email = emailForm;
      taskFour.user.password = passwordForm;
      console.log(taskFour.user);
      taskFour.form.reset();
    }
  },
};
taskFour.form.addEventListener("submit", taskFour.formSubmit);
