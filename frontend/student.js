async function loadCourses() {
  const response = await fetch("http://localhost:3000/api/courses", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  const courses = await response.json();
  document.getElementById("course-list").innerHTML = courses
    .map(
      (c) => `
    <div class="card">
      <img src="${c.image_url}" width="100">
      <p>${c.name} - $${c.price}</p>
      <button onclick="enroll(${c.id}, this)">Qo‘shilish</button>
    </div>
  `
    )
    .join("");
}

async function enroll(courseId, button) {
  await fetch("http://localhost:3000/api/courses/enroll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ course_id: courseId }),
  });
  button.textContent = "Ro‘yxatdan o‘tildi";
  button.disabled = true;
}

loadCourses();
