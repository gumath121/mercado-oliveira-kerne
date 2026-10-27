
/*
  MERCADO OLIVEIRA & KERNE — CONFIGURAÇÃO
  Produtos, preços, endereço, WhatsApp e encarte.
*/

const CONFIG = {
  whatsapp: "5515997342383",

  endereco: "Rua Alberto Ernesto Guinther, 86 - Rechan, Itapetininga - SP",

  mapaUrl: "https://www.google.com/maps/search/?api=1&query=Rua%20Alberto%20Ernesto%20Guinther%2C%2086%2C%20Rechan%2C%20Itapetininga%20SP",

  encarteImagem: "",

  produtos: [
    // MERCEARIA
    {
      nome: "Arroz Camil 5 kg",
      categoria: "Mercearia",
      emoji: "🍚",
      preco: "21.19",
      unidade: "pacote",
      selo: "OFERTA"
    },
    {
      nome: "Café Mantiqueira 500 g",
      categoria: "Mercearia",
      emoji: "☕",
      preco: "17.98",
      unidade: "pacote",
      selo: "OFERTA"
    },
    {
      nome: "Açúcar cristal 5 kg",
      categoria: "Mercearia",
      emoji: "🛍️",
      preco: "13.48",
      unidade: "pacote",
      selo: "OFERTA"
    },
    {
      nome: "Feijão Camil 1 kg",
      categoria: "Mercearia",
      emoji: "🫘",
      preco: "7.49",
      unidade: "pacote",
      selo: "OFERTA"
    },
    {
      nome: "Óleo Soya 900 ml",
      categoria: "Mercearia",
      emoji: "🫒",
      preco: "7.78",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Leite condensado Italac 395 g",
      categoria: "Mercearia",
      emoji: "🥫",
      preco: "6.48",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Creme de leite Piracanjuba 200 g",
      categoria: "Mercearia",
      emoji: "🥛",
      preco: "2.89",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Ketchup Quero",
      categoria: "Mercearia",
      emoji: "🍅",
      preco: "12.99",
      unidade: "unidade",
      selo: "OFERTA"
    },

    // LIMPEZA
    {
      nome: "Sabão em pó Brilhante 800 g",
      categoria: "Limpeza",
      emoji: "🧺",
      preco: "10.48",
      unidade: "sachê",
      selo: "OFERTA"
    },
    {
      nome: "Sabão em pó Tixan 1,6 kg",
      categoria: "Limpeza",
      emoji: "🧼",
      preco: "19.98",
      unidade: "caixa",
      selo: "OFERTA"
    },
    {
      nome: "Sabão em pó Tixan 400 g",
      categoria: "Limpeza",
      emoji: "🧼",
      preco: "4.99",
      unidade: "pacote",
      selo: "OFERTA"
    },
    {
      nome: "Omo líquido 750 ml",
      categoria: "Limpeza",
      emoji: "🧴",
      preco: "16.98",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Amaciante Comfort 700 ml",
      categoria: "Limpeza",
      emoji: "🧴",
      preco: "13.99",
      unidade: "sachê",
      selo: "OFERTA"
    },
    {
      nome: "Água sanitária Triex 2 L",
      categoria: "Limpeza",
      emoji: "🧴",
      preco: "4.99",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Desinfetante Triex 2 L",
      categoria: "Limpeza",
      emoji: "🧴",
      preco: "4.89",
      unidade: "unidade",
      selo: "OFERTA"
    },

    // HIGIENE
    {
      nome: "Creme dental Colgate Tripla Ação 180 g",
      categoria: "Higiene",
      emoji: "🪥",
      preco: "8.29",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Sabonete Palmolive 85 g",
      categoria: "Higiene",
      emoji: "🧼",
      preco: "2.79",
      unidade: "unidade",
      selo: "OFERTA"
    },
    {
      nome: "Shampoo Monange 325 ml",
      categoria: "Higiene",
      emoji: "🧴",
      preco: "6.98",
      unidade: "unidade",
      selo: "OFERTA"
    },

    // AÇOUGUE
    {
      nome: "Bisteca suína",
      categoria: "Açougue",
      emoji: "🥩",
      preco: "18.99",
      unidade: "kg",
      selo: "OFERTA"
    }
  ]
};


// ELEMENTOS DO SITE
const grid = document.getElementById("productGrid");
let activeFilter = "Todos";


// FORMATAÇÃO DE PREÇOS
function money(value) {
  if (value === "" || value === null || value === undefined) {
    return "—";
  }

  const number = Number(String(value).replace(",", "."));

  if (!Number.isFinite(number)) {
    return "—";
  }

  return number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}


// PROTEÇÃO DE TEXTO HTML
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}


// EXIBIÇÃO DOS PRODUTOS
function renderProducts() {
  if (!grid) return;

  const items = CONFIG.produtos.filter(product =>
    activeFilter === "Todos" ||
    product.categoria === activeFilter
  );

  if (items.length === 0) {
    grid.innerHTML = `
      <p class="empty-products">
        Nenhum produto encontrado nesta categoria.
      </p>
    `;
    return;
  }

  grid.innerHTML = items.map(product => {
    const price = money(product.preco);

    return `
      <article class="product-card">
        <div class="product-visual">
          <span class="product-badge">
            ${escapeHTML(product.selo || "OFERTA")}
          </span>

          <span class="product-emoji" aria-hidden="true">
            ${product.emoji || "🛒"}
          </span>
        </div>

        <div class="product-info">
          <span class="product-category">
            ${escapeHTML(product.categoria || "Produtos")}
          </span>

          <h3>${escapeHTML(product.nome)}</h3>

          <div class="price-line">
            <span class="currency">R$</span>
            <span class="price">${price}</span>
            <span class="unit">
              / ${escapeHTML(product.unidade || "unidade")}
            </span>
          </div>

          <div class="product-edit-note">
            ${product.preco === ""
              ? "Preço a confirmar com o mercado"
              : "Consulte a validade da oferta"}
          </div>
        </div>
      </article>
    `;
  }).join("");
}


// FILTROS DE CATEGORIA
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll("[data-filter]").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderProducts();
  });
});


// WHATSAPP
function whatsappURL(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappURL(
    "Olá! Acessei o site do Mercado Oliveira & Kerne e gostaria de informações sobre as ofertas."
  );

  link.target = "_blank";
  link.rel = "noopener";
});


// ENDEREÇO E MAPA
const addressText = document.getElementById("addressText");
const mapLink = document.getElementById("mapLink");

if (addressText) {
  addressText.textContent = CONFIG.endereco;
}

if (mapLink) {
  mapLink.href = CONFIG.mapaUrl.trim() ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.endereco)}`;

  mapLink.target = "_blank";
  mapLink.rel = "noopener";
}


// ENCARTE DIGITAL
if (CONFIG.encarteImagem.trim()) {
  const preview = document.querySelector(".flyer-paper");

  if (preview) {
    const image = document.createElement("img");

    image.src = CONFIG.encarteImagem;
    image.alt = "Encarte de ofertas do Mercado Oliveira & Kerne";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "contain";
    image.style.display = "block";

    preview.replaceChildren(image);
    preview.style.padding = "0";
    preview.style.background = "transparent";
  }
}


// ANO AUTOMÁTICO NO RODAPÉ
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// MENU PARA CELULARES
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");

      menuToggle.textContent = "☰";
    });
  });
}


// INICIALIZAÇÃO
renderProducts();
