const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  root.dataset.theme = 'light';
}

btn.addEventListener('click', () => {
  const isLight = root.dataset.theme === 'light';

  if (isLight) {
    delete root.dataset.theme;
    localStorage.setItem('theme', 'dark');
  } else {
    root.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  const nameValue = document.getElementById("name").value.trim();
  const nameError = document.getElementById("name-error");

  if (nameValue === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailValue = document.getElementById("email").value.trim();
  const emailError = document.getElementById("email-error");

  if (emailValue === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailValue.includes("@")) {
    emailError.textContent = "Email must contain the @ symbol.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const messageValue = document.getElementById("message").value.trim();
  const messageError = document.getElementById("message-error");

  if (messageValue === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  const formStatus = document.getElementById("form-status");

  if (isValid) {
    formStatus.textContent = "Thank you! Your message has been sent.";
    form.reset();
  } else {
    formStatus.textContent = "";
  }
});