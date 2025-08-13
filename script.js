function calcular() {
  const valor = parseFloat(document.getElementById('valor').value);
  const porcentagem = parseFloat(document.getElementById('porcentagem').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(valor) || isNaN(porcentagem)) {
    resultado.innerText = "Preencha os dois campos corretamente.";
    return;
  }

  const total = (valor * porcentagem) / 100;
  resultado.innerText = `${porcentagem}% de ${valor} é ${total}`;
}
