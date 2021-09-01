const nomeArquivo1 = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.png';

function validarArquivo(arquivo) {
    if (arquivo.includes("jpg") || arquivo.includes("jpeg") || arquivo.includes("gif") || arquivo.includes("png")) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
};

validarArquivo(nomeArquivo1);
validarArquivo(nomeArquivo2);