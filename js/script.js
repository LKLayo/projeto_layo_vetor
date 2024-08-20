let vetor = [];

function adicionarValor() {
  const valor = Number(document.getElementById('valor').value);
  vetor.push(valor);

  const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();
  const celula = novaLinha.insertCell(0);
  celula.textContent = valor;

  document.getElementById('valor').value = '';
}

function mostrarPares() {
  const tabela = document.getElementById("tabelaPares").getElementsByTagName("tbody")[0];
  
  // Limpa a tabela antes de adicionar novos valores
  tabela.innerHTML = '';

  for (let i = 0; i < vetor.length; i++) {
    const valor = vetor[i];
    if (valor % 2 === 0) {
      const linha = tabela.insertRow();
      const celula = linha.insertCell();
      celula.textContent = valor;
    }
  }
}