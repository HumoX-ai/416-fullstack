async function loadCourses() {
  const response = await fetch("http://localhost:3000/api/trainer/courses", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  const courses = await response.json();
  document.getElementById("course-list").innerHTML = courses
    .map(
      (c) => `
    <div class="card">
      <img src="${c.image_url}" width="100">
      <p>${c.name}</p>
      <a href="course-details.html?id=${c.id}">Details</a>
    </div>
  `
    )
    .join("");
}

async function addCourse(event) {
  event.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    image_url: document.getElementById("image_url").value,
    price: document.getElementById("price").value,
  };
  await fetch("http://localhost:3000/api/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  });
  window.location.href = "trainer-courses.html";
}

document.getElementById("add-course")?.addEventListener("submit", addCourse);
if (document.getElementById("course-list")) loadCourses();
