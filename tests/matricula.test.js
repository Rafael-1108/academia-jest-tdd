import { matricularAluno } from '../src/matricula.js';

describe('matricularAluno', () => {
    describe('Casos Positivos (Matrículas Aceitas)', () => {
        it('deve matricular um aluno com idade intermediária e nome válido', () => {
            expect(matricularAluno(20, 'Aang')).toBe('Matrícula realizada com sucesso');
            expect(matricularAluno(45, 'Iroh')).toBe('Matrícula realizada com sucesso');
        });
    });

    describe('Valores-Limite (Fronteiras: 12 e 100 anos)', () => {
        it('deve recusar idade 11 (imediatamente abaixo do limite inferior)', () => {
            expect(() => matricularAluno(11, 'Toph')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve aceitar idade 12 (limite inferior exato)', () => {
            expect(matricularAluno(12, 'Aang')).toBe('Matrícula realizada com sucesso');
        });

        it('deve aceitar idade 100 (limite superior exato)', () => {
            expect(matricularAluno(100, 'Bumi')).toBe('Matrícula realizada com sucesso');
        });

        it('deve recusar idade 101 (imediatamente acima do limite superior)', () => {
            expect(() => matricularAluno(101, 'Kyoshi')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });
    });

    describe('Classes de Equivalência e Casos Negativos (Idade)', () => {
        it('deve recusar idade menor que 12', () => {
            expect(() => matricularAluno(8, 'Momo')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve recusar idade maior que 100', () => {
            expect(() => matricularAluno(150, 'Sozin')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });
    });

    describe('Edge Cases (Entradas Inesperadas para Idade)', () => {
        it('deve recusar se a idade for um número negativo', () => {
            expect(() => matricularAluno(-1, 'Katara')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve recusar se a idade for uma string contendo número', () => {
            expect(() => matricularAluno('12', 'Sokka')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar se a idade for null', () => {
            expect(() => matricularAluno(null, 'Zuko')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar se a idade for undefined', () => {
            expect(() => matricularAluno(undefined, 'Azula')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar se a idade for NaN', () => {
            expect(() => matricularAluno(NaN, 'Appa')).toThrow('Idade inválida: informe um número');
        });

        it('deve aceitar idades decimais válidas dentro da faixa (ex: 12.5)', () => {
            expect(matricularAluno(12.5, 'Tenzin')).toBe('Matrícula realizada com sucesso');
        });
    });

    describe('Validação da Regra do Nome', () => {
        it('deve recusar matrícula com nome vazio', () => {
            expect(() => matricularAluno(20, '')).toThrow('Nome é obrigatório');
        });

        it('deve recusar matrícula se o nome for composto apenas por espaços', () => {
            expect(() => matricularAluno(20, '   ')).toThrow('Nome é obrigatório');
        });

        it('deve recusar matrícula se o nome for omitido (undefined)', () => {
            expect(() => matricularAluno(20)).toThrow('Nome é obrigatório');
        });

        it('deve recusar matrícula se o nome não for do tipo string', () => {
            expect(() => matricularAluno(20, 123)).toThrow('Nome é obrigatório');
        });
    });
});
