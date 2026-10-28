
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

/* =========================================
   LISTA DE COMPRAS — MERCADO OLIVEIRA & KERNE
========================================= */

let listaCompras = [];

try {
  listaCompras = JSON.parse(localStorage.getItem("mercadoOK_listaCompras")) || [];
} catch {
  listaCompras = [];
}

function salvarListaCompras() {
  try {
    localStorage.setItem(
      "mercadoOK_listaCompras",
      JSON.stringify(listaCompras)
    );
  } catch (erro) {
    console.warn("Não foi possível salvar a lista neste navegador.");
  }
}

function moeda(valor) {
  return valor == null
    ? "A consultar"
    : valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
}

function quantidadeNaLista(nome) {
  const item = listaCompras.find(p => p.nome === nome);
  return item ? item.quantidade : 0;
}

function adicionarProduto(nome) {
  const produto = CONFIG.produtos.find(p => p.nome === nome);
  if (!produto) return;

  const existente = listaCompras.find(p => p.nome === nome);

  if (existente) {
    existente.quantidade++;
  } else {
    listaCompras.push({
      nome: produto.nome,
      preco: produto.preco,
      unidade: produto.unidade,
      quantidade: 1
    });
  }

  salvarListaCompras();
  atualizarCarrinho();
  renderizarProdutos(
    document.querySelector("[data-filter].active")?.dataset.filter || "Todos"
  );
}

function alterarQuantidade(nome, variacao) {
  const item = listaCompras.find(p => p.nome === nome);
  if (!item) return;

  item.quantidade += variacao;

  if (item.quantidade <= 0) {
    listaCompras = listaCompras.filter(p => p.nome !== nome);
  }

  salvarListaCompras();
  atualizarCarrinho();
  renderizarProdutos(
    document.querySelector("[data-filter].active")?.dataset.filter || "Todos"
  );
}

function removerProduto(nome) {
  listaCompras = listaCompras.filter(p => p.nome !== nome);
  salvarListaCompras();
  atualizarCarrinho();
  renderizarProdutos(
    document.querySelector("[data-filter].active")?.dataset.filter || "Todos"
  );
}

function totalLista() {
  return listaCompras.reduce((total, item) => {
    return total + (item.preco == null ? 0 : item.preco * item.quantidade);
  }, 0);
}

function quantidadeTotal() {
  return listaCompras.reduce((total, item) => total + item.quantidade, 0);
}

/* Cria o botão flutuante e a janela da lista */
function configurarCarrinho() {
  if (document.getElementById("shoppingCartButton")) return;

  const estilo = document.createElement("style");
  estilo.textContent = `
    #shoppingCartButton {
      position:fixed; right:22px; bottom:92px; z-index:40;
      display:flex; align-items:center; gap:10px;
      border:0; border-radius:999px; padding:14px 19px;
      background:#147b43; color:white; font-weight:900;
      box-shadow:0 5px 20px #0003; cursor:pointer;
    }
    #shoppingCartButton .cart-count {
      display:grid; place-items:center; min-width:25px; height:25px;
      padding:0 5px; background:#ffd52a; color:#242424;
      border-radius:50%; font-size:12px;
    }
    #shoppingCartPanel {
      display:none; position:fixed; inset:0; z-index:100;
      background:#0008; align-items:center; justify-content:center;
      padding:14px;
    }
    #shoppingCartPanel.open { display:flex; }
    .cart-window {
      background:white; width:min(100%,520px); max-height:90vh;
      overflow:auto; border-radius:18px; padding:22px;
      box-shadow:0 15px 50px #0003;
    }
    .cart-heading {
      display:flex; justify-content:space-between; align-items:center;
      gap:12px; margin-bottom:16px;
    }
    .cart-heading h2 { margin:0; font-size:23px; }
    .cart-close {
      border:0; background:#f1f1f1; border-radius:50%;
      width:38px; height:38px; font-size:22px; cursor:pointer;
    }
    .cart-item {
      display:grid; grid-template-columns:1fr auto; gap:8px;
      padding:13px 0; border-bottom:1px solid #eee;
    }
    .cart-item-name { font-weight:800; }
    .cart-item-price { color:#666; font-size:12px; margin-top:4px; }
    .cart-item-actions {
      display:flex; align-items:center; gap:9px;
    }
    .cart-item-actions button {
      width:30px; height:30px; border:0; border-radius:8px;
      background:#f1f1f1; font-weight:900; cursor:pointer;
    }
    .cart-remove {
      grid-column:1/-1; justify-self:start; border:0;
      background:none; color:#c71925; padding:4px 0;
      font-size:12px; cursor:pointer;
    }
    .cart-total {
      display:flex; justify-content:space-between; align-items:center;
      gap:10px; padding:18px 0; font-weight:900; font-size:18px;
    }
    .cart-note { color:#777; font-size:12px; line-height:1.5; }
    .cart-actions { display:grid; gap:9px; margin-top:14px; }
    .cart-action-button {
      display:block; width:100%; padding:14px; border:0;
      border-radius:10px; font-weight:900; cursor:pointer;
    }
    .cart-generate { background:#147b43; color:white; }
    .cart-clear { background:#f1f1f1; color:#333; }
    .cart-empty { text-align:center; color:#777; padding:30px 8px; }
    @media(max-width:600px) {
      #shoppingCartButton { right:14px; bottom:80px; padding:12px 15px; }
      .cart-window { padding:17px; }
    }
  `;
  document.head.appendChild(estilo);

  const botao = document.createElement("button");
  botao.id = "shoppingCartButton";
  botao.type = "button";
  botao.innerHTML = '🛒 Minha lista <span class="cart-count" id="cartCount">0</span>';
  botao.addEventListener("click", abrirCarrinho);
  document.body.appendChild(botao);

  const painel = document.createElement("div");
  painel.id = "shoppingCartPanel";
  painel.innerHTML = `
    <section class="cart-window" role="dialog" aria-modal="true"
      aria-labelledby="cartTitle">
      <div class="cart-heading">
        <h2 id="cartTitle">🛒 Minha lista de compras</h2>
        <button class="cart-close" id="cartClose" aria-label="Fechar">×</button>
      </div>
      <div id="cartItems"></div>
      <div id="cartSummary"></div>
      <div class="cart-actions">
        <button class="cart-action-button cart-generate" id="generateShoppingList">
          📸 Gerar lista em JPG
        </button>
        <button class="cart-action-button cart-clear" id="clearShoppingList">
          Limpar lista
        </button>
      </div>
    </section>
  `;
  document.body.appendChild(painel);

  document.getElementById("cartClose").addEventListener("click", fecharCarrinho);

  painel.addEventListener("click", evento => {
    if (evento.target === painel) fecharCarrinho();
  });

  document.getElementById("cartItems").addEventListener("click", evento => {
    const controle = evento.target.closest("[data-cart-action]");
    if (!controle) return;

    const nome = controle.dataset.name;
    const acao = controle.dataset.cartAction;

    if (acao === "mais") alterarQuantidade(nome, 1);
    if (acao === "menos") alterarQuantidade(nome, -1);
    if (acao === "remover") removerProduto(nome);
  });

  document.getElementById("clearShoppingList").addEventListener("click", () => {
    if (!listaCompras.length) return;
    if (!confirm("Deseja realmente limpar sua lista de compras?")) return;

    listaCompras = [];
    salvarListaCompras();
    atualizarCarrinho();
    renderizarProdutos(
      document.querySelector("[data-filter].active")?.dataset.filter || "Todos"
    );
  });

  document.getElementById("generateShoppingList")
    .addEventListener("click", gerarListaJPG);

  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById("shoppingCartPanel")?.classList.add("open");
  atualizarCarrinho();
}

function fecharCarrinho() {
  document.getElementById("shoppingCartPanel")?.classList.remove("open");
}

function atualizarCarrinho() {
  const contador = document.getElementById("cartCount");
  const conteudo = document.getElementById("cartItems");
  const resumo = document.getElementById("cartSummary");

  if (!contador || !conteudo || !resumo) return;

  contador.textContent = quantidadeTotal();

  if (!listaCompras.length) {
    conteudo.innerHTML = '<div class="cart-empty">Sua lista está vazia.<br>Adicione produtos pelo catálogo!</div>';
    resumo.innerHTML = "";
    return;
  }

  conteudo.innerHTML = listaCompras.map(item => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${escaparHTML(item.nome)}</div>
        <div class="cart-item-price">
          ${moeda(item.preco)}${item.unidade === "kg" ? "/kg" : ""}
          ${item.preco == null ? "" : " · Subtotal: " + moeda(item.preco * item.quantidade)}
        </div>
      </div>
      <div class="cart-item-actions">
        <button data-cart-action="menos" data-name="${escaparHTML(item.nome)}" aria-label="Diminuir">−</button>
        <strong>${item.quantidade}</strong>
        <button data-cart-action="mais" data-name="${escaparHTML(item.nome)}" aria-label="Aumentar">+</button>
      </div>
      <button class="cart-remove" data-cart-action="remover" data-name="${escaparHTML(item.nome)}">Remover item</button>
    </div>
  `).join("");

  const temPrecoPendente = listaCompras.some(item => item.preco == null);

  resumo.innerHTML = `
    <div class="cart-total">
      <span>Total estimado</span>
      <span>${moeda(totalLista())}</span>
    </div>
    <p class="cart-note">
      ${temPrecoPendente
        ? "Alguns produtos estão com preço a consultar e não entram no total estimado."
        : "Total estimado com base nos preços informados no site. Confirme os valores na loja."}
    </p>
  `;
}

function escaparHTML(valor) {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

/* Gera uma imagem JPG sem precisar de biblioteca externa */
function gerarListaJPG() {
  if (!listaCompras.length) {
    alert("Adicione pelo menos um produto antes de gerar a lista.");
    return;
  }

  const escala = 2;
  const largura = 800;
  const margem = 48;
  const alturaLinha = 66;
  const altura = 300 + listaCompras.length * alturaLinha + 120;

  const canvas = document.createElement("canvas");
  canvas.width = largura * escala;
  canvas.height = altura * escala;

  const ctx = canvas.getContext("2d");
  ctx.scale(escala, escala);

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, largura, altura);

  ctx.fillStyle = "#e51d2a";
  ctx.fillRect(0, 0, largura, 125);

  ctx.fillStyle = "#ffd52a";
  ctx.font = "bold 18px Arial";
  ctx.fillText("MERCADO", margem, 38);

  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px Arial";
  ctx.fillText("OLIVEIRA & KERNE", margem, 78);

  ctx.font = "16px Arial";
  ctx.fillText("MINHA LISTA DE COMPRAS", margem, 105);

  let y = 170;
  ctx.fillStyle = "#222";
  ctx.font = "bold 17px Arial";
  ctx.fillText("PRODUTO", margem, y);
  ctx.textAlign = "right";
  ctx.fillText("QTD.", largura - margem - 100, y);
  ctx.fillText("PREÇO", largura - margem, y);
  ctx.textAlign = "left";

  y += 22;
  ctx.strokeStyle = "#ddd";
  ctx.beginPath();
  ctx.moveTo(margem, y);
  ctx.lineTo(largura - margem, y);
  ctx.stroke();

  listaCompras.forEach(item => {
    y += 37;
    ctx.fillStyle = "#222";
    ctx.font = "bold 16px Arial";

    let nome = item.nome;
    while (ctx.measureText(nome).width > 390 && nome.length > 5) {
      nome = nome.slice(0, -4) + "...";
    }

    ctx.fillText(nome, margem, y);

    ctx.textAlign = "right";
    ctx.font = "16px Arial";
    ctx.fillText(String(item.quantidade), largura - margem - 100, y);
    ctx.fillText(
      item.preco == null
        ? "Consultar"
        : moeda(item.preco * item.quantidade),
      largura - margem,
      y
    );
    ctx.textAlign = "left";

    ctx.font = "12px Arial";
    ctx.fillStyle = "#777";
    ctx.fillText(
      item.preco == null
        ? "Preço a consultar"
        : moeda(item.preco) + (item.unidade === "kg" ? "/kg" : "") + " por unidade",
      margem,
      y + 18
    );

    ctx.strokeStyle = "#eee";
    ctx.beginPath();
    ctx.moveTo(margem, y + 29);
    ctx.lineTo(largura - margem, y + 29);
    ctx.stroke();

    y += 29;
  });

  y += 25;
  ctx.fillStyle = "#147b43";
  ctx.font = "bold 24px Arial";
  ctx.fillText("Total estimado: " + moeda(totalLista()), margem, y);

  y += 35;
  ctx.fillStyle = "#666";
  ctx.font = "13px Arial";
  ctx.fillText("Confira preços e disponibilidade diretamente na loja.", margem, y);

  y += 25;
  ctx.fillText("Mercado Oliveira & Kerne · Rechan, Itapetininga - SP", margem, y);

  canvas.toBlob(blob => {
    if (!blob) {
      alert("Não foi possível gerar a imagem. Tente novamente.");
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lista-de-compras-oliveira-kerne.jpg";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }, "image/jpeg", 0.95);
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
      ? `<img class="product-image" src="./${escaparHTML(produto.imagem)}" alt="${escaparHTML(produto.nome)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
      : "";

    const precoHTML = produto.preco == null
      ? '<span class="price-to-check">Preço a consultar</span>'
      : `${formatarPreco(produto.preco)}${produto.unidade === "kg" ? '<small>/kg</small>' : ""}`;

    const quantidade = quantidadeNaLista(produto.nome);

    return `
      <article class="product-card">
        <div class="product-photo">
          ${imagem}
          <div class="product-emoji" style="${produto.imagem ? "display:none" : "display:flex"}">🛒</div>
          <span class="product-badge">OFERTA</span>
        </div>
        <div class="product-info">
          <span class="product-category">${escaparHTML(produto.categoria)}</span>
          <h3 class="product-name">${escaparHTML(produto.nome)}</h3>
          <div class="product-price">${precoHTML}</div>

          <button
            type="button"
            class="add-to-shopping-list"
            data-add-product="${escaparHTML(produto.nome)}">
            ${quantidade ? "✓ Na lista (" + quantidade + ") · +" : "＋ Adicionar"}
          </button>

          <a class="product-whatsapp" href="${criarLinkWhatsApp(produto)}" target="_blank" rel="noopener">
            Consultar pelo WhatsApp ↗
          </a>
        </div>
      </article>
    `;
  }).join("");

  grade.querySelectorAll("[data-add-product]").forEach(botao => {
    botao.addEventListener("click", () => {
      adicionarProduto(botao.dataset.addProduct);
    });
  });
}

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
  configurarCarrinho();

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
