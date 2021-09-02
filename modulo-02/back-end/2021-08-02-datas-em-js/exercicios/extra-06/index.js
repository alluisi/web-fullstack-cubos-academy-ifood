const { add } = require("date-fns");

function promocao(inicio, cliente) {
    const fimPromocao = add(inicio, { hours: 24 });
    if (+inicio <= +cliente && +cliente <= fimPromocao) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

promocao(new Date(2021, 3, 25, 12), new Date(2021, 3, 26, 8));
promocao(new Date(2021, 3, 25, 12), new Date(2021, 3, 26, 16));