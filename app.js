const grid = document.querySelector("#product-grid");
const empty = document.querySelector("#empty-state");
const cartBar = document.querySelector("#cart-bar");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const whatsappButton = document.querySelector("#whatsapp-button");
const cart = new Map();
let filtroActual = "Todos";

document.querySelector("#drop-title").textContent = CONFIG.dropTitulo;
document.querySelector("#drop-description").textContent = CONFIG.dropDescripcion;
document.querySelector(".wordmark").innerHTML = `${CONFIG.nombre.toLowerCase()} <span>♡</span>`;
document.title = `${CONFIG.nombre} ♡ | Cositas que encuentro para ti`;

function soles(n){ return `S/ ${Number(n).toFixed(2).replace(".00","")}`; }

function renderProducts(){
  const visibles = PRODUCTOS.filter(p => filtroActual === "Todos" || p.categoria === filtroActual);
  grid.innerHTML = "";
  visibles.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    const imageContent = p.imagen
      ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><div class="image-placeholder" hidden>♡</div>`
      : `<div class="image-placeholder">♡</div>`;
    const paused = p.estado === "pausado";
    card.innerHTML = `
      <div class="product-image">${imageContent}<span class="status">${paused ? "Pausado por ahora" : "Consultar disponibilidad"}</span></div>
      <div class="product-info">
        <h3>${p.nombre}</h3>
        <p class="product-description">${p.descripcion}</p>
        <div class="product-bottom">
          <span class="price">${soles(p.precio)}</span>
          <button class="add-button ${cart.has(p.id) ? "added" : ""}" aria-label="${cart.has(p.id) ? "Quitar" : "Añadir"} ${p.nombre}" ${paused ? "disabled" : ""} data-id="${p.id}">${paused ? "–" : cart.has(p.id) ? "✓" : "+"}</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  empty.hidden = visibles.length !== 0;
  grid.querySelectorAll(".add-button:not(:disabled)").forEach(btn => btn.addEventListener("click", () => {
    const id = Number(btn.dataset.id);
    if(cart.has(id)) cart.delete(id); else cart.set(id,1);
    renderProducts(); updateCart();
  }));
}
function updateCart(){
  const count = [...cart.values()].reduce((a,b)=>a+b,0);
  const total = PRODUCTOS.filter(p=>cart.has(p.id)).reduce((sum,p)=>sum+p.precio*cart.get(p.id),0);
  cartBar.hidden = count === 0;
  cartCount.textContent = `${count} ${count===1?"cosita":"cositas"}`;
  cartTotal.textContent = `Total referencial: ${soles(total)}`;
}
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click",()=>{
  filtroActual = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));
  renderProducts();
}));
whatsappButton.addEventListener("click",()=>{
  if(!CONFIG.whatsapp || CONFIG.whatsapp === "51999999999"){
    alert("Antes de usar WhatsApp, abre products.js y reemplaza el número de ejemplo por el número de ventas.");
    return;
  }
  const lines = PRODUCTOS.filter(p=>cart.has(p.id)).map(p=>`• ${p.nombre} x ${cart.get(p.id)} — ${soles(p.precio)}`);
  const total = PRODUCTOS.filter(p=>cart.has(p.id)).reduce((sum,p)=>sum+p.precio*cart.get(p.id),0);
  const msg = `Holaaa ${CONFIG.nombre} ♡ Vi tu web y quiero consultar disponibilidad para:\n\n${lines.join("\n")}\n\nTotal referencial: ${soles(total)}\n\n¿Me confirmas si están disponibles y cuánto sería el envío?`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
});
renderProducts();
updateCart();
