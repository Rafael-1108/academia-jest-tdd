import { Turma } from '../src/turma.js';

describe('Turma', () => {
    let turma;

    beforeEach(() => {
        turma = new Turma(2);
    });

    afterEach(() => {
        turma = null;
    });

    it('deve matricular um aluno e retornar a quantidade atualizada de alunos', () => {
        const totalAlunos = turma.matricular('Aang');
        expect(totalAlunos).toBe(1);
    });

    it('deve permitir matricular até o limite da capacidade máxima', () => {
        expect(turma.matricular('Aang')).toBe(1);
        expect(turma.matricular('Katara')).toBe(2);
    });

    it('deve recusar matrícula e lançar erro "Turma lotada" ao exceder a capacidade', () => {
        turma.matricular('Aang');
        turma.matricular('Katara');

        expect(() => turma.matricular('Sokka')).toThrow('Turma lotada');
    });

    it('deve manter o isolamento de estado e iniciar sempre com uma turma vazia', () => {
        expect(turma.alunos.length).toBe(0);
    });
});
