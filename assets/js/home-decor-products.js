// ============== HOME DECOR PRODUCTS DATA ==============
const homeDecorProductsData = [
  {
    id: 601,
    name: "Elegant Islamic Wall Art",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203425/3_fkgiwz.jpg"
  },
  {
    id: 602,
    name: "Aromatic Scented Candles",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203422/2_nexadk.jpg"
  },
  {
    id: 603,
    name: "Decorative Flower Vase",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203427/home-decor_v4tf9w.jpg"
  },
  {
    id: 604,
    name: "Minimalist Table Lamp",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203420/1_my4wn8.jpg"
  }
];

// Container
const homeDecorContainer = document.getElementById("homeDecorProducts");

// ============== RENDER HOME DECOR PRODUCTS ==============
function displayHomeDecorProducts() {
  if (!homeDecorContainer) return;

  homeDecorContainer.innerHTML = homeDecorProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayHomeDecorProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;
