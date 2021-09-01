const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo = this.saldo + valor;
        this.historicos.push({ tipo: "Depósito", valor: valor });
        console.log(`Depósito de R$${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`)
        } else {
            this.saldo = this.saldo - valor;
            this.historicos.push({ tipo: "Saque", valor: valor });
            console.log(`Saque de R$${valor / 100} realizado para o(a) cliente: ${this.nome}.`);
        }
    },
    extrato: function () {
        console.log(`Extrato de: ${this.nome} - Saldo: ${this.saldo / 100}\nHistórico:`);
        for (let i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de R$${this.historicos[i].valor / 100}`);
        }
    }
}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();