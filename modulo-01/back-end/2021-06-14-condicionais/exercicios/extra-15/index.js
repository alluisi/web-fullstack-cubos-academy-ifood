const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}