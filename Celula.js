class Bernardo {
    constructor(horario, hoje, temperatura) {
        this.horarioAtual = horario;
        this.dataAtual = hoje;
        this.temperaturaAtual = temperatura;
    }

    queHorasSao() {
        return this.horarioAtual;
    }

    queDiaEHoje() {
        return this.dataAtual;
    }

    qualATemperatura() {
        return this.temperaturaAtual;
    }
}