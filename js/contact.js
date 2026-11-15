console.log("contact.js loaded");   // use "contact.js loaded" in contact.js
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  console.log("submit handler ran");
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear old messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("phone-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("success-msg").textContent = "";

  let valid = true;

  // 1. No field is empty
  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    valid = false;
  }

  // 2. Email format is valid
  if (email === "") {
    document.getElementById("email-error").textContent = "Please enter your email.";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    valid = false;
  }

  // 3. Phone contains only digits
  if (phone === "") {
    document.getElementById("phone-error").textContent = "Please enter your phone number.";
    valid = false;
  } else if (isNaN(phone) || phone.includes(" ") || phone.includes(".") || phone.includes("-") || phone.includes("+")) {
    document.getElementById("phone-error").textContent = "Phone number must contain digits only.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("message-error").textContent = "Please enter a message.";
    valid = false;
  }

  if (valid) {
    document.getElementById("success-msg").textContent = "Thank you, " + name + "! Your message has been sent.";
    form.reset();
  }
});
