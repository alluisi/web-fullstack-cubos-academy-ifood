const finalDaCopa = new Date(2002, 5, 30, 8);

const primieiroGol = new Date(+finalDaCopa + 1000 * (45 + 15 + 22) * 60);
const segundoGol = new Date(+finalDaCopa + 1000 * (45 + 15 + 38) * 60);

console.log(finalDaCopa);
console.log(primieiroGol);
console.log(segundoGol);