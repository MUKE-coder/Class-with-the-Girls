// const API = "https://api.chucknorris.io/jokes/random";
const API = "jokes.json";
const quoteCard = document.querySelector(".card");
const generateBtn = document.querySelector(".generate");

// PROMISES
// fetch(API)
//   .then((res) => res.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//ASYNC AWAIT
async function getProducts() {
  try {
    const response = await fetch(API);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

async function getRandomQuote() {
  try {
    const res = await fetch(API);
    const data = await res.json();

    const randomNo = Math.floor(Math.random() * data.length);
    console.log(randomNo);
    const quote = data[randomNo].title;
    console.log(quote);

    quoteCard.innerHTML = `
    <img src="./bg.avif" alt="" />
    <p class="quote">
      ${quote}
    </p>
    `;
  } catch (error) {
    console.log(error);
  }
}
getRandomQuote();
generateBtn.addEventListener("click", getRandomQuote);
