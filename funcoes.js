let x = "";
console.log(x);
x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto)
}

imprimeTexto("lele");
// 2) executa a função (1 ou + vezes)
imprimeTexto("outro texto");

imprimeTexto(soma());

// três formas de escrever funções

function soma(){
  //outros códigos
  //vários console.log()
  // return deve ser a ultima linha da funcao
  return 2 + 2;
}

// console.log(soma())