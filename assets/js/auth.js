// const url = "https://api-class-o1lo.onrender.com/api/hoangnm";
const url = "http://localhost:3000";

// "http://localhost:3000/register"

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", function () {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const dataObject = Object.fromEntries(formData);

  console.log(dataObject);

  fetch(`${url}/register`, {
    method: "POST",
    body: JSON.stringify(dataObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

login.addEventListener("submit", function () {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const dataObject = Object.fromEntries(formData);

  console.log(dataObject);

  fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify(dataObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
