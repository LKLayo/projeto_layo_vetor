document.getElementById('calcular').addEventListener('click', () => {
    const input = document.getElementById('vetor').value;
    const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numeros.length === 0) {
        alert('Por favor, insira números válidos.');
        return;
    }

    // Calcular a soma dos elementos
    const soma = numeros.reduce((acc, val) => acc + val, 0);

    // Calcular a média
    const media = soma / numeros.length;

    // Contar elementos maiores que a média
    const contagemMaiores = numeros.filter(valor => valor > media).length;

    // Mostrar os resultados
    document.getElementById('media').textContent = `Média: ${media.toFixed(2)}`;
    document.getElementById('contagem').textContent = `Número de elementos maiores que a média: ${contagemMaiores}`;

    // Exibir a seção de resultados
    document.getElementById('resultado').classList.remove('hidden');
});
