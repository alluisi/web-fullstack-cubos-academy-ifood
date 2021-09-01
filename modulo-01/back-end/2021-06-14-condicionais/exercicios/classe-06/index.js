const alturaEmCm = 185;

if (alturaEmCm < 180) {
    console.log("REPROVADO");
} else if (alturaEmCm <= 185) {
    console.log("LÍBERO");
} else if (alturaEmCm <= 195) {
    console.log("PONTEIRO");
} else if (alturaEmCm <= 205) {
    console.log("OPOSTO");
} else {
    console.log("CENTRAL");
}