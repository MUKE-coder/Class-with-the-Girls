const query = new URLSearchParams(window.location.search);
const productId = query.get("id");
//Fetching Data
const API = "data.json";
async function fetchData(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const { products } = data;
    console.log(products);
    //find a product
    const product = products.find((product) => product.id == productId);
    renderProduct(product);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
}
// async function fetchProductById() {
//   try {
//     const response = await fetch(`https://dummyjson.com/products/${productId}`);
//     const product = await response.json();
//     renderProduct(product);
//     console.log(product);
//   } catch (error) {
//     console.log(error);
//   }
// }

function renderProduct(product) {
  const productContainer = document.querySelector(".detail-page");
  productContainer.innerHTML = `
  <div class="product-detail">
  <div class="product-image">
    <img
      src="${product.thumbnail}"
      alt="${product.title}"
    />
  </div>
  <h4>${product.title}</h4>
  <p class="current-price">Ugx ${product.price}</p>

</div>
  `;
}
fetchData(API);
