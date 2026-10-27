/*
  MERCADO OLIVEIRA & KERNE — CONFIGURAÇÃO
  Edite os produtos, preços, endereço e encarte nesta área.
  Os produtos e preços iniciais abaixo são apenas exemplos de layout.
  Substitua pelos produtos e valores reais antes de publicar.
*/
const CONFIG = {
  whatsapp: "5515997342383",
  endereco: "Rua Alberto Ernesto Guinther, 86 - Rechan, Itapetininga - SP",
  mapaUrl: "https://www.google.com/maps/search/?api=1&query=Rua%20Alberto%20Ernesto%20Guinther%2C%2086%20%2C%20Rechan%2C%20Itapetininga%20SP",
  encarteImagem: "", // Ex.: "encarte-semana.jpg" (arquivo na raiz do site)
  produtos: [
    { nome: "Banana nanica", categoria: "Hortifruti", emoji: "🍌", preco: "", unidade: "kg", selo: "OFERTA" },
    { nome: "Tomate", categoria: "Hortifruti", emoji: "🍅", preco: "", unidade: "kg", selo: "PREÇO BAIXO" },
    { nome: "Arroz 5 kg", categoria: "Mercearia", emoji: "🍚", preco: "", unidade: "pacote", selo: "OFERTA" },
    { nome: "Café 500 g", categoria: "Mercearia", emoji: "☕", preco: "", unidade: "pacote", selo: "OFERTA" },
    { nome: "Leite integral", categoria: "Bebidas", emoji: "🥛", preco: "", unidade: "1 litro", selo: "OFERTA" },
    { nome: "Refrigerante", categoria: "Bebidas", emoji: "🥤", preco: "", unidade: "2 litros", selo: "OFERTA" },
    { nome: "Detergente", categoria: "Limpeza", emoji: "🧴", preco: "", unidade: "unidade", selo: "PREÇO BAIXO" },
    { nome: "Frango", categoria: "Açougue", emoji: "🍗", preco: "", unidade: "kg", selo: "OFERTA" }
  ]
};

const grid = document.getElementById("productGrid");
let activeFilter = "Todos";

function money(value) {
  if (value === "" || value === null || value === undefined) return "—";
  const number = Number(String(value).replace(",", "."));
  if (!Number.isFinite(number)) return "—";
  return number.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderProducts() {
  const items = CONFIG.produtos.filter(p => activeFilter === "Todos" || p.categoria === activeFilter);
  grid.innerHTML = items.map(p => {
    const price = money(p.preco);
    return `<article class="product-card">
      <div class="product-visual"><span class="product-badge">${escapeHTML(p.selo || "OFERTA")}</span><span class="product-emoji" aria-hidden="true">${p.emoji || "🛒"}</span></div>
      <div class="product-info"><span class="product-category">${escapeHTML(p.categoria || "Produtos")}</span>
      <h3>${escapeHTML(p.nome)}</h3>
      <div class="price-line"><span class="currency">R$</span><span class="price">${price}</span><span class="unit">/ ${escapeHTML(p.unidade || "unidade")}</span></div>
      <div class="product-edit-note">${p.preco === "" ? "Preço a confirmar com o mercado" : "Consulte a validade da oferta"}</div></div>
    </article>`;
  }).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
    renderProducts();
  });
});

function whatsappURL(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappURL("Olá! Acessei o site do Mercado Oliveira & Kerne e gostaria de informações sobre as ofertas.");
  link.target = "_blank";
  link.rel = "noopener";
});

const addressText = document.getElementById("addressText");
const mapLink = document.getElementById("mapLink");
if (CONFIG.endereco.trim()) {
  addressText.textContent = CONFIG.endereco;
  mapLink.href = CONFIG.mapaUrl.trim() || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.endereco)}`;
} else {
  mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Mercado Oliveira & Kerne");
  mapLink.addEventListener("click", event => {
    if (!CONFIG.mapaUrl.trim() && !CONFIG.endereco.trim()) {
      // A busca por nome pode retornar mais de um local; confirme o endereço antes de publicar.
    }
  });
}

if (CONFIG.encarteImagem.trim()) {
  const preview = document.querySelector(".flyer-paper");
  preview.innerHTML = `<img src="${escapeHTML(CONFIG.encarteImagem)}" alt="Encarte de ofertas do Mercado Oliveira & Kerne" style="width:100%;height:100%;object-fit:contain;display:block">`;
  preview.style.padding = "0";
  preview.style.background = "transparent";
}
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuToggle.textContent = "☰";
}));

renderProducts();
