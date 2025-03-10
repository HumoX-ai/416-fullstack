async function loadCourses() {
  const response = await fetch("http://localhost:3030/courses", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  const courses = await response.json();
  document.getElementById("course-list").innerHTML = courses
    .map(
      (c) => `
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <img src="${c.ImageURL}" alt="${c.CourseName}" class="w-full h-32 object-cover rounded-md mb-2">
      <h3 class="text-lg font-semibold">${c.CourseName}</h3>
      <p class="text-gray-600">${c.Category} - $${c.Price}</p>
      <button onclick="enroll(${c.id}, this)" class="mt-2 bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700">Qo‘shilish</button>
    </div>
  `
    )
    .join("");
}

async function enroll(courseId, button) {
  const response = await fetch("http://localhost:3000/api/courses/enroll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ CourseID: courseId }),
  });
  if (response.ok) {
    button.textContent = "Ro‘yxatdan o‘tildi";
    button.disabled = true;
  } else alert("Enrollment failed");
}

async function loadEnrollments() {
  const response = await fetch(
    "http://localhost:3000/api/student/enrollments",
    {
      headers: { Authorization: localStorage.getItem("token") },
    }
  );
  const courses = await response.json();
  document.getElementById("enrollment-list").innerHTML = courses
    .map(
      (c) => `
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <img src="${c.ImageURL}" alt="${c.CourseName}" class="w-full h-32 object-cover rounded-md mb-2">
      <h3 class="text-lg font-semibold">${c.CourseName}</h3>
      <p class="text-gray-600">${c.Category} - $${c.Price}</p>
      <button onclick="unenroll(${c.id}, this)" class="mt-2 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700">Tark etish</button>
    </div>
  `
    )
    .join("");
}

async function unenroll(courseId, button) {
  const response = await fetch("http://localhost:3000/api/courses/unenroll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ CourseID: courseId }),
  });
  if (response.ok) button.parentElement.remove();
  else alert("Unenrollment failed");
}

if (document.getElementById("course-list")) loadCourses();
if (document.getElementById("enrollment-list")) loadEnrollments();
