const celular1 = 7199918888;
const celular2 = 99918888;
const celular3 = 71999918888;
const celular4 = 999918888;
const celular5 = 991888;
const celular6 = 719999188888;

function formatarCelular(numero) {
    let numeroString = `${numero}`;
    let numeroFormatado = "";
    if (numeroString.length === 8) {
        numeroFormatado = `9 ${numeroString.slice(0, 4)}-${numeroString.slice(4, 8)}`;
    } else if (numeroString.length === 11) {
        numeroFormatado = `(${numeroString.slice(0, 2)}) ${numeroString.slice(2, 3)} ${numeroString.slice(3, 8)}-${numeroString.slice(8, 12)}`;
    } else if (numeroString.length === 10) {
        numeroFormatado = `(${numeroString.slice(0, 2)}) 9 ${numeroString.slice(2, 7)}-${numeroString.slice(7, 11)}`;
    } else if (numeroString.length === 9) {
        numeroFormatado = `${numeroString.slice(0, 1)} ${numeroString.slice(1, 5)}-${numeroString.slice(5, 10)}`;
    } else if (numeroString.length < 8) {
        console.log("Este número de telefone está incompleto.");
    } else {
        console.log("Confira o telefone. Você digitou números a mais.");
    }
    console.log(numeroFormatado);
}
formatarCelular(celular1);
formatarCelular(celular2);
formatarCelular(celular3);
formatarCelular(celular4);
formatarCelular(celular5);
formatarCelular(celular6);