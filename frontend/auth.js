async function signupTrainer(event) {
  event.preventDefault();
  const data = {
    FirstName: document.getElementById("FirstName").value,
    LastName: document.getElementById("LastName").value,
    Username: document.getElementById("Username").value,
    Password: document.getElementById("Password").value,
    Specialization: document.getElementById("Specialization").value,
    Experience: document.getElementById("Experience").value,
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
    FirstName: document.getElementById("FirstName").value,
    LastName: document.getElementById("LastName").value,
    Username: document.getElementById("Username").value,
    Password: document.getElementById("Password").value,
    Age: document.getElementById("Age").value,
  };
  const response = await fetch("http://localhost:3000/api/student/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) window.location.href = "student-login.html";
  else alert("Signup failed");
}

async function loginTrainer(event) {
  event.preventDefault();
  const data = {
    Username: document.getElementById("Username").value,
    Password: document.getElementById("Password").value,
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
    Username: document.getElementById("Username").value,
    Password: document.getElementById("Password").value,
  };
  const response = await fetch("http://localhost:3000/api/student/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem("token", token);
    window.location.href = "student-courses.html";
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
