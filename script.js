var numeroSegreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSegreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Voce deve digitar um numero de 0 a 10";
  } else if (chute > numeroSegreto) {
    elementoResultado.innerHTML = "Você errou, o numero era menor que " + chute;
  } else {
    elementoResultado.innerHTML = "Você errou, o numero era maior que " + chute;
  }
}
