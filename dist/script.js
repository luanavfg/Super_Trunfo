var carta1 = {
  nome: "Bulbasauro",
  imagem:
    "https://pm1.narvii.com/6341/1479cf12930af330a7da766324dd7647a42f60c6_hq.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 8,
    Magia: 6,
    Inteligência: 2
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 2,
    Inteligência: 8
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem:
    "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
  atributos: {
    Ataque: 5,
    Defesa: 9,
    Magia: 10,
    Inteligência: 7
  }
};

var carta4 = {
  nome: "Violeta Pêra",
  imagem:
    "https://besthqwallpapers.com/Uploads/5-8-2018/60522/thumb2-4k-violet-parr-2018-movie-the-incredibles-2-violet.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 10,
    Magia: 7,
    Inteligência: 7
  }
};

var carta5 = {
  nome: "Fiona",
  imagem:
    "https://i.pinimg.com/736x/71/7a/75/717a75a87f8f25cd95ec6b85239c0faa--fiona-shrek-princess-fiona.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 7,
    Magia: 4,
    Inteligência: 8
  }
};

var carta6 = {
  nome: "Jean Grey",
  imagem: "https://i.ytimg.com/vi/ahEH5xArsck/maxresdefault.jpg",
  atributos: {
    Ataque: 4,
    Defesa: 5,
    Magia: 10,
    Inteligência: 9
  }
};

var carta7 = {
  nome: "Diana",
  imagem:
    "https://i.pinimg.com/736x/d3/13/e5/d313e507a8a8776e760766e2fb5340cb.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 10,
    Magia: 5,
    Inteligência: 8
  }
};

var carta8 = {
  nome: "Viúva Negra",
  imagem:
    "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/02/legiao_yHXuIfnik6Ad.jpg.jpeg",
  atributos: {
    Ataque: 10,
    Defesa: 8,
    Magia: 2,
    Inteligência: 8
  }
};

var todasCartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

var maoJogador = []
var maoMaquina = []

function divisaoCartas() {
  var cartaCompradaJogador
  var cartaCompradaMaquina
  var i = 0
  while (i < 4) {
    var indiceCartaComprada = parseInt(Math.random() * (todasCartas.length))
    cartaCompradaJogador = todasCartas[indiceCartaComprada]
    maoJogador.push(cartaCompradaJogador) //colocar carta comprada na mão do jogador
    var remover = todasCartas.splice(indiceCartaComprada, 1) //remover carta comprada do total de cartas
    i++
  }
  maoMaquina = todasCartas
  console.log(maoJogador)
  console.log(maoMaquina)
  console.log(todasCartas)
  return maoJogador
  return maoMaquina
}
divisaoCartas()

//var numeroCartaMaquina;
//var numeroCartaJogador;
function sortearCarta() {
  numeroCartaMaquina = parseInt(Math.random() * maoMaquina.length);
  cartaMaquina = maoMaquina[numeroCartaMaquina];

  numeroCartaJogador = parseInt(Math.random() * maoJogador.length);
  cartaJogador = maoJogador[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true; //desabilitar o botao de sorteio = true
  document.getElementById("btnJogar").disabled = false; //desabilitar o botao de jogo = false
  exibirCartaJogador();
  ocultaCartaMaquina();
  return numeroCartaJogador;
  return numeroCartaMaquina;
//document.getElementById("btnJogar").disabled = false
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
    maoJogador.push(cartaMaquina)
    maoMaquina.splice(numeroCartaMaquina, 1);
    if (maoMaquina.length == 0) {
      htmlResultado = "<p class='resultado-final'> Você venceu o duelo. Seu oponente não tem mais cartas!</p>"
    }
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    maoMaquina.push(cartaJogador)
    maoJogador.splice(numeroCartaJogador, 1)
    if (maoJogador.length == 0) {
      htmlResultado = "<p class='resultado-final'>Você perdeu o duelo. Você não tem mais cartas!</p>"
    }
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo];
    +"</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function ocultaCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = "";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  var nome = `<p class="carta-subtitle">${""}</p>`;;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}