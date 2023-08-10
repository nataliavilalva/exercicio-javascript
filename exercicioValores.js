// Crie uma função que receba dois valores e imprime uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

function valores(valor1, valor2) {
  if (valor1 == valor2) {
    console.log("Números iguais");
  } else if (valor1 > valor2) {
    console.log("Primeiro é maior");
  } else {
    console.log("Segundo é maior");
  }
}
valores(12, 10);
