//usando a função document.getElementById para obter elementos do HTML a partir do id
var anosLuzInput = document.getElementById('anosLuzInput');
var convertButton = document.getElementById('convertButton');
var result = document.getElementById('result');

//função para converter ano luz em metros
function converterEmMetros(anosLuz) {
  var equivalenciaEmMetros = 9.461e15;
  //9.461e15 equivale a 94,610,000,000,000.00
  return anosLuz * equivalenciaEmMetros;
}

//função .addEventListener para adicionar um ouvinte de evento, quando o usuário clicar no botão, ir para a função
convertButton.addEventListener('click', function () {
  var anosLuz = parseFloat(anosLuzInput.value);
  var distanciaEmMetros = converterEmMetros(anosLuz);
  if (anosLuz <= 0 || !anosLuz) {
    //se anoLuz igual a 0 ou campo vazio (! para 'não é verdadeiro') -> imprimir:
    result.innerHTML = 'Digite um valor válido!';
  } else {
    //se não, executar o conversor:
    result.innerHTML =
      anosLuzInput.value +
      ' ano(s) luz equivale(m) a ' +
      distanciaEmMetros +
      ' metros';
  }
});
