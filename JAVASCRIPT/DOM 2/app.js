const container = document.querySelector(".container");
console.log(container);
// const heading = prompt("Enter the Card heading");
// const src = prompt("Enter the image link");
container.innerHTML = `
    <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        voluptatem.
      </p>

      <a href="#">Link</a>
      <button>Get started</button>
`;
container.classList.add("my-class");

let score = 0;
const winningText = document.querySelector(".winning-text");
// winningText.style.display = "none";
if (score > 50) {
  winningText.style.display = "block";
}
const clapBtn = document.querySelector("#clapBtn");
console.log(clapBtn);
const square = document.querySelector(".square");
console.log(square);
const scoreEl = document.querySelector(".score");
clapBtn.addEventListener("click", function () {
  console.log("score increased");
  score = Math.floor(Math.random() * 6) + 1;
  scoreEl.textContent = score;
  square.classList.add("circle");
  console.log(score);
  clapBtn.textContent = "circle";
});
