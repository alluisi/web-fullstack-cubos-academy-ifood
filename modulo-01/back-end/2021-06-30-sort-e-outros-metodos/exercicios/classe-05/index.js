const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const bebidas = palavras.some(x => x === "cerveja" || x === "vodka");

if (bebidas) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("vamos as compras!");
};