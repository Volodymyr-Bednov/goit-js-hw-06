const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const {
    elements: { email, password },
  } = ev.currentTarget;

  if (!email.value || !password.value)
    return alert("Всі поля повинні бути заповнені.");

  const userData = { email: email.value, password: password.value };

  console.log(userData);
  ev.target.reset();
});
