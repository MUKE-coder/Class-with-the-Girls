const API = "https://dummyjson.com/products";
const productContainer = document.querySelector(".product-list");

console.log("Task1");
setTimeout(() => {
  console.log("Task2");
}, 2000);
console.log("Task 3");
// Fetch the data from the JSON file
const fetchData = new Promise((resolve, reject) => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});
fetchData
  .then((data) => {
    const { products, total, limit } = data;
    // console.log(limit);
  })
  .catch((error) => console.log(error));
// console.log(fetchData);
fetch(API)
  .then((response) => response.json())
  .then((data) => {
    const { products } = data;
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const discount = (product.price * product.discountPercentage) / 100;
      const originalPrice = discount + product.price;
      const productHtml = `
        <a href="" class="product">
        <div class="product-image">
          <img
            src=${product.thumbnail}
            alt=""
          />
        </div>
        <h4>${product.title}</h4>
        <p class="current-price">Ugx ${product.price}</p>
        <p class="original-price">
          <del>Ugx ${originalPrice.toFixed(2)}</del>
        </p>
      </a>
  `;
      productContainer.insertAdjacentHTML("afterbegin", productHtml);
    });
  })
  .catch((error) => console.error(error));
