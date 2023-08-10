//Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

// function anosDias(anos) {
//   totalAnosDias = anos * 365;
//   return totalAnosDias;
// }

// function mesesDias(meses) {
//   totalMesesDias = meses * 30;
//   return totalMesesDias;
// }

// function IdadeDias(totalAnosDias, totalMesesDias) {
//   totalIdadeDias = totalAnosDias + totalMesesDias;
//   return totalIdadeDias;
// }

// var idadeAnos = anosDias(24);
// var idadeMeses = mesesDias(4);
// var total =
// console.log(totalIdadeDias);

function anosEmDias(anos, meses, dias) {
  var totalAnosDias = anos * 365;
  var totalMesesDias = meses * 30;
  var total = totalAnosDias + totalMesesDias + dias;
  return total;
}

var totalDias = anosEmDias(24, 4, 12);
console.log(totalDias);
