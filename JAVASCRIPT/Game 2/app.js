const questionContainer = document.querySelector(".question-container");
console.log(questionContainer);
const nextBtn = document.querySelector(".nextBtn");
// const question = {
//   quiz: "What is 2+ 4 ?",
//   options: {
//     A: 2,
//     B: 4,
//     C: 22,
//     D: 6,
//   },
//   answer: 4,
// };
const displayDuration = 5000;
const questionBank = [
  {
    quiz: "What is 2+ 4 ?",
    options: {
      A: 2,
      B: 4,
      C: 22,
      D: 6,
    },
    answer: 4,
  },
  {
    quiz: "What is 200 * 4 ?",
    options: {
      A: 600,
      B: 800,
      C: 204,
      D: 50,
    },
    answer: 800,
  },
  {
    quiz: "Who is the President of Uganda",
    options: {
      A: "Bob wine",
      B: "Besiigye",
      C: "Mao",
      D: "Museveni",
    },
    answer: "Museveni",
  },
];
let questionIndex = 0;
let questionNumber = 0;
//display question on pageload
renderNewQuestion();

//Display question on click
nextBtn.addEventListener("click", renderNewQuestion);

//Display a question a specific time
// setTimeout(() => {
//   renderNewQuestion();
// }, 3000);
setInterval(() => {
  renderNewQuestion();
}, displayDuration);

console.log(questionBank.length);

function renderNewQuestion() {
  if (questionNumber === 5) {
    alert("Game Over");
  }
  questionNumber++;
  console.log(questionNumber);
  questionIndex = Math.floor(Math.random() * questionBank.length);
  console.log(questionIndex);
  questionContainer.innerHTML = `
<h2 class="question" id="question">${questionBank[questionIndex].quiz}</h2>
    <ul class="solution">
      <li><span>A.</span> <span class="">${questionBank[questionIndex].options.A}</span></li>
      <li><span>B.</span> <span class="">${questionBank[questionIndex].options.B}</span></li>
      <li><span>C.</span> <span class="">${questionBank[questionIndex].options.C}</span></li>
      <li><span>D.</span> <span class="">${questionBank[questionIndex].options.D}</span></li>
    </div>
`;
}

const options = document.querySelectorAll("li");
console.log(options);
