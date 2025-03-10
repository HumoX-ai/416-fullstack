// frontend/student.js
async function loadCourses() {
  const response = await fetch("http://localhost:5173/api/courses", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  const courses = await response.json();
  document.getElementById("course-list").innerHTML = courses
    .map(
      (c) => `
    <div class="card">
      <img src="${c.image_url}" width="100">
      <p>${c.name} - $${c.price}</p>
      <button onclick="enroll(${c.id})">Qo‘shilish</button>
    </div>
  `
    )
    .join("");
}

async function enroll(courseId) {
  await fetch("http://localhost:5173/api/courses/enroll", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ course_id: courseId }),
  });
  loadCourses();
}
loadCourses();
