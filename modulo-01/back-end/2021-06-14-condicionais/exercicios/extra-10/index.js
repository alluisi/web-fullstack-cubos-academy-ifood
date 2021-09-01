const caractere = "E";

if (caractere == 1 || caractere == 2 || caractere == 3 || caractere == 4 || caractere == 5 || caractere == 6 || caractere == 7 || caractere == 8 || caractere == 9 || caractere == 0) {
    console.log("Número");
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else {
    console.log("Consoante");
}