const temIngresso = true;
const taComOsPais = true;
const censura = 16;
const idade = 17;

// ter ingresso e ter a idade maior ou igual a censura OU estar com os pais

if (temIngresso) {
    if (idade >= censura || taComOsPais) {
        console.log('pode entrar');
    } else {
        console.log('barrado pela idade')
    }
} else {
    console.log('barrado por falta de ingresso')
}

// ter ingresso e ter a idade maior ou igual a censura
/*
if (temIngresso && idade >= censura) {
    console.log('pode entrar');
} else {
    console.log('barrado');
}
*/
/*
if (temIngresso === true) {
    if (idade >= censura) {
        console.log('pode entrar');
    } else {
        console.log('barado pela idade')
    }
} else {
    console.log('barrado porque não tem ingresso');
}
*/