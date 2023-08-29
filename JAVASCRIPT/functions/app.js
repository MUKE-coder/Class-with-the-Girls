function calAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
  // console.log(age);
}
//Arrow function
const calculateAge = (birthYear) => 2023 - birthYear;

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//
const isEvenNum = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//function expression
const calcArea = function (r) {
  console.log(r);
  return 3.14 * r ** 2;
};

const isNumberEven = isEven(30);

const area = calcArea(10);

// const pwd = prompt("enter password");
// console.log(pwd[0]);
// if (pwd.length < 8) {
//   alert("pwd should be eight chars");
// }

// console.log(str.length);
//THE SPLIT METHOD
const name = "MUKE-JOHN-BAPTIST";
const nameArr = name.split("-");
// const ingredients = prompt("Enter ingredients separated by a comma").split(",");

// console.log(ingredients);

//Create an object
const student = {
  name: "Johnbaptist",
  age: 30,
  isMarried: false,
  course: "ICT",
};
const phone = {};
// Accessing properties
console.log(phone);
//setting properties
phone.color = "blue";
phone.size = "medium";
phone.color = "red";
console.log(phone);
