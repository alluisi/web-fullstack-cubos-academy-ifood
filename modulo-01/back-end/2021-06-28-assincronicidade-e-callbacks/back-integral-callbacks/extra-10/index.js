const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

const umaVez = [];

notas.forEach(x => {
    const verificacao = umaVez.find(y => {
        return y === x;
    });
    if (!verificacao) {
        umaVez.push(x);
    }
});

console.log(umaVez);