const ontem1 = new Date("2021-08-01T20:46:39.831Z");
const ontem2 = new Date("2021-08-01T20:46:39.831Z");
const ontem3 = ontem2;
const hoje = new Date("2021-08-02T20:46:39.831Z");

console.log(ontem1 === ontem2);
console.log(+ontem1 === +ontem2);
console.log(ontem2 === ontem3);
console.log(+ontem1 < +hoje);