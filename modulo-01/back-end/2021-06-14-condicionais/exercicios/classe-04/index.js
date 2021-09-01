const ladoA = 3;
const ladoB = 3;

if (ladoA === 0 && ladoA === ladoB) {
    console.log("Bucha de Branco");
} else if (ladoA === 1 && ladoA === ladoB) {
    console.log("Bucha de Ás");
} else if (ladoA === 2 && ladoA === ladoB) {
    console.log("Bucha de Duque");
} else if (ladoA === 3 && ladoA === ladoB) {
    console.log("Bucha de Terno");
} else if (ladoA === 4 && ladoA === ladoB) {
    console.log("Bucha de Quadra");
} else if (ladoA === 5 && ladoA === ladoB) {
    console.log("Bucha de Quina");
} else if (ladoA === 6 && ladoA === ladoB) {
    console.log("Bucha de Sena");
} else {
    console.log("Não é bucha");
}