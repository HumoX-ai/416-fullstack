async function signupTrainer(event) {
  event.preventDefault();
  const data = {
    FirstName: document.getElementById("firstName").value,
    LastName: document.getElementById("lastName").value,
    Username: document.getElementById("username").value,
    Password: document.getElementById("password").value,
    Specialization: document.getElementById("specialization").value,
    Experience: document.getElementById("experience").value,
  };
  const response = await fetch("http://localhost:3000/api/trainer/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) window.location.href = "trainer-login.html";
  else alert("Signup failed");
}

async function signupStudent(event) {
  event.preventDefault();
  const data = {
    FirstName: document.getElementById("firstName").value,
    LastName: document.getElementById("lastName").value,
    Username: document.getElementById("username").value,
    Password: document.getElementById("password").value,
    Age: document.getElementById("age").value,
  };
  const response = await fetch("http://localhost:3030/student/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok)
    window.location.href = "/frontend/student-login/student-login.html";
  else alert("Signup failed");
}

async function loginTrainer(event) {
  event.preventDefault();
  const data = {
    Username: document.getElementById("username").value,
    Password: document.getElementById("password").value,
  };
  const response = await fetch("http://localhost:3000/api/trainer/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem("token", token);
    window.location.href = "trainer-courses.html";
  } else alert("Login failed");
}

async function loginStudent(event) {
  event.preventDefault();
  const data = {
    Username: document.getElementById("username").value,
    Password: document.getElementById("password").value,
  };
  const response = await fetch("http://localhost:3030/student/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem("token", token);
    window.location.href = "/frontend/student-courses/student-courses.html";
  } else alert("Login failed");
}

document
  .getElementById("trainer-signup")
  ?.addEventListener("submit", signupTrainer);
document
  .getElementById("student-signup")
  ?.addEventListener("submit", signupStudent);
document
  .getElementById("trainer-login")
  ?.addEventListener("submit", loginTrainer);
document
  .getElementById("student-login")
  ?.addEventListener("submit", loginStudent);
