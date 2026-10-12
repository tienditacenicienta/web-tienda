
const grid = document.querySelector("#product-grid");
const empty = document.querySelector("#empty-state");
const cartBar = document.querySelector("#cart-bar");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const whatsappButton = document.querySelector("#whatsapp-button");

const cart = new Map();
const supportCart = new Map();

let filtroActual = "Todos";

document.querySelector("#drop-title").textContent = CONFIG.dropTitulo;
document.querySelector("#drop-description").textContent = CONFIG.dropDescripcion;
document.querySelector(".wordmark").innerHTML =
  `${CONFIG.nombre.toLowerCase()} <span>♡</span>`;
document.title = `${CONFIG.nombre} ♡ | Cositas que encuentro para ti`;

function soles(n) {
  return `S/ ${Number(n).toFixed(2).replace(/\.00$/, "")}`;
}

function renderProducts() {
  const visibles = PRODUCTOS.filter(
    p => filtroActual === "Todos" || p.categoria === filtroActual
  );

  grid.innerHTML = "";

  visibles.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageContent = p.imagen
      ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><div class="image-placeholder" hidden>♡</div>`
      : `<div class="image-placeholder">♡</div>`;

    const paused = p.estado === "pausado";

    card.innerHTML = `
      <div class="product-image">
        ${imageContent}
        <span class="status">${paused ? "Pausado por ahora" : "Consultar disponibilidad"}</span>
      </div>
      <div class="product-info">
        <h3>${p.nombre}</h3>
        <p class="product-description">${p.descripcion}</p>
        <div class="product-bottom">
          <span class="price">${soles(p.precio)}</span>
          <button
            class="add-button ${cart.has(p.id) ? "added" : ""}"
            aria-label="${cart.has(p.id) ? "Quitar" : "Añadir"} ${p.nombre}"
            ${paused ? "disabled" : ""}
            data-id="${p.id}"
            type="button"
          >${paused ? "–" : cart.has(p.id) ? "✓" : "+"}</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  empty.hidden = visibles.length !== 0;

  grid.querySelectorAll(".add-button:not(:disabled)").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);

      if (cart.has(id)) {
        cart.delete(id);
      } else {
        cart.set(id, 1);
      }

      renderProducts();
      updateCart();
    });
  });
}

function renderGifts() {
  document.querySelectorAll(".gift-button[data-gift-id]").forEach(btn => {
    const id = btn.dataset.giftId;
    const selected = supportCart.has(id);

    btn.classList.toggle("selected", selected);
    btn.setAttribute("aria-pressed", String(selected));
    btn.textContent = selected
      ? "✓ Detalle elegido · Quitar"
      : "Elegir este detalle +";
  });
}

function getProductTotal() {
  return PRODUCTOS.reduce((sum, p) => {
    return sum + (cart.has(p.id) ? p.precio * cart.get(p.id) : 0);
  }, 0);
}

function getSupportTotal() {
  return [...supportCart.values()].reduce((sum, item) => {
    return sum + item.precio * item.cantidad;
  }, 0);
}

function updateCart() {
  const productCount = [...cart.values()].reduce((sum, qty) => sum + qty, 0);
  const supportCount = [...supportCart.values()].reduce(
    (sum, item) => sum + item.cantidad,
    0
  );

  const count = productCount + supportCount;
  const total = getProductTotal() + getSupportTotal();

  cartBar.hidden = count === 0;

  cartCount.textContent = `${count} ${count === 1 ? "cosita" : "cositas"}`;
  cartTotal.textContent = `Total referencial: ${soles(total)}`;
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    filtroActual = btn.dataset.filter;

    document.querySelectorAll(".filter").forEach(b => {
      b.classList.toggle("active", b === btn);
    });

    renderProducts();
  });
});

// Apoyos de monto fijo: se pueden elegir o quitar del carrito.
document.querySelectorAll(".gift-button[data-gift-id]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.giftId;

    if (supportCart.has(id)) {
      supportCart.delete(id);
    } else {
      supportCart.set(id, {
        nombre: btn.dataset.giftName,
        precio: Number(btn.dataset.giftPrice),
        cantidad: 1
      });
    }

    renderGifts();
    updateCart();
  });
});

// Apoyo de monto personalizado.
const customAmountInput = document.querySelector("#custom-gift-amount");
const customGiftButton = document.querySelector("#add-custom-gift");
const customGiftFeedback = document.querySelector("#custom-gift-feedback");

customGiftButton.addEventListener("click", () => {
  const amount = Number(customAmountInput.value);

  if (
    !Number.isFinite(amount) ||
    amount < 1 ||
    amount > 10000 ||
    !/^\d+(\.\d{1,2})?$/.test(customAmountInput.value.trim())
  ) {
    customGiftFeedback.textContent =
      "Ingresa un monto válido entre S/ 1 y S/ 10,000 (máximo 2 decimales).";
    return;
  }

  supportCart.set("libre", {
    nombre: "Un cariñito libre",
    precio: amount,
    cantidad: 1
  });

  customGiftFeedback.textContent =
    `Cariñito de ${soles(amount)} agregado ♡`;

  renderGifts();
  updateCart();
});

// Consultar productos y apoyos en un solo mensaje.
whatsappButton.addEventListener("click", () => {
  if (!CONFIG.whatsapp || CONFIG.whatsapp === "51999999999") {
    alert("Revisa el número de WhatsApp en products.js.");
    return;
  }

  if (cart.size === 0 && supportCart.size === 0) {
    alert("Primero elige un producto o un cariñito ♡");
    return;
  }

  const productLines = PRODUCTOS
    .filter(p => cart.has(p.id))
    .map(p => `• ${p.nombre} x ${cart.get(p.id)} — ${soles(p.precio * cart.get(p.id))}`);

  const supportLines = [...supportCart.values()].map(item => {
    return `• ${item.nombre} — ${soles(item.precio * item.cantidad)}`;
  });

  const total = getProductTotal() + getSupportTotal();
  const sections = [];

  if (productLines.length) {
    sections.push(`PRODUCTOS\n${productLines.join("\n")}`);
  }

  if (supportLines.length) {
    sections.push(`APOYOS VOLUNTARIOS ♡\n${supportLines.join("\n")}`);
  }

  const msg =
    `Holaaa ${CONFIG.nombre} ♡ Quisiera consultar mi selección:\n\n` +
    sections.join("\n\n") +
    `\n\nTotal referencial: ${soles(total)}\n\n` +
    `¿Me confirmas la disponibilidad de los productos, el envío y los detalles del apoyo antes de pagar? ¡Gracias! ♡`;

  window.open(
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,
    "_blank",
    "noopener"
  );
});

renderProducts();
renderGifts();
updateCart();
