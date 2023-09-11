const playBtn = document.querySelector(".playBtn");
const playerOneCurrentScore = document.querySelector(
  ".player-1 .current-score"
);
const playerTwoCurrentScore = document.querySelector(
  ".player-2 .current-score"
);
const playerOne = document.querySelector(".player-1");
const playerTwo = document.querySelector(".player-2");
const passBtn = document.querySelector(".passBtn");
const inputEl = document.querySelector("input");
const gameContainer = document.querySelector(".game-container");
const playerOneOverallScoreEl = document.querySelector(
  ".player-1 .overall-score"
);
const playerTwoOverallScoreEl = document.querySelector(
  ".player-2 .overall-score"
);
const message = document.querySelector(".message");

let currentPlayer = 1;
let playerOneOverallScore = (playerTwoOverallScore = 0);
const playerOneDiceImageEl = document.querySelector("#playerOneDiceImage");

console.log(playerOne, playerTwo);

// Event Listeners
playBtn.addEventListener("click", play);
passBtn.addEventListener("click", switchPlayer);
console.log(message);

//Functions
function generateRandomNumber(range) {
  const randNo = Math.floor(Math.random() * range) + 1;
  return randNo;
}
function switchPlayer() {
  if (currentPlayer == 1) {
    playerOne.classList.remove("currentPlayer");
    playerTwo.classList.add("currentPlayer");
    currentPlayer = 2;
  } else {
    playerOne.classList.add("currentPlayer");
    playerTwo.classList.remove("currentPlayer");
    currentPlayer = 2;
    currentPlayer = 1;
  }
  console.log("clicked");
  console.log(currentPlayer);
}
function play() {
  console.log(inputEl.value);
  const randNo = generateRandomNumber(6);
  displayMessage("That is really nice");
  if (currentPlayer === 1) {
    playerOneCurrentScore.textContent = randNo;
    playerOneDiceImageEl.innerHTML = `<img src="./images/d-${randNo}.jpg" alt="" />`;
    //getting overall score
    playerOneOverallScore += randNo;
    //Update the UI IN HTML
    playerOneOverallScoreEl.textContent = playerOneOverallScore;
    if (playerOneOverallScore >= 40) {
      window.location = "win.html";
    }
    if (randNo < 6) {
      // displayMessage();
      switchPlayer();
    }
  } else {
    playerTwoCurrentScore.textContent = randNo;
    playerOneDiceImageEl.innerHTML = `<img src="./images/d-${randNo}.jpg" alt="" />`;
    //getting overall score
    playerTwoOverallScore += randNo;
    //Update the UI IN HTML
    playerTwoOverallScoreEl.textContent = playerTwoOverallScore;
    if (playerTwoOverallScore >= 40) {
      window.location = "win.html";
    }
    if (randNo < 6) {
      switchPlayer();
    }
  }
  console.log(randNo);
}
displayMessage("Hello world");
function displayMessage(randNo, message) {
  const message = document.querySelector(".message");
  console.log(message);
  message.textContent = message;
  message.classList.add("show");
}
