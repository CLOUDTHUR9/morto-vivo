document.getElementById('calcularBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const nascimento = new Date(document.getElementById('nascimento').value);
    const falecimentoInput = document.getElementById('falecimento').value;
    const falecimento = falecimentoInput ? new Date(falecimentoInput) : new Date();

    if (!nome || !nascimento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (nascimento > new Date()) {
        alert('A data de nascimento não pode ser no futuro.');
        return;
    }

    if (falecimentoInput && falecimento < nascimento) {
        alert('A data de falecimento deve ser posterior à data de nascimento.');
        return;
    }

    const diffEmMilissegundos = falecimento - nascimento;
    const diffEmDias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));
    const diffEmSemanas = Math.floor(diffEmDias / 7);
    const diffEmMeses = Math.floor(diffEmDias / 30);
    const diffEmAnos = Math.floor(diffEmDias / 365);

    const resultado = `
        Olá, ${nome}!<br>
        Você já viveu aproximadamente:<br>
        - ${diffEmDias} dias<br>
        - ${diffEmSemanas} semanas<br>
        - ${diffEmMeses} meses<br>
        - ${diffEmAnos} anos
    `;

    document.getElementById('resultado').innerHTML = resultado;
});