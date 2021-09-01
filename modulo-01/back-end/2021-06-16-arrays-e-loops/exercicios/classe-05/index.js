const original = [1, 4, 12, 21, 53, 88, 112];
let pares = [];

for (let item of original) {
    if (item % 2 === 0) {
        pares.push(item);
    }
}
console.log(pares);