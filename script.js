// Initial Student List
let students = [];

// Function to Add a New Student
function addStudent() {
  const name = document.getElementById("student-name").value.trim();
  const marks = parseInt(document.getElementById("student-marks").value.trim());

  if (!name || isNaN(marks)) {
    alert("Please enter valid student details!");
    return;
  }

  // Add the new student
  students.push({ name, marks });

  // Clear input fields
  document.getElementById("student-name").value = "";
  document.getElementById("student-marks").value = "";

  // Update UI
  renderStudentTable();
  updateStatistics();
}

// Function to Render the Student Table
function renderStudentTable() {
  const tableBody = document.getElementById("student-table");
  tableBody.innerHTML = "";

  students.forEach((student) => {
    const grade = student.marks >= 40 ? "Pass" : "Fail";
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${grade}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Function to Update Statistics
function updateStatistics() {
  // Average Marks
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = students.length ? (totalMarks / students.length).toFixed(2) : 0;

  // Top Scorer
  const topScorer = students.reduce((highest, student) => {
    return student.marks > (highest.marks || 0) ? student : highest;
  }, {});

  // Failed Students
  const failedStudents = students.filter((student) => student.marks < 40).length;

  // Update DOM
  document.getElementById("average-marks").textContent = averageMarks;
  document.getElementById("top-scorer").textContent = topScorer.name || "N/A";
  document.getElementById("failed-students").textContent = failedStudents;
}
