const texto = "Aprenda programar do zero na Cubos Academy";

function tranformarEmURL(frase) {
    let minuscula = frase.toLowerCase();
    let url = "";

    while (minuscula !== url) {
        url = minuscula;
        minuscula = minuscula.replace(" ", "-");
    }
    console.log(url);
}

tranformarEmURL(texto);