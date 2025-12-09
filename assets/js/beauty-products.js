// ============== BEAUTY PRODUCTS DATA ==============
const beautyProductsData = [
  {
    id: 301,
    name: "NYX Soft Matte Lip Cream",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203314/1_m1bfvx.jpg"
  },
  {
    id: 302,
    name: "Dasique Rose Petal Shadow Palette",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203317/3_ydqqsc.jpg"
  },
  {
    id: 303,
    name: "Miss Dior Eau de Parfum",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203315/2_hwehha.jpg"
  },
  {
    id: 304,
    name: "Beetroot & Vitamin A Serum Shot",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765211612/4_wuznkv.jpg"
  }
];

// Container
const beautyContainer = document.getElementById("beautyProducts");

// ============== RENDER BEAUTY PRODUCTS ==============
function displayBeautyProducts() {
  if (!beautyContainer) return;

  beautyContainer.innerHTML = beautyProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayBeautyProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;

