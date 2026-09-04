export function matricularAluno(idade, nome) {
    if (typeof idade !== 'number' || Number.isNaN(idade)) {
        throw new Error('Idade inválida: informe um número');
    }

    if (idade < 12 || idade > 100) {
        throw new Error('Idade fora da faixa permitida (12 a 100 anos)');
    }

    if (!nome || typeof nome !== 'string') {
        throw new Error('Nome é obrigatório');
    }

    if (nome.trim() === '') {
        throw new Error('Nome é obrigatório');
    }

    return 'Matrícula realizada com sucesso';
}
