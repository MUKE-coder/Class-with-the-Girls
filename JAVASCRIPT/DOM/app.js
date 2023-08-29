//DOM
//Creating an Element
//1)Creating the element -h1
const heading = document.createElement("h1");
//2)Giving it inner HTML
heading.innerHTML = "DOM and DOM Manipulation";
// SET A CLASS
heading.className = "heading";
//3)Appending this text to the document body
document.body.appendChild(heading);

const newDiv = document.createElement("div");
const paragraph = document.createElement("p");
const anchor = document.createElement("a");
anchor.href = "www.google.com";
anchor.innerHTML = "Visit Google";
paragraph.innerHTML = "This is a a paragraph inside a div";
const img = document.createElement("img");
img.setAttribute("class", "rounded b-red");
img.src =
  "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lftjtn81b7brs2icc898.jpg";
newDiv.appendChild(anchor);

newDiv.appendChild(paragraph);
document.body.appendChild(img);
document.body.appendChild(newDiv);

//Accessing Elements
// const deleteBtn = document.getElementById("deleteBtn");
const deleteBtn = document.querySelector("#deleteBtn");

const openAccountBtns = document.querySelectorAll(".openAccountBtn");
console.log(openAccountBtns);
