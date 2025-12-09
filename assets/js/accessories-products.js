// ============== ACCESSORIES PRODUCTS DATA ==============
const accessoriesProductsData = [
  {
    id: 201,
    name: "Elegant Gold Bracelet",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203257/2_lvjh8a.jpg"
  },
  {
    id: 202,
    name: "Pearl Earrings",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203256/1_li9cof.jpg"
  },
  {
    id: 203,
    name: "Silk Scarf",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203258/3_dhqg9h.jpg"
  }
];

// Container
const accessoriesContainer = document.getElementById("accessoriesProducts");

// ============== RENDER PRODUCTS ==============
function displayAccessoriesProducts() {
  if (!accessoriesContainer) return;

  accessoriesContainer.innerHTML = accessoriesProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayAccessoriesProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;
