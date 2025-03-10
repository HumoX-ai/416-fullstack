async function loadCourses() {
  const response = await fetch("http://localhost:3030/trainer/courses", {
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
      <a href="course-details.html?id=${c.id}" class="text-blue-600 hover:underline">Details</a>
    </div>
  `
    )
    .join("");
}

async function addCourse(event) {
  event.preventDefault();
  const data = {
    CourseName: document.getElementById("CourseName").value,
    Category: document.getElementById("Category").value,
    ImageURL: document.getElementById("ImageURL").value,
    Price: document.getElementById("Price").value,
  };
  const response = await fetch("http://localhost:3000/api/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  });
  if (response.ok) window.location.href = "trainer-courses.html";
  else alert("Failed to add course");
}

async function loadCourseDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("id");
  const response = await fetch(
    `http://localhost:3000/api/courses/${courseId}`,
    {
      headers: { Authorization: localStorage.getItem("token") },
    }
  );
  const { course, students } = await response.json();
  document.getElementById("course-details").innerHTML = `
    <img src="${course.ImageURL}" alt="${course.CourseName}" class="w-full h-48 object-cover rounded-md mb-4">
    <h2 class="text-xl font-bold">${course.CourseName}</h2>
    <p class="text-gray-600">Category: ${course.Category}</p>
    <p class="text-gray-600">Price: $${course.Price}</p>
  `;
  document.getElementById("student-list").querySelector("tbody").innerHTML =
    students
      .map(
        (s) => `
    <tr>
      <td class="p-3">${s.FirstName}</td>
      <td class="p-3">${s.LastName}</td>
      <td class="p-3">${s.Username}</td>
      <td class="p-3">${s.Age}</td>
    </tr>
  `
      )
      .join("");
}

document.getElementById("add-course")?.addEventListener("submit", addCourse);
if (document.getElementById("course-list")) loadCourses();
if (document.getElementById("course-details")) loadCourseDetails();
