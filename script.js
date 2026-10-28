
const CONFIG = {
  whatsapp: "5515997342383",
  endereco: "Rua Alberto Ernesto Guinther, 86 - Rechan, Itapetininga - SP",
  mapaUrl: "https://www.google.com/maps/search/?api=1&query=Rua%20Alberto%20Ernesto%20Guinther%2C%2086%2C%20Rechan%2C%20Itapetininga%20SP",

  produtos: [
    // MERCEARIA
    { nome: "Arroz Camil 5 kg", categoria: "Mercearia", imagem: "camil.jpg", preco: 21.19, unidade: "pacote" },
    { nome: "Café Mantiqueira 500 g", categoria: "Mercearia", imagem: "Mantiqueira.jpeg", preco: 17.98, unidade: "pacote" },
    { nome: "Feijão Camil 1 kg", categoria: "Mercearia", imagem: "feijaocamil.jpeg", preco: 7.49, unidade: "pacote" },
    { nome: "Óleo Soya 900 ml", categoria: "Mercearia", imagem: "soya.jpeg", preco: 7.78, unidade: "unidade" },
    { nome: "Leite condensado Italac 395 g", categoria: "Mercearia", imagem: "leiteconditalac.png", preco: 6.48, unidade: "unidade" },
    { nome: "Ketchup Quero 1,28 kg", categoria: "Mercearia", imagem: "ketchupquero.png", preco: 12.99, unidade: "unidade" },
    { nome: "Creme de leite Piracanjuba 200 g", categoria: "Mercearia", imagem: "cremeleitepiracanjuba.png", preco: 2.89, unidade: "unidade" },
    { nome: "Milho verde Quero", categoria: "Mercearia", imagem: "queromilho.png", preco: 2.99, unidade: "lata" },
    { nome: "Molho de tomate Fugini", categoria: "Mercearia", imagem: "fuginimolho.png", preco: 1.69, unidade: "unidade" },
    { nome: "Feijão Campeão do Sul 1 kg", categoria: "Mercearia", imagem: "campeaofeijao.png", preco: 7.49, unidade: "pacote" },
    { nome: "Arroz Campeão do Sul 5 kg", categoria: "Mercearia", imagem: "arrozcampeaodosul.png", preco: 21.19, unidade: "pacote" },
    { nome: "Maionese Heinz", categoria: "Mercearia", imagem: "maioneseheinz.png", preco: 10.49, unidade: "unidade" },
    { nome: "Maionese Hellmann's", categoria: "Mercearia", imagem: "maionesehelmmans.png", preco: 9.98, unidade: "unidade" },
    { nome: "Requeijão Nestlé", categoria: "Mercearia", imagem: "requeijaonestle.png", preco: 10.98, unidade: "unidade" },
    { nome: "Leite Parmalat", categoria: "Mercearia", imagem: "parmalatleite.png", preco: null, unidade: "unidade" },
    { nome: "Óleo Vitaliv 900 ml", categoria: "Mercearia", imagem: "oleovitaliv.png", preco: 7.79, unidade: "unidade" },
    { nome: "Açúcar cristal Twister 5 kg", categoria: "Mercearia", imagem: "acucartwister.png", preco: 13.48, unidade: "pacote" },
    { nome: "Café Montana", categoria: "Mercearia", imagem: "pocafemontana.png", preco: 17.98, unidade: "pacote" },
    { nome: "Biscoito Wino Panco", categoria: "Mercearia", imagem: "pancodeliciosos.png", preco: 8.29, unidade: "pacote" },
    { nome: "Pão de forma Panco", categoria: "Mercearia", imagem: "paoformapanco.png", preco: 9.29, unidade: "pacote" },
    { nome: "Wafer Bauducco", categoria: "Mercearia", imagem: "waferbauducco.png", preco: 3.29, unidade: "pacote" },
    { nome: "Bolinho Bauducco", categoria: "Mercearia", imagem: "baby.png", preco: 1.98, unidade: "unidade" },
    { nome: "Panetone Parati", categoria: "Mercearia", imagem: "panetoneparati.png", preco: 19.98, unidade: "unidade" },
    { nome: "Bis", categoria: "Mercearia", imagem: "bis.png", preco: 6.48, unidade: "caixa" },
    { nome: "Chocolate Clássicos Panco", categoria: "Mercearia", imagem: "chococlassicospanco.png", preco: 4.98, unidade: "unidade" },
    { nome: "Dadinho", categoria: "Mercearia", imagem: "dadinho.png", preco: 12.49, unidade: "unidade" },
    { nome: "Nobreli Duo", categoria: "Mercearia", imagem: "nobrelliduo.png", preco: 12.99, unidade: "unidade" },
    { nome: "Pão de alho", categoria: "Mercearia", imagem: "paodealho.png", preco: null, unidade: "pacote" },
    { nome: "Iogurte Nestlé (bandeja)", categoria: "Mercearia", imagem: "iogurtenestle.png", preco: 8.98, unidade: "bandeja" },

    // BEBIDAS
    { nome: "Suco Trink", categoria: "Bebidas", imagem: "sucotrink.png", preco: 0.89, unidade: "unidade" },
    { nome: "Refrigerante Kuat 2 L", categoria: "Bebidas", imagem: "Kuat.png", preco: 5.49, unidade: "garrafa" },

    // LIMPEZA
    { nome: "Sabão em pó Brilhante", categoria: "Limpeza", imagem: "brilhante.png", preco: 10.48, unidade: "sachê" },
    { nome: "Sabão em pó Tixan 400 g", categoria: "Limpeza", imagem: "tixan400.png", preco: 4.99, unidade: "pacote" },
    { nome: "Sabão em pó Tixan 1 kg", categoria: "Limpeza", imagem: "tixan16.png", preco: 19.98, unidade: "pacote" },
    { nome: "Omo líquido", categoria: "Limpeza", imagem: "omoliq.png", preco: 16.98, unidade: "unidade" },
    { nome: "Amaciante Downy", categoria: "Limpeza", imagem: "amaciantedowny.png", preco: 12.98, unidade: "unidade" },
    { nome: "Amaciante Ypê 2 L", categoria: "Limpeza", imagem: "amacianteype2l.png", preco: 10.79, unidade: "unidade" },
    { nome: "Amaciante Comfort", categoria: "Limpeza", imagem: "amacianteconfort.png", preco: 13.99, unidade: "unidade" },
    { nome: "Comfort Boom", categoria: "Limpeza", imagem: "comfortboom.png", preco: 17.98, unidade: "unidade" },
    { nome: "Água sanitária Triex 2 L", categoria: "Limpeza", imagem: "aguasanitariatriex.png", preco: 4.99, unidade: "unidade" },
    { nome: "Desinfetante Triex 2 L", categoria: "Limpeza", imagem: "desinfetantetriex.png", preco: 4.89, unidade: "unidade" },
    { nome: "Limpador perfumado Triex", categoria: "Limpeza", imagem: "perfumadotriex.png", preco: 3.19, unidade: "unidade" },
    { nome: "Limpador multiuso UAU", categoria: "Limpeza", imagem: "limpadormultiusouau.png", preco: 3.98, unidade: "unidade" },
    { nome: "Desinfetante multisuperfície", categoria: "Limpeza", imagem: null, preco: 4.98, unidade: "unidade" },
    { nome: "Detergente Limpol", categoria: "Limpeza", imagem: "limpol.png", preco: 2.49, unidade: "unidade" },
    { nome: "Cera Brilho Fácil", categoria: "Limpeza", imagem: "cerabrilhofacil.png", preco: 15.98, unidade: "unidade" },
    { nome: "Sabão líquido Vida Macia infantil", categoria: "Limpeza", imagem: "sabaoliquidovidamacia.png", preco: 12.49, unidade: "unidade" },

    // HIGIENE
    { nome: "Creme dental Colgate Tripla Ação", categoria: "Higiene", imagem: "colgate.png", preco: 8.29, unidade: "unidade" },
    { nome: "Sabonete Palmolive", categoria: "Higiene", imagem: "palmolivesabonete.png", preco: 2.79, unidade: "unidade" },
    { nome: "Desodorante Axe", categoria: "Higiene", imagem: "axedesodorante.png", preco: 9.29, unidade: "unidade" },
    { nome: "Desodorante Monange", categoria: "Higiene", imagem: "desodorantemonange.png", preco: 10.89, unidade: "unidade" },
    { nome: "Shampoo Monange", categoria: "Higiene", imagem: "monageshampoo.png", preco: 6.98, unidade: "unidade" },
    { nome: "Condicionador Monange", categoria: "Higiene", imagem: "condicionadormonange.png", preco: 7.98, unidade: "unidade" },
    { nome: "Hidratante Monange", categoria: "Higiene", imagem: "hidramonange.png", preco: 7.98, unidade: "unidade" },
    { nome: "Creme para pentear Elseve", categoria: "Higiene", imagem: "cremepentearelseve.png", preco: 17.49, unidade: "unidade" },
    { nome: "Kit shampoo Muel Baby", categoria: "Higiene", imagem: "baby.png", preco: 19.98, unidade: "kit" },
    { nome: "Papel higiênico Mili", categoria: "Higiene", imagem: "milipapelhigienico.png", preco: 12.49, unidade: "pacote" },
    { nome: "Fralda Turma da Mônica", categoria: "Higiene", imagem: "Fraldamonicababy.png", preco: 24.99, unidade: "pacote" },
    { nome: "Creme dental Barbie / Galinha Pintadinha", categoria: "Higiene", imagem: "galinhapintadinha.png", preco: 4.98, unidade: "unidade" },

    // AÇOUGUE
    { nome: "Bisteca suína", categoria: "Açougue", imagem: "bistecasuina.png", preco: 18.99, unidade: "kg" },
    { nome: "Bisteca sete", categoria: "Açougue", imagem: "bistecasete.png", preco: 34.98, unidade: "kg" },
    { nome: "Costela bovina", categoria: "Açougue", imagem: "costelabovina.png", preco: 29.99, unidade: "kg" },
    { nome: "Carne moída", categoria: "Açougue", imagem: "carnemoida.png", preco: 31.99, unidade: "kg" },
    { nome: "Picadão bovino", categoria: "Açougue", imagem: "picadaobovino.png", preco: 33.98, unidade: "kg" },
    { nome: "Bacon Perdigão", categoria: "Açougue", imagem: "bacon.png", preco: null, unidade: "unidade" },
    { nome: "Frango congelado inteiro", categoria: "Açougue", imagem: "frangointeiro.png", preco: null, unidade: "kg" },
    { nome: "Coxa e sobrecoxa", categoria: "Açougue", imagem: "sobrecoxa.png", preco: null, unidade: "kg" },
    { nome: "Linguiça para churrasco Rezende", categoria: "Açougue", imagem: "linguiça.png", preco: null, unidade: "kg" }
  ]
};

function formatarPreco(valor) {
  if (valor === null || valor === undefined || valor === "") {
    return "Preço a consultar";
  }

  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function criarLinkWhatsApp(produto) {
  const preco = produto.preco == null
    ? "Preço a consultar"
    : formatarPreco(produto.preco) + (produto.unidade === "kg" ? "/kg" : "");

  const mensagem = `Olá! Gostaria de informações sobre ${produto.nome}. Preço informado no site: ${preco}.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

function renderizarProdutos(filtro = "Todos") {
  const grade = document.getElementById("productGrid");
  if (!grade) return;

  const produtosFiltrados = CONFIG.produtos.filter(produto =>
    filtro === "Todos" || produto.categoria === filtro
  );

  if (!produtosFiltrados.length) {
    grade.innerHTML = '<p class="empty-products">Nenhum produto encontrado nesta categoria.</p>';
    return;
  }

  grade.innerHTML = produtosFiltrados.map(produto => {
    const imagem = produto.imagem
      ? `<img class="product-image" src="./${produto.imagem}" alt="${produto.nome}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
      : "";

    const precoHTML = produto.preco == null
      ? '<span class="price-to-check">Preço a consultar</span>'
      : `${formatarPreco(produto.preco)}${produto.unidade === "kg" ? '<small>/kg</small>' : ""}`;

    return `
      <article class="product-card">
        <div class="product-photo">
          ${imagem}
          <div class="product-emoji" style="${produto.imagem ? "display:none" : "display:flex"}">🛒</div>
          <span class="product-badge">OFERTA</span>
        </div>
        <div class="product-info">
          <span class="product-category">${produto.categoria}</span>
          <h3 class="product-name">${produto.nome}</h3>
          <div class="product-price">${precoHTML}</div>
          <a class="product-whatsapp" href="${criarLinkWhatsApp(produto)}" target="_blank" rel="noopener">
            Consultar pelo WhatsApp ↗
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function configurarFiltros() {
  document.querySelectorAll("[data-filter]").forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
      botao.classList.add("active");
      renderizarProdutos(botao.dataset.filter);
    });
  });
}

function configurarWhatsApp() {
  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site do Mercado Oliveira & Kerne e gostaria de informações."
  );
  const link = `https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`;

  document.querySelectorAll("[data-whatsapp]").forEach(elemento => {
    elemento.href = link;
    elemento.target = "_blank";
    elemento.rel = "noopener";
  });
}

function configurarMenu() {
  const botao = document.getElementById("menuToggle");
  const menu = document.getElementById("mainNav");

  if (!botao || !menu) return;

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("open");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botao.textContent = aberto ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
      botao.textContent = "☰";
    });
  });
}

function inicializarSite() {
  renderizarProdutos();
  configurarFiltros();
  configurarWhatsApp();
  configurarMenu();

  const ano = document.getElementById("year");
  if (ano) ano.textContent = new Date().getFullYear();

  const endereco = document.getElementById("addressText");
  if (endereco) endereco.textContent = CONFIG.endereco;

  const mapa = document.getElementById("mapLink");
  if (mapa) {
    mapa.href = CONFIG.mapaUrl;
    mapa.target = "_blank";
    mapa.rel = "noopener";
  }
}

document.addEventListener("DOMContentLoaded", inicializarSite);
