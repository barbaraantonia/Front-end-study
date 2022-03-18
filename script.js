function ConverterDolar() {
  var valorConverter = document.getElementById("valor").value;
  if (valorConverter == "") {
    valorConverter = 0;
  }
  var valorEmReal = parseFloat(valorConverter);
  var valorEmDolar = valorEmReal / 5.04;

  var valorExibir = document.getElementById("valorConvertido");
  var textoExibir =
    "O resultado da conversão de real para dolar é de U$" +
    valorEmDolar.toFixed(2);
  valorExibir.innerHTML = textoExibir;
}
function ConverterEuro() {
  var valorConverter = document.getElementById("valor").value;
  if (valorConverter == "") {
    valorConverter = 0;
  }
  var valorEmReal = parseFloat(valorConverter);
  var valorEmEuro = valorEmReal / 5.6;

  var valorExibir = document.getElementById("valorConvertido");
  var textoExibir =
    "O resultado da conversão de real para euro é de €" +
    valorEmEuro.toFixed(2);
  valorExibir.innerHTML = textoExibir;
}
function ConverterLibra() {
  var valorConverter = document.getElementById("valor").value;
  if (valorConverter == "") {
    valorConverter = 0;
  }
  var valorEmReal = parseFloat(valorConverter);
  var valorEmLibra = valorEmReal / 6.62;

  var valorExibir = document.getElementById("valorConvertido");
  var textoExibir =
    "O resultado da conversão de real para libra esterlina é de £" +
    valorEmLibra.toFixed(2);
  valorExibir.innerHTML = textoExibir;
}