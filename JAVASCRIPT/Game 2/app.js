const questionContainer = document.querySelector(".question-container");
// console.log(questionContainer);
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
    answer: 6,
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
let score = 0;
//display question on pageload
renderNewQuestion();

//Display question on click
nextBtn.addEventListener("click", renderNewQuestion);

//Display a question a specific time
// setTimeout(() => {
//   renderNewQuestion();
// }, 3000);
// setInterval(() => {
//   renderNewQuestion();
// }, displayDuration);

// console.log(questionBank.length);

function renderNewQuestion() {
  if (questionNumber === 5) {
    alert("Game Over");
  }
  questionNumber++;
  // console.log(questionNumber);
  questionIndex = Math.floor(Math.random() * questionBank.length);
  // console.log(questionIndex);
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

const numbers = [1, 2, 3, 4, 5];
//ForEach Method
// numbers.forEach((number) => {
//   console.log(number * 2);
// });
const squares = numbers.map((number) => {
  return number * 2;
});
// console.log(squares);
const openAcctBtns = document.querySelectorAll("#openAccount");
openAcctBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(questionIndex);
  });
});

const options = document.querySelectorAll("li");
console.log(options);
options.forEach((option) => {
  option.addEventListener("click", function () {
    const optionContent = option.textContent.split(" ")[1];
    const currentQuestion = questionBank[questionIndex];
    const answer = currentQuestion.answer;
    console.log(answer, optionContent);
    if (answer == optionContent) {
      console.log("its the correct answer");
      score++;
      option.style.backgroundColor = "green";
      console.log(score);
      renderNewQuestion();
    } else {
      renderNewQuestion();
    }
  });
});
