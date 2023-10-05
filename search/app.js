const form = document.getElementById("testForm");
const nameInput = document.getElementById("name");
const errorTexts = document.querySelectorAll("small");
const searchInput = document.getElementById("search");
console.log(errorTexts);

form.addEventListener("submit", renderDetails);

const errors = [];
const students = [
  {
    name: "Ian Castor",
    course: "Javascript",
  },
  {
    name: "Collin Waswa",
    course: "nEXT",
  },
  {
    name: "Blaise Betua",
    course: "PHP",
  },
  {
    name: "Joshua Kinene",
    course: "Javascript",
  },
  {
    name: "Joshua Wabwire",
    course: "Javascript",
  },
];
function renderDetails(e) {
  e.preventDefault();
  // console.log(nameInput.value, searchInput.value);

  //check for errors
  // if (!nameInput.value || !searchInput.value) {
  //   errorTexts.forEach((errorText) => {
  //     console.log(errorText.id);

  //     if (errorText.id == "nameErr") {
  //       errorText.textContent = "Name Field is required";
  //       errors.push("Name is required");
  //     }
  //     if (errorText.id == "searchErr") {
  //       errorText.textContent = "Search Field is required";
  //       errors.push("Search is required");
  //     }
  //   });
  // } else {
  //   if (nameInput.value.length < 3) {
  //     errors.push("Name Must be  more than 3 characters");
  //     // console.log(errors);
  //   } else {
  //     const searchText = searchInput.value;
  //     console.log(searchText);
  //     reset();
  //   }
  // }

  const searchText = searchInput.value;
  console.log(searchText);
  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.course.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  renderStudents(filteredStudents);
  console.log(filteredStudents);
}

function reset() {
  nameInput.value = "";
  searchInput.value = "";
  errorTexts.forEach((errorText) => {
    console.log(errorText.id);
    errorText.textContent = "";
  });
}
function renderStudents(students) {
  const studentContainer = document.querySelector(".student-list");
  studentContainer.innerHTML = "";
  students.forEach((student) => {
    const studentHTML = ` <li>${student.name}</li>`;
    studentContainer.insertAdjacentHTML("afterbegin", studentHTML);
  });
}
renderStudents(students);
