const query = new URLSearchParams(window.location.search);
const catId = query.get("id");
console.log(catId);
const API = "categories.json";
const endpoint = "products.json";
async function getCategory(API) {
  try {
    const response = await fetch(API);
    const categories = await response.json();
    const category = categories.find((category) => category.id == catId);
    renderCategory(category);
    console.log(category);
  } catch (error) {
    console.log(error);
  }
}
async function getProductsByCategory(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const { products } = data;
    //Filter them
    const filteredProducts = products.filter(
      (product) => product.cat_id == catId
    );
    console.log(products);
    console.log("--------------------");
    console.log(filteredProducts);
    renderProducts(filteredProducts);
  } catch (error) {
    console.log(error);
  }
}
getCategory(API);
getProductsByCategory(endpoint);
function renderCategory(category) {
  const categoryContainer = document.querySelector("header");
  console.log(categoryContainer);
  categoryContainer.innerHTML = `
      <h2>${category.title.toUpperCase()}</h2>
      <img src="${category.image}" alt="" />
  `;
}
function renderProducts(products) {
  const productContainer = document.querySelector(".product-list");
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
