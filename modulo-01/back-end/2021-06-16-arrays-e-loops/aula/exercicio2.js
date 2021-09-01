const palavra = "alemanha";

let letrasA = 0;
for (let letra of palavra) {
    if (letra === "a") {
        letrasA++;
    }
}

console.log(letrasA);
