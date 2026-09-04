export class Turma {
    constructor(capacidadeMaxima) {
        this.capacidadeMaxima = capacidadeMaxima;
        this.alunos = [];
    }

    matricular(nome) {
        if (this.alunos.length >= this.capacidadeMaxima) {
            throw new Error('Turma lotada');
        }

        this.alunos.push(nome);
        return this.alunos.length;
    }
}
