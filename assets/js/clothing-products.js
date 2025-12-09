// ============== CLOTHING PRODUCTS DATA ==============
const clothingProductsData = [
  {
    id: 101,
    name: "Black Nida Abaya",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/2_al3g3t.jpg"
  },
  {
    id: 102,
    name: "Premium White Khimar",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203232/3_pb4s6d.jpg"
  },
  {
    id: 103,
    name: "Soft Jersey Hijab",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/1_yuojrk.jpg"
  }
];

// Container
const clothingContainer = document.getElementById("clothingProducts");

// ============== RENDER PRODUCTS ==============
function displayClothingProducts() {
  if (!clothingContainer) return;

  clothingContainer.innerHTML = clothingProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayClothingProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

// 🔥 MAKE THE FUNCTION GLOBAL
window.openProductPage = openProductPage;
