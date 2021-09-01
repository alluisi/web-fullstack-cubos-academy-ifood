const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i = 0; i < filaDeDentro.length; i++) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    }
}
console.log(filaDeDentro);
console.log(filaDeFora);