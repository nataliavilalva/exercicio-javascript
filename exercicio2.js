//console.log(imc);
function calcularImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
var joao = calcularImc(91, 1.75);
console.log(joao);

var sonia = calcularImc(100, 1.6);
console.log(sonia);
