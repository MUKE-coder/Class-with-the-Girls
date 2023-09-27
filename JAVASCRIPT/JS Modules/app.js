import { products } from "./data.js";
const productContainer = document.querySelector(".product-list");
console.log(productContainer);
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
