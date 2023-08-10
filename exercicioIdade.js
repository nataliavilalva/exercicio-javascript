//crie uma função que receba uma idade e retorne se a idade é maior ou menor que 50

function idade(numero) {
  if (numero > 50) {
    console.log("número maior que 50");
  } else if (numero == 50) {
    console.log("número igual a 50");
  } else {
    console.log("número menor que 50");
  }
}
idade(50);
