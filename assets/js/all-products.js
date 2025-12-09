// =============== ALL PRODUCTS FROM ALL CATEGORIES ===============

// PRODUCT LIST
const featuredProductsData = [
  {
    id: 1,
    name: "Black Abaya",
    price: "₹1499",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196259/1_bq2b6k.jpg",
    desc: "Elegant black abaya made from breathable, premium-grade fabric."
  },
  {
    id: 2,
    name: "Pink Scarf",
    price: "₹299",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196260/2_ppeuvb.jpg",
    desc: "Soft chiffon scarf perfect for casual or formal outfits."
  },
  {
    id: 3,
    name: "Modest Dress",
    price: "₹1899",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196264/3_nzrjl3.jpg",
    desc: "A stylish full-coverage modest dress with premium stitching."
  },
  {
    id: 4,
    name: "Hijab Pins Set",
    price: "₹99",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196265/4_ultqkv.jpg",
    desc: "Pack of 6 high-quality anti-slip hijab pins."
  }
];

// Clothing
const clothingProductsData = [
  { id: 101, name: "Black Nida Abaya", price: "₹1499", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/2_al3g3t.jpg", desc: "Premium Nida Fabric Abaya." },
  { id: 102, name: "Premium White Khimar", price: "₹799", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203232/3_pb4s6d.jpg", desc: "Soft premium khimar." },
  { id: 103, name: "Soft Jersey Hijab", price: "₹350", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/1_yuojrk.jpg", desc: "Comfortable daily wear hijab." }
];

// Accessories
const accessoriesProductsData = [
  { id: 201, name: "Elegant Bracelet", price: "₹250", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203257/2_lvjh8a.jpg", desc: "Beautiful gold-plated bracelet." },
  { id: 202, name: "Black Handbag", price: "₹699", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203256/1_li9cof.jpg", desc: "Stylish everyday handbag." },
  { id: 203, name: "Necklace Set", price: "₹350", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203258/3_dhqg9h.jpg", desc: "Minimalistic elegant necklace." }
];

// Beauty
const beautyProductsData = [
  { id: 301, name: "Lip Gloss", price: "₹199", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203314/1_m1bfvx.jpg", desc: "Smooth glossy finish." },
  { id: 302, name: "Compact Powder", price: "₹299", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203317/3_ydqqsc.jpg", desc: "Long-lasting compact." },
  { id: 303, name: "Eyeliner", price: "₹149", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203315/2_hwehha.jpg", desc: "Smudge-proof eyeliner." },
   { id: 304, name: "Eyeliner", price: "₹149", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765211612/4_wuznkv.jpg", desc: "Smudge-proof eyeliner." }
];

// Books
const booksProductsData = [
  { id: 401, name: "Islamic Book", price: "₹249", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/2_qj58gy.jpg", desc: "Must-read Islamic guide." },
  { id: 402, name: "Motivational Book", price: "₹199", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/3_qcdumw.jpg", desc: "Book to inspire your life." },
   { id: 403, name: "Motivational Book", price: "₹199", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203345/1_iuxp9x.jpg", desc: "Book to inspire your life." },
    { id: 404, name: "Motivational Book", price: "₹199", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765211845/Atomic_Habits_tmmpj7.jpg", desc: "Book to inspire your life." }
];

// Gifts
const giftsProductsData = [
  { id: 501, name: "Gift Hamper", price: "₹599", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203390/1_maf1ih.jpg", desc: "Perfect gift set." },
  { id: 502, name: "Chocolate Box", price: "₹399", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765212087/https___surl_li_jzllrt_mrpb3y.jpg", desc: "Premium chocolates." },
   { id: 503, name: "Chocolate Box", price: "₹399", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203395/3_esujwp.jpg", desc: "Premium chocolates." },
    { id: 504, name: "Chocolate Box", price: "₹399", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203392/2_dfeepy.jpg", desc: "Premium chocolates." }
];

// Home Decor
const homeDecorProductsData = [
  { id: 601, name: "Wall Art", price: "₹499", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203425/3_fkgiwz.jpg", desc: "Beautiful Islamic wall frame." },
  { id: 602, name: "Scented Candle", price: "₹299", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203422/2_nexadk.jpg", desc: "Long-lasting scented candle." },
    { id: 603, name: "Scented Candle", price: "₹299", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203427/home-decor_v4tf9w.jpg", desc: "Long-lasting scented candle." },
      { id: 604, name: "Scented Candle", price: "₹299", image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203420/1_my4wn8.jpg", desc: "Long-lasting scented candle." }
];

// MERGE EVERYTHING
const allProducts = [
  ...featuredProductsData,
  ...clothingProductsData,
  ...accessoriesProductsData,
  ...beautyProductsData,
  ...booksProductsData,
  ...giftsProductsData,
  ...homeDecorProductsData
];

// MAKE GLOBAL
window.allProducts = allProducts;

