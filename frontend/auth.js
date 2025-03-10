async function signupTrainer(event) {
  event.preventDefault();
  const data = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    specialty: document.getElementById("specialty").value,
    experience: document.getElementById("experience").value,
  };
  const response = await fetch("http://localhost:5173/api/trainer/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) window.location.href = "trainer-login.html";
}
document
  .getElementById("trainer-signup")
  .addEventListener("submit", signupTrainer);

async function loginTrainer(event) {
  event.preventDefault();
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  const response = await fetch("http://localhost:5173/api/trainer/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const { token } = await response.json();
  localStorage.setItem("token", token);
  window.location.href = "trainer-courses.html";
}
