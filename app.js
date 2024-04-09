exibirMensagemInicial();

let numeroLimite = 100
let listaNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Toda cagadakkjjj -->");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100" );
}

function verificarChute(){
  let chute = document.querySelector("input").value;

  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

  if (chute == numeroSecreto){
    exibirTextoNaTela("h1", "Parabens seu filho da puta!");
    exibirTextoNaTela("p", `Com ${tentativas} ${palavraTentativa}, voçê acertou o número, era ${numeroSecreto}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  else{ 
    exibirTextoNaTela("h1", "Errooou, da zero pra ela kkkjj lá ele");
    chute > numeroSecreto ? exibirTextoNaTela("p", `O número é menor que ${chute}` ) : exibirTextoNaTela("p", `O número é maior que ${chute} `);    
    tentativas++;
    limparCampo();
  }        
}

function numeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumerosSorteados.length;

    if(quantidadeElementos == numeroLimite){
      listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
      return numeroAleatorio();
    }
    else{
      listaNumerosSorteados.push(numeroEscolhido);
      console.log(listaNumerosSorteados);
      return numeroEscolhido;
      
    }
};
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
console.log(numeroSecreto);
 
function reiniciarJogo(){
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}