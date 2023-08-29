const x = 5;
const y = "3";
const z = 3;
const isMarried = true;
// console.log(z % y);
console.log(z === y);
// console.log(z != y);
console.log(!isMarried);
// console.log(x > y && z === y);
const priceOfKgOfSugar = +prompt("Enter the price of 1 Kg of sugar?");
const amountToSpend = +prompt("How much are you willing to Spend");

if (amountToSpend < priceOfKgOfSugar) {
  //code when the condition is true
  alert("Your Amount Cant buy a kg of Sugar");
} else {
  // const amountOfKgs = Math.floor(amountToSpend / priceOfKgOfSugar);
  const amountOfKgs = (amountToSpend / priceOfKgOfSugar).toFixed(0);
  const message = `Your Amount:${amountToSpend} can buy ${amountOfKgs} kgs of Sugar`;
  alert(message);
}
