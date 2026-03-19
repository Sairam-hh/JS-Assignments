const loadBtn = document.getElementById("loadBtn");
const productContainer = document.getElementById("productContainer");
const message = document.getElementById("message");

const API_URL = "https://fakestoreapi.com/products";

loadBtn.addEventListener("click", function () {

  message.style.color = "black";
  message.textContent = "Loading products...";
  productContainer.innerHTML = "";
  loadBtn.disabled = true;

  fetch(API_URL)
    .then(function(response) {

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    })

    .then(function(data) {

      message.style.color = "green";
      message.textContent = "Products Loaded Successfully";

      displayProducts(data);

      loadBtn.textContent = "Loaded";
    })

    .catch(function(error) {

      message.style.color = "red";
      message.textContent = "Error loading products";

      console.log(error);

      loadBtn.disabled = false;
      loadBtn.textContent = "Load Products";
    });
});


function displayProducts(products) {

  products.forEach(function(product) {

    const card = document.createElement("div");
    card.className = "product";

    const img = document.createElement("img");
    img.src = product.image;

    const title = document.createElement("h2");
    title.textContent = product.title;

    card.appendChild(img);
    card.appendChild(title);

    productContainer.appendChild(card);
  });
}