/**
 * Product Catalog Data
 * Edit this list to add, update, or remove your soaps and oils.
 * Set `image` to a file path (e.g. "images/lavender-soap.jpg") if you add product photos later.
 */
const products = [
  {
    id: "lavender-oat-soap",
    name: "Lavender & Colloidal Oat Bar",
    category: "soap",
    categoryLabel: "Natural Soap",
    price: "$8.00",
    size: "4.5 oz (125g) Bar",
    description: "A calming, creamy bar crafted for sensitive and dry skin. Gently exfoliates while soothing irritation.",
    ingredients: "Saponified Olive, Coconut & Shea Oils, Colloidal Oatmeal, French Lavender Essential Oil",
    icon: "🧼",
    image: ""
  },
  {
    id: "turmeric-honey-soap",
    name: "Turmeric & Raw Honey Glow Bar",
    category: "soap",
    categoryLabel: "Natural Soap",
    price: "$8.50",
    size: "4.5 oz (125g) Bar",
    description: "Brightening cold-processed soap infused with organic turmeric root and raw wildflower honey.",
    ingredients: "Saponified Olive & Castor Oils, Raw Honey, Organic Turmeric Root, Sweet Orange Oil",
    icon: "🍯",
    image: ""
  },
  {
    id: "neem-tea-tree-soap",
    name: "Neem & Tea Tree Purifying Bar",
    category: "soap",
    categoryLabel: "Natural Soap",
    price: "$8.50",
    size: "4.5 oz (125g) Bar",
    description: "Deeply cleansing herbal bar ideal for blemish-prone or combination skin.",
    ingredients: "Cold-Pressed Neem Oil, Coconut Oil, French Green Clay, Tea Tree Essential Oil",
    icon: "🌿",
    image: ""
  },
  {
    id: "charcoal-eucalyptus-soap",
    name: "Activated Charcoal & Eucalyptus Soap",
    category: "soap",
    categoryLabel: "Natural Soap",
    price: "$9.00",
    size: "4.5 oz (125g) Bar",
    description: "Draws out impurities and excess oil while leaving a crisp, refreshing botanical scent.",
    ingredients: "Activated Bamboo Charcoal, Saponified Olive & Shea Butter, Eucalyptus Essential Oil",
    icon: "🌱",
    image: ""
  },
  {
    id: "sweet-almond-oil",
    name: "Cold-Pressed Sweet Almond Oil",
    category: "oil",
    categoryLabel: "Botanical Oil",
    price: "$14.00",
    size: "100 ml Glass Bottle",
    description: "Lightweight, vitamin E-rich body and face oil that absorbs quickly to soften and condition skin.",
    ingredients: "100% Pure Cold-Pressed Prunus Amygdalus Dulcis (Sweet Almond) Oil",
    icon: "💧",
    image: ""
  },
  {
    id: "rosemary-scalp-oil",
    name: "Rosemary & Castor Hair Elixir",
    category: "oil",
    categoryLabel: "Botanical Oil",
    price: "$18.00",
    size: "100 ml Dropper Bottle",
    description: "Nourishing herbal scalp and hair oil formulated to strengthen roots and add natural shine.",
    ingredients: "Cold-Pressed Castor Oil, Golden Jojoba Oil, Amla Extract, Rosemary Essential Oil",
    icon: "🌾",
    image: ""
  },
  {
    id: "kumkumadi-face-oil",
    name: "Saffron & Rosehip Facial Oil",
    category: "oil",
    categoryLabel: "Botanical Oil",
    price: "$22.00",
    size: "30 ml Dropper Bottle",
    description: "Restorative night oil packed with antioxidants for radiant, deeply hydrated skin.",
    ingredients: "Cold-Pressed Rosehip Seed Oil, Golden Jojoba, Kashmiri Saffron Threads, Vitamin E",
    icon: "🌸",
    image: ""
  },
  {
    id: "virgin-coconut-body-oil",
    name: "Herb-Infused Virgin Coconut Oil",
    category: "oil",
    categoryLabel: "Botanical Oil",
    price: "$15.00",
    size: "150 ml Glass Bottle",
    description: "Small-batch cold-pressed coconut oil slow-infused with calendula petals and chamomile.",
    ingredients: "Unrefined Virgin Coconut Oil, Dried Calendula Blossoms, Roman Chamomile",
    icon: "🥥",
    image: ""
  }
];

const productGrid = document.getElementById("product-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const yearSpan = document.getElementById("year");

let activeCategory = "all";
let searchQuery = "";

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.ingredients.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <p>No products found matching your filter. Try another search or category.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const visualClass = product.category === "soap" ? "soap-bg" : "oil-bg";
      const visualContent = product.image
        ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
        : `<span aria-hidden="true">${product.icon}</span>`;

      return `
        <article class="product-card">
          <div class="product-visual ${visualClass}">
            <span class="product-badge">${product.categoryLabel}</span>
            ${visualContent}
          </div>
          <div class="product-body">
            <div class="product-header">
              <h3 class="product-title">${product.name}</h3>
              <span class="product-price">${product.price}</span>
            </div>
            <p class="product-size">${product.size}</p>
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

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderProducts();
});

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

renderProducts();
