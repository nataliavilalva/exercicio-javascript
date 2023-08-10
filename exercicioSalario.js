//função que recebe o salário e a porcentagem de aumento e retorne o novo salario

function calculaSalario(salarioAtual, porcentagem) {
  var aumento = (salarioAtual * porcentagem) / 100;
  var salarioNovo = salarioAtual + aumento;
  return salarioNovo;
}
var salarioFulano = calculaSalario(3200, 10);
console.log(salarioFulano);
