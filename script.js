let pnt = 0;
let item_ativo = "🍔";
let multiplicador_ativo = 1;

let loja = [
  {
    nome: "Hamburguer",
    comprado: true,
    valor: 0,
    multiplicador: 1,
    icon: "🍔",
  },
  {
    nome: "Pizza",
    comprado: false,
    valor: 50,
    multiplicador: 2,
    icon: "🍕",
  },
  {
    nome: "Bolo",
    comprado: false,
    valor: 150,
    multiplicador: 5,
    icon: "🍰",
  },
  {
    nome: "Torta",
    comprado: false,
    valor: 500,
    multiplicador: 10,
    icon: "🥧",
  },
  {
    nome: "Taco",
    comprado: false,
    valor: 1000,
    multiplicador: 20,
    icon: "🌮",
  },
];

function salvar_dados() {
  localStorage.setItem("pnt", pnt);
  localStorage.setItem("item_ativo", item_ativo);
  localStorage.setItem("multiplicador_ativo", multiplicador_ativo);
  localStorage.setItem("loja", JSON.stringify(loja));
}

function carregar_dados() {
  pnt = parseInt(localStorage.getItem("pnt")) || 0;
  item_ativo = localStorage.getItem("item_ativo") || "🍔";
  multiplicador_ativo = parseInt(localStorage.getItem("multiplicador_ativo")) || 1;
  loja = JSON.parse(localStorage.getItem("loja")) || loja;
}

function fechar_loja() {
  document.getElementById("loja").style.display = "none";
  document.getElementById("a_loja").style.display = "block";
  audio_menu();
}

function abrir_loja() {
  document.getElementById("loja").style.display = "flex";
  document.getElementById("a_loja").style.display = "none";
  audio_menu();
}

function clique() {
  pnt += 1 * multiplicador_ativo;
  att();
  salvar_dados();
}

function att() {
  document.getElementById("pontos").innerHTML = `${pnt}🔶`;
  document.querySelector("main").innerHTML = `${item_ativo}`;
}

function comprar(nome) {
  let item = loja.find((i) => i.nome == nome);

  if (item) {
    if (pnt >= item.valor) {
      item.comprado = true;
      pnt -= item.valor;
      item.valor = 0;
      item_ativo = item.icon;
      multiplicador_ativo = item.multiplicador;
      document.getElementById(item.nome).classList.remove("off");
      document.getElementById(item.nome).classList.add("on");
      document.querySelector(`#${item.nome} .descrição .valor`).innerHTML =
        item.nome;
      audio_compra();
      att();
      salvar_dados();
    } else {
      audio_not();
    }
  }
}

function audio_menu() {
  let audio = document.getElementById("click_menu");
  audio.play();
}

function audio_center() {
  let audio = document.getElementById("click_center");
  audio.play();
}

function audio_compra() {
  let audio = document.getElementById("click_compra");
  audio.play();
}

function audio_not() {
  let audio = document.getElementById("not");
  audio.play();
}

function limpar_dados() {
  localStorage.clear();
  pnt = 0;
  item_ativo = "🍔";
  multiplicador_ativo = 1;
  loja = [
    {
      nome: "Hamburguer",
      comprado: true,
      valor: 0,
      multiplicador: 1,
      icon: "🍔",
    },
    {
      nome: "Pizza",
      comprado: false,
      valor: 50,
      multiplicador: 2,
      icon: "🍕",
    },
    {
      nome: "Bolo",
      comprado: false,
      valor: 150,
      multiplicador: 5,
      icon: "🍰",
    },
    {
      nome: "Torta",
      comprado: false,
      valor: 500,
      multiplicador: 10,
      icon: "🥧",
    },
    {
      nome: "Taco",
      comprado: false,
      valor: 1000,
      multiplicador: 20,
      icon: "🌮",
    },
  ];
  att();
}

// Carregar dados ao iniciar
carregar_dados();
att();
