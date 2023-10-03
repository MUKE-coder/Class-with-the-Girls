// const API = "https://dummyjson.com/products";
const API = "data.json";
const productContainer = document.querySelector(".product-list");

// console.log(fetchData);

//Fetching Data
async function fetchData(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const { products } = data;
    console.log(products);
    //Call a function to render the data
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const discount = (product.price * product.discountPercentage) / 100;
    const originalPrice = discount + product.price;
    const productHtml = `
        <a href="/product.html?id=${product.id}&&category=${
      product.category
    }" class="product">
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
}
fetchData(API);

// fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
//     const { products } = data;
//     productContainer.innerHTML = "";
//     products.forEach((product) => {
//       const discount = (product.price * product.discountPercentage) / 100;
//       const originalPrice = discount + product.price;
//       const productHtml = `
//         <a href="" class="product">
//         <div class="product-image">
//           <img
//             src=${product.thumbnail}
//             alt=""
//           />
//         </div>
//         <h4>${product.title}</h4>
//         <p class="current-price">Ugx ${product.price}</p>
//         <p class="original-price">
//           <del>Ugx ${originalPrice.toFixed(2)}</del>
//         </p>
//       </a>
//   `;
//       productContainer.insertAdjacentHTML("afterbegin", productHtml);
//     });
//   })
//   .catch((error) => console.error(error));
