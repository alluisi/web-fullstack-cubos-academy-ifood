const finalDaCopa = new Date(2002, 5, 30, 8);
const timestamp1 = finalDaCopa.getTime();
const timestamp2 = +finalDaCopa;

const finalMaisUmaHora1 = timestamp2 + 1000 * 60 * 60;
const finalMaisUmaHora2 = new Date(finalMaisUmaHora1);

console.log(finalDaCopa);
console.log(timestamp1);
console.log(timestamp2);
console.log(finalMaisUmaHora1);
console.log(finalMaisUmaHora2);