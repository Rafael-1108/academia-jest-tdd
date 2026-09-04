import { matricularAluno } from '../src/matricula.js';

describe('matricularAluno', () => {
    describe('Casos de Sucesso', () => {
        it('deve matricular alunos com idade e nome válidos', () => {
            expect(matricularAluno(20, 'Aang')).toBe('Matrícula realizada com sucesso');
            expect(matricularAluno(45, 'Iroh')).toBe('Matrícula realizada com sucesso');
        });
    });

    describe('Valores-limite (fronteiras 12 e 100 anos)', () => {
        it('deve recusar idade 11', () => {
            expect(() => matricularAluno(11, 'Toph')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve aceitar idade 12', () => {
            expect(matricularAluno(12, 'Aang')).toBe('Matrícula realizada com sucesso');
        });

        it('deve aceitar idade 100', () => {
            expect(matricularAluno(100, 'Bumi')).toBe('Matrícula realizada com sucesso');
        });

        it('deve recusar idade 101', () => {
            expect(() => matricularAluno(101, 'Kyoshi')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });
    });

    describe('Idades fora da faixa permitida', () => {
        it('deve recusar se for menor que 12', () => {
            expect(() => matricularAluno(8, 'Momo')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve recusar se for maior que 100', () => {
            expect(() => matricularAluno(150, 'Sozin')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });
    });

    describe('Entradas inválidas para idade', () => {
        it('deve recusar numero negativo', () => {
            expect(() => matricularAluno(-1, 'Katara')).toThrow(
                'Idade fora da faixa permitida (12 a 100 anos)',
            );
        });

        it('deve recusar string no lugar de numero', () => {
            expect(() => matricularAluno('12', 'Sokka')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar quando passar null', () => {
            expect(() => matricularAluno(null, 'Zuko')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar quando passar undefined', () => {
            expect(() => matricularAluno(undefined, 'Azula')).toThrow(
                'Idade inválida: informe um número',
            );
        });

        it('deve recusar se for NaN', () => {
            expect(() => matricularAluno(NaN, 'Appa')).toThrow('Idade inválida: informe um número');
        });

        it('deve aceitar idade decimal valida', () => {
            expect(matricularAluno(12.5, 'Tenzin')).toBe('Matrícula realizada com sucesso');
        });
    });

    describe('Validações do nome', () => {
        it('deve recusar nome vazio', () => {
            expect(() => matricularAluno(20, '')).toThrow('Nome é obrigatório');
        });

        it('deve recusar nome só com espaços', () => {
            expect(() => matricularAluno(20, '   ')).toThrow('Nome é obrigatório');
        });

        it('deve recusar quando não passar o nome', () => {
            expect(() => matricularAluno(20)).toThrow('Nome é obrigatório');
        });

        it('deve recusar se o nome não for string', () => {
            expect(() => matricularAluno(20, 123)).toThrow('Nome é obrigatório');
        });
    });
});
