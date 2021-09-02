const fs = require("fs");

/* Sync
console.log("antes de ler");
console.log(fs.readFileSync("3-a.txt").toString());
console.log("depois de ler");
*/

// Async
console.log("antes de ler");
fs.readFile("3-a.txt", (err, data) => {
    if (err) {
        console.log("Deu erro", err);
    } else {
        console.log(data.toString());
    }
});

fs.readFile("3-b.txt", (err, data) => {
    if (err) {
        console.log("Deu erro", err);
    } else {
        console.log(data.toString());
    }
});

fs.readFile("3-c.txt", (err, data) => {
    if (err) {
        console.log("Deu erro", err);
    } else {
        console.log(data.toString());
    }
});
console.log("depois de ler");