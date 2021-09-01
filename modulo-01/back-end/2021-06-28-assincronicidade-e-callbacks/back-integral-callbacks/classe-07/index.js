const fs = require('fs');
const texto = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./meuarquivo.txt", texto, () => {
});