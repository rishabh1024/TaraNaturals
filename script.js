/**
 * Product Catalog Data
 * Edit this list to add, update, or remove your soaps and oils.
 * Fill in `price` and `size` when ready — they appear on the cards automatically.
 */
const products = [
  {
    id: "colourful-muse",
    name: "Colourful Muse",
    categoryLabel: "Melt & Pour Soap",
    price: "",
    size: "",
    description:
      "Gentle handcrafted melt and pour soap made with a creamy, nourishing goat milk soap base.",
    ingredients: "Goat Milk Soap Base",
    image: "assets/product_1.jpeg"
  },
  {
    id: "dewdrop",
    name: "Dewdrop",
    categoryLabel: "Melt & Pour Soap",
    price: "",
    size: "",
    description:
      "Hydrating melt and pour soap crafted with a glycerine soap base and sweet almond oil for soft, moisturized skin.",
    ingredients: "Glycerine Soap Base, Almond Oil",
    image: "assets/product_2.jpeg"
  },
  {
    id: "rose-ubtan-soap",
    name: "Rose Ubtan Soap",
    categoryLabel: "Melt & Pour Soap",
    price: "",
    size: "",
    description:
      "Aromatic melt and pour soap infused with rose petals, sandalwood powder, and orange peel powder for a traditional ubtan experience.",
    ingredients: "Rose Petals, Sandalwood Powder, Orange Peel Powder",
    image: "assets/product_3.jpeg"
  },
  {
    id: "olive-serenity",
    name: "Olive Serenity",
    categoryLabel: "Cold Process Soap",
    price: "",
    size: "",
    description:
      "Nourishing cold process soap formulated with pure olive oil and coconut oil for a gentle, conditioning cleanse.",
    ingredients: "Olive Oil, Coconut Oil",
    image: "assets/product_4.jpeg"
  },
  {
    id: "mocha-bliss",
    name: "Mocha Bliss",
    categoryLabel: "Cold Process Soap",
    price: "",
    size: "",
    description:
      "Rich cold process soap enriched with coffee, shea butter, and cocoa butter for a warm, indulgent skincare ritual.",
    ingredients: "Coffee, Shea Butter, Cocoa Butter",
    image: "assets/product_5.jpeg"
  },
  {
    id: "body-oil",
    name: "Body Oil",
    categoryLabel: "Botanical Oil",
    price: "",
    size: "",
    description:
      "A lightweight blend of plant oils that softens and nourishes skin, finished with calming lavender.",
    ingredients: "Jojoba Oil, Sweet Almond Oil, Sunflower Oil, Lavender Oil",
    image: "assets/product_6.jpeg"
  },
  {
    id: "hair-oil",
    name: "Hair Oil",
    categoryLabel: "Botanical Oil",
    price: "",
    size: "",
    description:
      "A nourishing herbal oil blend crafted to condition the scalp and strengthen hair from root to tip.",
    ingredients:
      "Coconut Oil, Sweet Almond Oil, Sesame Oil, Jojoba Oil, Rosemary Oil, Castor Oil",
    image: "assets/product_6.jpeg"
  }
];

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const yearSpan = document.getElementById("year");

let searchQuery = "";

function renderProducts() {
  const filtered = products.filter((product) => {
    const query = searchQuery.trim().toLowerCase();
    return (
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.ingredients.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <p>No products found matching your search. Try another keyword.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const priceHtml = product.price
        ? `<span class="product-price">${product.price}</span>`
        : "";
      const sizeHtml = product.size
        ? `<p class="product-size">${product.size}</p>`
        : "";
      const visualClass = product.categoryLabel
        .toLowerCase()
        .includes("oil")
        ? "oil-bg"
        : "soap-bg";

      return `
        <article class="product-card">
          <div class="product-visual ${visualClass}">
            <span class="product-badge">${product.categoryLabel}</span>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-body">
            <div class="product-header">
              <h3 class="product-title">${product.name}</h3>
              ${priceHtml}
            </div>
            ${sizeHtml}
            <p class="product-description">${product.description}</p>
            <p class="product-ingredients">
              <strong>Key Ingredients:</strong> ${product.ingredients}
            </p>
          </div>
        </article>
      `;
    })
    .join("");
}

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderProducts();
});

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderProducts();
