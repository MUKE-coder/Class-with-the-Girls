// const mark = +prompt("Enter mark");

// if (mark > 81) {
//   console.log("Grade A+ and excellent");
// } else if (mark > 80) {
//   console.log("Grade A and very good");
// }

// const day = prompt("enter the day").toUpperCase();
// console.log(day);
// switch (day) {
//   case "monday":
//     console.log("The day is monday");
//     break;
//   case "tuesday":
//     console.log("The day is tuesday");
//     break;
//   case "wednesday":
//     console.log("The day is wednesday");
//     break;
//   default:
//     console.log("The day is sunday");
// }
// FUNCTIONS

//1) creating the function
function callNumber(phone) {
  console.log(phone);
}

//2 invoking the function
callNumber("0784143872");
function sumOfTwoNums(a, b) {
  console.log(a + b);
}
sumOfTwoNums(3, 5);

function areaOfTriangle(b, h) {
  const area = 0.5 * b * h;
  alert(area);
}
function areaOfCircle(r) {
  const area = 3.14 * r ** 2;
  alert(area);
}

const shape = prompt("enter the shape").toLowerCase();
if (shape === "circle") {
  const radius = +prompt("Enter the radius of the circle");
  areaOfCircle(radius);
} else if (shape === "triangle") {
  const base = +prompt("Enter the base");
  const height = +prompt("Enter the height");
  areaOfTriangle(base, height);
} else {
  alert("Invalid shape, check and try again");
}
