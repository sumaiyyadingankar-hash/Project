// ============== GIFTS PRODUCTS DATA ==============
const giftsProductsData = [
  {
    id: 501,
    name: "Luxury Perfume Gift Set",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203390/1_maf1ih.jpg"
  },
  {
    id: 502,
    name: "Beautiful Islamic Wall Frame",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765212087/https___surl_li_jzllrt_mrpb3y.jpg"
  },
  {
    id: 503,
    name: "Premium Coffee Mug Set",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203395/3_esujwp.jpg"
  },
  {
    id: 504,
    name: "Handmade Jewelry Box",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203392/2_dfeepy.jpg"
  }
];

// Container
const giftsContainer = document.getElementById("giftsProducts");

// ============== RENDER GIFTS PRODUCTS ==============
function displayGiftsProducts() {
  if (!giftsContainer) return;

  giftsContainer.innerHTML = giftsProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayGiftsProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;
