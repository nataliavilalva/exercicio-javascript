// Escreva uma função que recebes 3 valores reais X, Y e Z e que verifique se esses valores podem ser os comprimentos dos lados de um triângulo e, neste caso, retornar qual o tipo
// de triângulo formado. A função deve identificar o tipo de triângulo formado observando as seguintes definições:

// Triângulo Equilátero: os comprimentos dos 3 lados são iguais.
// Triângulo Isósceles: os comprimentos de 2 lados são iguais.
// Triângulo Escaleno: os comprimentos dos 3 lados são diferentes.

function triangulo(x, y, z) {
  if (x == y && y == z) {
    console.log("Triângulo Equilátero");
  } else if (x == y && y != z) {
    console.log("Triângulo Isósceles");
  } else if (x != z && x == y) {
    console.log("Triângulo Isósceles");
  } else if (x == z && y != z) {
    console.log("Triângulo Isósceles");
  } else if (x != y && y == z) {
    console.log("Triângulo Isósceles");
  } else if (x != y && y != z) {
    console.log("Triângulo Escaleno");
  }
}
triangulo(4, 4, 5);
