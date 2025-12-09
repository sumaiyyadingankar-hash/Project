// ============== FEATURED PRODUCTS DATA ==============
const featuredProductsData = [
  {
    id: 1,
    name: "Premium Black Abaya",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196259/1_bq2b6k.jpg"
  },
  {
    id: 2,
    name: "Nida Fabric Abaya",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196260/2_ppeuvb.jpg"
  },
  {
    id: 3,
    name: "Luxury White Khimar",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196264/3_nzrjl3.jpg"
  },
  {
    id: 4,
    name: "Everyday Hijab Combo",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196265/4_ultqkv.jpg"
  },
  // {
  //   id: 5,
  //   name: "Elegant Party Abaya",
  //   price: "₹1999",
  //   image: "./assets/images/features/5.jpeg"
  // },
  // {
  //   id: 6,
  //   name: "Soft Jersey Hijab",
  //   price: "₹399",
  //   image: "./assets/images/features/6.jpeg"
  // }
];

// Render Featured Products on Home Page
const container = document.getElementById("featuredProducts");

function displayFeaturedProducts() {
  container.innerHTML = featuredProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayFeaturedProducts();

// When a product is clicked
function openProductPage(id) {
  window.location.href = `./pages/product.html?id=${id}`;
}



