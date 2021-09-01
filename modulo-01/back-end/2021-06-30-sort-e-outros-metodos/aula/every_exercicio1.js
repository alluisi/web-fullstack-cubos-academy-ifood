const precos = [100, 131, 2542];

const ehValido = precos.every(x => x >= 0 && x === Math.floor(x));

/*
const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x === Math.floor(x);

    if (ehPositivo && ehInteiro) {
        return true;
    } else {
        return false;
    }
});

const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x % 1 === 0;

    if (ehPositivo && ehInteiro) {
        return true;
    } else {
        return false;
    }
});
*/

console.log(ehValido);